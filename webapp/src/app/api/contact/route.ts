import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

/**
 * GET /api/contact
 * 연락처 정보 조회
 */
export async function GET() {
  try {
    let contact = await prisma.contactInfo.findFirst({
      where: { id: 1 },
    });

    // 연락처 정보가 없으면 기본값 반환
    if (!contact) {
      contact = {
        id: 1,
        organizationKo: '한국저시력인협회',
        organizationEn: 'Korea Low Vision Association',
        address: '서울특별시 영등포구 영신로 136 김안과병동 망막병원 지하1층',
        phone: '(02)-2677-4662',
        fax: '(02)-2677-4665',
        email: 'lowvision@korea.com',
        updatedAt: new Date(),
      };
    }

    return NextResponse.json(contact);
  } catch (error) {
    console.error('Error fetching contact info:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contact info' },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/contact
 * 연락처 정보 수정
 */
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();

    const { organizationKo, organizationEn, address, phone, fax, email } = body;

    // 입력 검증
    if (!organizationKo || !organizationEn || !address || !phone || !fax || !email) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // upsert: 없으면 생성, 있으면 수정
    const contact = await prisma.contactInfo.upsert({
      where: { id: 1 },
      update: {
        organizationKo,
        organizationEn,
        address,
        phone,
        fax,
        email,
      },
      create: {
        id: 1,
        organizationKo,
        organizationEn,
        address,
        phone,
        fax,
        email,
      },
    });

    return NextResponse.json(contact);
  } catch (error) {
    console.error('Error updating contact info:', error);
    return NextResponse.json(
      { error: 'Failed to update contact info' },
      { status: 500 }
    );
  }
}
