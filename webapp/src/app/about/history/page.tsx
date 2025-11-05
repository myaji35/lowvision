import { Metadata } from 'next';
import Link from 'next/link';
import { TimelinePeriod } from './components/TimelinePeriod';
import { historyPeriods, getMilestones } from './data/historyData';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { categoryLabels } from './types';

export const metadata: Metadata = {
  title: '협회 연혁 | 한국저시력인협회',
  description:
    '1990년 창립 이래 35년간 저시력인의 권익 향상과 재활 지원을 위해 걸어온 한국저시력인협회의 역사를 소개합니다.',
  openGraph: {
    title: '협회 연혁 | 한국저시력인협회',
    description: '35년간 저시력인과 함께한 한국저시력인협회의 발자취',
  },
};

export default function HistoryPage() {
  const milestones = getMilestones();
  const currentYear = new Date().getFullYear();
  const foundingYear = 1990;
  const yearsActive = currentYear - foundingYear;

  return (
    <div className="container py-8 md:py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-foreground transition-colors">
              홈
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/about" className="hover:text-foreground transition-colors">
              협회 소개
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-foreground font-medium">
            연혁
          </li>
        </ol>
      </nav>

      {/* Header Section */}
      <header className="mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          한국저시력인협회 연혁
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-4">
          {foundingYear}년 창립 이래 {yearsActive}년간 저시력인의 권익 향상과 재활 지원을
          위해 걸어온 우리의 발자취를 소개합니다.
        </p>
        <p className="text-base text-muted-foreground">
          저시력인 당사자와 그 가족, 그리고 사회가 함께 만들어온 변화의 역사입니다.
        </p>
      </header>

      {/* Milestones Overview */}
      <section aria-labelledby="milestones-heading" className="mb-16">
        <h2 id="milestones-heading" className="text-2xl font-bold mb-6">
          주요 이정표
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {milestones.slice(0, 6).map((item) => (
            <Card key={item.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <time
                    dateTime={`${item.year}`}
                    className="text-2xl font-bold text-primary"
                  >
                    {item.year}
                  </time>
                  <Badge className="text-xs" aria-label={`카테고리: ${categoryLabels[item.category]}`}>
                    {categoryLabels[item.category]}
                  </Badge>
                </div>
                <h3 className="font-semibold text-base mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Full Timeline */}
      <section aria-labelledby="full-history-heading">
        <h2 id="full-history-heading" className="text-2xl font-bold mb-8">
          전체 연혁
        </h2>

        {/* Info Note */}
        <div className="mb-8 p-4 bg-muted/30 rounded-lg text-sm text-muted-foreground">
          <p>
            📅 시간 역순으로 정렬되어 있습니다. 각 시대를 클릭하여 해당 시기로 바로 이동할
            수 있습니다.
          </p>
        </div>

        {/* Period Navigation */}
        <nav aria-label="시대별 빠른 이동" className="mb-12">
          <ul className="flex flex-wrap gap-3">
            {historyPeriods.map((period) => (
              <li key={period.decade}>
                <a
                  href={`#period-${period.decade}`}
                  className="inline-block px-4 py-2 rounded-md bg-primary/10 hover:bg-primary/20 text-primary font-medium transition-colors"
                >
                  {period.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Timeline */}
        <div className="relative">
          {historyPeriods.map((period) => (
            <TimelinePeriod key={period.decade} period={period} />
          ))}
        </div>
      </section>

      {/* Footer Note */}
      <footer className="mt-16 p-6 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-lg mb-3">연혁 정보 업데이트</h3>
        <p className="text-sm text-muted-foreground mb-4">
          본 페이지의 연혁 정보는 지속적으로 업데이트됩니다. 정확한 날짜나 내용에 대한
          문의사항이 있으시면 협회로 연락 주시기 바랍니다.
        </p>
        <p className="text-xs text-muted-foreground">
          마지막 업데이트: 2025년 11월 3일
        </p>
      </footer>
    </div>
  );
}
