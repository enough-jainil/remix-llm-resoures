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
  {
    id: 3,
    name: "NotebookLM",
    link: "https://notebooklm.google.com/", // Placeholder link, update with the actual link if available
    description:
      "NotebookLM Updates｜Audio Interactivity and more. Join the conversation with the podcast you're listening to! NotebookLM Update Brings New User Interface, Audio Interactivity, and a Premium Version NotebookLM Plus!🧵1/4",
    description2:
      "NotebookLM has introduced a new interface that optimizes the management and generation of new content based on your sources. The interface is redesigned into three areas: the 'Sources' panel manages the core information of your project, the 'Chat' panel discusses your sources through a conversational AI interface with citations, and the 'Studio' panel allows you to create new content from your sources with a single click, such as study guides, briefing documents, and audio overviews. NotebookLM is beginning to roll out the ability to 'join' conversations in audio overviews. Users can ask questions or request explanations of concepts in different ways using voice, as if they have a personal tutor or guide who listens attentively and responds directly, drawing from the knowledge in your sources. NotebookLM Plus: This is the premium subscription version of NotebookLM, offering new features and higher usage limits for heavy users, teams, and enterprises. Subscribers will receive benefits including more than five times the number of audio overviews, notebooks, and sources per notebook; the ability to customize the style and length of notebook responses; shared team notebooks with usage analytics; and additional privacy and security protections.",
  },
  {
    id: 4,
    name: "OpenRouter",
    link: "https://openrouter.ai/",
    description:
      "A unified API gateway providing access to multiple AI models from different providers.",
    description2:
      "OpenRouter is a platform that simplifies access to various AI models through a single API endpoint. It offers integration with models from providers like Anthropic, OpenAI, Google, and Meta, allowing developers to switch between different models without changing their code. The service features transparent pricing, pay-as-you-go billing, and automatic fallback options. Key benefits include simplified API access, cost optimization through automatic model routing, and the ability to use multiple AI providers without managing separate API keys and implementations. OpenRouter supports both chat completions and text completions, making it suitable for various AI applications.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
