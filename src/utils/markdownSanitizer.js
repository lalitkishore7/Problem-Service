const marked = require("marked");
const sanitizeHtmlLibrary = require("sanitize-html");
const TurndownService = require("turndown");

function sanitizeMarkdownContent(markdownContent) {
  const turndownService = new TurndownService();

  // Markdown -> HTML
  const html = marked.parse(markdownContent);

  // Sanitize HTML
  const sanitizedHtml = sanitizeHtmlLibrary(html, {
    allowedTags: sanitizeHtmlLibrary.defaults.allowedTags.concat(['img'])
  });


  // HTML -> Markdown
  const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

  return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent
