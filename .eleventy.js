export default function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addWatchTarget("./src/js/");
  eleventyConfig.addPassthroughCopy("./src/static");

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
