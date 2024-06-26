const isProd = process.env.NODE_ENV === "production";
const fs = require("fs-extra");

module.exports = {
  reactStrictMode: true,
  webpack5: true,

  // Fixes fs issue
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },

  //! This added clean urls and eliminates the .html extension as well as linking
  //! CSS and JS with the trailingSlash
  assetPrefix: isProd ? "https://www.dynamicwebtechnologies.com" : "",
  trailingSlash: true,

  // This adds the _headers file after npm run build
  async afterBuild({ utils }) {
    await fs.copy("_headers", ".next/_headers");
  },
};
