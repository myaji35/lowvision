import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { generatePageMetadata } from '@/components/seo/CommonMetadata';
import { Scale, Shield, Phone, AlertTriangle, FileText, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: '법률 및 권익 옹호',
  description: '저시력인의 법적 권리, 차별 구제 절차, 권익옹호기관 안내. 장애인차별금지법 및 법률 지원 정보.',
  path: '/rights/legal-advocacy',
  keywords: ['장애인차별금지법', '권익 옹호', '법률 지원', '차별 구제', '인권'],
});

const laws = [
  {
    title: '장애인차별금지법',
    enactmentYear: '2008년',
    description: '장애를 이유로 한 차별을 금지하고 인권을 보장하는 법률',
    keyPoints: [
      '고용, 교육, 재화·용역 제공 등 모든 영역에서 차별 금지',
      '정당한 편의 제공 거부도 차별로 간주',
      '시설물, 이동수단, 정보통신 접근권 보장',
      '위반 시 3년 이하 징역 또는 3천만원 이하 벌금',
    ],
    color: 'text-blue-600',
  },
  {
    title: '장애인복지법',
    enactmentYear: '1981년',
    description: '장애인의 인간다운 생활과 권리를 보장하는 기본법',
    keyPoints: [
      '장애인 등록 및 복지 서비스 제공 근거',
      '국가와 지방자치단체의 책임 명시',
      '재활 서비스, 자립 생활 지원',
      '장애인 학대 금지 및 처벌 규정',
    ],
    color: 'text-green-600',
  },
  {
    title: '교통약자 이동편의 증진법',
    enactmentYear: '2005년',
    description: '이동권 보장을 위한 법률',
    keyPoints: [
      '저상버스 도입 의무화',
      '지하철·기차역 엘리베이터 설치',
      '특별교통수단(장애인콜택시) 운영',
      '보도 및 횡단보도 접근성 개선',
    ],
    color: 'text-purple-600',
  },
  {
    title: '장애인·노인·임산부 등 편의증진 보장법',
    enactmentYear: '1997년',
    description: '시설물 접근성 보장',
    keyPoints: [
      '건축물 편의시설 설치 의무',
      '점자블록, 음향신호기 설치',
      '주차장 장애인 전용 구역 확보',
      '위반 시 시정 명령 및 과태료',
    ],
    color: 'text-orange-600',
  },
];

const advocacyOrganizations = [
  {
    name: '국가인권위원회',
    description: '차별 진정 및 인권 침해 구제',
    services: [
      '장애 차별 진정 접수 및 조사',
      '시정 권고 및 의견 표명',
      '정책 개선 권고',
      '인권 교육 및 홍보',
    ],
    contact: {
      phone: '1331 (인권상담)',
      website: 'https://www.humanrights.go.kr',
      note: '온라인, 전화, 방문, 우편 진정 가능',
    },
    badge: '정부 기관',
  },
  {
    name: '중앙장애인권익옹호기관',
    description: '장애인 학대 및 권리 침해 대응',
    services: [
      '장애인 학대 신고 접수 (24시간)',
      '피해자 긴급 보호 및 상담',
      '법률 지원 연계',
      '재발 방지 교육',
    ],
    contact: {
      phone: '1644-8295',
      website: 'https://www.naapd.or.kr',
      note: '전국 17개 광역시·도 지역 기관 운영',
    },
    badge: '정부 위탁',
  },
  {
    name: '대한법률구조공단',
    description: '무료 법률 상담 및 소송 지원',
    services: [
      '법률 상담 (무료)',
      '소송 대리 (비용 지원)',
      '법률 문서 작성',
      '화해·조정 대리',
    ],
    contact: {
      phone: '132',
      website: 'https://www.klac.or.kr',
      note: '기초생활수급자, 장애인 우선 지원',
    },
    badge: '정부 기관',
  },
  {
    name: '한국장애인단체총연맹',
    description: '장애인 권익 대변 및 옹호 활동',
    services: [
      '정책 제안 및 법 개정 운동',
      '차별 사례 모니터링',
      '권익 옹호 교육',
      '당사자 역량 강화',
    ],
    contact: {
      phone: '02-784-3501',
      website: 'https://www.kodaf.or.kr',
    },
    badge: '민간 단체',
  },
];

const discriminationCases = [
  {
    type: '고용 차별',
    examples: [
      '장애를 이유로 채용 거부',
      '승진·배치에서 불리한 대우',
      '장애인을 이유로 부당 해고',
      '정당한 편의 제공 거부 (확대 문서 제공 거부 등)',
    ],
  },
  {
    type: '교육 차별',
    examples: [
      '입학 거부 또는 전학 강요',
      '수업 참여 제한',
      '확대 교재, 보조 인력 제공 거부',
      '별도 분리 교육 강요',
    ],
  },
  {
    type: '재화·용역 차별',
    examples: [
      '상점, 식당 이용 거부',
      '보험 가입 거부 또는 차별적 조건 부과',
      '금융 서비스 이용 제한',
      '문화·체육 시설 접근 제한',
    ],
  },
  {
    type: '정보 접근 차별',
    examples: [
      '웹사이트 접근성 미제공',
      '키오스크 음성 안내 미제공',
      '확대 문서, 음성 자료 제공 거부',
      '공공 정보 접근 제한',
    ],
  },
];

