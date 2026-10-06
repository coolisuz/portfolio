import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { pinned } from '../data/profile';
import { Section } from './Section';

export const Pinned = () => {
  const { t } = useLanguage();

  return (
    <Section id="work" label={t.home.sections.pinned}>
      <div className="grid gap-4 sm:grid-cols-2">
        {pinned.map((item, i) => {
          const copy = t.home.pinned[i];
          const href = item.post ? `/blog?post=${item.post}` : undefined;

          return (
            <article
              key={copy.title}
              className="flex flex-col gap-3 rounded-lg border border-site-rule px-5 py-[18px]"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-[17px] font-semibold leading-snug text-site-accent">
                  {href ? (
                    <Link to={href} className="hover:underline">
                      {copy.title}
                    </Link>
                  ) : (
                    copy.title
                  )}
                </h3>
                <span className="shrink-0 rounded-full border border-site-rule px-2 py-px text-xs text-site-muted">
                  {t.home.badges[item.badge]}
                </span>
              </div>

              <p className="text-[15px] leading-normal text-site-muted">{copy.description}</p>

              <ul className="flex flex-wrap gap-1.5 font-mono text-xs text-site-muted">
                {item.tags.map((tag) => (
                  <li key={tag} className="rounded-full bg-site-wash px-2 py-0.5">
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap items-center justify-between gap-x-3 font-mono text-xs text-site-muted">
                <span className="py-2">{copy.meta}</span>
                {href && copy.linkLabel && (
                  <Link to={href} className="py-2 text-site-accent hover:underline">
                    {copy.linkLabel} →
                  </Link>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
};
