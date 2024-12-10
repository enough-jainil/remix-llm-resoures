import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://resources.doreturn.in",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://resources.doreturn.in/courses",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://resources.doreturn.in/tutorials",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Add more URLs as needed
  ];
}
