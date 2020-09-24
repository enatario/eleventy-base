module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/static");
  eleventyConfig.addPassthroughCopy("./src/portal");

  eleventyConfig.addFilter("keys", obj => Object.keys(obj));
  eleventyConfig.addFilter("except", (arr=[]) => {
    return arr.filter(function(value) {
      return value != "all";
    }).sort();
  });
  
  return {
    templateFormats: [
      "md",
      "njk"
    ],

    dir: {
      input: "src",
      output: "dist"
    },
    markdownTemplateEngine: "njk"
  }
}
