import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: '복지 혜택 총람 - 한국저시력인협회',
  description:
    '저시력인이 받을 수 있는 모든 복지 혜택을 한눈에 확인하세요. 활동지원, 교통, 통신, 의료, 세금 감면 등 (2025년 기준)',
};

interface WelfareBenefit {
  id: string;
  category: string;
  name: string;
  description: string;
  eligibility: string;
  howToApply: string;
  amount?: string;
  note?: string;
  updated: string;
}

const benefits: WelfareBenefit[] = [
  {
    id: 'activity-support',
    category: '일상생활 지원',
    name: '장애인 활동지원 서비스',
    description:
      '일상생활 및 사회활동에 어려움을 겪는 장애인에게 활동지원사가 방문하여 신변처리, 가사, 이동 등을 지원합니다.',
    eligibility: '만 6세 ~ 65세 미만 장애인 (장애 정도에 따라 차등 지급)',
    howToApply: '주민센터 또는 국민연금공단 지사 방문 신청',
    amount: '월 최대 150시간 (중증 장애인 기준)',
    note: '2025년 개정 기준: 본인부담금 면제 대상 확대',
    updated: '2025년 1월',
  },
  {
    id: 'disability-pension',
    category: '소득 지원',
    name: '장애인연금',
    description:
      '중증 장애인의 생활 안정을 위한 소득 보장 제도입니다. 장애로 인한 추가 비용을 지원합니다.',
    eligibility: '만 18세 이상 중증 장애인 (소득 하위 70% 이하)',
    howToApply: '주민센터 방문 신청',
    amount: '기초급여: 최대 월 334,810원 (2025년 기준)',
    note: '부가급여 별도 (생활 환경에 따라 차등)',
    updated: '2025년 1월',
  },
  {
    id: 'transport-discount',
    category: '교통 지원',
    name: '대중교통 요금 감면',
    description:
      '전국 지하철, 시내버스, 광역버스 무료 또는 50% 할인 혜택을 받을 수 있습니다.',
    eligibility: '등록 장애인 (장애인복지카드 소지자)',
    howToApply: '장애인복지카드 발급 시 자동 적용',
    amount: '지하철: 무료, 시내버스: 무료 또는 50% (지역별 상이)',
    note: 'KTX, 고속버스는 30-50% 할인 (중증 동반 1인 무료)',
    updated: '2025년 1월',
  },
  {
    id: 'telecom-discount',
    category: '통신 지원',
    name: '통신비 감면',
    description:
      '이동통신(휴대폰), 유선전화, 인터넷 요금 감면 혜택을 제공합니다.',
    eligibility: '등록 장애인',
    howToApply: '통신사 고객센터 또는 대리점에서 신청',
    amount: '이동통신: 월 최대 35,000원, 유선: 월 최대 14,000원, 인터넷: 월 최대 12,650원',
    note: '중증/경증 및 요금제에 따라 차등',
    updated: '2025년 1월',
  },
  {
    id: 'tax-reduction',
    category: '세금 감면',
    name: '소득세·재산세 감면',
    description:
      '본인 및 부양가족 소득공제, 자동차 취득세·등록세 면제, 재산세 감면 등을 받을 수 있습니다.',
    eligibility: '등록 장애인',
    howToApply: '연말정산 시 자동 적용 (자동차는 지자체 신청)',
    amount: '소득공제: 연 200만원, 자동차 취득세: 면제 (1대, 2,000cc 이하)',
    note: '장애인 전용 자동차 번호판 발급 가능',
    updated: '2025년 1월',
  },
  {
    id: 'medical-support',
    category: '의료 지원',
    name: '의료비 지원',
    description:
      '건강보험 본인부담금 감면, 장애인 보조기기 구입비 지원 등을 받을 수 있습니다.',
    eligibility: '등록 장애인 (소득 기준 충족 시)',
    howToApply: '국민건강보험공단, 보건소 신청',
    amount: '본인부담금: 10-30% 감면, 보조기기: 품목당 수십만 원',
    note: '흰 지팡이, 확대경, 돋보기 등 포함',
    updated: '2025년 1월',
  },
  {
    id: 'assistive-device',
    category: '보조기기 지원',
    name: '장애인보조기구 교부',
    description:
      '저시력인에게 필요한 확대경, 망원경, 독서기 등의 보조기기를 무료 또는 저가로 제공합니다.',
    eligibility: '등록 장애인 (국민기초생활수급자 우선)',
    howToApply: '국립재활원 보조기기센터 또는 지역 보조기기센터',
    amount: '품목당 최대 100만원 (자부담 10-20%)',
    note: '휴대용 확대경, 독서 확대기, 망원경 등',
    updated: '2025년 1월',
  },
  {
    id: 'housing-support',
    category: '주거 지원',
    name: '주택 개조 지원',
    description:
      '장애인 가구의 주거 편의를 위한 주택 개조 비용을 지원합니다. 조명 개선, 문턱 제거 등.',
    eligibility: '등록 장애인 (기초생활수급자 및 차상위 계층)',
    howToApply: '주민센터 또는 LH한국토지주택공사',
    amount: '가구당 최대 1,200만원',
    note: '저시력 친화 환경 조성 (고대비 페인트, 조명 등)',
    updated: '2025년 1월',
  },
  {
    id: 'employment-support',
    category: '고용 지원',
    name: '장애인 고용 지원',
    description:
      '장애인 취업 알선, 직업 훈련, 근로 지원 기기 지원, 출퇴근 비용 지원 등을 제공합니다.',
    eligibility: '취업을 희망하는 등록 장애인',
    howToApply: '한국장애인고용공단 지사',
    amount: '보조기기: 최대 500만원, 근로 지원: 월 최대 180만원',
    note: '재택근무 지원, 직무 조정 컨설팅 포함',
    updated: '2025년 1월',
  },
  {
    id: 'culture-discount',
    category: '문화·여가',
    name: '문화·여가 시설 할인',
    description:
      '박물관, 미술관, 공원, 영화관, 공연장 등 문화 시설 무료 또는 할인 입장이 가능합니다.',
    eligibility: '등록 장애인 (동반 1인 포함)',
    howToApply: '장애인복지카드 제시',
    amount: '국공립 시설: 무료, 민간 시설: 30-50% 할인',
    note: '스크린 리더 지원 영화관, 오디오 가이드 제공',
    updated: '2025년 1월',
  },
  {
    id: 'utility-discount',
    category: '공공요금 감면',
    name: '전기·도시가스·수도 요금 감면',
    description:
      '생활 필수 공공요금 할인 혜택을 받을 수 있습니다.',
    eligibility: '등록 장애인 (중증 장애인 우대)',
    howToApply: '한국전력, 도시가스사, 지자체 수도사업소',
    amount: '전기: 월 최대 16,000원, 도시가스: 월 최대 10,000원, 수도: 10% 감면',
    note: '하절기/동절기 추가 할인',
    updated: '2025년 1월',
  },
  {
    id: 'childcare-support',
    category: '아동 지원',
    name: '장애아동 발달 재활 서비스',
    description:
      '언어, 미술, 음악 등 발달 재활 서비스를 바우처로 제공하여 아동의 성장을 돕습니다.',
    eligibility: '만 18세 미만 장애아동 (소득 기준 충족)',
    howToApply: '주민센터 또는 사회서비스 전자바우처',
    amount: '월 최대 22만원 (소득 기준별 차등)',
    note: '공공 어린이 재활병원 이용 가능',
    updated: '2025년 1월',
  },
];

