import { NextRequest, NextResponse } from 'next/server';
import { getAdminPassword, setAdminPassword } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { oldPassword, newPassword } = await request.json();
    const currentPassword = await getAdminPassword();

    if (!newPassword || newPassword.trim().length === 0) {
      return NextResponse.json(
        { error: 'Mật khẩu mới không được để trống' },
        { status: 400 }
      );
    }

    if (oldPassword !== currentPassword) {
      return NextResponse.json(
        { error: 'Mật khẩu cũ không chính xác' },
        { status: 400 }
      );
    }

    await setAdminPassword(newPassword.trim());
    return NextResponse.json({
      success: true,
      message: 'Đổi mật khẩu quản trị thành công!',
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
