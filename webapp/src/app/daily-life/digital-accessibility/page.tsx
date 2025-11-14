import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { generatePageMetadata } from '@/components/seo/CommonMetadata';
import {
  Monitor,
  Smartphone,
  Volume2,
  ZoomIn,
  Type,
  Contrast,
  Eye,
  Settings,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: '디지털 접근성 가이드',
  description: 'PC, 모바일에서 저시력인을 위한 접근성 설정 방법을 안내합니다. Windows, macOS, iOS, Android 설정 가이드.',
  path: '/daily-life/digital-accessibility',
  keywords: ['디지털 접근성', 'PC 접근성', '모바일 접근성', '스크린 리더', '화면 확대', '고대비 모드'],
});

interface PlatformGuide {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  description: string;
  features: {
    title: string;
    steps: string[];
  }[];
}

const pcGuides: PlatformGuide[] = [
  {
    icon: Monitor,
    name: 'Windows 11/10',
    description: 'Windows 접근성 센터를 통한 설정',
    features: [
      {
        title: '화면 확대 (돋보기)',
        steps: [
          'Windows 키 + "+" 키 : 돋보기 실행',
          'Windows 키 + "ESC" : 돋보기 종료',
          '설정 > 접근성 > 돋보기에서 세부 설정 가능',
          '전체 화면 모드, 렌즈 모드, 고정 모드 선택 가능',
        ],
      },
      {
        title: '스크린 리더 (내레이터)',
        steps: [
          'Windows 키 + Ctrl + Enter : 내레이터 시작/중지',
          '설정 > 접근성 > 내레이터에서 음성 속도, 음량 조절',
          '점자 디스플레이 연결 가능',
        ],
      },
      {
        title: '고대비 모드',
        steps: [
          'Alt + Shift + Print Screen : 고대비 모드 켜기/끄기',
          '설정 > 접근성 > 고대비에서 4가지 테마 선택',
          '흰색/노란색/녹색/검정색 배경 조합',
        ],
      },
      {
        title: '텍스트 크기 및 커서',
        steps: [
          '설정 > 접근성 > 텍스트 크기에서 시스템 전체 텍스트 확대',
          '커서 및 포인터에서 두께와 색상 변경 가능',
          '포인터 크기 조절 (최대 15단계)',
        ],
      },
    ],
  },
  {
    icon: Monitor,
    name: 'macOS',
    description: 'macOS 손쉬운 사용 기능',
    features: [
      {
        title: '화면 확대 (확대/축소)',
        steps: [
          'Option + Command + "=" : 확대',
          'Option + Command + "-" : 축소',
          '시스템 설정 > 손쉬운 사용 > 확대/축소에서 설정',
          '전체 화면 또는 화면 속 화면 모드',
        ],
      },
      {
        title: '스크린 리더 (VoiceOver)',
        steps: [
          'Command + F5 : VoiceOver 켜기/끄기',
          '시스템 설정 > 손쉬운 사용 > VoiceOver에서 세부 설정',
          '점자 디스플레이 지원',
          'VoiceOver 유틸리티로 상세 커스터마이징',
        ],
      },
      {
        title: '색상 필터 및 대비',
        steps: [
          'Command + Option + F5 : 색상 필터 빠른 전환',
          '시스템 설정 > 손쉬운 사용 > 디스플레이',
          '명암비 증가, 색상 반전 옵션',
          '색맹 보정 필터 제공',
        ],
      },
    ],
  },
];

const mobileGuides: PlatformGuide[] = [
  {
    icon: Smartphone,
    name: 'iOS (iPhone/iPad)',
    description: 'iOS 손쉬운 사용 설정',
    features: [
      {
        title: '화면 확대 (돋보기)',
        steps: [
          '설정 > 손쉬운 사용 > 확대/축소 켜기',
          '세 손가락으로 두 번 탭하여 확대',
          '세 손가락으로 드래그하여 이동',
          '최대 15배까지 확대 가능',
        ],
      },
      {
        title: '스크린 리더 (VoiceOver)',
        steps: [
          '설정 > 손쉬운 사용 > VoiceOver 켜기',
          '홈 버튼 3번 클릭으로 빠른 실행 (설정 필요)',
          '한 손가락 스와이프로 항목 탐색',
          '두 번 탭으로 선택',
        ],
      },
      {
        title: '디스플레이 및 텍스트 크기',
        steps: [
          '설정 > 손쉬운 사용 > 디스플레이 및 텍스트 크기',
          '더 큰 텍스트 켜기 (앱별 적용)',
          '명암 대비 높이기',
          '투명도 줄이기로 시인성 향상',
        ],
      },
    ],
  },
  {
    icon: Smartphone,
    name: 'Android',
    description: 'Android 접근성 설정',
    features: [
      {
        title: '화면 확대',
        steps: [
          '설정 > 접근성 > 확대 켜기',
          '볼륨 작게 버튼 3번 눌러 빠른 실행',
          '두 손가락으로 핀치 확대',
          '일시적 확대 기능 (한 번 탭 후 드래그)',
        ],
      },
      {
        title: '스크린 리더 (TalkBack)',
        steps: [
          '설정 > 접근성 > TalkBack 켜기',
          '볼륨 키 동시 누르기로 빠른 실행',
          '한 손가락 스와이프로 탐색',
          '두 번 탭으로 선택',
        ],
      },
      {
        title: '디스플레이 설정',
        steps: [
          '설정 > 접근성 > 고대비 텍스트',
          '색상 보정 기능 제공',
          '글꼴 크기 및 표시 크기 조정',
          '어두운 테마로 눈의 피로 감소',
        ],
      },
    ],
  },
];

