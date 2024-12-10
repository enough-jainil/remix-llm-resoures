const getFaviconUrl = (link: string) => {
  const domain = new URL(link).hostname;
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
};

export const aiApps = [
  {
    title: "AI Applications",
    description:
      "Popular applications and tools powered by artificial intelligence",
    color: "purple",
    resources: [
      {
        id: 1,
        name: "Midjourney",
        link: "https://www.midjourney.com/",
        description: "AI-powered image generation from text descriptions",
      },
      {
        id: 2,
        name: "DALL-E",
        link: "https://openai.com/dall-e-2",
        description: "OpenAI's text-to-image generation model",
      },
      {
        id: 3,
        name: "Stable Diffusion",
        link: "https://stability.ai/",
        description: "Open-source image generation model",
      },
      {
        id: 4,
        name: "Runway",
        link: "https://runwayml.com/",
        description: "AI-powered creative tools for video and content creation",
      },
      {
        id: 5,
        name: "Synthesia",
        link: "https://www.synthesia.io/",
        description: "AI video generation platform",
      },
    ].map((resource) => ({
      ...resource,
      favicon: getFaviconUrl(resource.link),
    })),
  },
];
