import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const openaiModels = [
  {
    id: 1, // Unique identifier for the model
    name: "ChatGPT", // Name of the model
    link: "https://openai.com/chatgpt", // Link to the model's website
    description:
      "OpenAI's conversational AI for general-purpose question answering and tasks.", // Short description of the model
    description2:
      "ChatGPT is designed to assist users in generating human-like text based on the input provided. It has evolved through multiple iterations, enhancing its capabilities in understanding and generating natural language, making it a versatile tool for various applications, including content creation, coding assistance, and more.", // Detailed description of the model
  },
  // Overview of OpenAI Proprietary LLM Models
  {
    id: 2,
    name: "GPT-1",
    link: "https://openai.com/gpt-1",
    description: "OpenAI's first generative pre-trained transformer model.",
    description2:
      "Released in 2018, GPT-1 demonstrated the potential of unsupervised pre-training for language understanding.",
  },
  {
    id: 3,
    name: "GPT-2",
    link: "https://openai.com/gpt-2",
    description: "Significant improvement in language generation capabilities.",
    description2:
      "Released in 2019, GPT-2 featured 1.5 billion parameters, producing coherent and contextually relevant text.",
  },
  {
    id: 4,
    name: "GPT-3",
    link: "https://openai.com/gpt-3",
    description: "A major leap forward in NLP capabilities.",
    description2:
      "Launched in 2020, GPT-3 introduced 175 billion parameters, enabling a wide range of tasks from translation to coding assistance.",
  },
  {
    id: 5,
    name: "GPT-3.5",
    link: "https://openai.com/gpt-3.5",
    description: "Enhanced version of GPT-3 for better performance.",
    description2:
      "Released in March 2022, GPT-3.5 marked significant progress in NLP, excelling in generating coherent and contextually relevant text across diverse topics.",
  },
  {
    id: 6,
    name: "GPT-4",
    link: "https://openai.com/gpt-4",
    description: "Enhanced multimodal AI model for text and image processing.",
    description2:
      "Released in March 2023, GPT-4 introduced improved performance in understanding and generating nuanced text, alongside multimodal capabilities.",
  },
  {
    id: 7,
    name: "GPT-4o",
    link: "https://openai.com/gpt-4o",
    description:
      "Advanced multimodal model for text, image, and audio processing.",
    description2:
      "Introduced in May 2024, GPT-4o achieved state-of-the-art results across various benchmarks.",
  },
  {
    id: 8,
    name: "GPT-4o Mini",
    link: "https://openai.com/gpt-4o-mini",
    description:
      "Cost-effective version of GPT-4o for resource-limited environments.",
    description2:
      "Launched in July 2024, this smaller model provided high performance with reduced computational costs.",
  },
  {
    id: 9,
    name: "o1",
    link: "https://openai.com/o1",
    description: "Model focusing on enhanced reasoning capabilities.",
    description2:
      "Released in September 2024, o1 excelled in tasks requiring logical thinking and complex problem-solving.",
  },
  {
    id: 10,
    name: "o3",
    link: "https://openai.com/o3",
    description: "Successor to o1 with improved benchmark performance.",
    description2:
      "Unveiled in December 2024, o3 provided enhanced reasoning for challenging tasks and logical workflows.",
  },
  {
    id: 11,
    name: "Codex",
    link: "https://openai.com/codex",
    description: "AI model for programming and code generation.",
    description2:
      "Released in August 2021, Codex specializes in understanding and writing code, powering tools like GitHub Copilot to assist developers efficiently.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
