import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // 1. 연락처 정보 초기화
  console.log('📞 Creating contact information...');
  await prisma.contactInfo.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      organizationKo: '한국저시력인협회',
      organizationEn: 'Korea Low Vision Association',
      address: '서울특별시 영등포구 영신로 136 김안과병원 망막병원 지하1층',
      phone: '(02)-2677-4662',
      fax: '(02)-2677-4665',
      email: 'lowvision@korea.com',
    },
  });
  console.log('✅ Contact information created');

  // 2. 보조공학 제품 샘플 데이터
  console.log('🤖 Creating assistive technology products...');

  const products = [
    {
      name: 'Envision Glasses',
      category: 'AI 스마트 안경',
      manufacturer: 'Envision',
      price: 4500000,
      description:
        'AI 기반 스마트 안경으로 텍스트 읽기, 물체 인식, 얼굴 인식 기능을 제공합니다. Google Glass Enterprise Edition 2 기반으로 제작되어 일상생활에서 필요한 시각 정보를 실시간 음성으로 전달합니다.',
      features: JSON.stringify([
        '실시간 텍스트 읽기 (60개 이상 언어 지원)',
        '사람 얼굴 인식 및 감정 분석',
        '물체 및 색상 인식',
        '음성 명령 제어',
        '배터리 수명: 약 4시간',
        '무게: 약 46g',
      ]),
      imageUrl: '/images/products/envision-glasses.jpg',
      purchaseUrl: 'https://www.letsenvision.com/envision-glasses',
      publishedAt: new Date(),
    },
    {
      name: 'Meta Ray-Ban Stories',
      category: 'AI 스마트 안경',
      manufacturer: 'Meta (Facebook)',
      price: 400000,
      description:
        'Meta와 Ray-Ban이 협업하여 만든 스마트 안경입니다. 음성 어시스턴트와 연동하여 정보를 음성으로 안내받을 수 있으며, 사진 촬영 및 통화 기능도 지원합니다.',
      features: JSON.stringify([
        '음성 어시스턴트 통합 (Meta AI)',
        '5MP 듀얼 카메라',
        '오픈이어 스피커',
        '터치 제스처 제어',
        '배터리 수명: 약 6시간',
        '다양한 스타일 선택 가능',
      ]),
      imageUrl: '/images/products/meta-rayban.jpg',
      purchaseUrl: 'https://www.ray-ban.com/usa/discover-ray-ban-stories',
      publishedAt: new Date(),
    },
    {
      name: 'Biped AI 웨어러블',
      category: 'AI 웨어러블',
      manufacturer: 'Biped',
      price: null,
      description:
        '목에 착용하는 AI 웨어러블 기기로 주변 환경을 인식하고 음성으로 안내합니다. 카메라와 AI를 활용하여 물체, 텍스트, 사람을 인식하며 일상생활에서 필요한 정보를 제공합니다.',
      features: JSON.stringify([
        '목 착용형 핸즈프리 디자인',
        'AI 기반 장면 인식',
        '실시간 텍스트 읽기',
        '물체 및 사람 인식',
        '장시간 배터리 (8시간 이상)',
        '경량 디자인 (약 100g)',
      ]),
      imageUrl: '/images/products/biped.jpg',
      purchaseUrl: 'https://www.biped.ai/',
      publishedAt: new Date(),
    },
    {
      name: 'WeWALK Smart Cane',
      category: '스마트 지팡이',
      manufacturer: 'WeWALK',
      price: 800000,
      description:
        '센서와 AI가 탑재된 스마트 지팡이로 상단 장애물을 감지하고 진동으로 알려줍니다. 스마트폰 앱과 연동하여 음성 안내를 받을 수 있으며, 대중교통 정보도 제공합니다.',
      features: JSON.stringify([
        '초음파 센서 (상단 장애물 감지)',
        '진동 피드백',
        '음성 안내 (Google Maps 연동)',
        '대중교통 정보 제공',
        '배터리 수명: 약 5시간',
        '방수 기능 (IPX2)',
      ]),
      imageUrl: '/images/products/wewalk.jpg',
      purchaseUrl: 'https://wewalk.io/',
      publishedAt: new Date(),
    },
    {
      name: 'BlindShell Classic 2',
      category: '저시력 특화 스마트폰',
      manufacturer: 'BlindShell',
      price: 500000,
      description:
        '시각장애인과 저시력인을 위해 특별히 설계된 스마트폰입니다. 큰 버튼, 음성 안내, 단순한 인터페이스로 누구나 쉽게 사용할 수 있습니다.',
      features: JSON.stringify([
        '큰 물리 버튼 (촉각 구분 가능)',
        '전체 음성 안내 (한국어 지원)',
        '긴급 SOS 버튼',
        '간편한 앱 인터페이스',
        '배터리 수명: 약 7일 (대기)',
        '4G LTE 지원',
      ]),
      imageUrl: '/images/products/blindshell.jpg',
      purchaseUrl: 'https://www.blindshell.com/blindshell-classic-2',
      publishedAt: new Date(),
    },
    {
      name: 'OpenBook 9',
      category: '비디오 확대기',
      manufacturer: 'Freedom Scientific',
      price: 3500000,
      description:
        '9인치 화면의 휴대용 비디오 확대기로 책, 신문, 처방전 등을 확대하여 볼 수 있습니다. 고대비 모드와 색상 반전 기능을 지원합니다.',
      features: JSON.stringify([
        '9인치 Full HD 터치스크린',
        '최대 22배 확대',
        '고대비 모드 (여러 색상 조합)',
        '이미지 캡처 및 저장',
        '접이식 디자인 (휴대 용이)',
        '배터리 수명: 약 2.5시간',
      ]),
      imageUrl: '/images/products/openbook.jpg',
      purchaseUrl: 'https://www.freedomscientific.com/products/video-magnifiers/openbook/',
      publishedAt: new Date(),
    },
    {
      name: 'PEARL 탁상용 비디오 확대기',
      category: '비디오 확대기',
      manufacturer: 'Freedom Scientific',
      price: 5000000,
      description:
        '24인치 Full HD 화면의 탁상용 비디오 확대기로 독서, 필기, 취미 활동 등에 최적화되어 있습니다. 자동 초점 기능과 다양한 색상 모드를 지원합니다.',
      features: JSON.stringify([
        '24인치 Full HD 스크린',
        '최대 75배 확대',
        '자동 초점 조절',
        '30가지 이상 색상 모드',
        '라인 마커 및 마스킹 기능',
        'OCR 텍스트 읽기 기능',
      ]),
      imageUrl: '/images/products/pearl.jpg',
      purchaseUrl: 'https://www.freedomscientific.com/products/video-magnifiers/pearl/',
      publishedAt: new Date(),
    },
    {
      name: 'OrCam MyEye Pro',
      category: 'AI 웨어러블',
      manufacturer: 'OrCam',
      price: 6000000,
      description:
        '안경에 부착하는 소형 AI 카메라로 텍스트, 얼굴, 상품, 색상을 즉시 인식하여 음성으로 안내합니다. 인터넷 연결 없이도 작동합니다.',
      features: JSON.stringify([
        '안경 부착형 (13g)',
        '오프라인 작동 (인터넷 불필요)',
        '실시간 텍스트 읽기',
        '얼굴 인식 (최대 150명 저장)',
        '상품 바코드 인식',
        '색상 및 지폐 인식',
      ]),
      imageUrl: '/images/products/orcam.jpg',
      purchaseUrl: 'https://www.orcam.com/en-us/myeye-pro/',
      publishedAt: new Date(),
    },
  ];

  for (const product of products) {
    await prisma.assistiveProduct.create({
      data: product,
    });
  }

  console.log(`✅ Created ${products.length} assistive technology products`);

  console.log('🎉 Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
