import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../types';

export const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-github-canvas-default/95 dark:bg-github-canvas-dark/95 backdrop-blur-sm border-b border-github-border-default dark:border-github-border-dark z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold text-github-fg-default dark:text-github-fg-dark hover:text-github-accent-emphasis transition-colors"
            >
              SI
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              <Link
                to="/"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/')
                    ? 'bg-github-accent-emphasis text-white'
                    : 'text-github-fg-default dark:text-github-fg-dark hover:text-github-accent-emphasis'
                }`}
              >
                {t.nav.home}
              </Link>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-github-fg-default dark:text-github-fg-dark hover:text-github-accent-emphasis px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t.nav.experience}
              </button>
              <Link
                to="/blog"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/blog')
                    ? 'bg-github-accent-emphasis text-white'
                    : 'text-github-fg-default dark:text-github-fg-dark hover:text-github-accent-emphasis'
                }`}
              >
                {t.nav.blog}
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-github-canvas-subtle dark:bg-github-canvas-dark-subtle border border-github-border-default dark:border-github-border-dark rounded-md p-1">
              {(['en', 'ru', 'uz'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-1 text-xs font-medium rounded transition-all ${
                    language === lang
                      ? 'bg-github-accent-emphasis text-white'
                      : 'text-github-fg-muted dark:text-github-fg-dark-muted hover:text-github-fg-default dark:hover:text-github-fg-dark'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-md bg-github-canvas-subtle dark:bg-github-canvas-dark-subtle border border-github-border-default dark:border-github-border-dark hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md bg-github-canvas-subtle dark:bg-github-canvas-dark-subtle border border-github-border-default dark:border-github-border-dark hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/')
                    ? 'bg-github-accent-emphasis text-white'
                    : 'text-github-fg-default dark:text-github-fg-dark hover:text-github-accent-emphasis hover:bg-github-canvas-subtle dark:hover:bg-github-canvas-dark-subtle'
                }`}
              >
                {t.nav.home}
              </Link>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-left px-4 py-2 rounded-md text-sm font-medium text-github-fg-default dark:text-github-fg-dark hover:text-github-accent-emphasis hover:bg-github-canvas-subtle dark:hover:bg-github-canvas-dark-subtle transition-colors"
              >
                {t.nav.experience}
              </button>
              <Link
                to="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/blog')
                    ? 'bg-github-accent-emphasis text-white'
                    : 'text-github-fg-default dark:text-github-fg-dark hover:text-github-accent-emphasis hover:bg-github-canvas-subtle dark:hover:bg-github-canvas-dark-subtle'
                }`}
              >
                {t.nav.blog}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
