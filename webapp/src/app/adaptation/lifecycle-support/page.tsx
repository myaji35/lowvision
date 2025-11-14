import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { generatePageMetadata } from '@/components/seo/CommonMetadata';
import { Baby, GraduationCap, Briefcase, HeartPulse, Home, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: '생애주기별 지원',
  description: '영유아부터 노년기까지 생애주기별 저시력인 맞춤 지원 정보. 교육, 취업, 재활, 돌봄 서비스 안내.',
  path: '/adaptation/lifecycle-support',
  keywords: ['생애주기', '영유아 지원', '교육 지원', '노인 지원', '돌봄 서비스'],
});

const lifecycleStages = [
  {
    icon: Baby,
    stage: '영유아기 (0~6세)',
    description: '조기 발견과 조기 개입이 가장 중요한 시기',
    keyNeeds: ['시력 조기 검진', '조기 중재 프로그램', '가족 지원'],
    supports: [
      {
        title: '공공 어린이 재활의료센터',
        details: [
          '18세 미만 장애 아동 집중 재활 치료',
          '저시력 클리닉 운영 (일부 센터)',
          '감각 통합 치료, 작업 치료',
          '가족 상담 및 교육',
        ],
      },
      {
        title: '발달 재활 서비스',
        details: [
          '언어·청능 재활, 미술·음악 치료',
          '월 22만원 바우처 지원',
          '기초생활수급자, 차상위, 일반 (소득 기준)',
        ],
      },
      {
        title: '보육 지원',
        details: [
          '장애아 전문·통합 어린이집',
          '보육료 지원',
          '특수교사 배치',
          '1:1 또는 1:3 보육',
        ],
      },
    ],
  },
  {
    icon: GraduationCap,
    stage: '학령기 (7~18세)',
    description: '교육을 통한 잠재력 개발과 독립 기술 습득',
    keyNeeds: ['통합 교육', '확대 교재', '보조공학', '진로 탐색'],
    supports: [
      {
        title: '특수교육 지원',
        details: [
          '일반 학교 특수학급 또는 특수학교',
          '확대 교재, 점자 교재 무상 제공',
          '보조 인력 (특수교육 보조원)',
          '확대독서기, 화면 확대 소프트웨어 지원',
        ],
      },
      {
        title: '방과후 돌봄',
        details: [
          '돌봄 교실 (초등)',
          '청소년 방과후 아카데미',
          '장애인 복지관 프로그램',
        ],
      },
      {
        title: '진로·직업 교육',
        details: [
          '특수학교 직업 교육',
          '전환 교육 (학교에서 사회로)',
          '직업 체험 프로그램',
          '대학 진학 지원 (장애 학생 특별전형)',
        ],
      },
    ],
  },
  {
    icon: Briefcase,
    stage: '청년기 (19~39세)',
    description: '경제적 자립과 사회 참여의 핵심 시기',
    keyNeeds: ['취업', '자립 생활', '결혼', '주거'],
    supports: [
      {
        title: '취업 지원',
        details: [
          '한국장애인고용공단 취업 알선',
          '직업 훈련 (최대 2년)',
          '장애인 고용 장려금',
          '근로 지원인 서비스',
        ],
      },
      {
        title: '자립 생활 지원',
        details: [
          '활동 지원 서비스 (월 최대 165시간)',
          '자립 생활 센터 동료 상담',
          '자립 생활 기술 훈련',
        ],
      },
      {
        title: '주거 지원',
        details: [
          'LH 장애인 특별공급',
          '전세 자금 대출 (저금리)',
          '월세 지원 (기초생활수급자)',
        ],
      },
    ],
  },
  {
    icon: HeartPulse,
    stage: '중·장년기 (40~64세)',
    description: '시력 변화 대응과 경력 유지',
    keyNeeds: ['건강 관리', '경력 유지', '2차 장애 예방'],
    supports: [
      {
        title: '재활 서비스',
        details: [
          '저시력 재활 훈련 (보행, 일상생활)',
          '직무 적응 훈련',
          '보조공학 기기 업그레이드',
        ],
      },
      {
        title: '건강 관리',
        details: [
          '장애인 건강 주치의 제도',
          '저시력 클리닉 정기 검진',
          '당뇨·고혈압 등 만성질환 관리',
        ],
      },
      {
        title: '경력 개발',
        details: [
          '직업 전환 교육',
          '창업 지원 (소상공인 지원)',
          '텔레워크 일자리',
        ],
      },
    ],
  },
  {
    icon: Home,
    stage: '노년기 (65세 이상)',
    description: '존엄한 노후와 돌봄 서비스',
    keyNeeds: ['돌봄', '건강', '여가', '안전'],
    supports: [
      {
        title: '돌봄 서비스',
        details: [
          '장기요양보험 (요양 등급 인정 시)',
          '활동 지원 서비스 (65세 이상도 가능)',
          '노인 돌봄 서비스',
          '재가 복지 서비스',
        ],
      },
      {
        title: '건강 지원',
        details: [
          '노인 장기요양보험',
          '치매 조기 검진',
          '방문 건강 관리',
        ],
      },
      {
        title: '여가 및 사회 참여',
        details: [
          '경로당, 노인 복지관',
          '평생 교육 프로그램',
          '문화·여가 활동 지원',
        ],
      },
    ],
  },
];

