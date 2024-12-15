import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const proprietaryModels = [
  {
    id: 1,
    name: "ChatGPT",
    link: "https://openai.com/chatgpt",
    description:
      "OpenAI's conversational AI for general-purpose question answering and tasks.",
    description2:
      "ChatGPT is designed to assist users in generating human-like text based on the input provided. It has evolved through multiple iterations, enhancing its capabilities in understanding and generating natural language, making it a versatile tool for various applications, including content creation, coding assistance, and more.",
  },
  {
    id: 2,
    name: "Gemini",
    link: "https://gemini.google.com",
    description:
      "Google's AI model for general-purpose question answering and tasks.",
    description2:
      "Gemini is Google's latest AI model, designed to leverage advanced machine learning techniques for accurate and context-aware responses. It excels in various applications, including natural language understanding, image processing, and real-time data analysis. Gemini's architecture allows it to handle complex queries and provide insightful answers, making it suitable for both casual users and professionals seeking reliable AI assistance.",
  },
  {
    id: 3,
    name: "Claude",
    link: "https://anthropic.com/claude",
    description:
      "Anthropic's advanced AI assistant for analysis, writing, and coding tasks.",
    description2:
      "Claude is designed to assist users in generating human-like text based on the input provided. It is trained on the latest real-time data, making it capable of providing up-to-date information and insights. Claude excels in various applications, including content creation, data analysis, and coding assistance. Accessible through platforms like Slack, it offers a user-friendly interface for seamless interaction, making it a valuable tool for both casual users and professionals seeking reliable AI support.",
  },
  {
    id: 4,
    name: "Grok",
    link: "https://x.ai/",
    description:
      "Grok is now faster, sharper, and has improved multilingual support.",
    description2:
      "Grok is an AI chatbot developed by Elon Musk’s company xAI, capable of generating text and engaging in conversations with users. It has real-time access to information through the social media platform X (formerly Twitter), allowing it to respond to edgy and provocative questions with witty and rebellious answers. Grok operates in two modes: 'Fun Mode' for humorous interactions and 'Regular Mode' for more accurate responses. It was trained using a custom tech stack, including Kubernetes, JAX, and Rust, enabling efficient development. Grok's unique personality is inspired by Douglas Adams' 'The Hitchhiker’s Guide to the Galaxy,' aiming to provide a playful yet insightful conversational experience. Unlike other chatbots, Grok is designed to tackle taboo topics and provide unfiltered responses, making it a distinct alternative to more politically correct models like ChatGPT.",
  },
  {
    id: 5,
    name: "Yi",
    link: "https://huggingface.co/01-ai",
    description:
      "The Yi model family includes language and multimodal models with strong multi-dimensional capabilities, based on 6B and 34B pretrained models.",
    description2:
      "Yi models are designed for various tasks, including chat, long context, and vision-language applications. They achieve strong performance on benchmarks like MMLU and are built on a scalable super-computing infrastructure with a focus on data quality, utilizing 3.1 trillion tokens of English and Chinese corpora for pretraining.",
  },
  {
    id: 6,
    name: "Phi-3",
    link: "https://huggingface.co/collections/microsoft/phi-3-6626e15e9585a200d2d761e3/",
    description:
      "Phi-3 is a family of small open models developed by Microsoft, optimized for Azure AI, capable of outperforming larger models across various benchmarks.",
    description2:
      "Phi-3 models, including Phi-3-mini, Phi-3-small, and Phi-3-medium, are designed for cost-effective performance in language, reasoning, coding, and math tasks. Phi-3-mini supports context lengths of up to 128K tokens and is instruction-tuned for immediate usability. These models are ideal for resource-constrained environments and latency-sensitive applications, making them accessible for a wide range of generative AI applications.",
  },
  {
    id: 7,
    name: "Pixtral Large",
    link: "https://huggingface.co/mistralai/Pixtral-Large-Instruct-2411",
    description:
      "A 124B open-weights multimodal model built on top of Mistral Large 2.",
    description2:
      "Pixtral Large demonstrates frontier-class multimodal performance, excelling on benchmarks like MathVista, DocVQA, and VQAv2. It features a 123B multimodal decoder and a 1B parameter vision encoder, with a 128K context window that can fit a minimum of 30 high-resolution images. Available under the Mistral Research License for research and educational use, and the Mistral Commercial License for commercial purposes.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
