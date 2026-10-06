import { useLanguage } from '../contexts/LanguageContext';
import { education, experience } from '../data/profile';
import { TimelineCopy } from '../types';
import { Section } from './Section';

interface TimelineListProps {
  items: TimelineCopy[];
  marks: { current: boolean }[];
}

const TimelineList = ({ items, marks }: TimelineListProps) => (
  <ul className="ml-[5px] flex flex-col gap-[22px] border-l border-site-rule pl-6">
    {items.map((item, i) => (
      <li key={`${item.title}-${item.meta}`} className="relative">
        <span
          aria-hidden="true"
          className={`absolute -left-[29px] top-2 h-[9px] w-[9px] rounded-full ring-4 ring-site-bg ${
            marks[i]?.current ? 'bg-site-accent' : 'bg-site-rule'
          }`}
        />
        <div className="font-medium">
          {item.title}
          {item.org && <span className="font-normal text-site-muted"> {item.org}</span>}
        </div>
        <div className="font-mono text-[13px] text-site-muted">{item.meta}</div>
      </li>
    ))}
  </ul>
);

export const Timeline = () => {
  const { t } = useLanguage();

  return (
    <Section id="experience" label={t.home.sections.experience}>
      <div className="pt-1">
        <TimelineList items={t.home.experience} marks={experience} />

        <h3 className="mb-3 mt-9 font-mono text-xs font-medium uppercase tracking-wider text-site-muted">
          {t.home.sections.education}
        </h3>
        <TimelineList items={t.home.education} marks={education} />
      </div>
    </Section>
  );
};
