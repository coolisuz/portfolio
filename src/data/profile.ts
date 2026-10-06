// Language-independent facts for the home page. The matching copy lives in
// src/i18n/translations.ts and is matched by array position.

export const contact = {
  email: 'saidjamol1@gmail.com',
  github: 'https://github.com/coolisuz',
  linkedin: 'https://www.linkedin.com/in/sikramov',
};

/** Shown as topic tags in the README box. */
export const stack = [
  'typescript',
  'node.js',
  'nestjs',
  'python',
  'fastapi',
  'flask',
  'django',
  'postgresql',
  'redis',
  'rabbitmq',
  'kafka',
  'aws',
  'docker',
  'kubernetes',
  'prometheus',
  'grafana',
  'claude',
  'mcp',
  'ai agents',
];

/** Names highlighted inside the intro paragraph. */
export const employers = ['Multicard', 'Jett', 'Indewal', 'Equate Media'];

export interface PinnedItem {
  tags: string[];
  badge: 'private' | 'caseStudy';
  /** id of a post under public/content, opened as /blog?post=<id> */
  post?: string;
}

export const pinned: PinnedItem[] = [
  { tags: ['node.js', 'redis', 'rabbitmq', 'sip'], badge: 'private', post: 'leads-to-redis' },
  { tags: ['websockets', 'redis', 'kubernetes'], badge: 'private', post: 'trading-platform' },
  { tags: ['node.js', 'kubernetes', 'istio'], badge: 'private' },
];

/** `current` marks the highlighted dot on the timeline. */
export const experience = [{ current: true }, { current: false }, { current: false }, { current: false }];

export const education = [{ current: true }, { current: false }, { current: false }];

/** How many posts the home page lists before "All posts". */
export const writingLimit = 6;
