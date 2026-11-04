import Head from 'next/head';

function Meta() {
  return (
    <Head>
      <meta key="charset" charSet="utf-8" />
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />

      {/* Primary Meta Tag */}
      <title>Abhishek Benny – Artist / Designer</title>
      <meta name="title" content="Abhishek Benny – Artist / Designer" />
      <meta
        name="description"
        content="Abhishek designs art and experiences, thriving at the intersection of art and AI."
      ></meta>

      {/* Open Graph/FB */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Abhishek Benny – Artist / Designer" />

      <meta
        property="og:description"
        content="Abhishek designs art and experiences, thriving at the intersection of art and AI."
      />
      <meta property="og:image" content="/metatag-preview.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:title"
        content="Abhishek Benny – Artist / Designer"
      />
      <meta
        property="twitter:description"
        content="Abhishek designs art and experiences, thriving at the intersection of art and AI."
      />
      <meta property="twitter:image" content="/metatag-preview.png" />

      {/* Favicon */}
      <link key="favicon" rel="icon" href="/favicon.png" importance="low" />
      <link key="apple-touch-icon" rel="apple-touch-icon" href="/favicon.png" />
    </Head>
  );
}

export default Meta;