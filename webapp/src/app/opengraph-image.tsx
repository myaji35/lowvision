import { ImageResponse } from 'next/og';

// Image metadata
export const alt = '한국저시력인협회 - 저시력인과 가족을 위한 정보 허브';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Open Graph Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0066CC 0%, #0052A3 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          {/* Logo/Icon */}
          <div
            style={{
              width: '120px',
              height: '120px',
              background: 'white',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '64px',
              fontWeight: 'bold',
              color: '#0066CC',
            }}
          >
            저
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              lineHeight: 1.2,
            }}
          >
            한국저시력인협회
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: '36px',
              color: 'rgba(255, 255, 255, 0.9)',
              textAlign: 'center',
              lineHeight: 1.4,
            }}
          >
            저시력인과 가족을 위한 정보 허브
          </div>

          {/* Features */}
          <div
            style={{
              display: 'flex',
              gap: '32px',
              marginTop: '20px',
            }}
          >
            {['복지 혜택', '보조공학', '재활 정보', '권익 옹호'].map((feature) => (
              <div
                key={feature}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  padding: '16px 32px',
                  borderRadius: '12px',
                  fontSize: '28px',
                  color: 'white',
                  fontWeight: '600',
                }}
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
