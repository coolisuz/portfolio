import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../types';

const linkClass =
  'inline-flex min-h-[44px] items-center text-[15px] text-site-fg hover:text-site-accent transition-colors';

const controlClass =
  'rounded-md border border-site-rule bg-site-wash hover:border-site-muted transition-colors';

export const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const onBlog = location.pathname === '/blog';

  // Home sections are reached by hash; Home scrolls to it when it mounts or the hash changes.
  const goToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    navigate(`/#${id}`);
  };

  const items = (
    <>
      <button type="button" onClick={() => goToSection('work')} className={linkClass}>
        {t.nav.work}
      </button>
      <Link
        to="/blog"
        onClick={() => setMobileMenuOpen(false)}
        aria-current={onBlog ? 'page' : undefined}
        className={`${linkClass} ${onBlog ? 'underline decoration-1 underline-offset-[6px]' : ''}`}
      >
        {t.nav.writing}
      </Link>
      <button type="button" onClick={() => goToSection('experience')} className={linkClass}>
        {t.nav.experience}
      </button>
    </>
  );

  return (
    <nav
      aria-label="Main"
      className="fixed top-0 z-50 w-full border-b border-site-rule bg-site-bg/95 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-[920px] px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex min-h-[44px] items-center font-mono text-sm font-medium text-site-fg hover:text-site-accent transition-colors"
          >
            <span className="hidden text-site-muted sm:inline">saidjamol</span>
            <span className="mx-1.5 hidden text-site-muted sm:inline">/</span>
            ikramov.me
          </Link>

          <div className="hidden items-center gap-7 md:flex">{items}</div>

          <div className="flex items-center gap-2">
            <div className={`flex items-center gap-0.5 p-1 ${controlClass}`}>
              {(['en', 'ru', 'uz'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  aria-pressed={language === lang}
                  className={`rounded px-2 py-1 font-mono text-xs font-medium transition-colors ${
                    language === lang
                      ? 'bg-site-fg text-site-bg'
                      : 'text-site-muted hover:text-site-fg'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className={`p-2 ${controlClass}`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 md:hidden ${controlClass}`}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && <div className="flex flex-col items-start pb-3 md:hidden">{items}</div>}
      </div>
    </nav>
  );
};
