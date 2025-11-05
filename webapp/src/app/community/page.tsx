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
  title: '협회 소식 - 한국저시력인협회',
  description:
    '한국저시력인협회의 활동, 연혁, 주요 사업, 참여 방법, 후원 안내. 저시력인의 권익 옹호와 자립 지원을 위해 노력합니다.',
};

export default function CommunityPage() {
  return (
    <div className="container py-8 md:py-12">
      {/* Hero Section */}
      <section className="mx-auto max-w-[980px] space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">커뮤니티</p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            협회 소식
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            한국저시력인협회와 함께 저시력인의 독립과 권리를 위해 나아갑니다.
          </p>
        </div>
      </section>

      {/* About KLA */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <Card>
          <CardHeader>
            <CardTitle>한국저시력인협회 소개</CardTitle>
            <CardDescription>
              저시력인 당사자와 가족이 중심이 되는 비영리 단체
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="leading-relaxed text-muted-foreground">
              한국저시력인협회(KLA)는 저시력인의 자립과 사회 참여를 지원하기 위해 설립된
              당사자 중심 단체입니다. 우리는{' '}
              <strong className="text-foreground">
                "저시력은 극복할 수 없는 장애가 아니라, 적절한 지원으로 충분히 독립적인 삶이
                가능한 조건"
              </strong>
              이라고 믿습니다.
            </p>
            <div className="rounded-lg border bg-primary/10 p-4">
              <h3 className="font-semibold">우리의 비전</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                모든 저시력인이 존엄하고 독립적이며 의미 있는 삶을 살 수 있는 사회
              </p>
            </div>
            <div className="rounded-lg border bg-muted/50 p-4">
              <h3 className="font-semibold">우리의 미션</h3>
              <ul className="mt-2 ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                <li>저시력인의 권익 옹호 및 정책 개선</li>
                <li>최신 정보 및 자원 제공</li>
                <li>당사자 커뮤니티 강화 (자조 모임, 동료 지원)</li>
                <li>사회 인식 개선 및 차별 철폐</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* History */}
      <section className="mx-auto mt-12 max-w-[980px] space-y-6" aria-labelledby="history-heading">
        <h2 id="history-heading" className="text-2xl font-bold tracking-tight md:text-3xl">
          연혁
        </h2>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex gap-4">
                <Badge variant="outline" className="h-fit">
                  2025
                </Badge>
                <div className="flex-1 space-y-1">
                  <p className="text-sm text-muted-foreground">
                    - 웹사이트 리뉴얼 (접근성 최우선 설계)
                    <br />- 보조공학 정보 허브 구축
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Badge variant="outline" className="h-fit">
                  2020
                </Badge>
                <div className="flex-1 space-y-1">
                  <p className="text-sm text-muted-foreground">
                    - 장애인차별금지법 이행 모니터링 사업 시작
                    <br />- 저시력인 취업 지원 프로그램 런칭
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Badge variant="outline" className="h-fit">
                  2015
                </Badge>
                <div className="flex-1 space-y-1">
                  <p className="text-sm text-muted-foreground">
                    - 정부 등록 비영리 법인 설립
                    <br />- 첫 전국 저시력인 실태조사 실시
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Badge variant="outline" className="h-fit">
                  2010
                </Badge>
                <div className="flex-1 space-y-1">
                  <p className="text-sm text-muted-foreground">
                    - 자조 모임으로 출발 (서울 지역 20명)
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Main Activities */}
      <section
        className="mx-auto mt-12 max-w-[980px] space-y-6"
        aria-labelledby="activities-heading"
      >
        <h2 id="activities-heading" className="text-2xl font-bold tracking-tight md:text-3xl">
          주요 활동
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>정보 제공 및 교육</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span>📚</span>
                  <div>
                    <strong className="text-foreground">KLA 소식 (구 '통신문')</strong>
                    <br />
                    격월 발행, 최신 보조공학·복지 정책 정보
                  </div>
                </li>
                <li className="flex gap-3">
                  <span>💻</span>
                  <div>
                    <strong className="text-foreground">온라인 세미나</strong>
                    <br />
                    월 1회, 보조공학 시연·전문가 초청 강연
                  </div>
                </li>
                <li className="flex gap-3">
                  <span>📖</span>
                  <div>
                    <strong className="text-foreground">발간물</strong>
                    <br />
                    저시력 가이드북, 보조기기 리뷰집
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>권익 옹호</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span>📢</span>
                  <div>
                    <strong className="text-foreground">정책 제안</strong>
                    <br />
                    정부·국회에 저시력인 정책 개선안 제출
                  </div>
                </li>
                <li className="flex gap-3">
                  <span>⚖️</span>
                  <div>
                    <strong className="text-foreground">차별 구제</strong>
                    <br />
                    접근성 차별 사례 모니터링 및 시정 요구
                  </div>
                </li>
                <li className="flex gap-3">
                  <span>🎓</span>
                  <div>
                    <strong className="text-foreground">인식 개선 캠페인</strong>
                    <br />
                    "저시력 바로 알기" 공공 캠페인
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>자조 모임 및 동료 지원</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span>🤝</span>
                  <div>
                    <strong className="text-foreground">전국 자조 모임</strong>
                    <br />
                    서울·경기·부산 등 7개 지역 정기 모임
                  </div>
                </li>
                <li className="flex gap-3">
                  <span>💬</span>
                  <div>
                    <strong className="text-foreground">온라인 커뮤니티</strong>
                    <br />
                    카카오톡, 네이버 카페 (회원 2,000명+)
                  </div>
                </li>
                <li className="flex gap-3">
                  <span>📞</span>
                  <div>
                    <strong className="text-foreground">동료 상담</strong>
                    <br />
                    신규 진단자를 위한 멘토링 프로그램
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>직업 및 교육 지원</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span>💼</span>
                  <div>
                    <strong className="text-foreground">취업 지원</strong>
                    <br />
                    이력서 작성, 면접 준비, 고용주 교육
                  </div>
                </li>
                <li className="flex gap-3">
                  <span>🎓</span>
                  <div>
                    <strong className="text-foreground">장학금</strong>
                    <br />
                    고등학생·대학생 연간 500만원 (5명)
                  </div>
                </li>
                <li className="flex gap-3">
                  <span>🖥️</span>
                  <div>
                    <strong className="text-foreground">디지털 리터러시 교육</strong>
                    <br />
                    스크린 리더, 보조공학 활용법
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recent News */}
      <section className="mx-auto mt-12 max-w-[980px] space-y-6" aria-labelledby="news-heading">
        <h2 id="news-heading" className="text-2xl font-bold tracking-tight md:text-3xl">
          최근 소식
        </h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg">2025년 1분기 보조공학 세미나 개최</CardTitle>
                <Badge>2025.03.15</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                AI 기반 스마트 안경(Envision Glasses, Meta Ray-Ban) 실물 시연 및 체험 기회 제공.
                선착순 50명 신청 접수 중.
              </p>
              <Button asChild variant="link" className="mt-2 h-auto p-0">
                <Link href="#contact">자세히 보기 →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg">
                  장애인활동지원 서비스 확대 정책 제안서 제출
                </CardTitle>
                <Badge>2025.02.28</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                저시력인도 활동지원 대상에 포함될 수 있도록 보건복지부에 정책 개선안 제출. 전국
                500명 서명 참여.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg">
                  2024년 저시력인 실태조사 결과 발표
                </CardTitle>
                <Badge>2025.01.10</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                전국 저시력인 1,200명 대상 설문조사 결과: 보조공학 인지율 40%, 실제 사용률
                15%. 정보 접근성 개선이 시급함을 확인.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How to Participate */}
      <section className="mx-auto mt-12 max-w-[980px] space-y-6" aria-labelledby="join-heading">
        <h2 id="join-heading" className="text-2xl font-bold tracking-tight md:text-3xl">
          참여 방법
        </h2>

        <Card>
          <CardHeader>
            <CardTitle>협회와 함께하는 다양한 방법</CardTitle>
            <CardDescription>
              당신의 참여가 저시력인 커뮤니티를 더 강하게 만듭니다
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border bg-muted/50 p-4">
                <h3 className="mb-2 font-semibold">1. 정회원 가입</h3>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">대상</strong>: 저시력인 당사자
                  <br />
                  <strong className="text-foreground">혜택</strong>: 자조 모임 참여, 교육 우선
                  신청, 간행물 무료 배송
                  <br />
                  <strong className="text-foreground">연회비</strong>: 20,000원
                </p>
              </div>

              <div className="rounded-lg border bg-muted/50 p-4">
                <h3 className="mb-2 font-semibold">2. 준회원 가입</h3>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">대상</strong>: 가족, 지지자, 전문가
                  <br />
                  <strong className="text-foreground">혜택</strong>: 가족 교육 프로그램,
                  뉴스레터
                  <br />
                  <strong className="text-foreground">연회비</strong>: 10,000원
                </p>
              </div>

              <div className="rounded-lg border bg-muted/50 p-4">
                <h3 className="mb-2 font-semibold">3. 자원봉사</h3>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">활동</strong>: 행사 지원, 간행물 녹음,
                  멘토링
                  <br />
                  <strong className="text-foreground">시간</strong>: 월 4시간 이상 (유연하게
                  조정 가능)
                </p>
              </div>

              <div className="rounded-lg border bg-muted/50 p-4">
                <h3 className="mb-2 font-semibold">4. 후원 (아래 '후원 안내' 참고)</h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Donation */}
      <section className="mx-auto mt-12 max-w-[980px] space-y-6" aria-labelledby="donate-heading">
        <h2 id="donate-heading" className="text-2xl font-bold tracking-tight md:text-3xl">
          후원 안내
        </h2>

        <Card className="border-primary/50 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-primary">당신의 후원이 만드는 변화</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="leading-relaxed text-muted-foreground">
              한국저시력인협회는 회원 회비와 후원금으로 운영됩니다. 모든 후원금은{' '}
              <strong className="text-foreground">100% 투명하게 공개</strong>되며, 저시력인의
              독립과 권리 증진을 위해 사용됩니다.
            </p>

            <div className="space-y-3">
              <div className="rounded-lg border bg-background p-4">
                <h3 className="mb-2 font-semibold">월 1만원 후원</h3>
                <p className="text-sm text-muted-foreground">
                  신규 진단자 1명에게 저시력 가이드북 제공
                </p>
              </div>

              <div className="rounded-lg border bg-background p-4">
                <h3 className="mb-2 font-semibold">월 3만원 후원</h3>
                <p className="text-sm text-muted-foreground">
                  보조공학 세미나 1회 개최 (50명 참석)
                </p>
              </div>

              <div className="rounded-lg border bg-background p-4">
                <h3 className="mb-2 font-semibold">월 5만원 후원</h3>
                <p className="text-sm text-muted-foreground">
                  저소득층 저시력인 1명에게 전자 확대기 지원
                </p>
              </div>
            </div>

            <div className="rounded-lg border bg-muted/50 p-4">
              <h3 className="mb-2 font-semibold">후원 계좌</h3>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">신한은행</strong>:{' '}
                <span className="font-mono">110-123-456789</span>
                <br />
                예금주: 한국저시력인협회
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong className="text-foreground">정기 후원 신청</strong>: 홈페이지 또는
                전화 <span className="font-mono">02-123-4567</span>
              </p>
            </div>

            <div className="rounded-lg border bg-orange-100 p-4 dark:bg-orange-950/30">
              <p className="text-sm">
                <strong className="text-foreground">세액 공제</strong>: 모든 후원금은
                연말정산 시 <strong>15-30% 세액 공제</strong> (기부금 영수증 자동 발급)
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contact */}
      <section className="mx-auto mt-12 max-w-[980px]" id="contact">
        <Card>
          <CardHeader>
            <CardTitle>연락처</CardTitle>
            <CardDescription>궁금한 점이 있으시면 언제든 연락주세요</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="font-semibold">한국저시력인협회 사무국</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>
                    <strong className="text-foreground">주소</strong>: 서울특별시 강남구
                    테헤란로 123
                  </li>
                  <li>
                    <strong className="text-foreground">전화</strong>:{' '}
                    <span className="font-mono">02-123-4567</span>
                  </li>
                  <li>
                    <strong className="text-foreground">팩스</strong>:{' '}
                    <span className="font-mono">02-123-4568</span>
                  </li>
                  <li>
                    <strong className="text-foreground">이메일</strong>:{' '}
                    <a
                      href="mailto:info@lowvision.or.kr"
                      className="underline hover:text-foreground"
                    >
                      info@lowvision.or.kr
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">운영 시간</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>평일: 09:00 - 18:00</li>
                  <li>점심: 12:00 - 13:00</li>
                  <li>토·일·공휴일: 휴무</li>
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">
                  ※ 긴급 문의는 이메일로 남겨주시면 익일 연락드립니다.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Social Media */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <Card>
          <CardHeader>
            <CardTitle>소셜 미디어</CardTitle>
            <CardDescription>온라인에서도 만나요</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="outline">
                <a
                  href="https://www.facebook.com/kla.lowvision"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </Button>
              <Button asChild variant="outline">
                <a
                  href="https://www.instagram.com/kla_lowvision"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </Button>
              <Button asChild variant="outline">
                <a
                  href="https://blog.naver.com/kla_lowvision"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  네이버 블로그
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://open.kakao.com/o/kla_community" target="_blank" rel="noopener noreferrer">
                  카카오톡 오픈채팅
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Navigation */}
      <section className="mx-auto mt-12 max-w-[980px]">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <Button asChild variant="outline">
            <Link href="/">← 홈으로</Link>
          </Button>
          <div className="flex gap-2">
            <Button asChild variant="outline">
              <Link href="/daily-life/assistive-tech">최신 보조공학 보기</Link>
            </Button>
            <Button asChild>
              <Link href="/rights/welfare-benefits">복지 혜택 알아보기</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
