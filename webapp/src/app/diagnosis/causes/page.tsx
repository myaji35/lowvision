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

export const metadata: Metadata = {
  title: '저시력 원인 질환 - 한국저시력인협회',
  description:
    '황반변성, 녹내장, 당뇨망막병증, 망막색소변성증 등 저시력을 일으키는 주요 질환에 대해 알아보세요.',
};

interface Disease {
  id: string;
  name: string;
  description: string;
  symptoms: string[];
  prevalence: string;
  characteristics: string[];
}

const diseases: Disease[] = [
  {
    id: 'amd',
    name: '황반변성 (AMD)',
    description:
      '망막 중심부인 황반에 변성이 생겨 중심 시력이 손상되는 질환입니다. 나이가 들면서 발생률이 높아져 "연령 관련 황반변성"이라고도 합니다.',
    symptoms: [
      '중심부가 흐리거나 어둡게 보임',
      '직선이 구부러져 보임 (변형시)',
      '색상 인식 저하',
      '독서나 얼굴 인식 어려움',
    ],
    prevalence: '60세 이상에서 가장 흔한 저시력 원인',
    characteristics: [
      '중심 시야 상실, 주변 시야는 유지',
      '습성과 건성 두 가지 유형',
      '조기 발견 시 진행 속도 늦출 수 있음',
    ],
  },
  {
    id: 'glaucoma',
    name: '녹내장',
    description:
      '안압 상승으로 시신경이 손상되어 시야가 점차 좁아지는 질환입니다. 초기에는 증상이 거의 없어 "소리 없는 시력 도둑"이라 불립니다.',
    symptoms: [
      '주변 시야부터 점차 좁아짐',
      '터널 시야 (진행 시)',
      '야간 시력 저하',
      '두통 및 눈 통증 (급성 녹내장)',
    ],
    prevalence: '40세 이상 인구의 약 3-4%',
    characteristics: [
      '주변 시야부터 상실',
      '한 번 손상된 시신경은 회복 불가',
      '조기 발견 및 안압 관리 중요',
    ],
  },
  {
    id: 'diabetic-retinopathy',
    name: '당뇨망막병증',
    description:
      '당뇨병으로 인해 망막 혈관이 손상되어 발생하는 합병증입니다. 당뇨병 환자의 주요 실명 원인 중 하나입니다.',
    symptoms: [
      '시야에 떠다니는 점이나 실 (비문증)',
      '시력 저하',
      '색상 구분 어려움',
      '갑작스러운 시력 상실 (출혈 시)',
    ],
    prevalence: '당뇨병 환자의 약 30-40%가 경험',
    characteristics: [
      '혈당 조절로 예방 및 진행 지연 가능',
      '레이저 치료로 진행 억제',
      '정기적인 안과 검진 필수',
    ],
  },
  {
    id: 'retinitis-pigmentosa',
    name: '망막색소변성증 (RP)',
    description:
      '망막의 광수용체 세포가 점진적으로 퇴화하는 유전 질환입니다. 주로 야맹증으로 시작하여 주변 시야가 점차 좁아집니다.',
    symptoms: [
      '야맹증 (어두운 곳에서 잘 안 보임)',
      '주변 시야 상실 (터널 시야)',
      '빛에 대한 민감도 증가',
      '색상 구분 어려움',
    ],
    prevalence: '약 4,000명 중 1명 (희귀 질환)',
    characteristics: [
      '유전 질환 (가족력)',
      '천천히 진행 (수년~수십년)',
      '현재 완치법 없으나 연구 진행 중',
    ],
  },
  {
    id: 'cataract',
    name: '백내장',
    description:
      '수정체가 혼탁해져 빛이 제대로 통과하지 못해 시력이 저하되는 질환입니다. 노화로 인해 대부분의 사람이 경험합니다.',
    symptoms: [
      '시야가 뿌옇거나 흐림',
      '밝은 빛에 눈부심',
      '야간 시력 저하',
      '색상이 노랗게 보임',
    ],
    prevalence: '60세 이상의 80% 이상',
    characteristics: [
      '수술로 치료 가능 (수정체 교체)',
      '진행 속도 느림',
      '가장 흔한 노인성 안과 질환',
    ],
  },
  {
    id: 'optic-neuritis',
    name: '시신경염',
    description:
      '시신경에 염증이 생겨 시력이 급격히 저하되는 질환입니다. 다발성 경화증과 관련이 있을 수 있습니다.',
    symptoms: [
      '갑작스러운 시력 저하',
      '눈을 움직일 때 통증',
      '색상 인식 저하',
      '중심 시야 흐림',
    ],
    prevalence: '젊은 성인(20-40대)에서 주로 발생',
    characteristics: [
      '대부분 자연 회복',
      '스테로이드 치료',
      'MRI 검사로 다발성 경화증 확인',
    ],
  },
];

