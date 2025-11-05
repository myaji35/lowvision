import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { HistoryItem } from '../types';
import { categoryLabels, categoryColors } from '../types';

interface TimelineItemProps {
  item: HistoryItem;
  index: number;
}

export function TimelineItem({ item, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;
  const dateString = item.month
    ? `${item.year}년 ${item.month}월`
    : `${item.year}년`;

  return (
    <article
      className={`flex flex-col md:flex-row gap-6 md:gap-8 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
      aria-label={`${dateString} ${item.title}`}
    >
      {/* Timeline marker and line */}
      <div className="flex-shrink-0 relative">
        {/* Vertical line */}
        <div
          className="absolute left-[1rem] top-0 bottom-0 w-[2px] bg-border"
          aria-hidden="true"
        />

        {/* Marker dot */}
        <div className="relative z-10 flex items-center">
          <div
            className={`w-8 h-8 rounded-full border-4 border-background ${
              item.importance === 'high'
                ? 'bg-primary'
                : item.importance === 'medium'
                ? 'bg-muted-foreground'
                : 'bg-muted'
            }`}
            aria-hidden="true"
          />
        </div>

        {/* Date badge for desktop */}
        <div className="hidden md:block mt-2 ml-12 min-w-[120px]">
          <time
            dateTime={`${item.year}-${item.month || '01'}`}
            className="text-sm font-semibold text-muted-foreground"
          >
            {dateString}
          </time>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <Card className={isEven ? 'md:mr-8' : 'md:ml-8'}>
          <CardHeader>
            {/* Date badge for mobile */}
            <time
              dateTime={`${item.year}-${item.month || '01'}`}
              className="block md:hidden text-sm font-semibold text-muted-foreground mb-2"
            >
              {dateString}
            </time>

            <div className="flex items-start justify-between gap-4 flex-wrap">
              <CardTitle className="text-xl">{item.title}</CardTitle>
              <Badge
                className={categoryColors[item.category]}
                aria-label={`카테고리: ${categoryLabels[item.category]}`}
              >
                {categoryLabels[item.category]}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base leading-relaxed">
              {item.description}
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </article>
  );
}
