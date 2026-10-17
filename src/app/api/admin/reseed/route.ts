import { NextResponse } from 'next/server';
import { seedDatabase } from '@/lib/db';

export async function POST() {
  try {
    await seedDatabase(true);
    return NextResponse.json({
      success: true,
      message: 'Toàn bộ dữ liệu của 6 game đã được khôi phục về mặc định!',
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
