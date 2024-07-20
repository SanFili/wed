const path = require("path");

const repo = "wed";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix,
  basePath,
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
