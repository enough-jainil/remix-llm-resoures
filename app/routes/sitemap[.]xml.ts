import type { LoaderFunction } from "@remix-run/node";
import { resourceBlocks } from "~/data/resources";
import { routes } from "~/utils/routes";

export const loader: LoaderFunction = () => {
  const baseUrl = "https://memoryview.in";

  // Generate dynamic resource URLs
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

  const content = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>${baseUrl}/courses</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>${baseUrl}/tutorials</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
      ${resourceUrls
        .map(
          (url) => `
      <url>
        <loc>${url.loc}</loc>
        <lastmod>${url.lastmod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>
      </url>
      `
        )
        .join("")}
    </urlset>`;

  return new Response(content, {
    headers: {
      "Content-Type": "application/xml",
      "Content-Length": String(Buffer.from(content).length),
    },
  });
};
