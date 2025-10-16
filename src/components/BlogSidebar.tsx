import { useState, useEffect } from 'react';
import { loadContentIndex, ContentIndex } from '../utils/contentLoader';

interface BlogSidebarProps {
  selectedItem: string | null;
  onSelectItem: (id: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const BlogSidebar = ({ selectedItem, onSelectItem, isOpen, onClose }: BlogSidebarProps) => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['case-studies', 'architecture', 'articles']);
  const [contentIndex, setContentIndex] = useState<ContentIndex | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIndex = async () => {
      try {
        const index = await loadContentIndex();
        setContentIndex(index);
      } catch (error) {
        console.error('Failed to load content index:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchIndex();
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const sections = [
    {
      id: 'case-studies',
      title: 'Case Studies',
      items: contentIndex?.['case-studies'] || [],
    },
    {
      id: 'architecture',
      title: 'System Architecture',
      items: contentIndex?.['architecture'] || [],
    },
    {
      id: 'articles',
      title: 'Technical Deep Dives',
      items: contentIndex?.['articles'] || [],
    },
  ];

  return (
    <aside
      className={`
        fixed lg:static inset-y-0 left-0 z-40 w-64 lg:w-64
        border-r border-github-border-default dark:border-github-border-dark
        bg-github-canvas-subtle dark:bg-github-canvas-dark-subtle
        overflow-y-auto
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        mt-16 lg:mt-0
      `}
    >
      <div className="p-3 lg:p-4">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onClose}
            className="lg:hidden p-1 rounded-md hover:bg-github-canvas-default dark:hover:bg-github-canvas-dark"
            aria-label="Close sidebar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center py-8">
            <div className="w-6 h-6 border-2 border-github-accent-emphasis border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <nav className="space-y-2">
            {sections.map(section => (
              <div key={section.id} className="space-y-1">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-github-canvas-default dark:hover:bg-github-canvas-dark transition-colors text-left"
                >
                  <span className="font-semibold text-github-fg-default dark:text-github-fg-dark">
                    {section.title}
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      expandedSections.includes(section.id) ? 'rotate-90' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {expandedSections.includes(section.id) && (
                  <div className="ml-4 space-y-1">
                    {section.items.map(item => (
                      <button
                        key={item.id}
                        onClick={() => onSelectItem(item.id)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          selectedItem === item.id
                            ? 'bg-github-accent-emphasis text-white font-medium'
                            : 'text-github-fg-muted dark:text-github-fg-dark-muted hover:bg-github-canvas-default dark:hover:bg-github-canvas-dark hover:text-github-fg-default dark:hover:text-github-fg-dark'
                        }`}
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </aside>
  );
};
