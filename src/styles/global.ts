import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #0f172a;          /* slate-900 */
    --bg-soft: #111827;     /* gray-900 */
    --surface: #0b1220;     /* deep */
    --card: #0b1220;
    --card-2: #111827;
    --text: #e5e7eb;        /* gray-200 */
    --muted: #9aa2b2;       /* gray-400/500 mix */
    --primary: #6366f1;     /* indigo-500 */
    --primary-700: #4f46e5;
    --ring: rgba(99, 102, 241, 0.35);
    --shadow: rgba(0, 0, 0, 0.35);
    --chip: #0f172a;
    --chip-border: #1f2937;
  }

  *, *::before, *::after { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  html { scroll-behavior: smooth; }

  @font-face {
    font-family: 'InterVar';
    src: local('Inter'), local('Inter Regular');
    font-weight: 100 900;
    font-display: swap;
  }

  body {
    margin: 0;
    font-family: InterVar, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji';
    background: radial-gradient(1200px 800px at 20% -10%, rgba(99,102,241,0.25) 0%, rgba(99,102,241,0.05) 40%, transparent 60%),
                radial-gradient(1000px 600px at 120% 20%, rgba(16,185,129,0.2) 0%, transparent 60%),
                var(--bg);
    color: var(--text);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection { background: rgba(99,102,241,0.35); color: #fff; }

  a { color: inherit; text-decoration: none; }

  /* Utility containers */
  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 32px 24px 64px;
  }

  /* Headings rhythm */
  h1 { font-size: clamp(28px, 2.2vw + 16px, 40px); line-height: 1.1; margin: 0 0 10px; }
  p.lead { color: var(--muted); margin: 0 0 28px; font-size: 15px; }
`;

export default GlobalStyle;