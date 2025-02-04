import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const googleModels = [
  {
    id: 1,
    name: "Gemini",
    link: "https://gemini.google.com",
    description:
      "Google's AI model for general-purpose question answering and tasks.",
    description2:
      "Gemini is Google's latest AI model, designed to leverage advanced machine learning techniques for accurate and context-aware responses. It excels in various applications, including natural language understanding, image processing, and real-time data analysis. Gemini's architecture allows it to handle complex queries and provide insightful answers, making it suitable for both casual users and professionals seeking reliable AI assistance.",
  },
  // Gemini Model Family
  {
    id: 2,
    name: "Gemini Ultra",
    link: "https://deepmind.google/technologies/gemini-ultra",
    description: "The most powerful model in the Gemini family.",
    description2:
      "Designed for highly complex tasks, Gemini Ultra offers advanced reasoning and problem-solving abilities.",
  },
  {
    id: 3,
    name: "Gemini Nano",
    link: "https://deepmind.google/technologies/gemini-nano",
    description: "Optimized for on-device tasks.",
    description2:
      "Gemini Nano operates efficiently on edge devices like smartphones, enabling AI capabilities without heavy cloud reliance.",
  },
  {
    id: 4,
    name: "Gemini 1.5 Pro",
    link: "https://deepmind.google/technologies/gemini-1.5-pro",
    description: "Mid-size multimodal model for reasoning tasks.",
    description2:
      "Optimized for tasks like processing large data sets, including extended video and audio content.",
  },
  {
    id: 5,
    name: "Gemini 1.5 Flash",
    link: "https://deepmind.google/technologies/gemini-1.5-flash",
    description: "Distilled version of Gemini 1.5 Pro for faster performance.",
    description2:
      "Provides versatility across various tasks while ensuring efficiency.",
  },
  {
    id: 6,
    name: "Gemini 1.5 Flash-8B",
    link: "https://deepmind.google/technologies/gemini-1.5-flash-8b",
    description: "Smaller variant of Gemini 1.5 Flash.",
    description2:
      "Designed for high-volume, low-intelligence tasks in resource-constrained environments.",
  },
  {
    id: 7,
    name: "Gemini 2.0 Flash Experimental",
    link: "https://deepmind.google/technologies/gemini-2.0-flash-experimental",
    description: "The latest experimental model in the Gemini series.",
    description2:
      "Features real-time audio and video interactions, enhanced spatial understanding, and text-to-speech generation.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
