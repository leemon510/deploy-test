const path = require("path");

const { i18n } = require("./next-i18next.config.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    scrollRestoration: true,
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
  outputFileTracing: true,
  i18n,
  reactStrictMode: true,
};

module.exports = nextConfig;
