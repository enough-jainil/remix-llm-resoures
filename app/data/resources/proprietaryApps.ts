import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const proprietaryApps = [
  {
    id: 1,
    name: "Google Smart Glasses - Project Astra",
    link: "https://www.google.com/ai/astra", // Placeholder link, update with the actual link if available
    description:
      "The Google smart glasses, part of the AI project Astra, come with a display and allow users to take photos, check framing, and access applications like Google Maps. They integrate Gemini AI for voice control and natural conversations, with most processing done on a paired smartphone.",
  },
  {
    id: 2,
    name: "Meshtron",
    link: "https://research.nvidia.com/labs/dir/meshtron/",
    description:
      "Nvidia's autoregressive mesh generation model, Meshtron, can generate meshes with up to 64K faces and a coordinate resolution of 1024 levels, significantly surpassing existing methods. It reduces memory requirements by over 50% during training and increases throughput by 2.5 times.",
    description2:
      "Meshtron enables the generation of complex 3D object meshes with unprecedented resolution and fidelity, making it suitable for animation, gaming, and virtual environments.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
