const eleventyVersion = require("@11ty/eleventy/package.json").version;

module.exports = (eleventyConfig) => {
  eleventyConfig.addShortcode("metaGenerator", () => {
    return `<meta name="generator" content="Eleventy v${eleventyVersion}" />`;
  });
  eleventyConfig.addShortcode("eleventyVersion", () => eleventyVersion);

  return {
    dir: {
      input: "src",
      output: "www"
    }
  };
};