const webAccessibilityTips = [
  {
    title: '브라우저 확대',
    description: 'Ctrl + "+" (Windows) 또는 Command + "+" (Mac)으로 웹페이지 확대',
  },
  {
    title: '웹 접근성 모드',
    description: '많은 웹사이트가 "고대비 모드" 또는 "접근성 모드" 제공',
  },
  {
    title: '브라우저 확장 프로그램',
    description: 'Color Enhancer, High Contrast, Read Aloud 등 유용한 확장 프로그램 활용',
  },
  {
    title: '키보드 탐색',
    description: 'Tab 키로 웹페이지 요소 간 이동, Enter로 선택',
  },
];

export default function DigitalAccessibilityPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">
          디지털 접근성 가이드
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          PC와 모바일 기기에서 저시력인을 위한 접근성 기능을 설정하는 방법을 안내합니다.
          모든 주요 운영체제에는 무료로 제공되는 강력한 접근성 도구가 내장되어 있습니다.
        </p>
      </header>

      {/* Quick Links */}
      <nav className="mb-12" aria-label="페이지 내 빠른 이동">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button asChild variant="outline" className="h-auto py-4">
            <a href="#windows">
              <Monitor className="mr-2 h-5 w-5" aria-hidden="true" />
              Windows
            </a>
          </Button>
          <Button asChild variant="outline" className="h-auto py-4">
            <a href="#macos">
              <Monitor className="mr-2 h-5 w-5" aria-hidden="true" />
              macOS
            </a>
          </Button>
          <Button asChild variant="outline" className="h-auto py-4">
            <a href="#ios">
              <Smartphone className="mr-2 h-5 w-5" aria-hidden="true" />
              iOS
            </a>
          </Button>
          <Button asChild variant="outline" className="h-auto py-4">
            <a href="#android">
              <Smartphone className="mr-2 h-5 w-5" aria-hidden="true" />
              Android
            </a>
          </Button>
        </div>
      </nav>

      {/* PC Guides */}
      <section className="mb-16" aria-labelledby="pc-guides-heading">
        <h2 id="pc-guides-heading" className="text-3xl font-bold mb-8">
          PC 접근성 설정
        </h2>
        <div className="space-y-8">
          {pcGuides.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <div
                key={platform.name}
                id={platform.name.toLowerCase().replace(/\s/g, '')}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                      <CardTitle className="text-2xl">{platform.name}</CardTitle>
                    </div>
                    <CardDescription>{platform.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {platform.features.map((feature) => (
                      <div key={feature.title}>
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <Settings className="h-5 w-5 text-primary" aria-hidden="true" />
                          {feature.title}
                        </h3>
                        <ul className="space-y-2 ml-7">
                          {feature.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start gap-2">
                              <CheckCircle2
                                className="h-5 w-5 text-primary mt-0.5 flex-shrink-0"
                                aria-hidden="true"
                              />
                              <span className="text-base">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </section>

      {/* Mobile Guides */}
      <section className="mb-16" aria-labelledby="mobile-guides-heading">
        <h2 id="mobile-guides-heading" className="text-3xl font-bold mb-8">
          모바일 접근성 설정
        </h2>
        <div className="space-y-8">
          {mobileGuides.map((platform) => {
            const Icon = platform.icon;
            return (
              <div
                key={platform.name}
                id={platform.name.toLowerCase().split(/[\s(]/)[0]}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                      <CardTitle className="text-2xl">{platform.name}</CardTitle>
                    </div>
                    <CardDescription>{platform.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {platform.features.map((feature) => (
                      <div key={feature.title}>
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <Settings className="h-5 w-5 text-primary" aria-hidden="true" />
                          {feature.title}
                        </h3>
                        <ul className="space-y-2 ml-7">
                          {feature.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start gap-2">
                              <CheckCircle2
                                className="h-5 w-5 text-primary mt-0.5 flex-shrink-0"
                                aria-hidden="true"
                              />
                              <span className="text-base">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </section>

      {/* Web Accessibility Tips */}
      <section className="mb-16" aria-labelledby="web-tips-heading">
        <h2 id="web-tips-heading" className="text-3xl font-bold mb-8">
          웹 브라우저 접근성 팁
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {webAccessibilityTips.map((tip) => (
            <Card key={tip.title}>
              <CardHeader>
                <CardTitle className="text-lg">{tip.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base">{tip.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Resources */}
      <section className="mb-12 p-8 bg-muted/30 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">추가 학습 자료</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">📱 공식 접근성 가이드</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>
                <a
                  href="https://www.microsoft.com/ko-kr/accessibility"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                >
                  Microsoft 접근성 센터
                </a>
              </li>
              <li>
                <a
                  href="https://www.apple.com/kr/accessibility/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                >
                  Apple 손쉬운 사용
                </a>
              </li>
              <li>
                <a
                  href="https://www.android.com/accessibility/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                >
                  Android 접근성
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">💡 디지털 리터러시 교육</h3>
            <p className="text-muted-foreground">
              한국저시력인협회에서는 디지털 기기 활용 교육을 정기적으로 진행합니다.
              교육 일정은{' '}
              <Link href="/community" className="underline hover:text-foreground">
                협회 소식
              </Link>
              에서 확인하세요.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center">
        <Button asChild size="lg">
          <Link href="/daily-life/assistive-tech">
            보조공학 제품 보기
          </Link>
        </Button>
      </div>
    </main>
  );
}
