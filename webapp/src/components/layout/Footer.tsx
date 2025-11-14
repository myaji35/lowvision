import { prisma } from '@/lib/prisma';

async function getContactInfo() {
  try {
    const contact = await prisma.contactInfo.findFirst({
      where: { id: 1 },
    });

    // 연락처 정보가 없으면 기본값 반환
    if (!contact) {
      return {
        organizationKo: '한국저시력인협회',
        organizationEn: 'Korea Low Vision Association',
        address: '서울특별시 영등포구 영신로 136 김안과병동 망막병원 지하1층',
        phone: '(02)-2677-4662',
        fax: '(02)-2677-4665',
        email: 'lowvision@korea.com',
      };
    }

    return contact;
  } catch (error) {
    console.error('Failed to load contact info:', error);
    // 에러 발생 시 기본값 반환
    return {
      organizationKo: '한국저시력인협회',
      organizationEn: 'Korea Low Vision Association',
      address: '서울특별시 영등포구 영신로 136 김안과병동 망막병원 지하1층',
      phone: '(02)-2677-4662',
      fax: '(02)-2677-4665',
      email: 'lowvision@korea.com',
    };
  }
}

export async function Footer() {
  const contact = await getContactInfo();

  return (
    <footer className="border-t bg-muted/40 py-8">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2">
          {/* 사무국 정보 */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">사무국 정보</h3>
            <p className="text-sm font-medium mb-3">
              {contact.organizationKo} ({contact.organizationEn})
            </p>
            <dl className="space-y-2 text-sm">
              <div>
                <dt className="inline font-medium">주소: </dt>
                <dd className="inline text-muted-foreground">
                  {contact.address}
                </dd>
              </div>
              <div>
                <dt className="inline font-medium">전화: </dt>
                <dd className="inline">
                  <a href={`tel:${contact.phone.replace(/[^0-9]/g, '')}`} className="hover:underline">
                    {contact.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="inline font-medium">팩스: </dt>
                <dd className="inline text-muted-foreground">{contact.fax}</dd>
              </div>
              <div>
                <dt className="inline font-medium">이메일: </dt>
                <dd className="inline">
                  <a href={`mailto:${contact.email}`} className="hover:underline">
                    {contact.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* 바로가기 */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">바로가기</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/diagnosis" className="hover:underline">
                  저시력 바로 알기
                </a>
              </li>
              <li>
                <a href="/rights/welfare-benefits" className="hover:underline">
                  복지 혜택
                </a>
              </li>
              <li>
                <a href="/daily-life/assistive-tech" className="hover:underline">
                  보조공학
                </a>
              </li>
              <li>
                <a href="/community" className="hover:underline">
                  협회 소식
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 저작권 */}
        <div className="mt-8 border-t pt-6">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 {contact.organizationKo} ({contact.organizationEn}). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
