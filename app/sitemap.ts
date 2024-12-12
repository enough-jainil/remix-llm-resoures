import { MetadataRoute } from "next";
import { resourceBlocks } from "~/data/resources";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://memoryview.in";

  // Generate dynamic resource URLs
  const resourceUrls = resourceBlocks.flatMap((block) =>
    block.resources.map((resource) => ({
      url: `${baseUrl}/resource/${encodeURIComponent(
        block.tag2
      )}/${encodeURIComponent(resource.name)}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    }))
  );

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tutorials`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...resourceUrls, // Add dynamic resource URLs
  ];
}
