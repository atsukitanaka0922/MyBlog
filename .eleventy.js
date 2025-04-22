module.exports = function(eleventyConfig) {
  // パススルーコピー
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images"); // 画像ディレクトリを追加
  
  // 日付フォーマットフィルタ
  eleventyConfig.addFilter("date", function(date, format) {
    if (!date) return "";
    
    const d = new Date(date);
    
    if (format === "%Y年%m月%d日") {
      const year = d.getFullYear();
      const month = d.getMonth() + 1;
      const day = d.getDate();
      return `${year}年${month}月${day}日`;
    }
    
    if (format === "%Y-%m-%d") {
      return d.toISOString().split('T')[0];
    }
    
    return d.toDateString();
  });
  
  // コレクションの制限フィルタ
  eleventyConfig.addFilter("limit", function(array, limit) {
    if (!Array.isArray(array)) return [];
    return array.slice(0, limit);
  });
  
  // 文字列置換フィルタ
  eleventyConfig.addFilter("replace", function(str, from, to) {
    if (typeof str !== 'string') return '';
    return str.replace(from, to);
  });
  
  // タグページの生成
  eleventyConfig.addCollection("tagList", function(collection) {
    const tagSet = new Set();
    collection.getAll().forEach(item => {
      if ("tags" in item.data) {
        const tags = item.data.tags.filter(tag => tag !== "post");
        tags.forEach(tag => tagSet.add(tag));
      }
    });
    return [...tagSet].sort();
  });
  
  // マークダウン設定
  let markdownIt = require("markdown-it");
  let markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true
  };
  eleventyConfig.setLibrary("md", markdownIt(markdownItOptions));
  
  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};