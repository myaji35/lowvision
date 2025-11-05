import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { AssistiveTechProduct } from '../types';

interface ATProductCardProps {
  product: AssistiveTechProduct;
}

export function ATProductCard({ product }: ATProductCardProps) {
  const categoryLabels: Record<string, string> = {
    'smart-glasses': 'AI 스마트 안경',
    'wearable': 'AI 웨어러블',
    'smart-cane': '스마트 지팡이',
    'smartphone': '저시력 스마트폰',
    'video-magnifier': '비디오 확대기',
  };

  return (
    <Card className="flex flex-col h-full transition-shadow hover:shadow-lg">
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
            {categoryLabels[product.category]}
          </span>
          {product.manufacturer && (
            <span className="text-xs text-muted-foreground">
              {product.manufacturer}
            </span>
          )}
        </div>
        <CardTitle className="text-xl">{product.name}</CardTitle>
        <CardDescription className="line-clamp-2">
          {product.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold mb-2">주요 기능</h4>
            <ul className="space-y-1">
              {product.features.slice(0, 4).map((feature, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span className="flex-1">{feature}</span>
                </li>
              ))}
            </ul>
            {product.features.length > 4 && (
              <p className="text-xs text-muted-foreground mt-1">
                +{product.features.length - 4}개 기능 더보기
              </p>
            )}
          </div>

          <div className="pt-2 border-t">
            <p className="text-sm">
              <span className="font-semibold">가격:</span>{' '}
              <span className="text-primary font-medium">{product.price}</span>
            </p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button asChild variant="default" className="flex-1">
          <Link href={`/daily-life/assistive-tech/${product.id}`}>
            상세 보기
          </Link>
        </Button>
        {product.externalLink && (
          <Button asChild variant="outline" className="flex-1">
            <a
              href={product.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${product.name} 공식 사이트로 이동 (새 창)`}
            >
              공식 사이트
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
