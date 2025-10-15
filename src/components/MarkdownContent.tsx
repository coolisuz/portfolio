import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import 'highlight.js/styles/github-dark.css';

interface MarkdownContentProps {
  content: string;
}

export const MarkdownContent = ({ content }: MarkdownContentProps) => {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-github-fg-default dark:prose-headings:text-github-fg-dark prose-p:text-github-fg-default dark:prose-p:text-github-fg-dark prose-a:text-github-accent-emphasis prose-strong:text-github-fg-default dark:prose-strong:text-github-fg-dark prose-code:text-github-accent-emphasis prose-pre:bg-github-canvas-subtle dark:prose-pre:bg-github-canvas-dark-subtle prose-pre:border prose-pre:border-github-border-default dark:prose-pre:border-github-border-dark">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        components={{
          pre: ({ children }) => (
            <pre className="rounded-lg overflow-x-auto p-4 my-4">
              {children}
            </pre>
          ),
          code: ({ className, children, ...props }) => {
            const isInline = !className;
            return isInline ? (
              <code
                className="px-1.5 py-0.5 rounded bg-github-canvas-subtle dark:bg-github-canvas-dark-subtle text-sm font-mono"
                {...props}
              >
                {children}
              </code>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold mb-6 mt-8 pb-3 border-b border-github-border-default dark:border-github-border-dark">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-bold mb-4 mt-8">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-bold mb-3 mt-6">
              {children}
            </h3>
          ),
          ul: ({ children }) => (
            <ul className="space-y-2 my-4 list-disc list-inside">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="space-y-2 my-4 list-decimal list-inside">
              {children}
            </ol>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-github-accent-emphasis pl-4 italic my-4 text-github-fg-muted dark:text-github-fg-dark-muted">
              {children}
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
