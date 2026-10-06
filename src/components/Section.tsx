import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  label: string;
  children: ReactNode;
}

/** A home-page section: a mono label in the left rail and content beside it. */
export const Section = ({ id, label, children }: SectionProps) => (
  <section
    id={id}
    className="flex scroll-mt-20 flex-wrap gap-x-10 gap-y-4 border-t border-site-rule py-12"
  >
    <h2 className="w-40 shrink-0 font-mono text-[13px] font-medium uppercase leading-[30px] tracking-wider text-site-muted">
      {label}
    </h2>
    <div className="min-w-0 max-w-[680px] flex-[999_1_420px]">{children}</div>
  </section>
);
