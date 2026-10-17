import { NextRequest, NextResponse } from 'next/server';
import { getAdminPassword } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    const currentPassword = await getAdminPassword();

    if (password === currentPassword) {
      return NextResponse.json({ success: true, message: 'Đăng nhập thành công' });
    } else {
      return NextResponse.json(
        { success: false, error: 'Mật khẩu quản trị không chính xác!' },
        { status: 401 }
      );
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
