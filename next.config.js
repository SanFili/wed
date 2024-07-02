const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/wed",
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: '@import "mixins.scss";',
  },
  images: {
    loader: "akamai",
    path: "",
  },
  output: "export",
};

module.exports = nextConfig;
