import { AssistiveTechProduct, ATCategoryInfo } from '../types';

export const categories: ATCategoryInfo[] = [
  {
    id: 'all',
    name: '전체',
    description: '모든 보조공학 제품',
    icon: '🔍',
  },
  {
    id: 'smart-glasses',
    name: 'AI 스마트 안경',
    description: 'AI 기반 텍스트 인식 및 객체 식별 안경',
    icon: '👓',
  },
  {
    id: 'wearable',
    name: 'AI 웨어러블',
    description: '착용형 AI 보조 기기',
    icon: '⌚',
  },
  {
    id: 'smart-cane',
    name: '스마트 지팡이',
    description: '장애물 감지 및 내비게이션 기능 지팡이',
    icon: '🦯',
  },
  {
    id: 'smartphone',
    name: '저시력 특화 스마트폰',
    description: '접근성이 강화된 전용 스마트폰',
    icon: '📱',
  },
  {
    id: 'video-magnifier',
    name: '비디오 확대기',
    description: '텍스트 및 이미지 확대 장치',
    icon: '🔬',
  },
];

export const products: AssistiveTechProduct[] = [
  // AI 스마트 안경
  {
    id: 1,
    name: 'Envision Glasses',
    category: 'smart-glasses',
    description:
      'Google Glass Enterprise Edition 2 기반의 AI 스마트 안경으로, 텍스트를 즉시 음성으로 변환하고 객체 및 얼굴을 식별합니다.',
    features: [
      '텍스트 즉시 음성 변환 (OCR)',
      '90개 이상 언어 지원',
      '객체 및 얼굴 인식',
      '실시간 영상 통화 지원 (Envision Ally)',
      'Google Assistant 통합',
      '바코드 및 색상 인식',
    ],
    price: '$3,000 - $4,000',
    externalLink: 'https://www.letsenvision.com/',
    manufacturer: 'Envision',
  },
  {
    id: 2,
    name: 'Meta Ray-Ban Smart Glasses with AI',
    category: 'smart-glasses',
    description:
      'Meta와 Ray-Ban이 협업한 스마트 안경으로, Live AI 기능을 통해 실시간으로 주변 환경을 설명합니다.',
    features: [
      'Live AI로 실시간 환경 묘사',
      '사진 및 동영상 촬영',
      '오디오 스트리밍',
      'Meta AI 음성 어시스턴트',
      '세련된 Ray-Ban 디자인',
    ],
    price: '$300 - $400',
    externalLink: 'https://www.ray-ban.com/usa/discover-ray-ban-meta-smart-glasses',
    manufacturer: 'Meta & Ray-Ban',
  },

  // AI 웨어러블
  {
    id: 3,
    name: 'Biped',
    category: 'wearable',
    description:
      '목에 착용하는 웨어러블 기기로, 3D 카메라를 통해 장애물을 감지하고 진동으로 경고합니다.',
    features: [
      '3D 카메라 기반 장애물 감지',
      '핸즈프리 사용',
      '진동 피드백',
      '실시간 환경 인식',
      '경량 디자인',
    ],
    price: '약 $500',
    externalLink: 'https://www.biped.ai/',
    manufacturer: 'Biped',
  },
  {
    id: 4,
    name: 'OrCam MyEye',
    category: 'wearable',
    description:
      '안경에 부착하는 소형 AI 카메라로, 텍스트, 얼굴, 제품을 즉시 인식하여 음성으로 알려줍니다.',
    features: [
      '즉각적인 텍스트 읽기',
      '얼굴 인식 및 알림',
      '제품 바코드 인식',
      '색상 및 지폐 식별',
      '오프라인 작동 (인터넷 불필요)',
    ],
    price: '$2,500 - $4,500',
    externalLink: 'https://www.orcam.com/',
    manufacturer: 'OrCam',
  },

  // 스마트 지팡이
  {
    id: 5,
    name: 'WeWALK Smart Cane',
    category: 'smart-cane',
    description:
      '초음파 센서로 장애물을 감지하고, 스마트폰과 연동하여 음성 내비게이션을 제공하는 스마트 지팡이입니다.',
    features: [
      '초음파 센서 장애물 감지',
      'Google Maps 음성 내비게이션',
      '진동 피드백',
      'Alexa 및 Google Assistant 통합',
      '대중교통 정보 제공',
    ],
    price: '약 $500',
    externalLink: 'https://wewalk.io/',
    manufacturer: 'WeWALK',
  },
  {
    id: 6,
    name: 'GuideCane',
    category: 'smart-cane',
    description:
      '휠이 달린 전자 지팡이로, 초음파 센서를 통해 장애물을 자동으로 우회합니다.',
    features: [
      '자동 장애물 우회',
      '초음파 센서 배열',
      '모터 구동 휠',
      '사용자 속도에 맞춤',
    ],
    price: '문의 필요',
    manufacturer: 'GuideCane',
  },

  // 저시력 특화 스마트폰
  {
    id: 7,
    name: 'BlindShell Classic 2',
    category: 'smartphone',
    description:
      '시각장애인을 위해 특별히 설계된 스마트폰으로, 물리 버튼과 강력한 음성 기능을 제공합니다.',
    features: [
      '촉각 물리 버튼',
      '완벽한 음성 명령 지원',
      'WhatsApp, Spotify 등 필수 앱 내장',
      'SOS 긴급 호출 버튼',
      '간단한 인터페이스',
    ],
    price: '약 $400',
    externalLink: 'https://www.blindshell.com/',
    manufacturer: 'BlindShell',
  },
  {
    id: 8,
    name: 'Kapsys SmartVision 3',
    category: 'smartphone',
    description:
      'Android 기반 음성 스마트폰으로, 완전한 접근성과 일반 앱 호환성을 제공합니다.',
    features: [
      'Android 11 기반',
      '음성 안내 및 확대 기능',
      'Google Play 앱 지원',
      'NFC 태그 인식',
      '고대비 디스플레이',
    ],
    price: '약 $600',
    externalLink: 'https://www.kapsys.com/',
    manufacturer: 'Kapsys',
  },

  // 비디오 확대기
  {
    id: 9,
    name: 'Topaz Desktop Video Magnifier',
    category: 'video-magnifier',
    description:
      '탁상형 비디오 확대기로, 텍스트와 이미지를 최대 75배까지 확대하고 고대비 모드를 지원합니다.',
    features: [
      '최대 75배 확대',
      '24인치 Full HD 모니터',
      '다양한 고대비 모드',
      'OCR 텍스트 음성 변환',
      '필기 및 그림 그리기 모드',
    ],
    price: '$2,500 - $3,500',
    externalLink: 'https://www.freedomscientific.com/products/lowvision/topaz/',
    manufacturer: 'Freedom Scientific',
  },
  {
    id: 10,
    name: 'Acrobat HD Portable Video Magnifier',
    category: 'video-magnifier',
    description:
      '휴대용 비디오 확대기로, 접이식 디자인과 배터리로 어디서나 사용 가능합니다.',
    features: [
      '5인치 LCD 화면',
      '최대 22배 확대',
      '고대비 컬러 모드',
      '접이식 휴대용 디자인',
      '최대 3시간 배터리',
      'TV 출력 지원',
    ],
    price: '$600 - $800',
    externalLink: 'https://www.enhancedvision.com/low-vision-product-line/acrobat-hd.html',
    manufacturer: 'Enhanced Vision',
  },
  {
    id: 11,
    name: 'Pebble HD Handheld Magnifier',
    category: 'video-magnifier',
    description:
      '초경량 휴대용 확대기로, 한 손으로 쉽게 사용할 수 있습니다.',
    features: [
      '4.3인치 화면',
      '최대 24배 확대',
      '10가지 고대비 모드',
      '초경량 (185g)',
      '이미지 동결 기능',
    ],
    price: '약 $500',
    externalLink: 'https://www.optelec.com/pebble-hd',
    manufacturer: 'Optelec',
  },

  // 추가 제품
  {
    id: 12,
    name: 'Aira Smart Glasses Service',
    category: 'smart-glasses',
    description:
      '스마트 안경과 실시간 인간 요원을 연결하여 시각적 정보를 즉시 제공하는 서비스입니다.',
    features: [
      '실시간 인간 요원 연결',
      '24/7 서비스 가능',
      '복잡한 작업 지원',
      '다양한 스마트 안경 호환',
      '구독 기반 서비스',
    ],
    price: '월 $99부터 (구독)',
    externalLink: 'https://aira.io/',
    manufacturer: 'Aira',
  },
  {
    id: 13,
    name: 'Orcam Read',
    category: 'wearable',
    description:
      '휴대용 AI 리더기로, 책, 스마트폰 화면, 컴퓨터 화면의 텍스트를 즉시 읽어줍니다.',
    features: [
      '즉각적인 텍스트 읽기',
      '90개 이상 언어 지원',
      '다양한 표면 인식',
      '오프라인 작동',
      '휴대용 디자인',
    ],
    price: '약 $2,000',
    externalLink: 'https://www.orcam.com/orcam-read/',
    manufacturer: 'OrCam',
  },
  {
    id: 14,
    name: 'BrailleNote Touch Plus',
    category: 'smartphone',
    description:
      '점자 디스플레이가 통합된 Android 태블릿으로, 점자 사용자를 위한 완벽한 솔루션입니다.',
    features: [
      '32셀 점자 디스플레이',
      'Android 9 기반',
      '음성 및 점자 동시 출력',
      'Google Play 앱 지원',
      '교육 및 업무용 최적화',
    ],
    price: '$6,000 - $7,000',
    externalLink: 'https://www.humanware.com/en-usa/products/blindness/braillenote-touch',
    manufacturer: 'HumanWare',
  },
  {
    id: 15,
    name: 'Sensory Substitution Device (SSD)',
    category: 'wearable',
    description:
      '시각 정보를 소리나 진동으로 변환하여 전달하는 혁신적인 감각 대체 기기입니다.',
    features: [
      '시각 정보의 청각/촉각 변환',
      '공간 인식 향상',
      '적응 학습 지원',
      '연구 기반 기술',
    ],
    price: '연구 단계 / 문의 필요',
    manufacturer: '다양한 연구기관',
  },
];
