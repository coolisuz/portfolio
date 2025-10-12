import { useLanguage } from '../contexts/LanguageContext';

export const Philosophy = () => {
  const { t } = useLanguage();

  return (
    <section id="philosophy" className="py-20 bg-github-canvas-subtle dark:bg-github-canvas-dark-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t.philosophy.title}
        </h2>
        <p className="text-center text-github-fg-muted dark:text-github-fg-dark-muted mb-12 text-lg">
          {t.philosophy.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {t.philosophy.points.map((point, index) => (
            <div
              key={index}
              className="github-card p-6 flex items-start gap-4 hover:border-github-accent-emphasis dark:hover:border-blue-600 transition-colors"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-github-accent-subtle dark:bg-blue-900/30 flex items-center justify-center text-github-accent-emphasis dark:text-blue-400 font-bold">
                {index + 1}
              </div>
              <p className="text-github-fg-default dark:text-github-fg-dark leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
