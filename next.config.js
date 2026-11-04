/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_BUILD_DIR || '.next',
  reactStrictMode: false,

  output: 'export',
  basePath: '/portfolio',
  trailingSlash: true,

  // A custom loader (not `unoptimized`) is what applies basePath to image URLs.
  // See image-loader.js — `unoptimized: true` bypasses the loader and emits a
  // basePath-less src, which 404s on GitHub Pages.
  images: {
    loader: "custom",
    loaderFile: "./image-loader.js",
  },
};

module.exports = nextConfig;