export default function CausesPage() {
  return (
    <div className="container py-8 md:py-12">
      {/* Hero Section */}
      <section className="mx-auto max-w-[980px] space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">진단 단계</p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            저시력 원인 질환
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            저시력을 일으키는 주요 안과 질환과 그 특징을 알아보세요.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <Card>
          <CardHeader>
            <CardTitle>저시력의 주요 원인</CardTitle>
            <CardDescription>
              저시력은 다양한 안과 질환으로 인해 발생합니다
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="leading-relaxed text-muted-foreground">
              저시력은 단일 질환이 아닌, 여러 안과 질환의 결과입니다. 원인 질환을 이해하면 적절한
              치료와 재활 계획을 세울 수 있습니다.
            </p>
            <div className="rounded-lg border bg-muted/50 p-4">
              <p className="text-sm font-semibold">⚠️ 중요</p>
              <p className="mt-2 text-sm text-muted-foreground">
                같은 질환이라도 개인마다 증상과 진행 속도가 다릅니다. 정확한 진단과 개인 맞춤
                치료를 위해 안과 전문의와 상담하세요.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Diseases List */}
      <section className="mx-auto mt-12 max-w-[980px] space-y-8" aria-labelledby="diseases-heading">
        <h2 id="diseases-heading" className="text-2xl font-bold tracking-tight md:text-3xl">
          주요 질환별 상세 정보
        </h2>

        {diseases.map((disease, index) => (
          <Card key={disease.id} id={disease.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-xl">
                    {index + 1}. {disease.name}
                  </CardTitle>
                  <CardDescription className="text-sm">{disease.prevalence}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-semibold">설명</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {disease.description}
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">주요 증상</h3>
                <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                  {disease.symptoms.map((symptom, idx) => (
                    <li key={idx}>{symptom}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">특징</h3>
                <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                  {disease.characteristics.map((char, idx) => (
                    <li key={idx}>{char}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* When to See a Doctor */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <Card className="border-destructive/50 bg-destructive/5">
          <CardHeader>
            <CardTitle className="text-destructive">즉시 병원을 방문해야 하는 증상</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground">
              <li className="text-foreground">
                <strong>갑작스러운 시력 상실</strong> (한쪽 또는 양쪽 눈)
              </li>
              <li className="text-foreground">
                <strong>시야에 커튼이나 그림자가 드리워짐</strong> (망막박리 의심)
              </li>
              <li className="text-foreground">
                <strong>갑작스러운 비문증</strong> (떠다니는 점이나 실이 갑자기 많이 보임)
              </li>
              <li className="text-foreground">
                <strong>심한 눈 통증</strong> + 시력 저하 (급성 녹내장 의심)
              </li>
              <li className="text-foreground">
                <strong>섬광</strong> (번쩍이는 빛이 보임)
              </li>
            </ul>
            <p className="mt-4 text-sm font-semibold text-destructive">
              ⚠️ 위 증상은 응급 상황일 수 있습니다. 즉시 안과 응급실을 방문하세요.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Prevention Tips */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <Card>
          <CardHeader>
            <CardTitle>예방 및 관리 팁</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-lg" role="img" aria-label="검진">
                  👁️
                </span>
                <div>
                  <strong className="text-foreground">정기적인 안과 검진</strong>: 40세 이상은
                  매년, 당뇨병·녹내장 가족력이 있으면 더 자주
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-lg" role="img" aria-label="건강">
                  💊
                </span>
                <div>
                  <strong className="text-foreground">만성질환 관리</strong>: 당뇨병, 고혈압
                  철저히 조절
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-lg" role="img" aria-label="자외선">
                  🕶️
                </span>
                <div>
                  <strong className="text-foreground">자외선 차단</strong>: 야외 활동 시 선글라스
                  착용
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-lg" role="img" aria-label="영양">
                  🥬
                </span>
                <div>
                  <strong className="text-foreground">눈 건강 식단</strong>: 녹황색 채소, 오메가-3
                  섭취
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-lg" role="img" aria-label="금연">
                  🚭
                </span>
                <div>
                  <strong className="text-foreground">금연</strong>: 황반변성 위험 2-3배 증가
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Navigation */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <Button asChild variant="outline">
            <Link href="/diagnosis/what-is-low-vision">← 이전: 저시력이란?</Link>
          </Button>
          <div className="flex gap-2">
            <Button asChild variant="outline">
              <Link href="/diagnosis/first-steps">다음: 진단 직후 가이드 →</Link>
            </Button>
            <Button asChild>
              <Link href="/daily-life/assistive-tech">보조공학 보기</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
