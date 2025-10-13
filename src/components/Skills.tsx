import { useLanguage } from '../contexts/LanguageContext';

export const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: '⚙️ System Design',
      skills: ['Scalability', 'Load Balancing', 'Caching', 'Fault Tolerance', 'Event-Driven Architecture'],
    },
    {
      title: '☁️ Cloud / Infrastructure',
      skills: ['AWS ECS', 'Lambda', 'CloudFormation', 'Docker', 'Kubernetes', 'CI/CD Pipelines'],
    },
    {
      title: '🛠️ DevOps / Monitoring',
      skills: ['PM2', 'CloudWatch', 'GitHub Actions', 'Nginx', 'Istio', 'AWS X-Ray'],
    },
    {
      title: '🗄️ Databases',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Aurora', 'AWS RDS'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-github-canvas-default dark:bg-github-canvas-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.skills.title}</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="github-card p-6">
              <h3 className="text-xl font-bold text-github-fg-default dark:text-github-fg-dark mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm font-medium rounded bg-github-canvas-subtle dark:bg-github-canvas-dark border border-github-border-default dark:border-github-border-dark text-github-fg-default dark:text-github-fg-dark hover:border-github-accent-emphasis dark:hover:border-blue-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="github-card p-6">
            <h3 className="text-xl font-bold text-github-fg-default dark:text-github-fg-dark mb-4">
              🎯 Domains
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Fintech', 'Trading', 'CRM', 'ERP', 'Lead Generation', 'Call Routing (VOIP / SIP)'].map((domain, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-sm font-medium rounded bg-github-canvas-subtle dark:bg-github-canvas-dark border border-github-border-default dark:border-github-border-dark text-github-fg-default dark:text-github-fg-dark hover:border-github-accent-emphasis dark:hover:border-blue-600 transition-colors"
                >
                  {domain}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
