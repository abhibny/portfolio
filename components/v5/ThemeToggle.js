import { useEffect, useState } from 'react';

const KEY = 'v5-theme';

export function useV5Theme() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    let saved = null;
    try {
      saved = window.localStorage.getItem(KEY);
    } catch (e) {
      /* storage blocked — fall back to system */
    }
    const initial =
      saved ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light');
    setTheme(initial);
    const html = document.documentElement;
    html.setAttribute('data-v5-theme', initial);
    // Marks the document so the off-white ground extends past the
    // page into overscroll. Removed when leaving a /v5 route so the
    // legacy black site is unaffected.
    html.classList.add('v5-page');
    return () => {
      html.classList.remove('v5-page');
      html.removeAttribute('data-v5-theme');
    };
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-v5-theme', next);
    try {
      window.localStorage.setItem(KEY, next);
    } catch (e) {
      /* non-fatal */
    }
  };

  return { theme, toggle };
}

export default function ThemeToggle({ theme, toggle }) {
  return (
    <button
      className="v5-ghost"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.6v2.2M12 19.2v2.2M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2.6 12h2.2M19.2 12h2.2M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6" />
        </svg>
      ) : (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.5 14.4A8.6 8.6 0 1 1 9.6 3.5a6.9 6.9 0 0 0 10.9 10.9Z" />
        </svg>
      )}
    </button>
  );
}
