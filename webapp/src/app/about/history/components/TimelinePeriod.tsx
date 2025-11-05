import type { HistoryPeriod } from '../types';
import { TimelineItem } from './TimelineItem';

interface TimelinePeriodProps {
  period: HistoryPeriod;
}

export function TimelinePeriod({ period }: TimelinePeriodProps) {
  return (
    <section aria-labelledby={`period-${period.decade}`} className="mb-12">
      <header className="mb-8">
        <h2
          id={`period-${period.decade}`}
          className="text-3xl font-bold text-foreground mb-2"
        >
          {period.label}
        </h2>
        {period.description && (
          <p className="text-lg text-muted-foreground">{period.description}</p>
        )}
      </header>

      <div className="space-y-0">
        {period.items.map((item, index) => (
          <TimelineItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
