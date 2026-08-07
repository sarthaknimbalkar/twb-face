import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'The Woof Back — an entire growth department, one system.';

/**
 * The link-preview card. Local business owners share links by text message, so this card is
 * the first impression more often than the hero is. Same statement, house palette.
 */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0a0a0b',
          padding: 72,
          fontFamily: 'Georgia, serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 10, height: 10, borderRadius: 999, background: '#e04545' }} />
          <div
            style={{
              color: '#847d70',
              fontSize: 22,
              letterSpacing: 6,
              textTransform: 'uppercase',
            }}
          >
            The Woof Back
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ color: '#e8e4dc', fontSize: 84, lineHeight: 1.04, letterSpacing: -2 }}>
            An entire growth department.
          </div>
          <div style={{ color: '#e04545', fontSize: 84, lineHeight: 1.04, letterSpacing: -2 }}>
            One system.
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ color: '#a09a8e', fontSize: 26 }}>
            Researches · writes · publishes · ranks · converts
          </div>
          <div
            style={{
              border: '2px solid #c62f2f',
              color: '#e04545',
              padding: '12px 28px',
              fontSize: 22,
              letterSpacing: 4,
              textTransform: 'uppercase',
            }}
          >
            250 seats
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
