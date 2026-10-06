import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { writingLimit } from '../data/profile';
import { ContentType } from '../types';
import { loadContentIndex } from '../utils/contentLoader';
import { Section } from './Section';

interface Row {
  id: string;
  title: string;
  type: ContentType;
}

// Articles first, then case studies, then architecture notes.
const order: ContentType[] = ['articles', 'case-studies', 'architecture'];

export const WritingList = () => {
  const { t } = useLanguage();
  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    let cancelled = false;

    loadContentIndex()
      .then((index) => {
        if (cancelled) return;
        const all = order.flatMap((type) => index[type].map((item) => ({ ...item, type })));
        setRows(all.slice(0, writingLimit));
      })
      .catch(() => {
        // The index failing to load leaves the box with just its header link.
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Section id="writing" label={t.home.sections.writing}>
      <div className="overflow-hidden rounded-lg border border-site-rule">
        <div className="flex items-center justify-between gap-4 border-b border-site-rule bg-site-wash px-5 font-mono text-[13px] text-site-muted">
          <span>writing/</span>
          <Link to="/blog" className="py-3 text-site-accent hover:underline">
            {t.home.writing.all} →
          </Link>
        </div>

        <ul>
          {rows.map((row) => (
            <li
              key={row.id}
              className="flex flex-wrap items-baseline gap-x-4 gap-y-0.5 border-b border-site-rule px-5 py-3 last:border-b-0"
            >
              <Link
                to={`/blog?post=${row.id}`}
                className="min-w-0 flex-[1_1_300px] font-medium hover:text-site-accent"
              >
                {row.title}
              </Link>
              <span className="font-mono text-xs text-site-muted">{t.home.writing.types[row.type]}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
