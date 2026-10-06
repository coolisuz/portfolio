import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { contact } from '../data/profile';
import { Section } from './Section';

interface Day {
  date: string;
  weekday: number;
  count: number;
  level: number;
}

interface Contributions {
  login: string;
  total: number;
  weeks: Day[][];
}

const levelColor = (level: number) => `rgb(var(--site-g${Math.min(Math.max(level, 0), 4)}))`;

const isContributions = (value: unknown): value is Contributions => {
  const data = value as Contributions;
  return Boolean(data) && typeof data.total === 'number' && Array.isArray(data.weeks) && data.weeks.length > 0;
};

/**
 * A year of GitHub contributions. The data file is written at deploy time by
 * scripts/fetch-contributions.mjs; when it is missing the section is not shown.
 */
export const Activity = () => {
  const { t } = useLanguage();
  const [data, setData] = useState<Contributions | null>(null);
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    fetch('/contributions.json')
      .then((response) => (response.ok ? response.json() : null))
      .then((json) => {
        if (!cancelled && isContributions(json)) setData(json);
      })
      .catch(() => {
        // No data file (local dev, or the fetch failed at deploy): stay hidden.
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // On narrow screens the grid scrolls sideways; start at the most recent weeks.
  useEffect(() => {
    if (data && scroller.current) {
      scroller.current.scrollLeft = scroller.current.scrollWidth;
    }
  }, [data]);

  if (!data) return null;

  return (
    <Section id="activity" label={t.home.sections.activity}>
      <div className="rounded-lg border border-site-rule px-5 py-[18px]">
        <div ref={scroller} className="overflow-x-auto" aria-hidden="true">
          <div className="flex w-max gap-0.5">
            {data.weeks.map((week, w) => (
              <div key={w} className="grid grid-rows-7 gap-0.5">
                {week.map((day) => (
                  <div
                    key={day.date}
                    title={`${day.date}: ${day.count}`}
                    className="h-2.5 w-2.5 rounded-sm"
                    style={{ gridRowStart: day.weekday + 1, backgroundColor: levelColor(day.level) }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3.5 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-[13px] text-site-muted">
          <span>
            {t.home.activity.caption.replace('{count}', data.total.toLocaleString('en-US'))}{' '}
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-site-accent underline decoration-1 underline-offset-[3px]"
            >
              @{data.login}
            </a>
          </span>

          <span className="inline-flex items-center gap-1 text-xs" aria-hidden="true">
            {t.home.activity.less}
            {[0, 1, 2, 3, 4].map((level) => (
              <span
                key={level}
                className="h-2.5 w-2.5 rounded-sm"
                style={{ backgroundColor: levelColor(level) }}
              />
            ))}
            {t.home.activity.more}
          </span>
        </div>
      </div>
    </Section>
  );
};
