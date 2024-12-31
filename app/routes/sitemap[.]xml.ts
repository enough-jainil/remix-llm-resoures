import type { LoaderFunction } from "@remix-run/node";
import { resourceBlocks } from "~/data/resources";
import { routes } from "~/utils/routes";

// Loader function to generate the sitemap XML
export const loader: LoaderFunction = () => {
  const baseUrl = "https://memoryview.in";

  // Generate dynamic resource URLs from resource blocks
  const resourceUrls = resourceBlocks.flatMap((block) =>
    block.resources.map((resource) => ({
      loc: `${baseUrl}${routes.resourceDetail(
        block.tag,
        block.tag2,
        resource.name
      )}`, // Construct the resource URL
      lastmod: new Date().toISOString(), // Set last modified date
      changefreq: "weekly", // Frequency of changes
      priority: 0.5, // Priority of the resource
    }))
  );

  // Function to escape XML special characters
  const escapeXml = (unsafe: string) =>
    unsafe.replace(/[<>&'"]/g, (c) => {
      switch (c) {
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case "&":
          return "&amp;";
        case "'":
          return "&apos;";
        case '"':
          return "&quot;";
        default:
          return c;
      }
    });

  // Construct the XML content for the sitemap
  const content = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${escapeXml(baseUrl)}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      ${resourceUrls
        .map(
          (url) => `
      <url>
        <loc>${escapeXml(url.loc)}</loc>
        <lastmod>${url.lastmod}</lastmod>
        <changefreq>${url.changefreq}</changefreq>
        <priority>${url.priority}</priority>
      </url>`
        )
        .join("")}
    </urlset>`;

  // Return the generated XML response
  return new Response(content, {
    headers: {
      "Content-Type": "application/xml", // Set content type to XML
      "Content-Length": String(Buffer.from(content).length), // Set content length
    },
  });
};
