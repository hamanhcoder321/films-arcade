import { createClient, Client } from '@libsql/client';
import path from 'path';
import {
  MATCH_PAIRS,
  MATCH_EXAMPLES,
  MATCH_EXAMPLE_VI,
  CATEGORY_GROUPS,
  FILL_DATA,
  FILL_ALTERNATIVES,
  MCQ_DATA,
  TRANS_DATA,
  COLLOCATION_DATA,
  G6_DATA,
} from '@/data/vocabulary';

let clientInstance: Client | null = null;
let initialized = false;

export function getDb(): Client {
  if (clientInstance) return clientInstance;

  const url = process.env.TURSO_DATABASE_URL || `file:${path.join(process.cwd(), 'arcade.db').replace(/\\/g, '/')}`;
  const authToken = process.env.TURSO_AUTH_TOKEN;

  clientInstance = createClient({
    url,
    authToken,
  });

  return clientInstance;
}

export async function ensureDbInitialized(): Promise<Client> {
  const db = getDb();
  if (initialized) return db;

  // Initialize Schema
  await db.execute(`
    CREATE TABLE IF NOT EXISTS game1_categories (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL
    );
  `);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS game1_matching (
      id INTEGER PRIMARY KEY,
      category_id INTEGER NOT NULL,
      left_text TEXT NOT NULL,
      right_text TEXT NOT NULL,
      example_en TEXT DEFAULT '',
      example_vi TEXT DEFAULT '',
      FOREIGN KEY(category_id) REFERENCES game1_categories(id)
    );
  `);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS game2_fill (
      id INTEGER PRIMARY KEY,
      text TEXT NOT NULL,
      vi_hint TEXT NOT NULL,
      answers TEXT NOT NULL,
      alternatives TEXT DEFAULT '[]'
    );
  `);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS game3_mcq (
      id INTEGER PRIMARY KEY,
      question TEXT NOT NULL,
      options TEXT NOT NULL,
      correct INTEGER NOT NULL
    );
  `);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS game4_translate (
      id INTEGER PRIMARY KEY,
      vi_sentence TEXT NOT NULL,
      hint TEXT NOT NULL,
      answers TEXT NOT NULL
    );
  `);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS game5_collocations (
      id INTEGER PRIMARY KEY,
      question TEXT NOT NULL,
      options TEXT NOT NULL,
      options_detail TEXT NOT NULL,
      correct INTEGER NOT NULL
    );
  `);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS game6_answers (
      id INTEGER PRIMARY KEY,
      question TEXT NOT NULL,
      prompt_text TEXT NOT NULL,
      vi_hint TEXT NOT NULL,
      answers TEXT NOT NULL,
      sample_answers TEXT NOT NULL
    );
  `);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS admin_settings (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );
  `);

  // Ensure default password
  const pwdRes = await db.execute("SELECT value FROM admin_settings WHERE key = 'admin_password'");
  if (pwdRes.rows.length === 0) {
    await db.execute({
      sql: "INSERT INTO admin_settings (key, value) VALUES ('admin_password', ?)",
      args: ['admin123'],
    });
  }

  // Auto seed if empty
  const countRes = await db.execute("SELECT count(*) as count FROM game1_matching");
  const count = Number(countRes.rows[0]?.count || 0);

  if (count === 0) {
    await seedDatabase(false);
  }

  initialized = true;
  return db;
}

export async function getAdminPassword(): Promise<string> {
  const db = await ensureDbInitialized();
  const res = await db.execute("SELECT value FROM admin_settings WHERE key = 'admin_password'");
  return res.rows.length > 0 ? String(res.rows[0].value) : 'admin123';
}

export async function setAdminPassword(newPassword: string): Promise<void> {
  const db = await ensureDbInitialized();
  await db.execute({
    sql: "INSERT OR REPLACE INTO admin_settings (key, value) VALUES ('admin_password', ?)",
    args: [newPassword],
  });
}

export async function seedDatabase(force: boolean = false): Promise<void> {
  const db = getDb();

  if (force) {
    await db.batch([
      'DELETE FROM game1_categories;',
      'DELETE FROM game1_matching;',
      'DELETE FROM game2_fill;',
      'DELETE FROM game3_mcq;',
      'DELETE FROM game4_translate;',
      'DELETE FROM game5_collocations;',
      'DELETE FROM game6_answers;',
    ], 'write');
  }

  // Seed Game 1 Categories
  const categoryMap: Record<number, number> = {};
  const catQueries = CATEGORY_GROUPS.map((cat, idx) => {
    cat.ids.forEach((id) => {
      categoryMap[id] = idx;
    });
    return {
      sql: 'INSERT OR REPLACE INTO game1_categories (id, name) VALUES (?, ?)',
      args: [idx, cat.name],
    };
  });
  if (catQueries.length > 0) await db.batch(catQueries, 'write');

  // Seed Game 1 Matching
  const g1Queries = MATCH_PAIRS.map((item) => {
    const catId = categoryMap[item.id] !== undefined ? categoryMap[item.id] : 0;
    const exEn = MATCH_EXAMPLES[item.id] || '';
    const exVi = MATCH_EXAMPLE_VI[item.id] || '';
    return {
      sql: 'INSERT OR REPLACE INTO game1_matching (id, category_id, left_text, right_text, example_en, example_vi) VALUES (?, ?, ?, ?, ?, ?)',
      args: [item.id, catId, item.left, item.right, exEn, exVi],
    };
  });
  if (g1Queries.length > 0) await db.batch(g1Queries, 'write');

  // Seed Game 2 Fill
  const g2Queries = FILL_DATA.map((item) => {
    const alts = FILL_ALTERNATIVES[item.id] || [];
    return {
      sql: 'INSERT OR REPLACE INTO game2_fill (id, text, vi_hint, answers, alternatives) VALUES (?, ?, ?, ?, ?)',
      args: [
        item.id,
        item.text,
        item.viHint,
        JSON.stringify(item.answers),
        JSON.stringify(alts),
      ],
    };
  });
  if (g2Queries.length > 0) await db.batch(g2Queries, 'write');

  // Seed Game 3 MCQ
  const g3Queries = MCQ_DATA.map((item, idx) => ({
    sql: 'INSERT OR REPLACE INTO game3_mcq (id, question, options, correct) VALUES (?, ?, ?, ?)',
    args: [idx + 1, item.q, JSON.stringify(item.options), item.correct],
  }));
  if (g3Queries.length > 0) await db.batch(g3Queries, 'write');

  // Seed Game 4 Translate
  const g4Queries = TRANS_DATA.map((item) => ({
    sql: 'INSERT OR REPLACE INTO game4_translate (id, vi_sentence, hint, answers) VALUES (?, ?, ?, ?)',
    args: [item.id, item.vi, item.hint, JSON.stringify(item.answers)],
  }));
  if (g4Queries.length > 0) await db.batch(g4Queries, 'write');

  // Seed Game 5 Collocations
  const g5Queries = COLLOCATION_DATA.map((item, idx) => ({
    sql: 'INSERT OR REPLACE INTO game5_collocations (id, question, options, options_detail, correct) VALUES (?, ?, ?, ?, ?)',
    args: [
      idx + 1,
      item.q,
      JSON.stringify(item.options),
      JSON.stringify(item.options_detail),
      item.correct,
    ],
  }));
  if (g5Queries.length > 0) await db.batch(g5Queries, 'write');

  // Seed Game 6 Answers
  const g6Queries = G6_DATA.map((item) => ({
    sql: 'INSERT OR REPLACE INTO game6_answers (id, question, prompt_text, vi_hint, answers, sample_answers) VALUES (?, ?, ?, ?, ?, ?)',
    args: [
      item.id,
      item.question,
      item.text,
      item.viHint,
      JSON.stringify(item.answers),
      JSON.stringify(item.sampleAnswers),
    ],
  }));
  if (g6Queries.length > 0) await db.batch(g6Queries, 'write');
}
