import type { HistoryPeriod } from '../types';

/**
 * 한국저시력인협회 연혁 데이터
 *
 * 주의: 이 데이터는 예시이며, 실제 협회의 정확한 연혁 정보로
 * 업데이트되어야 합니다. 협회 담당자와 협의하여 정확한 날짜와
 * 내용을 확인하시기 바랍니다.
 */
export const historyPeriods: HistoryPeriod[] = [
  {
    decade: '2020s',
    label: '2020년대',
    description: '디지털 전환과 새로운 도약',
    items: [
      {
        id: '2025-01',
        year: 2025,
        month: 11,
        title: '신규 웹사이트 런칭',
        description: 'WCAG 2.2 AA 준수 접근성 웹사이트 리뉴얼. 저시력인과 가족을 위한 최신 보조공학 정보와 복지 혜택 정보를 제공하는 통합 플랫폼으로 거듭남.',
        category: 'digital',
        importance: 'high',
      },
      {
        id: '2024-01',
        year: 2024,
        month: 3,
        title: 'AI 기반 보조공학 세미나 개최',
        description: '최신 AI 기술을 활용한 보조공학 기기(스마트 안경, 웨어러블 등)에 대한 정보 제공 및 체험 기회 마련.',
        category: 'program',
        importance: 'medium',
      },
      {
        id: '2023-01',
        year: 2023,
        title: '전국 저시력인 실태조사 실시',
        description: '저시력인의 생활 실태, 보조기기 활용 현황, 복지 서비스 수요 등을 파악하기 위한 전국 단위 조사 진행.',
        category: 'achievement',
        importance: 'high',
      },
      {
        id: '2020-01',
        year: 2020,
        month: 3,
        title: 'COVID-19 대응 온라인 프로그램 전환',
        description: '코로나19 팬데믹 상황에서 비대면 재활 교육 및 상담 프로그램 개발. 화상회의 플랫폼을 활용한 원격 지원 서비스 시작.',
        category: 'program',
        importance: 'high',
      },
    ],
  },
  {
    decade: '2010s',
    label: '2010년대',
    description: '전문화와 국제 협력 강화',
    items: [
      {
        id: '2018-01',
        year: 2018,
        title: '국제 저시력 컨퍼런스 개최',
        description: '아시아-태평양 지역 저시력 전문가들이 참여하는 국제 학술대회 개최. 최신 재활 기술과 정책 동향 공유.',
        category: 'partnership',
        importance: 'high',
      },
      {
        id: '2015-01',
        year: 2015,
        title: '보조공학 체험관 개관',
        description: '저시력인들이 다양한 보조기기를 직접 체험하고 교육받을 수 있는 전용 공간 마련. 비디오 확대기, 독서기, 전자 돋보기 등 최신 기기 구비.',
        category: 'program',
        importance: 'high',
      },
      {
        id: '2012-01',
        year: 2012,
        title: '저시력 재활 전문 인력 양성 과정 시작',
        description: '저시력 재활 교사 및 상담사 양성을 위한 전문 교육 프로그램 개설. 연간 30명 이상의 전문 인력 배출.',
        category: 'program',
        importance: 'medium',
      },
      {
        id: '2010-01',
        year: 2010,
        title: '보건복지부 인증 재활 기관 지정',
        description: '정부로부터 저시력 재활 전문 기관으로 공식 인증. 국가 지원 재활 서비스 제공 기관으로서의 지위 확보.',
        category: 'recognition',
        importance: 'high',
      },
    ],
  },
  {
    decade: '2000s',
    label: '2000년대',
    description: '사업 확장과 네트워크 구축',
    items: [
      {
        id: '2008-01',
        year: 2008,
        title: '전국 네트워크 확대',
        description: '서울, 부산, 대구, 광주, 대전 등 주요 도시에 지역 지부 설립. 전국 단위 저시력인 지원 체계 구축.',
        category: 'partnership',
        importance: 'high',
      },
      {
        id: '2005-01',
        year: 2005,
        title: '저시력 청소년 진로 지도 프로그램 시작',
        description: '저시력 청소년의 학업 및 진로 선택을 돕는 맞춤형 상담 및 멘토링 프로그램 운영 시작.',
        category: 'program',
        importance: 'medium',
      },
      {
        id: '2002-01',
        year: 2002,
        title: '저시력인 생활 체육 프로그램 운영',
        description: '저시력인의 건강 증진과 사회 참여 촉진을 위한 골볼, 탁구, 수영 등 생활 체육 프로그램 정기 운영.',
        category: 'program',
        importance: 'low',
      },
      {
        id: '2000-01',
        year: 2000,
        title: '저시력 보조기기 대여 사업 시작',
        description: '경제적 부담으로 보조기기 구매가 어려운 저시력인을 위한 무료/저가 대여 서비스 개시.',
        category: 'program',
        importance: 'medium',
      },
    ],
  },
  {
    decade: '1990s',
    label: '1990년대',
    description: '협회 설립과 기반 구축',
    items: [
      {
        id: '1995-01',
        year: 1995,
        title: '저시력인 재활 교육 프로그램 최초 운영',
        description: '일상생활 훈련, 보행 훈련, 보조기기 활용 교육 등 종합 재활 프로그램 체계 수립.',
        category: 'program',
        importance: 'high',
      },
      {
        id: '1992-01',
        year: 1992,
        month: 6,
        title: '보건복지부 사단법인 설립 허가',
        description: '사단법인 한국저시력인협회로 정식 등록. 정부로부터 공식 법인격 취득.',
        category: 'recognition',
        importance: 'high',
      },
      {
        id: '1990-01',
        year: 1990,
        month: 3,
        title: '한국저시력인협회 창립',
        description: '전국의 저시력인 당사자 및 관련 전문가들이 모여 협회 창립 총회 개최. 저시력인의 권익 향상과 재활 지원을 목표로 공식 출범.',
        category: 'founding',
        importance: 'high',
      },
    ],
  },
];

/**
 * 모든 연혁 항목을 시간 역순으로 정렬
 */
export function getAllHistoryItems() {
  const allItems = historyPeriods.flatMap((period) => period.items);
  return allItems.sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    return (b.month || 12) - (a.month || 12);
  });
}

/**
 * 특정 카테고리의 연혁만 필터링
 */
export function getHistoryByCategory(category: string) {
  return getAllHistoryItems().filter((item) => item.category === category);
}

/**
 * 주요 이정표만 추출 (importance === 'high')
 */
export function getMilestones() {
  return getAllHistoryItems().filter((item) => item.importance === 'high');
}
