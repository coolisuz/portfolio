import { useState, useEffect } from 'react';
import { BlogSidebar } from '../components/BlogSidebar';
import { MarkdownContent } from '../components/MarkdownContent';
import { loadContentCached, loadContentIndex, ContentItem } from '../utils/contentLoader';

export const Blog = () => {
  const [selectedItem, setSelectedItem] = useState<string>('trading-platform');
  const [content, setContent] = useState<ContentItem | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const getContentType = async (id: string): Promise<'case-studies' | 'architecture' | 'articles' | null> => {
    try {
      const index = await loadContentIndex();

      if (index['case-studies'].some(item => item.id === id)) return 'case-studies';
      if (index['architecture'].some(item => item.id === id)) return 'architecture';
      if (index['articles'].some(item => item.id === id)) return 'articles';

      return null;
    } catch (error) {
      console.error('Failed to load content index:', error);
      return null;
    }
  };

  useEffect(() => {
    const loadSelectedContent = async () => {
      setLoading(true);
      setError(null);

      try {
        const type = await getContentType(selectedItem);
        if (!type) {
          setError('Content not found');
          setLoading(false);
          return;
        }

        const loadedContent = await loadContentCached(type, selectedItem);
        setContent(loadedContent);
      } catch (err) {
        console.error('Failed to load content:', err);
        setError('Failed to load content. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    loadSelectedContent();
  }, [selectedItem]);

  const handleSelectItem = (id: string) => {
    setSelectedItem(id);
    setSidebarOpen(false);
  };

  return (
    <div className="pt-16 flex justify-center min-h-screen bg-github-canvas-default dark:bg-github-canvas-dark">
      <div className="flex max-w-7xl w-full relative">
        {/* Mobile sidebar toggle button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-github-accent-emphasis text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
          aria-label="Toggle sidebar"
        >
          {sidebarOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-30"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <BlogSidebar
          selectedItem={selectedItem}
          onSelectItem={handleSelectItem}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <main className="flex-1 overflow-y-auto w-full lg:w-auto">
          <div className="px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-20">
            {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="w-12 h-12 border-4 border-github-accent-emphasis border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {error && (
            <div className="text-center py-20">
              <p className="text-red-500 text-lg">{error}</p>
            </div>
          )}

          {!loading && !error && content && (
            <div className="max-w-4xl">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-github-fg-default dark:text-github-fg-dark">
                {content.metadata.title}
              </h1>

              {(content.metadata.tagline || content.metadata.description) && (
                <p className="text-base sm:text-lg lg:text-xl text-github-fg-muted dark:text-github-fg-dark-muted mb-8">
                  {content.metadata.tagline || content.metadata.description}
                </p>
              )}

              {content.metadata.type === 'article' && (content.metadata.date || content.metadata.readTime) && (
                <div className="flex items-center gap-3 text-sm text-github-fg-muted dark:text-github-fg-dark-muted mb-6">
                  {content.metadata.date && <span>{content.metadata.date}</span>}
                  {content.metadata.date && content.metadata.readTime && <span>•</span>}
                  {content.metadata.readTime && <span>{content.metadata.readTime}</span>}
                </div>
              )}

              {content.metadata.tags && content.metadata.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {content.metadata.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-github-accent-subtle dark:bg-blue-900/30 text-github-accent-emphasis dark:text-blue-400 border border-github-accent-muted dark:border-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {content.metadata.technologies && content.metadata.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {content.metadata.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-github-accent-subtle dark:bg-blue-900/30 text-github-accent-emphasis dark:text-blue-400 border border-github-accent-muted dark:border-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <MarkdownContent content={content.content} />

              {content.metadata.type === 'case-study' && content.metadata.metrics && content.metadata.metrics.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 text-github-fg-default dark:text-github-fg-dark">
                    Key Metrics
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {content.metadata.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="text-center p-4 bg-github-canvas-subtle dark:bg-github-canvas-dark-subtle rounded-lg border border-github-border-default dark:border-github-border-dark"
                      >
                        <div className="text-base sm:text-lg font-bold text-github-success-emphasis dark:text-green-400">
                          {metric}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
          </div>
        </main>
      </div>
    </div>
  );
};
