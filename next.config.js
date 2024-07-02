const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: '@import "mixins.scss";',
  },
  images: {
    deviceSizes: [414, 768, 1024, 1366, 1600, 1920, 2560],
  },
  trailingSlash: (slug) => {
    return !slug.match(/^\/api\/*/);
  },
  async rewrites() {
    return [
      {
        source: "/api/",
        destination: "https://intelsy.pro/api/",
      },
    ];
  },
};

module.exports = nextConfig;
