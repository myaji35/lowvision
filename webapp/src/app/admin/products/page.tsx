import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import { ProductTable } from './ProductTable';

export const metadata: Metadata = {
  title: '제품 관리 - 한국저시력인협회',
  description: '보조공학 제품 관리 페이지',
  robots: 'noindex, nofollow', // 관리자 페이지는 검색 엔진에 노출하지 않음
};

export const dynamic = 'force-dynamic'; // 항상 최신 데이터 조회

export default async function AdminProductsPage() {
  // 서버에서 초기 제품 목록 조회
  const products = await prisma.assistiveProduct.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  // Date 객체를 JSON 직렬화 가능한 형태로 변환
  const serializedProducts = products.map((product: any) => ({
    ...product,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
    publishedAt: product.publishedAt,
  }));

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">관리자 페이지</h1>
        <p className="text-muted-foreground">
          보조공학 제품을 추가, 수정, 삭제하고 공개 상태를 관리할 수 있습니다.
        </p>
      </div>

      <ProductTable initialProducts={serializedProducts} />
    </main>
  );
}
