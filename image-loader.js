/**
 * Custom next/image loader.
 *
 * The site is served from a basePath ('/portfolio' on GitHub Pages). next/image
 * does NOT apply basePath to a raw `src` — it only reaches the default loader's
 * /_next/image endpoint. With `images.unoptimized: true` the loader is skipped
 * altogether and `src` is emitted verbatim, which is why every /project-covers/*
 * URL 404'd in both dev and production.
 *
 * This prefixes once, here, so `src` values in data/ stay basePath-agnostic.
 * Keep BASE_PATH in sync with `basePath` in next.config.js.
 */
const BASE_PATH = '/portfolio';

module.exports = function imageLoader({ src }) {
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(src)) {
    throw new Error('Only local image paths are supported.');
  }
  // Already prefixed (e.g. a src authored with the basePath baked in).
  if (src === BASE_PATH || src.startsWith(`${BASE_PATH}/`)) return src;
  return `${BASE_PATH}${src.startsWith('/') ? '' : '/'}${src}`;
};
