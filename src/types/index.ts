export type Language = 'en' | 'ru' | 'uz';

export interface Translation {
  nav: {
    home: string;
    experience: string;
    blog: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    description: string;
    stats: {
      users: string;
      uptime: string;
      microservices: string;
    };
    cta: {
      contact: string;
      caseStudies: string;
    };
  };
  philosophy: {
    title: string;
    subtitle: string;
    points: string[];
  };
  skills: {
    title: string;
    backendSystems: string;
    frontendUI: string;
    cloudInfra: string;
    devOpsMonitoring: string;
  };
  experience: {
    title: string;
    present: string;
  };
  caseStudies: {
    title: string;
    problem: string;
    approach: string;
    technicalDecisions: string;
    result: string;
    viewDetails: string;
    close: string;
  };
  systemDesign: {
    title: string;
    subtitle: string;
  };
  articles: {
    title: string;
    readMore: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    location: string;
    sendMessage: string;
  };
  footer: {
    copyright: string;
  };
}
