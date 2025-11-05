import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
            저시력인과 가족을 위한
            <br className="hidden sm:inline" />
            신뢰할 수 있는 정보의 등대
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            진단부터 일상 적응까지, 저시력인 당사자와 가족에게 필요한 모든 정보를 한곳에서 제공합니다.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link href="/diagnosis/first-steps">
                진단 받으셨나요?
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/daily-life/assistive-tech">
                최신 보조공학 보기
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24" aria-labelledby="features-heading">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 id="features-heading" className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            사용자 여정에 따른 정보 제공
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            저시력인의 삶의 단계에 맞춘 체계적인 정보 구조
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>1. 진단</CardTitle>
              <CardDescription>
                저시력 바로 알기
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                저시력의 정의, 원인 질환, 진단 직후 가이드
              </p>
              <Button asChild variant="link" className="h-auto p-0">
                <Link href="/diagnosis/what-is-low-vision">
                  자세히 보기 →
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. 적응</CardTitle>
              <CardDescription>
                적응과 정서적 지원
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                마음 건강, 생애주기별 지원, 가족을 위한 가이드
              </p>
              <Button asChild variant="link" className="h-auto p-0">
                <Link href="/adaptation/mental-health">
                  자세히 보기 →
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. 일상</CardTitle>
              <CardDescription>
                독립적인 삶과 기술
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                2025+ 최신 보조공학, 재활, 교육 및 직업 정보
              </p>
              <Button asChild variant="link" className="h-auto p-0">
                <Link href="/daily-life/assistive-tech">
                  자세히 보기 →
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. 권리</CardTitle>
              <CardDescription>
                권리와 복지 혜택
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                복지 혜택, 법률 및 권익 옹호, 재정 계획
              </p>
              <Button asChild variant="link" className="h-auto p-0">
                <Link href="/rights/welfare-benefits">
                  자세히 보기 →
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. 커뮤니티</CardTitle>
              <CardDescription>
                협회 및 소식
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                협회 소개, KLA 소식, 자료실, 참여 및 후원
              </p>
              <Button asChild variant="link" className="h-auto p-0">
                <Link href="/community">
                  자세히 보기 →
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            지금 필요한 정보를 찾아보세요
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            저시력인과 가족을 위한 최신 정보가 여기 있습니다
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link href="/rights/welfare-benefits">
                복지 혜택 총람 보기
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/community">
                협회 소개
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
