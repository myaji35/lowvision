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
  title: '저시력과 마음 건강 - 한국저시력인협회',
  description:
    '저시력 진단 후 심리적 적응 과정과 대처 전략을 알아보세요. 정서적 지원, 전문 상담, 동료 지원 그룹 정보를 제공합니다.',
};

interface EmotionalStage {
  name: string;
  description: string;
  commonFeelings: string[];
  copingTips: string[];
}

const emotionalStages: EmotionalStage[] = [
  {
    name: '부정 (Denial)',
    description:
      '진단을 받아들이기 어렵고, "이건 실수일 거야", "나중에 나아질 거야"라고 생각하는 단계입니다.',
    commonFeelings: [
      '진단 결과를 믿을 수 없음',
      '다른 의사에게 재진단을 받고 싶은 충동',
      '일상생활을 그대로 유지하려 함',
      '가족이나 친구에게 알리기 꺼림',
    ],
    copingTips: [
      '이런 감정은 자연스러운 보호 기제입니다',
      '스스로에게 시간을 주세요',
      '신뢰할 수 있는 사람에게 솔직하게 이야기하세요',
      '정확한 정보를 찾아 현실을 이해하세요',
    ],
  },
  {
    name: '분노 (Anger)',
    description: '"왜 하필 나에게?", "이건 불공평해"라는 감정이 드는 단계입니다.',
    commonFeelings: [
      '세상이나 특정 대상(의사, 가족, 신)에 대한 분노',
      '자신에게 화가 남',
      '짜증과 예민함 증가',
      '주변 사람들에게 화풀이',
    ],
    copingTips: [
      '분노는 정당한 감정입니다',
      '건강한 방법으로 분노를 표현하세요 (운동, 일기 쓰기)',
      '명상이나 심호흡으로 감정 조절 연습',
      '상담 전문가에게 도움 요청',
    ],
  },
  {
    name: '우울 (Depression)',
    description: '상실감과 슬픔이 깊어지고, 미래에 대한 희망이 사라지는 것처럼 느껴지는 단계입니다.',
    commonFeelings: [
      '깊은 슬픔과 절망감',
      '무기력함과 의욕 상실',
      '사회적 고립감',
      '수면 장애 또는 식욕 변화',
    ],
    copingTips: [
      '우울증은 치료 가능합니다',
      '전문 심리 상담사나 정신과 전문의 상담 필수',
      '작은 목표를 세우고 달성하세요',
      '규칙적인 운동과 사회적 연결 유지',
    ],
  },
  {
    name: '수용 (Acceptance)',
    description:
      '저시력과 함께 사는 삶을 받아들이고, 새로운 방법으로 독립성을 찾아가는 단계입니다.',
    commonFeelings: [
      '현실을 인정하고 받아들임',
      '새로운 가능성에 대한 개방성',
      '보조공학과 재활에 대한 적극성',
      '정체성 재정립',
    ],
    copingTips: [
      '수용은 포기가 아닌 적응입니다',
      '저시력인 커뮤니티에 참여하세요',
      '재활 훈련을 적극적으로 받으세요',
      '새로운 취미와 목표를 찾으세요',
    ],
  },
];

