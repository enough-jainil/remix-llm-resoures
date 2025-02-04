import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const xaiModels = [
  {
    id: 1,
    name: "Grok",
    link: "https://x.ai/",
    description:
      "Grok is now faster, sharper, and has improved multilingual support.",
    description2:
      "Grok is an AI chatbot developed by Elon Musk's company xAI, capable of generating text and engaging in conversations with users. It has real-time access to information through the social media platform X (formerly Twitter), allowing it to respond to edgy and provocative questions with witty and rebellious answers. Grok operates in two modes: 'Fun Mode' for humorous interactions and 'Regular Mode' for more accurate responses. It was trained using a custom tech stack, including Kubernetes, JAX, and Rust, enabling efficient development. Grok's unique personality is inspired by Douglas Adams' 'The Hitchhiker's Guide to the Galaxy,' aiming to provide a playful yet insightful conversational experience. Unlike other chatbots, Grok is designed to tackle taboo topics and provide unfiltered responses, making it a distinct alternative to more politically correct models like ChatGPT.",
  },
  {
    id: 2,
    name: "Grok-1",
    link: "https://x.ai/blog/grok-os",
    description:
      "314B parameter Mixture-of-Experts model with open-source weights.",
    description2:
      "Grok-1 is a 314 billion parameter Mixture-of-Experts model trained from scratch by xAI, designed for generating text and engaging in conversations. It operates in two modes: 'Fun Mode' for humorous interactions and 'Regular Mode' for more accurate responses. Grok-1 has real-time access to information through the social media platform X (formerly Twitter), allowing it to respond to edgy and provocative questions. This model is not fine-tuned for any specific application and was developed using a custom tech stack on JAX and Rust. For more details, visit the [Grok-1 blog](https://x.ai/blog/grok-os).",
  },
  {
    id: 3,
    name: "Grok-1.5",
    link: "https://x.ai/blog/grok-1-5",
    description: "Enhanced model with 128K token context length.",
    description2:
      "Announced on March 29, 2024, Grok-1.5 introduced improved reasoning capabilities and an extended context length of 128,000 tokens, enabling more complex and nuanced language processing.",
  },
  {
    id: 4,
    name: "Grok-1.5 Vision",
    link: "https://x.ai/blog/grok-1-5v",
    description: "First multimodal model in the Grok family.",
    description2:
      "Introduced on April 12, 2024, Grok-1.5V is xAI's first multimodal model, capable of processing a wide variety of visual information, including documents, diagrams, graphs, screenshots, and photographs, enhancing its applicability across diverse tasks.",
  },
  {
    id: 5,
    name: "Grok-2",
    link: "https://x.ai/blog/grok-2",
    description: "Advanced model with image generation capabilities.",
    description2:
      "Grok-2 represents a significant advancement over its predecessor, Grok-1.5, showcasing frontier capabilities in chat, coding, and reasoning. It has been tested on the LMSYS leaderboard, outperforming both Claude 3.5 Sonnet and GPT-4-Turbo. Grok-2 is designed for real-time information access and excels in various academic benchmarks, including reasoning, reading comprehension, and coding tasks. It is available in beta on 𝕏 and will be accessible through an enterprise API for developers.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
