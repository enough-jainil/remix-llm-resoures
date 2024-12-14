import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const proprietaryModels = [
  {
    id: 1,
    name: "ChatGPT",
    link: "https://openai.com/chatgpt",
    description:
      "OpenAI's conversational AI for general-purpose question answering and tasks.",
  },
  {
    id: 2,
    name: "Jasper AI",
    link: "https://www.jasper.ai/",
    description:
      "AI-powered content creation tool for marketing, copywriting, and more.",
  },
  {
    id: 3,
    name: "GitHub Copilot",
    link: "https://github.com/features/copilot",
    description:
      "AI pair programmer that suggests code completions and snippets.",
  },
  {
    id: 4,
    name: "Claude",
    link: "https://anthropic.com/claude",
    description:
      "Anthropic's advanced AI assistant for analysis, writing, and coding tasks.",
  },
  {
    id: 5,
    name: "Bard",
    link: "https://bard.google.com",
    description:
      "Google's experimental conversational AI service powered by PaLM.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
