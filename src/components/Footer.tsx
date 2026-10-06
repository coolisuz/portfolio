import { useLanguage } from '../contexts/LanguageContext';
import { contact } from '../data/profile';

const linkClass =
  'inline-flex min-h-[44px] items-center underline decoration-1 underline-offset-[3px] hover:text-site-accent';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="mx-auto w-full max-w-[920px] px-6">
      <div className="flex flex-wrap gap-x-10 gap-y-4 border-t border-site-rule pb-16 pt-10">
        <h2 className="w-40 shrink-0 font-mono text-[13px] font-medium uppercase leading-[44px] tracking-wider text-site-muted">
          {t.home.sections.contact}
        </h2>

        <div className="min-w-0 max-w-[680px] flex-[999_1_420px]">
          <div className="flex flex-wrap gap-x-7">
            <a href={`mailto:${contact.email}`} className={linkClass}>
              {contact.email}
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
              GitHub
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
              LinkedIn
            </a>
          </div>

          <p className="mt-5 font-mono text-xs text-site-muted">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};