export default function MentalHealthPage() {
  return (
    <div className="container py-8 md:py-12">
      {/* Hero Section */}
      <section className="mx-auto max-w-[980px] space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">적응 단계</p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            저시력과 마음 건강
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            진단 후 겪게 되는 심리적 과정을 이해하고, 건강한 방법으로 적응해나가세요.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <Card>
          <CardHeader>
            <CardTitle>마음 건강이 중요한 이유</CardTitle>
            <CardDescription>신체적 적응만큼이나 심리적 적응도 중요합니다</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="leading-relaxed text-muted-foreground">
              저시력 진단은 삶의 큰 변화입니다. 시력 상실은 단순히 "덜 보이는 것" 이상의 의미를
              가집니다. 독립성, 자아상, 사회적 역할에 대한 근본적인 질문을 던지게 됩니다.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              <strong className="text-foreground">좋은 소식은</strong>, 대부분의 저시력인이 시간이
              지나면서 심리적으로 적응하고 의미 있는 삶을 살아간다는 것입니다. 이 과정에서 적절한
              심리적 지원은 큰 도움이 됩니다.
            </p>
            <div className="rounded-lg border bg-muted/50 p-4">
              <p className="text-sm font-semibold">알아두세요</p>
              <p className="mt-2 text-sm text-muted-foreground">
                심리적 반응은 개인마다 다릅니다. 아래 단계를 순서대로 겪지 않을 수도 있고, 여러
                단계를 오가거나 일부를 건너뛸 수도 있습니다. 모두 정상입니다.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Emotional Stages */}
      <section
        className="mx-auto mt-12 max-w-[980px] space-y-6"
        aria-labelledby="stages-heading"
      >
        <h2 id="stages-heading" className="text-2xl font-bold tracking-tight md:text-3xl">
          심리적 적응의 4단계
        </h2>

        {emotionalStages.map((stage, index) => (
          <Card key={stage.name}>
            <CardHeader>
              <CardTitle>
                {index + 1}. {stage.name}
              </CardTitle>
              <CardDescription>{stage.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-semibold">이 단계에서 흔히 느끼는 감정</h3>
                <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                  {stage.commonFeelings.map((feeling, idx) => (
                    <li key={idx}>{feeling}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">대처 전략</h3>
                <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                  {stage.copingTips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Professional Help */}
      <section className="mx-auto mt-12 max-w-[980px] space-y-6" aria-labelledby="help-heading">
        <h2 id="help-heading" className="text-2xl font-bold tracking-tight md:text-3xl">
          전문적인 심리 지원
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>심리 상담</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                저시력 전문 상담사나 재활 심리학자는 적응 과정을 돕는 전문가입니다.
              </p>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold">상담 받을 수 있는 곳</h3>
                <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                  <li>한국시각장애인연합회 심리상담센터</li>
                  <li>국립재활원 심리지원팀</li>
                  <li>대학병원 안과 저시력 클리닉</li>
                  <li>정신건강복지센터 (각 지역)</li>
                </ul>
              </div>
              <div className="rounded-lg border bg-muted/50 p-3">
                <p className="text-sm">
                  <strong>전화 상담</strong>: 정신건강위기상담전화{' '}
                  <span className="font-mono">1577-0199</span> (24시간)
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>약물 치료</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                심한 우울증이나 불안장애는 약물 치료가 필요할 수 있습니다.
              </p>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold">약물 치료가 필요한 경우</h3>
                <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                  <li>2주 이상 지속되는 깊은 우울감</li>
                  <li>수면 장애 또는 식욕 변화</li>
                  <li>일상생활이 불가능할 정도의 불안</li>
                  <li>자해나 자살 생각</li>
                </ul>
              </div>
              <div className="rounded-lg border bg-destructive/10 p-3">
                <p className="text-sm text-destructive">
                  <strong>긴급 상황</strong>: 자살 생각이 들면 즉시 자살예방상담전화{' '}
                  <span className="font-mono">1393</span> 또는 응급실 방문
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Peer Support */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <Card>
          <CardHeader>
            <CardTitle>동료 지원 그룹 (Peer Support)</CardTitle>
            <CardDescription>
              같은 경험을 한 사람들과의 교류는 큰 힘이 됩니다
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="leading-relaxed text-muted-foreground">
              저시력인 당사자들의 자조 모임에서는 실질적인 정보와 정서적 지지를 얻을 수 있습니다.
              "나만 이런 건 아니구나"라는 깨달음은 고립감을 줄이고 희망을 줍니다.
            </p>
            <div className="space-y-2">
              <h3 className="font-semibold">참여할 수 있는 그룹</h3>
              <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">한국저시력인협회 자조 모임</strong>
                  <br />월 1회 정기 모임 (온라인/오프라인)
                </li>
                <li>
                  <strong className="text-foreground">질환별 환자 모임</strong>
                  <br />황반변성, 녹내장, RP 등 질환별 커뮤니티
                </li>
                <li>
                  <strong className="text-foreground">연령별 그룹</strong>
                  <br />청년, 중장년, 노년 등 생애주기별 모임
                </li>
                <li>
                  <strong className="text-foreground">온라인 커뮤니티</strong>
                  <br />
                  카카오톡 오픈채팅, 네이버 카페, 페이스북 그룹
                </li>
              </ul>
            </div>
            <div className="rounded-lg border bg-primary/10 p-4">
              <p className="text-sm font-semibold">참여 방법</p>
              <p className="mt-2 text-sm text-muted-foreground">
                한국저시력인협회 사무국 <span className="font-mono">02-123-4567</span> 또는{' '}
                <a
                  href="mailto:info@lowvision.or.kr"
                  className="underline hover:text-foreground"
                >
                  info@lowvision.or.kr
                </a>
                로 문의하세요.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Family Communication */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <Card>
          <CardHeader>
            <CardTitle>가족과의 소통</CardTitle>
            <CardDescription>솔직하고 열린 대화가 가족 관계를 강화합니다</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">효과적인 소통 팁</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-foreground">1.</span>
                  <div>
                    <strong className="text-foreground">자신의 감정을 솔직히 표현하세요</strong>
                    <br />
                    "나는 지금 불안해", "도움이 필요해"라고 말하는 것은 약함이 아닙니다.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">2.</span>
                  <div>
                    <strong className="text-foreground">구체적인 도움을 요청하세요</strong>
                    <br />
                    "장 볼 때 같이 가줄래?" "이 서류 좀 읽어줄 수 있어?"
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">3.</span>
                  <div>
                    <strong className="text-foreground">독립성의 중요성을 알려주세요</strong>
                    <br />
                    "네가 도와주는 건 고맙지만, 이건 내가 할 수 있어"
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground">4.</span>
                  <div>
                    <strong className="text-foreground">가족 교육에 함께 참여하세요</strong>
                    <br />
                    가족이 저시력을 이해하면 더 효과적으로 지원할 수 있습니다.
                  </div>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Self-care Strategies */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <Card className="border-primary/50 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-primary">일상 속 자기 돌봄 전략</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-lg">🧘</span>
                <div>
                  <strong className="text-foreground">마음챙김과 명상</strong>: 불안을 줄이고
                  현재에 집중하는 연습
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-lg">🏃</span>
                <div>
                  <strong className="text-foreground">규칙적인 운동</strong>: 우울증 완화에
                  항우울제만큼 효과적
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-lg">😴</span>
                <div>
                  <strong className="text-foreground">충분한 수면</strong>: 하루 7-8시간,
                  규칙적인 수면 패턴 유지
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-lg">🤝</span>
                <div>
                  <strong className="text-foreground">사회적 연결 유지</strong>: 고립되지 말고
                  친구, 가족과 정기적으로 만남
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-lg">📝</span>
                <div>
                  <strong className="text-foreground">일기 쓰기</strong>: 감정을 정리하고
                  성장을 기록
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-lg">🎯</span>
                <div>
                  <strong className="text-foreground">작은 목표 달성</strong>: 성취감을 통해
                  자존감 회복
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Hope Message */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <Card>
          <CardHeader>
            <CardTitle>희망의 메시지</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="leading-relaxed text-muted-foreground">
              적응은 시간이 걸리는 과정입니다. 좋은 날도 있고 힘든 날도 있을 것입니다. 하지만
              수많은 저시력인이 증명하듯, <strong className="text-foreground">저시력과 함께 충만하고
              의미 있는 삶을 살 수 있습니다</strong>.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              당신은 혼자가 아닙니다. 한국저시력인협회와 전국의 동료들이 함께합니다.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Navigation */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <Button asChild variant="outline">
            <Link href="/diagnosis/first-steps">← 이전: 진단 직후 가이드</Link>
          </Button>
          <div className="flex gap-2">
            <Button asChild variant="outline">
              <Link href="/adaptation/family-support">다음: 가족 및 보호자 지원 →</Link>
            </Button>
            <Button asChild>
              <Link href="/daily-life/rehabilitation">재활 훈련 보기</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
