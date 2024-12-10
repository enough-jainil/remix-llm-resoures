import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = () => {
  const content = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://memoryview.in</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://memoryview.in/courses</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://memoryview.in/tutorials</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
      // Add more URLs as needed
    </urlset>`;

  return new Response(content, {
    headers: {
      "Content-Type": "application/xml",
      "Content-Length": String(Buffer.from(content).length),
    },
  });
};
