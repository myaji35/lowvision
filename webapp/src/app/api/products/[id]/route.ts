import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

type RouteParams = {
  params: Promise<{ id: string }>;
};

// GET /api/products/[id] - 단일 제품 조회
export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { id } = await params;

    const product = await prisma.assistiveProduct.findUnique({
      where: { id },
    });

    if (!product) {
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.error('GET /api/products/[id] error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}

// PUT /api/products/[id] - 제품 수정
export async function PUT(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { id } = await params;
    const body = await request.json();

    // 제품 존재 확인
    const existingProduct = await prisma.assistiveProduct.findUnique({
      where: { id },
    });

    if (!existingProduct) {
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      );
    }

    // features가 배열이면 JSON string으로 변환
    const features = body.features
      ? Array.isArray(body.features)
        ? JSON.stringify(body.features)
        : body.features
      : undefined;

    // 업데이트할 데이터 구성
    const updateData: {
      name?: string;
      category?: string;
      manufacturer?: string;
      price?: number | null;
      description?: string;
      features?: string;
      imageUrl?: string | null;
      purchaseUrl?: string | null;
      publishedAt?: Date | null;
    } = {};

    if (body.name !== undefined) updateData.name = body.name;
    if (body.category !== undefined) updateData.category = body.category;
    if (body.manufacturer !== undefined) updateData.manufacturer = body.manufacturer;
    if (body.price !== undefined) updateData.price = body.price || null;
    if (body.description !== undefined) updateData.description = body.description;
    if (features !== undefined) updateData.features = features;
    if (body.imageUrl !== undefined) updateData.imageUrl = body.imageUrl || null;
    if (body.purchaseUrl !== undefined) updateData.purchaseUrl = body.purchaseUrl || null;
    if (body.publishedAt !== undefined) {
      updateData.publishedAt = body.publishedAt ? new Date(body.publishedAt) : null;
    }

    const product = await prisma.assistiveProduct.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.error('PUT /api/products/[id] error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update product' },
      { status: 500 }
    );
  }
}

// DELETE /api/products/[id] - 제품 삭제
export async function DELETE(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { id } = await params;

    // 제품 존재 확인
    const existingProduct = await prisma.assistiveProduct.findUnique({
      where: { id },
    });

    if (!existingProduct) {
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      );
    }

    await prisma.assistiveProduct.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: 'Product deleted successfully',
    });
  } catch (error) {
    console.error('DELETE /api/products/[id] error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete product' },
      { status: 500 }
    );
  }
}
