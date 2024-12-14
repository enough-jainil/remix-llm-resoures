import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const proprietaryModels = [
  {
    id: 1,
    name: "ChatGPT",
    link: "https://openai.com/chatgpt",
    description:
      "OpenAI's conversational AI for general-purpose question answering and tasks.",
    description2:
      "ChatGPT is designed to assist users in generating human-like text based on the input provided.",
  },
  {
    id: 2,
    name: "Gemini",
    link: "https://gemini.google.com",
    description:
      "Google's AI model for general-purpose question answering and tasks.",
    description2:
      "Gemini leverages advanced machine learning techniques to provide accurate and context-aware responses, making it suitable for a wide range of applications, from casual inquiries to complex problem-solving.",
  },
  {
    id: 3,
    name: "Claude",
    link: "https://anthropic.com/claude",
    description:
      "Anthropic's advanced AI assistant for analysis, writing, and coding tasks.",
    description2:
      "Claude is designed to assist users in generating human-like text based on the input provided.",
  },
  {
    id: 4,
    name: "Grok",
    link: "https://x.ai/",
    description:
      "Grok is now faster, sharper, and has improved multilingual support.",
    description2:
      "Grok is a new AI assistant from Groq, a company that specializes in building AI models. It leverages advanced machine learning techniques to provide real-time insights and assistance across various domains, making it a versatile tool for both personal and professional use.",
  },
  {
    id: 5,
    name: "Yi Model",
    link: "https://platform.lingyiwanwu.com/docs#%E6%A8%A1%E5%9E%8B%E4%B8%8E%E8%AE%A1%E8%B4%B9",
    description:
      "Yi Model offers advanced capabilities for various AI tasks, including video editing and API integration.",
    description2:
      "Yi Model is designed to enhance productivity with its versatile features, making it suitable for both individual and enterprise-level applications.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
