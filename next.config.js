/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  output: 'export',
  basePath: '/portfolio',
  trailingSlash: true,

  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    domains: ["images.isbndb.com", "m.media-amazon.com"],
  },

  async redirects() {
    return [
      {
        source: '/design-sys',
        destination: '/dessys',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;