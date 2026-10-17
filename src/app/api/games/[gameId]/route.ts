import { NextRequest, NextResponse } from 'next/server';
import { ensureDbInitialized } from '@/lib/db';

interface RouteContext {
  params: Promise<{ gameId: string }>;
}

export async function GET(request: NextRequest, { params }: RouteContext) {
  try {
    const { gameId } = await params;
    const db = await ensureDbInitialized();

    switch (gameId) {
      case 'game1': {
        const catRes = await db.execute('SELECT * FROM game1_categories ORDER BY id ASC');
        const itemRes = await db.execute('SELECT * FROM game1_matching ORDER BY id ASC');
        return NextResponse.json({ categories: catRes.rows, items: itemRes.rows });
      }
      case 'game2': {
        const res = await db.execute('SELECT * FROM game2_fill ORDER BY id ASC');
        const items = res.rows.map((r: any) => ({
          id: Number(r.id),
          text: String(r.text),
          viHint: String(r.vi_hint),
          answers: JSON.parse(String(r.answers || '[]')),
          alternatives: JSON.parse(String(r.alternatives || '[]')),
        }));
        return NextResponse.json(items);
      }
      case 'game3': {
        const res = await db.execute('SELECT * FROM game3_mcq ORDER BY id ASC');
        const items = res.rows.map((r: any) => ({
          id: Number(r.id),
          q: String(r.question),
          options: JSON.parse(String(r.options || '[]')),
          correct: Number(r.correct),
        }));
        return NextResponse.json(items);
      }
      case 'game4': {
        const res = await db.execute('SELECT * FROM game4_translate ORDER BY id ASC');
        const items = res.rows.map((r: any) => ({
          id: Number(r.id),
          vi: String(r.vi_sentence),
          hint: String(r.hint),
          answers: JSON.parse(String(r.answers || '[]')),
        }));
        return NextResponse.json(items);
      }
      case 'game5': {
        const res = await db.execute('SELECT * FROM game5_collocations ORDER BY id ASC');
        const items = res.rows.map((r: any) => ({
          id: Number(r.id),
          q: String(r.question),
          options: JSON.parse(String(r.options || '[]')),
          options_detail: JSON.parse(String(r.options_detail || '[]')),
          correct: Number(r.correct),
        }));
        return NextResponse.json(items);
      }
      case 'game6': {
        const res = await db.execute('SELECT * FROM game6_answers ORDER BY id ASC');
        const items = res.rows.map((r: any) => ({
          id: Number(r.id),
          question: String(r.question),
          text: String(r.prompt_text),
          viHint: String(r.vi_hint),
          answers: JSON.parse(String(r.answers || '[]')),
          sampleAnswers: JSON.parse(String(r.sample_answers || '[]')),
        }));
        return NextResponse.json(items);
      }
      default:
        return NextResponse.json({ error: 'Game not found' }, { status: 404 });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest, { params }: RouteContext) {
  try {
    const { gameId } = await params;
    const body = await request.json();
    const db = await ensureDbInitialized();

    switch (gameId) {
      case 'game1': {
        const { category_id, left_text, right_text, example_en, example_vi } = body;
        const res = await db.execute({
          sql: `INSERT INTO game1_matching (category_id, left_text, right_text, example_en, example_vi)
                VALUES (?, ?, ?, ?, ?)`,
          args: [Number(category_id) || 0, left_text || '', right_text || '', example_en || '', example_vi || ''],
        });
        return NextResponse.json({ success: true, id: Number(res.lastInsertRowid) });
      }
      case 'game2': {
        const { text, viHint, answers, alternatives } = body;
        const res = await db.execute({
          sql: `INSERT INTO game2_fill (text, vi_hint, answers, alternatives)
                VALUES (?, ?, ?, ?)`,
          args: [
            text || '',
            viHint || '',
            JSON.stringify(answers || []),
            JSON.stringify(alternatives || []),
          ],
        });
        return NextResponse.json({ success: true, id: Number(res.lastInsertRowid) });
      }
      case 'game3': {
        const { q, options, correct } = body;
        const res = await db.execute({
          sql: `INSERT INTO game3_mcq (question, options, correct)
                VALUES (?, ?, ?)`,
          args: [q || '', JSON.stringify(options || []), Number(correct) || 0],
        });
        return NextResponse.json({ success: true, id: Number(res.lastInsertRowid) });
      }
      case 'game4': {
        const { vi, hint, answers } = body;
        const res = await db.execute({
          sql: `INSERT INTO game4_translate (vi_sentence, hint, answers)
                VALUES (?, ?, ?)`,
          args: [vi || '', hint || '', JSON.stringify(answers || [])],
        });
        return NextResponse.json({ success: true, id: Number(res.lastInsertRowid) });
      }
      case 'game5': {
        const { q, options, options_detail, correct } = body;
        const res = await db.execute({
          sql: `INSERT INTO game5_collocations (question, options, options_detail, correct)
                VALUES (?, ?, ?, ?)`,
          args: [
            q || '',
            JSON.stringify(options || []),
            JSON.stringify(options_detail || []),
            Number(correct) || 0,
          ],
        });
        return NextResponse.json({ success: true, id: Number(res.lastInsertRowid) });
      }
      case 'game6': {
        const { question, text, viHint, answers, sampleAnswers } = body;
        const res = await db.execute({
          sql: `INSERT INTO game6_answers (question, prompt_text, vi_hint, answers, sample_answers)
                VALUES (?, ?, ?, ?, ?)`,
          args: [
            question || '',
            text || '',
            viHint || '',
            JSON.stringify(answers || []),
            JSON.stringify(sampleAnswers || []),
          ],
        });
        return NextResponse.json({ success: true, id: Number(res.lastInsertRowid) });
      }
      default:
        return NextResponse.json({ error: 'Game not found' }, { status: 404 });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: RouteContext) {
  try {
    const { gameId } = await params;
    const body = await request.json();
    const db = await ensureDbInitialized();
    const id = Number(body.id);

    if (!id && id !== 0) {
      return NextResponse.json({ error: 'Missing id parameter' }, { status: 400 });
    }

    switch (gameId) {
      case 'game1': {
        const { category_id, left_text, right_text, example_en, example_vi } = body;
        await db.execute({
          sql: `UPDATE game1_matching
                SET category_id = ?, left_text = ?, right_text = ?, example_en = ?, example_vi = ?
                WHERE id = ?`,
          args: [Number(category_id) || 0, left_text || '', right_text || '', example_en || '', example_vi || '', id],
        });
        return NextResponse.json({ success: true });
      }
      case 'game2': {
        const { text, viHint, answers, alternatives } = body;
        await db.execute({
          sql: `UPDATE game2_fill
                SET text = ?, vi_hint = ?, answers = ?, alternatives = ?
                WHERE id = ?`,
          args: [
            text || '',
            viHint || '',
            JSON.stringify(answers || []),
            JSON.stringify(alternatives || []),
            id,
          ],
        });
        return NextResponse.json({ success: true });
      }
      case 'game3': {
        const { q, options, correct } = body;
        await db.execute({
          sql: `UPDATE game3_mcq
                SET question = ?, options = ?, correct = ?
                WHERE id = ?`,
          args: [q || '', JSON.stringify(options || []), Number(correct) || 0, id],
        });
        return NextResponse.json({ success: true });
      }
      case 'game4': {
        const { vi, hint, answers } = body;
        await db.execute({
          sql: `UPDATE game4_translate
                SET vi_sentence = ?, hint = ?, answers = ?
                WHERE id = ?`,
          args: [vi || '', hint || '', JSON.stringify(answers || []), id],
        });
        return NextResponse.json({ success: true });
      }
      case 'game5': {
        const { q, options, options_detail, correct } = body;
        await db.execute({
          sql: `UPDATE game5_collocations
                SET question = ?, options = ?, options_detail = ?, correct = ?
                WHERE id = ?`,
          args: [
            q || '',
            JSON.stringify(options || []),
            JSON.stringify(options_detail || []),
            Number(correct) || 0,
            id,
          ],
        });
        return NextResponse.json({ success: true });
      }
      case 'game6': {
        const { question, text, viHint, answers, sampleAnswers } = body;
        await db.execute({
          sql: `UPDATE game6_answers
                SET question = ?, prompt_text = ?, vi_hint = ?, answers = ?, sample_answers = ?
                WHERE id = ?`,
          args: [
            question || '',
            text || '',
            viHint || '',
            JSON.stringify(answers || []),
            JSON.stringify(sampleAnswers || []),
            id,
          ],
        });
        return NextResponse.json({ success: true });
      }
      default:
        return NextResponse.json({ error: 'Game not found' }, { status: 404 });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: RouteContext) {
  try {
    const { gameId } = await params;
    const { searchParams } = new URL(request.url);
    const id = Number(searchParams.get('id'));

    if (!id && id !== 0) {
      return NextResponse.json({ error: 'Missing id query parameter' }, { status: 400 });
    }

    const db = await ensureDbInitialized();

    switch (gameId) {
      case 'game1':
        await db.execute({ sql: 'DELETE FROM game1_matching WHERE id = ?', args: [id] });
        break;
      case 'game2':
        await db.execute({ sql: 'DELETE FROM game2_fill WHERE id = ?', args: [id] });
        break;
      case 'game3':
        await db.execute({ sql: 'DELETE FROM game3_mcq WHERE id = ?', args: [id] });
        break;
      case 'game4':
        await db.execute({ sql: 'DELETE FROM game4_translate WHERE id = ?', args: [id] });
        break;
      case 'game5':
        await db.execute({ sql: 'DELETE FROM game5_collocations WHERE id = ?', args: [id] });
        break;
      case 'game6':
        await db.execute({ sql: 'DELETE FROM game6_answers WHERE id = ?', args: [id] });
        break;
      default:
        return NextResponse.json({ error: 'Game not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, id });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
