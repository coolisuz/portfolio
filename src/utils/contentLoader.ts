export interface ContentMetadata {
  id: string;
  title: string;
  tagline?: string;
  description?: string;
  type: 'case-study' | 'architecture' | 'article';
  tags?: string[];
  metrics?: string[];
  date?: string;
  readTime?: string;
  technologies?: string[];
}

export interface ContentItem {
  metadata: ContentMetadata;
  content: string;
}

export interface ContentIndexItem {
  id: string;
  title: string;
}

export interface ContentIndex {
  'case-studies': ContentIndexItem[];
  'architecture': ContentIndexItem[];
  'articles': ContentIndexItem[];
}

let cachedIndex: ContentIndex | null = null;

/**
 * Fetches the content index from index.json
 */
export async function loadContentIndex(): Promise<ContentIndex> {
  if (cachedIndex) {
    return cachedIndex;
  }

  try {
    const response = await fetch('/content/index.json');
    if (!response.ok) {
      throw new Error('Failed to load content index');
    }

    cachedIndex = await response.json();
    return cachedIndex!;
  } catch (error) {
    console.error('Error loading content index:', error);
    throw error;
  }
}

/**
 * Parse YAML frontmatter from markdown content
 */
function parseFrontmatter(text: string): { metadata: any; content: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = text.match(frontmatterRegex);

  if (!match) {
    return { metadata: {}, content: text };
  }

  const [, yamlString, markdown] = match;

  const metadata: any = {};
  const lines = yamlString.split('\n');
  let currentKey = '';
  let inArray = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith('- ')) {
      if (inArray && currentKey) {
        metadata[currentKey].push(trimmed.substring(2));
      }
    } else if (trimmed.includes(':')) {
      const [key, ...valueParts] = trimmed.split(':');
      const value = valueParts.join(':').trim();
      currentKey = key.trim();

      if (!value) {
        metadata[currentKey] = [];
        inArray = true;
      } else {
        metadata[currentKey] = value.replace(/^["']|["']$/g, '');
        inArray = false;
      }
    }
  }

  return { metadata, content: markdown.trim() };
}

/**
 * Fetches and parses markdown content from the public directory
 */
export async function loadContent(
  type: 'case-studies' | 'architecture' | 'articles',
  id: string
): Promise<ContentItem> {
  try {
    const response = await fetch(`/content/${type}/${id}.md`);
    if (!response.ok) {
      throw new Error(`Failed to load content: ${response.statusText}`);
    }

    const text = await response.text();
    const { metadata, content } = parseFrontmatter(text);

    return {
      metadata: metadata as ContentMetadata,
      content,
    };
  } catch (error) {
    console.error(`Error loading content ${type}/${id}:`, error);
    throw error;
  }
}

/**
 * Gets metadata for all content items of a specific type
 */
export async function loadContentList(
  type: 'case-studies' | 'architecture' | 'articles'
): Promise<ContentMetadata[]> {
  const index = await loadContentIndex();
  const items = index[type];

  const metadata = await Promise.all(
    items.map(async (item) => {
      const { metadata } = await loadContent(type, item.id);
      return metadata;
    })
  );
  return metadata;
}

/**
 * Cache for loaded content to avoid re-fetching
 */
const contentCache = new Map<string, ContentItem>();

export async function loadContentCached(
  type: 'case-studies' | 'architecture' | 'articles',
  id: string
): Promise<ContentItem> {
  const cacheKey = `${type}/${id}`;

  if (contentCache.has(cacheKey)) {
    return contentCache.get(cacheKey)!;
  }

  const content = await loadContent(type, id);
  contentCache.set(cacheKey, content);
  return content;
}
