/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // GitHub-inspired color palette
        github: {
          canvas: {
            default: '#ffffff',
            subtle: '#f6f8fa',
            dark: '#0d1117',
            'dark-subtle': '#161b22',
          },
          border: {
            default: '#d0d7de',
            muted: '#d8dee4',
            dark: '#30363d',
          },
          fg: {
            default: '#1f2328',
            muted: '#656d76',
            subtle: '#6e7781',
            dark: '#e6edf3',
            'dark-muted': '#7d8590',
          },
          accent: {
            emphasis: '#0969da',
            fg: '#0969da',
            muted: 'rgba(84, 174, 255, 0.4)',
            subtle: '#ddf4ff',
          },
          success: {
            emphasis: '#1a7f37',
            fg: '#1f883d',
            muted: 'rgba(74, 194, 107, 0.4)',
          },
          danger: {
            emphasis: '#cf222e',
            fg: '#d1242f',
          }
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
