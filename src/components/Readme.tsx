import { Fragment } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { employers, stack } from '../data/profile';

/** Splits the intro so employer names can be set in the foreground colour. */
const highlightEmployers = (text: string) => {
  const pattern = new RegExp(`(${employers.join('|')})`, 'g');
  return text.split(pattern).map((part, i) =>
    employers.includes(part) ? (
      <span key={i} className="text-site-fg">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
};

export const Readme = () => {
  const { t } = useLanguage();

  return (
    <section className="mb-14 overflow-hidden rounded-lg border border-site-rule">
      <div className="flex items-center justify-between gap-4 border-b border-site-rule bg-site-wash px-5 py-2.5 font-mono text-[13px] text-site-muted">
        <span>README.md</span>
        <span>{t.home.location}</span>
      </div>

      <div className="px-5 pb-10 pt-10 sm:px-10 md:px-14 md:pt-12">
        <p className="mb-5 font-mono text-[13px] tracking-wide text-site-muted">{t.home.byline}</p>

        <h1 className="max-w-[760px] text-[28px] font-medium leading-[1.2] tracking-tight sm:text-4xl sm:leading-[1.18] md:text-[42px]">
          {t.home.headline}
        </h1>

        <p className="mt-6 max-w-[640px] text-lg leading-relaxed text-site-muted">
          {highlightEmployers(t.home.intro)}
        </p>

        <ul className="mt-7 flex flex-wrap gap-2 font-mono text-xs text-site-muted">
          {stack.map((item) => (
            <li key={item} className="rounded-full border border-site-rule px-2.5 py-[3px]">
              {item}
            </li>
          ))}
          <li className="rounded-full border border-site-rule px-2.5 py-[3px] text-site-accent">
            {t.home.certification}
          </li>
        </ul>
      </div>
    </section>
  );
};
