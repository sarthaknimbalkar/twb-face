import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0a0b',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', top: 42, left: 42, width: 26, height: 26, borderRadius: 999, background: '#e8e4dc' }} />
        <div style={{ position: 'absolute', top: 42, right: 42, width: 26, height: 26, borderRadius: 999, background: '#e8e4dc' }} />
        <div style={{ position: 'absolute', top: 26, left: 77, width: 26, height: 26, borderRadius: 999, background: '#c62f2f' }} />
        <div style={{ position: 'absolute', bottom: 34, left: 52, width: 76, height: 60, borderRadius: 999, background: '#e8e4dc' }} />
      </div>
    ),
    { ...size }
  );
}
