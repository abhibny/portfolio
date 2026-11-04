import '../styles/globals.scss';
import '../styles/v5.scss';
import Page from '../components/Page';
import { useRouter } from 'next/router';
import React from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // /v5 routes render their own shell (light-first design system),
  // so they bypass the legacy black <Page> wrapper entirely.
  const isV5 = router.pathname.startsWith('/v5');
  const Shell = isV5 ? React.Fragment : Page;

  return (
    <Shell>
      <Component {...pageProps} />

    </Shell>
  );
}

export default MyApp;
