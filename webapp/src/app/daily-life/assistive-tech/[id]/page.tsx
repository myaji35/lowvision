import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ExternalLink, CheckCircle2 } from 'lucide-react';
import { prisma } from '@/lib/prisma';
import { BackButton } from './BackButton';

type PageProps = {
  params: Promise<{ id: string }>;
};

// 정적 페이지 생성을 위한 모든 제품 ID 반환
export async function generateStaticParams() {
  // 빌드 시에는 동적 생성을 건너뜀 (데이터베이스가 없을 수 있음)
  if (process.env.NODE_ENV === 'production' && !process.env.DATABASE_URL?.includes('lowvision')) {
    return [];
  }

  try {
    const products = await prisma.assistiveProduct.findMany({
      where: {
        publishedAt: { not: null }, // 공개된 제품만
      },
      select: {
        id: true,
      },
    });

    return products.map((product: any) => ({
      id: product.id,
    }));
  } catch (error) {
    console.warn('Failed to generate static params:', error);
    return [];
  }
}

// SEO 메타데이터 생성
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;

  const product = await prisma.assistiveProduct.findUnique({
    where: { id },
  });

  if (!product || !product.publishedAt) {
    return {
      title: '제품을 찾을 수 없습니다',
    };
  }

  return {
    title: `${product.name} - 보조공학 제품 - 한국저시력인협회`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.imageUrl ? [product.imageUrl] : [],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;

  const product = await prisma.assistiveProduct.findUnique({
    where: { id },
  });

  // 제품이 없거나 비공개인 경우 404
  if (!product || !product.publishedAt) {
    notFound();
  }

  // features를 JSON 파싱
  const features = JSON.parse(product.features) as string[];

  // 관련 제품 조회 (같은 카테고리, 현재 제품 제외, 공개된 것만)
  const relatedProducts = await prisma.assistiveProduct.findMany({
    where: {
      category: product.category,
      id: { not: product.id },
      publishedAt: { not: null },
    },
    take: 3,
    orderBy: {
      createdAt: 'desc',
    },
  });

  // 가격 포맷팅
  const formatPrice = (price: number | null) => {
    if (price === null) return '가격 미정';
    return `${price.toLocaleString()}원`;
  };

  return (
    <div className="container py-8 md:py-12">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-foreground transition-colors">
              홈
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/daily-life/assistive-tech" className="hover:text-foreground transition-colors">
              보조공학
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-foreground font-medium">
            {product.name}
          </li>
        </ol>
      </nav>

      {/* Back Button */}
      <BackButton />

      {/* Product Detail Section */}
      <article className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-3">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-2">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground">
                제조사: {product.manufacturer}
              </p>
            </div>
          </div>
          <p className="text-xl text-foreground leading-relaxed">
            {product.description}
          </p>
        </header>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Features Section */}
          <section className="md:col-span-2" aria-labelledby="features-heading">
            <Card>
              <CardHeader>
                <CardTitle id="features-heading">주요 기능 및 특징</CardTitle>
                <CardDescription>
                  이 제품이 제공하는 핵심 기능들입니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2
                        className="h-5 w-5 text-primary mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-base leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Sidebar - Purchase Info */}
          <aside className="md:col-span-1" aria-labelledby="purchase-info-heading">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle id="purchase-info-heading" className="text-lg">
                  구매 정보
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground mb-1">
                    가격
                  </dt>
                  <dd className="text-2xl font-bold text-foreground">
                    {formatPrice(product.price)}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground mb-1">
                    제조사
                  </dt>
                  <dd className="text-base">{product.manufacturer}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground mb-1">
                    카테고리
                  </dt>
                  <dd className="text-base">{product.category}</dd>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                {product.purchaseUrl && (
                  <Button asChild className="w-full" size="lg">
                    <a
                      href={product.purchaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${product.name} 구매 페이지로 이동 (새 창)`}
                    >
                      구매 페이지 방문
                      <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                )}
                <Button asChild variant="outline" className="w-full">
                  <Link href="/daily-life/assistive-tech">
                    다른 제품 보기
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </aside>
        </div>

        {/* Additional Info Section */}
        <section
          className="mb-12 p-6 bg-muted/30 rounded-lg"
          aria-labelledby="additional-info-heading"
        >
          <h2 id="additional-info-heading" className="text-xl font-bold mb-4">
            구매 전 참고사항
          </h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>
              보조공학 기기는 개인의 시력 상태, 생활 환경, 필요에 따라 적합한 것이 다릅니다.
              구매 전 전문가와 상담하시거나 체험해보시길 권장합니다.
            </p>
            <div>
              <h3 className="font-semibold text-foreground mb-2">💡 구매 시 확인사항</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>현재 시력 상태와 제품 적합성</li>
                <li>제품 사용을 위한 학습 시간 및 지원</li>
                <li>A/S 정책 및 보증 기간</li>
                <li>보험 적용 또는 정부 지원 여부</li>
                <li>반품/교환 정책</li>
              </ul>
            </div>
            <p className="text-xs pt-2">
              ⚠️ 가격 정보는 참고용이며, 실제 가격은 판매처와 시기에 따라 달라질 수 있습니다.
              최신 정보는 공식 사이트에서 확인하시기 바랍니다.
            </p>
          </div>
        </section>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <section aria-labelledby="related-products-heading">
            <h2 id="related-products-heading" className="text-2xl font-bold mb-6">
              같은 카테고리의 다른 제품
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct: any) => {
                const relatedFeatures = JSON.parse(relatedProduct.features) as string[];
                return (
                  <Card key={relatedProduct.id} className="flex flex-col h-full">
                    <CardHeader>
                      <CardTitle className="text-lg line-clamp-1">
                        {relatedProduct.name}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {relatedProduct.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">가격:</span>{' '}
                        {formatPrice(relatedProduct.price)}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link href={`/daily-life/assistive-tech/${relatedProduct.id}`}>
                          상세 보기
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}
