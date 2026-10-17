import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '5rem 1rem', fontFamily: 'Space Grotesk, sans-serif' }}>
      <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: '2.5rem', marginBottom: '1rem' }}>
        404 - Không tìm thấy trang
      </h1>
      <p style={{ color: '#57604c', marginBottom: '2rem' }}>
        Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
      </p>
      <Link href="/" className="btn btn-success" style={{ textDecoration: 'none' }}>
        ← Quay lại trang chủ Arcade
      </Link>
    </div>
  );
}
