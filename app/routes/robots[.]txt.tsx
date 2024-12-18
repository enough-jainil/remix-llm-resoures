import type { LoaderFunctionArgs } from "@remix-run/node";

export function loader({ request }: LoaderFunctionArgs) {
  const robotText = `
# Allow all crawlers
User-agent: *
Allow: /

# Sitemap location (uncomment and update when you have a sitemap)
Sitemap: https://memoryview.in/sitemap.xml
`;

  return new Response(robotText, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
