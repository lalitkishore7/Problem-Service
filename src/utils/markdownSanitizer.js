const marked = require("marked");
const sanitizeHtmlLibrary = require("sanitize-html");
const TurndownService = require("turndown");

function sanitizeMarkdownContent(markdownContent) {
  const turndownService = new TurndownService();

  // Markdown -> HTML
  const html = marked.parse(markdownContent);
  console.log("Coverted html", html);

  // Sanitize HTML
  const sanitizedHtml = sanitizeHtmlLibrary(html, {
    allowedTags: sanitizeHtmlLibrary.defaults.allowedTags,
  });

  console.log("Sanitized html", sanitizedHtml);

  // HTML -> Markdown
  const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

  console.log("sanitized markdown", sanitizedMarkdown);

  return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent
