import { NextResponse } from 'next/server';
import { ensureDbInitialized } from '@/lib/db';

export async function GET() {
  try {
    const db = await ensureDbInitialized();

    // Game 1
    const catRes = await db.execute('SELECT * FROM game1_categories ORDER BY id ASC');
    const categories = catRes.rows.map((r: any) => ({
      id: Number(r.id),
      name: String(r.name),
    }));

    const g1Res = await db.execute('SELECT * FROM game1_matching ORDER BY id ASC');
    const g1Items = g1Res.rows.map((r: any) => ({
      id: Number(r.id),
      category_id: Number(r.category_id),
      left_text: String(r.left_text),
      right_text: String(r.right_text),
      example_en: String(r.example_en || ''),
      example_vi: String(r.example_vi || ''),
    }));

    // Game 2
    const g2Res = await db.execute('SELECT * FROM game2_fill ORDER BY id ASC');
    const g2Items = g2Res.rows.map((r: any) => ({
      id: Number(r.id),
      text: String(r.text),
      viHint: String(r.vi_hint),
      answers: JSON.parse(String(r.answers || '[]')),
      alternatives: JSON.parse(String(r.alternatives || '[]')),
    }));

    // Game 3
    const g3Res = await db.execute('SELECT * FROM game3_mcq ORDER BY id ASC');
    const g3Items = g3Res.rows.map((r: any) => ({
      id: Number(r.id),
      q: String(r.question),
      options: JSON.parse(String(r.options || '[]')),
      correct: Number(r.correct),
    }));

    // Game 4
    const g4Res = await db.execute('SELECT * FROM game4_translate ORDER BY id ASC');
    const g4Items = g4Res.rows.map((r: any) => ({
      id: Number(r.id),
      vi: String(r.vi_sentence),
      hint: String(r.hint),
      answers: JSON.parse(String(r.answers || '[]')),
    }));

    // Game 5
    const g5Res = await db.execute('SELECT * FROM game5_collocations ORDER BY id ASC');
    const g5Items = g5Res.rows.map((r: any) => ({
      id: Number(r.id),
      q: String(r.question),
      options: JSON.parse(String(r.options || '[]')),
      options_detail: JSON.parse(String(r.options_detail || '[]')),
      correct: Number(r.correct),
    }));

    // Game 6
    const g6Res = await db.execute('SELECT * FROM game6_answers ORDER BY id ASC');
    const g6Items = g6Res.rows.map((r: any) => ({
      id: Number(r.id),
      question: String(r.question),
      text: String(r.prompt_text),
      viHint: String(r.vi_hint),
      answers: JSON.parse(String(r.answers || '[]')),
      sampleAnswers: JSON.parse(String(r.sample_answers || '[]')),
    }));

    return NextResponse.json({
      game1: {
        categories,
        items: g1Items,
      },
      game2: g2Items,
      game3: g3Items,
      game4: g4Items,
      game5: g5Items,
      game6: g6Items,
    });
  } catch (error: any) {
    console.error('Error fetching game data:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
