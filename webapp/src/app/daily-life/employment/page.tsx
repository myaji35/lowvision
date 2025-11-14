import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { generatePageMetadata } from '@/components/seo/CommonMetadata';
import {
  Briefcase,
  GraduationCap,
  Users,
  TrendingUp,
  Phone,
  MapPin,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: '취업 및 직업 정보',
  description: '저시력인을 위한 취업 지원, 직업 훈련, 교육 프로그램 안내. 장애인 고용 지원 제도 및 성공 사례.',
  path: '/daily-life/employment',
  keywords: ['저시력 취업', '장애인 고용', '직업 훈련', '의무 고용', '직업 재활'],
});

const employmentPrograms = [
  {
    icon: Briefcase,
    title: '한국장애인고용공단',
    description: '장애인 맞춤형 취업 지원 및 직업 훈련',
    services: [
      '구직 등록 및 상담',
      '직업 능력 평가',
      '취업 알선',
      '취업 후 적응 지도',
      '보조공학 지원',
    ],
    contact: {
      phone: '1588-1519',
      website: 'https://www.kead.or.kr',
    },
    badge: '정부 기관',
  },
  {
    icon: GraduationCap,
    title: '한국장애인개발원',
    description: '장애인 직업 재활 및 평생교육 지원',
    services: [
      '직업 재활 상담',
      '직업 적응 훈련',
      '취업 준비 교육',
      '직업 유지 지원',
      '근로 지원인 서비스',
    ],
    contact: {
      phone: '02-3433-0600',
      website: 'https://www.koddi.or.kr',
    },
    badge: '정부 기관',
  },
  {
    icon: Users,
    title: '장애인직업재활시설',
    description: '전국 1,000여 개 직업재활시설 운영',
    services: [
      '보호 작업장 (직업 훈련)',
      '근로 사업장 (실제 고용)',
      '직업 훈련 센터',
      '재택 근무 지원',
    ],
    contact: {
      phone: '보건복지상담센터 129',
      website: '지역 사회복지관 문의',
    },
    badge: '전국',
  },
  {
    icon: TrendingUp,
    title: '사회적 기업 및 협동조합',
    description: '장애인 친화적 일자리 창출',
    services: [
      '장애인 표준사업장',
      '사회적 기업 인증 기업',
      '장애인 자립 협동조합',
      '유연 근무제 시행',
    ],
    contact: {
      website: '한국사회적기업진흥원',
    },
    badge: '민간',
  },
];

const employmentLaw = [
  {
    title: '장애인 의무 고용제',
    description: '공공기관 3.6%, 민간기업 3.1% 이상 장애인 고용 의무',
    details: [
      '상시 근로자 50인 이상 사업주 대상',
      '미이행 시 부담금 납부',
      '고용 장려금 지원 (월 최대 80만원)',
    ],
  },
  {
    title: '장애인 고용 장려금',
    description: '장애인을 고용한 사업주에게 인건비 지원',
    details: [
      '중증 장애인: 월 60~80만원',
      '경증 장애인: 월 30~60만원',
      '최대 3년간 지원',
    ],
  },
  {
    title: '근로 지원인 서비스',
    description: '업무 수행에 필요한 보조 인력 지원',
    details: [
      '출퇴근, 업무 보조, 의사소통 지원',
      '월 80~120시간 지원',
      '본인 부담금 최대 월 2만원',
    ],
  },
  {
    title: '보조공학기기 지원',
    description: '직무 수행에 필요한 보조기기 무상 지원',
    details: [
      '화면 확대 소프트웨어',
      '음성 출력 프로그램',
      '점자 디스플레이',
      '개인당 최대 1,000만원',
    ],
  },
];

const jobFields = [
  {
    field: '사무직',
    roles: ['행정 사무원', '인사/총무', '고객 상담원', '데이터 입력'],
    note: '컴퓨터 활용 능력 필요 (스크린 리더 활용)',
  },
  {
    field: 'IT/기술직',
    roles: ['프로그래머', '웹 개발자', '데이터 분석가', '시스템 관리'],
    note: '접근성 도구 활용 시 가능한 직무 다수',
  },
  {
    field: '전문직',
    roles: ['상담사', '사회복지사', '교사', '안마사'],
    note: '자격증 취득 후 활동 가능',
  },
  {
    field: '서비스직',
    roles: ['고객 센터', '텔레마케터', '상담사', '교육 강사'],
    note: '대인 관계 및 의사소통 능력 중요',
  },
  {
    field: '제조/생산직',
    roles: ['조립 작업', '검수 작업', '포장 작업'],
    note: '보호 작업장 또는 특화 사업장에서 고용',
  },
];

