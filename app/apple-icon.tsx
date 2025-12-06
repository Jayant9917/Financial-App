import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 180,
  height: 180,
};

export const contentType = 'image/png';

// Image generation - SF logo for Shivay Finance
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
          background: '#1e40af', // Blue matching logo
          borderRadius: '40px',
        }}
      >
        <div
          style={{
            fontSize: 90,
            fontWeight: '900',
            color: 'white',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            letterSpacing: '-2px',
          }}
        >
          SF
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

