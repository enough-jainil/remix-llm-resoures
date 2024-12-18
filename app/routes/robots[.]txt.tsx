import type { LoaderFunctionArgs } from "@remix-run/node";

export function loader({ request }: LoaderFunctionArgs) {
  const robotText = `User-agent: *
Allow: /
Disallow:

# Sitemap location
Sitemap: https://memoryview.in/sitemap.xml`;

  return new Response(robotText, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
