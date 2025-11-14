import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/products - 보조공학 제품 목록 조회
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');
    const published = searchParams.get('published');

    // 필터 조건 구성
    const where: {
      category?: string;
      publishedAt?: { not: null } | null;
    } = {};

    if (category) {
      where.category = category;
    }

    // published=true면 공개된 제품만, published=false면 비공개 제품만
    if (published === 'true') {
      where.publishedAt = { not: null };
    } else if (published === 'false') {
      where.publishedAt = null;
    }

    const products = await prisma.assistiveProduct.findMany({
      where,
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({
      success: true,
      data: products,
      count: products.length,
    });
  } catch (error) {
    console.error('GET /api/products error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

// POST /api/products - 새 보조공학 제품 생성
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 필수 필드 검증
    const requiredFields = ['name', 'category', 'manufacturer', 'description'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // features가 배열이면 JSON string으로 변환
    const features = Array.isArray(body.features)
      ? JSON.stringify(body.features)
      : body.features;

    const product = await prisma.assistiveProduct.create({
      data: {
        name: body.name,
        category: body.category,
        manufacturer: body.manufacturer,
        price: body.price || null,
        description: body.description,
        features,
        imageUrl: body.imageUrl || null,
        purchaseUrl: body.purchaseUrl || null,
        publishedAt: body.publishedAt ? new Date(body.publishedAt) : null,
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: product,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('POST /api/products error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create product' },
      { status: 500 }
    );
  }
}