const crossCuttingSupports = [
  {
    title: '활동 지원 서비스',
    description: '일상생활 및 사회 활동 지원',
    coverage: '만 6세 ~ 65세',
    details: '월 44~165시간, 본인 부담금 최대 월 6만원',
  },
  {
    title: '장애인 연금',
    description: '경제적 어려움 지원',
    coverage: '만 18세 이상 중증 장애인',
    details: '월 최대 403,180원 (2025년 기준)',
  },
  {
    title: '의료비 지원',
    description: '건강보험 본인 부담금 경감',
    coverage: '모든 등록 장애인',
    details: '입원 10~20%, 외래 10~30% 감면',
  },
  {
    title: '이동 지원',
    description: '장애인 콜택시, 교통비 할인',
    coverage: '모든 등록 장애인',
    details: '지하철 무료, 버스·택시 할인, 장애인 콜택시',
  },
];

export default function LifecycleSupportPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">생애주기별 지원</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          영유아기부터 노년기까지, 각 생애 단계에서 필요한 맞춤 지원과 서비스를 안내합니다.
          필요한 시기에 적절한 지원을 받는 것이 독립적이고 행복한 삶의 핵심입니다.
        </p>
      </header>

      {/* Lifecycle Stages */}
      <section className="mb-16" aria-labelledby="lifecycle-heading">
        <h2 id="lifecycle-heading" className="text-3xl font-bold mb-8">
          생애주기별 주요 지원
        </h2>
        <div className="space-y-12">
          {lifecycleStages.map((lifecycle) => {
            const Icon = lifecycle.icon;
            return (
              <div key={lifecycle.stage} className="scroll-mt-20">
                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{lifecycle.stage}</CardTitle>
                        <CardDescription className="text-base">
                          {lifecycle.description}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm font-medium text-muted-foreground">핵심 욕구:</span>
                      {lifecycle.keyNeeds.map((need) => (
                        <span
                          key={need}
                          className="px-3 py-1 bg-muted rounded-full text-sm"
                        >
                          {need}
                        </span>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {lifecycle.supports.map((support) => (
                      <div key={support.title}>
                        <h3 className="text-lg font-semibold mb-3 text-primary">
                          {support.title}
                        </h3>
                        <ul className="space-y-2 ml-1">
                          {support.details.map((detail, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <CheckCircle2
                                className="h-4 w-4 text-primary mt-0.5 flex-shrink-0"
                                aria-hidden="true"
                              />
                              <span>{detail}</span>
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

      {/* Cross-cutting Supports */}
      <section className="mb-16" aria-labelledby="crosscutting-heading">
        <h2 id="crosscutting-heading" className="text-3xl font-bold mb-8">
          전 생애 공통 지원
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {crossCuttingSupports.map((support) => (
            <Card key={support.title}>
              <CardHeader>
                <CardTitle className="text-lg">{support.title}</CardTitle>
                <CardDescription>{support.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-start gap-2 text-sm">
                  <span className="font-medium text-muted-foreground">대상:</span>
                  <span>{support.coverage}</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="font-medium text-muted-foreground">내용:</span>
                  <span>{support.details}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Important Tips */}
      <section className="mb-12 p-8 bg-muted/30 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">생애주기별 지원 활용 팁</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">1. 조기 개입이 중요합니다</h3>
            <p className="text-sm text-muted-foreground">
              특히 영유아기와 학령기 초기에 적절한 재활과 교육을 받으면
              독립적인 생활 능력이 크게 향상됩니다.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">2. 전환기를 미리 준비하세요</h3>
            <p className="text-sm text-muted-foreground">
              학교에서 직장으로, 청년기에서 중년기로 넘어갈 때 필요한 지원이 달라집니다.
              미리 정보를 수집하고 준비하세요.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">3. 복지 서비스를 중복 신청하세요</h3>
            <p className="text-sm text-muted-foreground">
              활동 지원, 발달 재활, 장기요양 등 여러 서비스를 동시에 받을 수 있습니다.
              주민센터나 복지관에 문의하세요.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">4. 동료 지원을 활용하세요</h3>
            <p className="text-sm text-muted-foreground">
              비슷한 시기를 겪은 다른 저시력인과 가족의 경험은 큰 도움이 됩니다.
              한국저시력인협회의 온라인 커뮤니티에 참여하세요.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center space-y-4">
        <div className="space-x-4">
          <Button asChild size="lg">
            <Link href="/rights/welfare-benefits">복지 혜택 보기</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/adaptation/family-support">가족 지원 정보</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
