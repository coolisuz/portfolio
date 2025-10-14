import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Experience = () => {
  const { t } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const experiences = [
    {
      title: 'Fullstack Software Developer',
      company: 'Equatemedia Inc',
      location: 'Las Vegas, Nevada',
      period: 'Jan 2023',
      current: true,
      achievements: [
        '15% conversion increase through AI-powered automatic calling to filter leads',
        'Qualified leads annually across 15+ partner companies',
        '60% faster lead processing with real-time ping/post serving 50,000+ MAU',
        'Built 5+ scalable React/Vue.js applications with microservices',
        'Implemented AWS Aurora/RDS for database management and CloudFront for content delivery',
        'Integrated RabbitMQ for reliable message queuing and async processing',
      ],
    },
    {
      title: 'Fullstack Software Developer',
      company: 'Indewal',
      location: 'Amsterdam, Netherlands',
      period: 'Jan 2022 - Jan 2023',
      current: false,
      achievements: [
        'Led ERP system for €5M+ annual transactions with zero downtime',
        'Integrated 8+ APIs including OAuth2 and Azure Identity Service',
        '99.9% accuracy in automated invoice processing (1,000+/month)',
        '25% workflow efficiency gain through custom Kanban system',
        'Implemented AWS DynamoDB for scalable NoSQL data storage',
        'Containerized applications using Docker for consistent deployments',
      ],
    },
    {
      title: 'Software Developer',
      company: 'Multicard',
      location: 'Tashkent, Uzbekistan',
      period: 'Jan 2020 - Jan 2022',
      current: false,
      achievements: [
        'Developed and maintained payment processing systems',
        'Built scalable microservices architecture',
        'Implemented secure transaction handling',
        'Optimized database queries for improved performance',
      ],
    },
    {
      title: 'Software Developer',
      company: 'Jett Inc',
      location: 'Tashkent, Uzbekistan',
      period: 'Jan 2019 - Jan 2020',
      current: false,
      achievements: [
        'Architected microservices for 5,000+ concurrent users, 99.95% uptime',
        'Sub-100ms latency trading platform processing $100K+ daily',
        '80% deployment time reduction via containerization (Docker/K8s)',
        '45% database query optimization for faster response times',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-github-canvas-subtle dark:bg-github-canvas-dark-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.experience.title}</h2>

        <div className="relative">
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative md:pl-20">
                <div className="hidden md:block absolute left-8 top-6 w-4 h-4 -ml-[7px] rounded-full bg-github-canvas-default dark:bg-github-canvas-dark border-4 border-github-accent-emphasis"></div>

                <div className="github-card p-6">
                  <div
                    className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2 cursor-pointer"
                    onClick={() => toggleExpand(index)}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-github-fg-default dark:text-github-fg-dark">
                          {exp.title}
                        </h3>
                        <span className="text-github-fg-muted dark:text-github-fg-dark-muted">
                          {expandedIndex === index ? '▼' : '▶'}
                        </span>
                      </div>
                      <p className="text-github-accent-emphasis font-semibold">{exp.company}</p>
                      <p className="text-sm text-github-fg-muted dark:text-github-fg-dark-muted">
                        {exp.location}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-github-fg-muted dark:text-github-fg-dark-muted whitespace-nowrap">
                      {exp.period} {exp.current && `- ${t.experience.present}`}
                    </span>
                  </div>

                  {expandedIndex === index && (
                    <ul className="space-y-2 mt-4">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-github-fg-default dark:text-github-fg-dark"
                        >
                          <span className="text-github-success-emphasis dark:text-green-400 mt-1.5 flex-shrink-0 font-bold">
                            ▸
                          </span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
