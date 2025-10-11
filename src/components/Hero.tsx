import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-b from-github-canvas-subtle to-github-canvas-default dark:from-github-canvas-dark-subtle dark:to-github-canvas-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              {t.hero.greeting}{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t.hero.name}
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-github-fg-default dark:text-github-fg-dark">
              {t.hero.title}
            </p>
            <p className="text-lg text-github-fg-muted dark:text-github-fg-dark-muted">
              {t.hero.description}
            </p>

            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-github-accent-emphasis">250K+</div>
                <div className="text-sm text-github-fg-muted dark:text-github-fg-dark-muted uppercase tracking-wider">
                  {t.hero.stats.users}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-github-accent-emphasis">99.98%</div>
                <div className="text-sm text-github-fg-muted dark:text-github-fg-dark-muted uppercase tracking-wider">
                  {t.hero.stats.uptime}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-github-accent-emphasis">30+</div>
                <div className="text-sm text-github-fg-muted dark:text-github-fg-dark-muted uppercase tracking-wider">
                  {t.hero.stats.microservices}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="github-btn github-btn-primary"
              >
                {t.hero.cta.contact}
              </button>
              <button
                onClick={() => navigate('/blog')}
                className="github-btn github-btn-secondary"
              >
                {t.hero.cta.caseStudies}
              </button>
            </div>
          </div>

          <div className="relative flex flex-col items-center gap-6">
            {/* Profile Picture */}
            <div className="w-100 h-100 rounded-full overflow-hidden border-4 border-github-accent-emphasis shadow-lg">
              <img
                src="/img/profile.jpeg"
                alt="Saidjamol Ikramov"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/sikramov/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-github-canvas-subtle dark:bg-github-canvas-dark-subtle border border-github-border-default dark:border-github-border-dark hover:border-github-accent-emphasis dark:hover:border-blue-600 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://t.me/coolisuz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-github-canvas-subtle dark:bg-github-canvas-dark-subtle border border-github-border-default dark:border-github-border-dark hover:border-github-accent-emphasis dark:hover:border-blue-600 flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a
                href="https://github.com/coolisuz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-github-canvas-subtle dark:bg-github-canvas-dark-subtle border border-github-border-default dark:border-github-border-dark hover:border-github-accent-emphasis dark:hover:border-blue-600 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