const successStories = [
  {
    name: '김○○ (30대, 프로그래머)',
    story: 'IT 기업에서 웹 접근성 전문가로 근무 중. 스크린 리더와 키보드만으로 코딩 가능.',
  },
  {
    name: '이○○ (40대, 고객 상담사)',
    story: '대기업 콜센터에서 10년 경력. 음성 안내 시스템으로 업무 처리.',
  },
  {
    name: '박○○ (50대, 사회복지사)',
    story: '장애인 복지관에서 저시력인 상담 전문가로 활동. 당사자 경험이 큰 자산.',
  },
];

export default function EmploymentPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">
          취업 및 직업 정보
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          저시력인을 위한 다양한 취업 지원 프로그램과 직업 훈련 기회를 안내합니다.
          법적 보호 제도와 실제 취업 사례를 통해 경제적 자립의 길을 찾아보세요.
        </p>
      </header>

      {/* Employment Support Programs */}
      <section className="mb-16" aria-labelledby="programs-heading">
        <h2 id="programs-heading" className="text-3xl font-bold mb-8">
          주요 취업 지원 기관
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {employmentPrograms.map((program) => {
            const Icon = program.icon;
            return (
              <Card key={program.title} className="h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                    <Badge variant="secondary">{program.badge}</Badge>
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">제공 서비스</h3>
                    <ul className="space-y-1">
                      {program.services.map((service, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle2
                            className="h-4 w-4 text-primary mt-0.5 flex-shrink-0"
                            aria-hidden="true"
                          />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 border-t space-y-1">
                    {program.contact.phone && (
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                        <span>{program.contact.phone}</span>
                      </div>
                    )}
                    {program.contact.website && (
                      <div className="flex items-center gap-2 text-sm">
                        <ExternalLink
                          className="h-4 w-4 text-muted-foreground"
                          aria-hidden="true"
                        />
                        <span className="truncate">{program.contact.website}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Employment Laws */}
      <section className="mb-16" aria-labelledby="laws-heading">
        <h2 id="laws-heading" className="text-3xl font-bold mb-8">
          장애인 고용 지원 제도
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {employmentLaw.map((law) => (
            <Card key={law.title}>
              <CardHeader>
                <CardTitle className="text-lg">{law.title}</CardTitle>
                <CardDescription>{law.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {law.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle2
                        className="h-4 w-4 text-primary mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Job Fields */}
      <section className="mb-16" aria-labelledby="fields-heading">
        <h2 id="fields-heading" className="text-3xl font-bold mb-8">
          저시력인 주요 직업 분야
        </h2>
        <div className="space-y-4">
          {jobFields.map((job) => (
            <Card key={job.field}>
              <CardHeader>
                <CardTitle className="text-lg">{job.field}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-muted-foreground">
                    대표 직무:
                  </span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {job.roles.map((role) => (
                      <Badge key={role} variant="outline">
                        {role}
                      </Badge>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">💡 {job.note}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="mb-16" aria-labelledby="stories-heading">
        <h2 id="stories-heading" className="text-3xl font-bold mb-8">
          취업 성공 사례
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {successStories.map((story) => (
            <Card key={story.name}>
              <CardHeader>
                <CardTitle className="text-base">{story.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{story.story}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Info */}
      <section className="mb-12 p-8 bg-muted/30 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">취업 준비 팁</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">1. 자격증 취득</h3>
            <p className="text-sm text-muted-foreground">
              워드프로세서, 컴퓨터활용능력, 사회복지사, 직업상담사 등 자격증은 취업에 큰 도움이 됩니다.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">2. 보조공학 능력 향상</h3>
            <p className="text-sm text-muted-foreground">
              스크린 리더, 화면 확대 프로그램 등 디지털 보조공학 도구 활용 능력은 필수입니다.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">3. 직업 훈련 참여</h3>
            <p className="text-sm text-muted-foreground">
              한국장애인고용공단의 직업 훈련 프로그램을 통해 실무 경험을 쌓을 수 있습니다.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">4. 네트워킹</h3>
            <p className="text-sm text-muted-foreground">
              장애인 취업 박람회, 협회 활동 등을 통해 정보를 공유하고 기회를 찾으세요.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center space-y-4">
        <div className="space-x-4">
          <Button asChild size="lg">
            <Link href="/rights/welfare-benefits">
              복지 혜택 보기
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/daily-life/digital-accessibility">
              디지털 접근성 설정
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
