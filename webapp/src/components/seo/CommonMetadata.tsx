import type { Metadata } from 'next';

/**
 * Common metadata for the entire site
 * This file centralizes SEO and accessibility metadata
 */

export const siteConfig = {
  name: '한국저시력인협회',
  description:
    '저시력인과 그 가족을 위한 최신 보조공학, 복지 혜택, 재활 정보를 제공하는 국내 최고의 저시력 정보 플랫폼입니다.',
  url: 'https://www.lowvision.or.kr',
  ogImage: '/og-image.png',
  keywords: [
    '저시력',
    '한국저시력인협회',
    '시각장애',
    '보조공학',
    '복지 혜택',
    '황반변성',
    '녹내장',
    '재활',
    '접근성',
    '장애인복지',
  ],
};

export const commonMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification code here
    // google: 'your-verification-code',
    // Add Naver verification code here
    // other: { 'naver-site-verification': 'your-naver-code' },
  },
};

/**
 * Generate metadata for individual pages
 */
export function generatePageMetadata(params: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const { title, description, path, keywords } = params;

  return {
    title,
    description,
    keywords: keywords || siteConfig.keywords,
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [siteConfig.ogImage],
    },
    alternates: {
      canonical: `${siteConfig.url}${path}`,
    },
  };
}
