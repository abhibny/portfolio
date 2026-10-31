import Head from 'next/head';
import { useV5Theme } from './ThemeToggle';

// Wraps every /v5 route: owns the theme, the off-white ground and the
// centred column. Kept separate from the legacy <Page> shell.
export default function V5Root({ children, title = 'Abhishek Benny' }) {
  const { theme, toggle } = useV5Theme();

  return (
    <div className="v5-root">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="w-full min-h-screen px-4 py-6 md:px-8 md:py-10">
        <div className="mx-auto w-full max-w-[1180px]">
          {typeof children === 'function' ? children({ theme, toggle }) : children}
        </div>
      </div>
    </div>
  );
}
