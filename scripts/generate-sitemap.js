// Reference: https://www.youtube.com/watch?v=KHS6Kru_uhM

const SITEMAP = require("nextjs-sitemap-generator");
const PATH = require("path");

SITEMAP({
  baseUrl: "PUT_PATH_HERE",
  pagesDirectory: PATH.resolve(__dirname, "../sitemap/"),
  targetDirectory: PATH.resolve(__dirname, "../sitemap/"),
  ignoredExtensions: [
    "js",
    "map",
    "json",
    "xml",
    "png",
    "css",
    "jpeg",
    "jpg",
    "icon",
  ],
  ignoredPaths: ["404"],
});