const categories = [
  '일상생활 지원',
  '소득 지원',
  '교통 지원',
  '통신 지원',
  '세금 감면',
  '의료 지원',
  '보조기기 지원',
  '주거 지원',
  '고용 지원',
  '문화·여가',
  '공공요금 감면',
  '아동 지원',
];

export default function WelfareBenefitsPage() {
  return (
    <div className="container py-8 md:py-12">
      {/* Hero Section */}
      <section className="mx-auto max-w-[980px] space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">권리 단계</p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            복지 혜택 총람
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            저시력인이 받을 수 있는 모든 복지 혜택을 한눈에 확인하세요 (2025년 기준)
          </p>
          <Badge variant="secondary" className="text-xs">
            최종 업데이트: 2025년 1월
          </Badge>
        </div>
      </section>

      {/* Quick Guide */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <Card className="border-primary/50 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-primary">혜택 신청 시작 가이드</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">1️⃣ 장애인 등록부터 시작하세요</h3>
              <p className="text-sm text-muted-foreground">
                대부분의 복지 혜택은 장애인 등록이 필수입니다. 주민센터에 안과 진단서를
                지참하고 방문하세요.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">2️⃣ 복지카드 발급받기</h3>
              <p className="text-sm text-muted-foreground">
                장애인복지카드는 교통, 통신, 문화 시설 할인의 증빙 자료입니다.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">3️⃣ 개별 혜택 신청</h3>
              <p className="text-sm text-muted-foreground">
                활동지원, 장애인연금 등은 별도 신청이 필요합니다. 아래 목록을 참고하세요.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Category Navigation */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          카테고리별 혜택
        </h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button key={category} asChild variant="outline" size="sm">
              <a href={`#${category}`}>{category}</a>
            </Button>
          ))}
        </div>
      </section>

      {/* Benefits List */}
      <section className="mx-auto mt-12 max-w-[980px] space-y-8">
        {categories.map((category) => (
          <div key={category} id={category} className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">
              {category}
            </h2>
            <div className="grid gap-4">
              {benefits
                .filter((b) => b.category === category)
                .map((benefit) => (
                  <Card key={benefit.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <CardTitle className="text-lg">{benefit.name}</CardTitle>
                          <CardDescription className="text-sm">
                            {benefit.description}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="shrink-0 text-xs">
                          {benefit.updated}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-4 text-sm md:grid-cols-2">
                        <div className="space-y-1">
                          <h4 className="font-semibold">지원 대상</h4>
                          <p className="text-muted-foreground">{benefit.eligibility}</p>
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-semibold">신청 방법</h4>
                          <p className="text-muted-foreground">{benefit.howToApply}</p>
                        </div>
                        {benefit.amount && (
                          <div className="space-y-1">
                            <h4 className="font-semibold">지원 금액/내용</h4>
                            <p className="text-muted-foreground">{benefit.amount}</p>
                          </div>
                        )}
                        {benefit.note && (
                          <div className="space-y-1">
                            <h4 className="font-semibold">참고사항</h4>
                            <p className="text-muted-foreground">{benefit.note}</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </section>

      {/* Contact Information */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <Card>
          <CardHeader>
            <CardTitle>문의 및 상담 창구</CardTitle>
            <CardDescription>
              복지 혜택에 대한 자세한 상담을 원하시면 아래 기관에 문의하세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="font-semibold">보건복지상담센터 (129)</h3>
                <p className="text-sm text-muted-foreground">
                  • 평일 09:00-18:00
                  <br />• 복지 제도 전반 상담
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">장애인권익옹호기관 (1644-8295)</h3>
                <p className="text-sm text-muted-foreground">
                  • 24시간 운영
                  <br />• 권리 침해 상담 및 신고
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">국민연금공단 (1355)</h3>
                <p className="text-sm text-muted-foreground">
                  • 평일 09:00-18:00
                  <br />• 장애인연금, 활동지원 상담
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">한국장애인고용공단 (1588-1519)</h3>
                <p className="text-sm text-muted-foreground">
                  • 평일 09:00-18:00
                  <br />• 고용 지원 및 직업 훈련
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">국립재활원 보조기기센터 (02-901-1700)</h3>
                <p className="text-sm text-muted-foreground">
                  • 평일 09:00-17:00
                  <br />• 보조기기 상담 및 교부
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">주민센터 복지담당</h3>
                <p className="text-sm text-muted-foreground">
                  • 지역별 운영 시간 상이
                  <br />• 장애인 등록 및 각종 신청
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Important Notice */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <Card className="border-muted bg-muted/30">
          <CardHeader>
            <CardTitle>📌 중요 안내사항</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>
              • 위 정보는 2025년 1월 기준으로 작성되었으며, 정부 정책 변경에 따라 내용이 달라질
              수 있습니다.
            </p>
            <p>
              • 지역별·소득별로 혜택 내용이 다를 수 있으니, 반드시 해당 기관에 문의하시기
              바랍니다.
            </p>
            <p>
              • 복지 혜택 신청은 소급 적용되지 않으므로, 가능한 빨리 신청하시기 바랍니다.
            </p>
            <p>
              • 이 페이지는 매년 12월~1월에 업데이트됩니다. 최신 정보를 확인하세요.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Navigation */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <Button asChild variant="outline">
            <Link href="/diagnosis/first-steps">← 진단 직후 가이드</Link>
          </Button>
          <div className="flex gap-2">
            <Button asChild variant="secondary">
              <Link href="/daily-life/assistive-tech">보조공학 보기</Link>
            </Button>
            <Button asChild>
              <Link href="/community">협회 소식</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
