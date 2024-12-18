import type { LoaderFunction } from "@remix-run/node";
import { resourceBlocks } from "~/data/resources";
import { routes } from "~/utils/routes";

// Loader function to generate the sitemap XML
export const loader: LoaderFunction = () => {
  const baseUrl = "https://memoryview.in";

  // Generate URLs for all resources
  const resourceUrls = resourceBlocks.flatMap((block) =>
    block.resources.map((resource) => ({
      loc: `${baseUrl}${routes.resourceDetail(
        block.tag,
        block.tag2,
        resource.name
      )}`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.5,
    }))
  );

  // Add static URLs
  // const staticUrls = [
  //   {
  //     loc: baseUrl,
  //     lastmod: new Date().toISOString(),
  //     changefreq: "daily",
  //     priority: 1.0,
  //   },
  //   {
  //     loc: `${baseUrl}/courses`,
  //     lastmod: new Date().toISOString(),
  //     changefreq: "weekly",
  //     priority: 0.8,
  //   },
  //   {
  //     loc: `${baseUrl}/tutorials`,
  //     lastmod: new Date().toISOString(),
  //     changefreq: "weekly",
  //     priority: 0.8,
  //   },
  // ];

  // Combine static and dynamic URLs
  const allUrls = [...staticUrls, ...resourceUrls];

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

  // Generate XML with all URLs
  const content = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allUrls
        .map(
          (url) => `
      <url>
        <loc>${escapeXml(url.loc)}</loc>
        <lastmod>${url.lastmod}</lastmod>
        <changefreq>${url.changefreq}</changefreq>
        <priority>${url.priority}</priority>
      </url>
      `
        )
        .join("")}
    </urlset>`;

  // Return the generated XML response
  return new Response(content, {
    headers: {
      "Content-Type": "application/xml",
      "Content-Length": String(Buffer.from(content).length),
    },
  });
};
