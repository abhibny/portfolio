import '../styles/globals.scss';
import '../styles/v5.scss';
import Page from '../components/Page';
import Script from 'next/script';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      // Send pageview to Google Analytics
      window.gtag('config', 'G-YSX5R91XDE', {
        page_path: url,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // /v5 routes render their own shell (light-first design system),
  // so they bypass the legacy black <Page> wrapper entirely.
  const isV5 = router.pathname.startsWith('/v5');
  const Shell = isV5 ? React.Fragment : Page;

  return (
    <Shell>
      <Component {...pageProps} />

      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-YSX5R91XDE"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YSX5R91XDE');
          `,
        }}
      />
    </Shell>
  );
}

export default MyApp;
