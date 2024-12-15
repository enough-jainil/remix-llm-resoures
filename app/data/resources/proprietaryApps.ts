import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const proprietaryApps = [
  {
    id: 1,
    name: "Google Smart Glasses - Project Astra",
    link: "https://www.google.com/ai/astra", // Placeholder link, update with the actual link if available
    description:
      "The Google smart glasses, part of the AI project Astra, come with a display and allow users to take photos, check framing, and access applications like Google Maps. They integrate Gemini AI for voice control and natural conversations, with most processing done on a paired smartphone.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