const complaintProcess = [
  {
    step: '1단계',
    title: '증거 수집',
    description: '차별 상황을 기록하고 증거를 확보하세요',
    details: [
      '일시, 장소, 상대방, 구체적 상황 기록',
      '증인 확보 (동행인, 목격자)',
      '문자, 이메일, 녹음 등 증거 자료 수집',
      '사진, 동영상 촬영 (가능한 경우)',
    ],
  },
  {
    step: '2단계',
    title: '진정 또는 신고',
    description: '국가인권위원회 또는 권익옹호기관에 진정',
    details: [
      '온라인 진정: 국가인권위원회 홈페이지',
      '전화 진정: 1331 (24시간)',
      '방문 진정: 전국 인권사무소',
      '우편 진정: 진정서 양식 작성 후 발송',
    ],
  },
  {
    step: '3단계',
    title: '조사 및 심의',
    description: '인권위원회가 사실관계 조사',
    details: [
      '당사자 및 참고인 조사',
      '자료 제출 요구',
      '현장 조사 실시',
      '차별 여부 판단',
    ],
  },
  {
    step: '4단계',
    title: '시정 권고 또는 조정',
    description: '차별이 인정되면 시정 권고 또는 조정 결정',
    details: [
      '시정 권고: 사과, 재발 방지, 손해 배상',
      '조정: 당사자 간 합의',
      '불이행 시: 법무부 장관에게 시정 명령 신청 가능',
      '형사 고소·고발, 민사 소송 병행 가능',
    ],
  },
];

export default function LegalAdvocacyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">법률 및 권익 옹호</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          저시력인의 법적 권리를 알고, 차별받았을 때 구제받는 방법을 안내합니다.
          법은 우리의 권리를 보호하며, 여러 기관이 함께 지원합니다.
        </p>
      </header>

      {/* Key Laws */}
      <section className="mb-16" aria-labelledby="laws-heading">
        <h2 id="laws-heading" className="text-3xl font-bold mb-8">
          주요 장애인 관련 법률
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {laws.map((law) => (
            <Card key={law.title}>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Scale className={`h-8 w-8 ${law.color}`} aria-hidden="true" />
                  <Badge variant="outline">{law.enactmentYear}</Badge>
                </div>
                <CardTitle className="text-xl">{law.title}</CardTitle>
                <CardDescription>{law.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {law.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle2
                        className="h-4 w-4 text-primary mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Advocacy Organizations */}
      <section className="mb-16" aria-labelledby="organizations-heading">
        <h2 id="organizations-heading" className="text-3xl font-bold mb-8">
          권익옹호기관
        </h2>
        <div className="space-y-6">
          {advocacyOrganizations.map((org) => (
            <Card key={org.name}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="h-8 w-8 text-primary" aria-hidden="true" />
                    <div>
                      <CardTitle className="text-xl">{org.name}</CardTitle>
                      <CardDescription>{org.description}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary">{org.badge}</Badge>
                </div>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">제공 서비스</h3>
                  <ul className="space-y-2">
                    {org.services.map((service, index) => (
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
                <div className="space-y-3">
                  <h3 className="font-semibold">연락처</h3>
                  <div className="space-y-2">
                    {org.contact.phone && (
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{org.contact.phone}</span>
                      </div>
                    )}
                    {org.contact.website && (
                      <div className="text-sm">
                        <a
                          href={org.contact.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {org.contact.website}
                        </a>
                      </div>
                    )}
                    {org.contact.note && (
                      <p className="text-sm text-muted-foreground">💡 {org.contact.note}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Discrimination Cases */}
      <section className="mb-16" aria-labelledby="discrimination-heading">
        <h2 id="discrimination-heading" className="text-3xl font-bold mb-8">
          차별 유형과 사례
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {discriminationCases.map((caseType) => (
            <Card key={caseType.type}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-500" aria-hidden="true" />
                  {caseType.type}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {caseType.examples.map((example, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="text-orange-500 font-bold mt-0.5">•</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Complaint Process */}
      <section className="mb-16" aria-labelledby="process-heading">
        <h2 id="process-heading" className="text-3xl font-bold mb-8">
          차별 구제 절차
        </h2>
        <div className="space-y-6">
          {complaintProcess.map((process) => (
            <Card key={process.step}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold">
                    {process.step.replace('단계', '')}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{process.title}</CardTitle>
                    <CardDescription>{process.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 ml-15">
                  {process.details.map((detail, index) => (
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

      {/* Important Note */}
      <section className="mb-12 p-8 bg-orange-50 dark:bg-orange-950 rounded-lg border-2 border-orange-200 dark:border-orange-800">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-orange-600" />
          중요한 안내
        </h2>
        <div className="space-y-3 text-sm">
          <p>
            <strong>진정 기한:</strong> 차별 행위가 있은 날부터 <strong className="text-orange-600">1년 이내</strong>에 진정해야 합니다.
          </p>
          <p>
            <strong>증거 보존:</strong> 가능한 한 많은 증거를 확보하세요. 문자, 이메일, 녹음 등이 도움이 됩니다.
          </p>
          <p>
            <strong>법률 지원:</strong> 대한법률구조공단(132)에서 무료 법률 상담 및 소송 지원을 받을 수 있습니다.
          </p>
          <p>
            <strong>당신은 혼자가 아닙니다:</strong> 한국저시력인협회를 포함한 많은 단체가 함께 싸웁니다.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center">
        <Button asChild size="lg">
          <Link href="/rights/welfare-benefits">복지 혜택 보기</Link>
        </Button>
      </div>
    </main>
  );
}
