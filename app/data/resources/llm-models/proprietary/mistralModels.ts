import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const mistralModels = [
  {
    id: 1,
    name: "Mistral Large 2411",
    link: "https://mistral.ai/models/mistral-large-2411",
    description:
      "Updated version of Mistral Large 2 with significant improvements.",
    description2:
      "An updated version of Mistral Large 2, released alongside Pixtral Large 2411. It offers significant improvements in long-context understanding, a new system prompt, and more accurate function calling. Features a 128K token context window.",
  },
  {
    id: 2,
    name: "Mistral Large 2407",
    link: "https://mistral.ai/models/mistral-large-2407",
    description: "Flagship model excelling in reasoning and code generation.",
    description2:
      "Mistral AI's flagship model, excelling in reasoning, code generation, JSON handling, and chat functionalities. Supports multiple languages, including French, German, Spanish, Italian, Portuguese, Arabic, Hindi, Russian, Chinese, Japanese, and Korean, as well as over 80 coding languages. Equipped with a 128K token context window.",
  },
  {
    id: 3,
    name: "Pixtral Large 2411",
    link: "https://mistral.ai/models/pixtral-large-2411",
    description: "Open-weight multimodal model built on Mistral Large 2.",
    description2:
      "A 124B parameter, open-weight, multimodal model built on Mistral Large 2. Capable of understanding documents, charts, and natural images. Available under the Mistral Research License (MRL) for research and educational use, and the Mistral Commercial License for commercial purposes. Features a 128K token context window.",
  },
  {
    id: 4,
    name: "Ministral 8B",
    link: "https://mistral.ai/models/ministral-8b",
    description: "8B parameter model for faster, memory-efficient inference.",
    description2:
      "An 8B parameter model with an interleaved sliding-window attention pattern for faster, memory-efficient inference. Designed for edge use cases, supporting up to a 128K token context length. Excels in knowledge and reasoning tasks, outperforming peers in the sub-10B category.",
  },
  {
    id: 5,
    name: "Ministral 3B",
    link: "https://mistral.ai/models/ministral-3b",
    description: "3B parameter model optimized for edge computing.",
    description2:
      "A 3B parameter model optimized for on-device and edge computing. Excels in knowledge, commonsense reasoning, and function-calling, outperforming larger models like Mistral 7B on most benchmarks. Supports up to a 128K token context length.",
  },
  {
    id: 6,
    name: "Pixtral 12B",
    link: "https://mistral.ai/models/pixtral-12b",
    description: "First multimodal text+image-to-text model.",
    description2:
      "Mistral's first multimodal, text+image-to-text model. Weights were launched via torrent. Supports a 4K token context window.",
  },
  {
    id: 7,
    name: "Mistral Nemo",
    link: "https://mistral.ai/models/mistral-nemo",
    description: "12B parameter multilingual model.",
    description2:
      "A 12B parameter model with a 128K token context length, built in collaboration with NVIDIA. Multilingual, supporting languages such as English, French, German, Spanish, Italian, Portuguese, Chinese, Japanese, Korean, Arabic, and Hindi. Supports function calling and is released under the Apache 2.0 license.",
  },
  {
    id: 8,
    name: "Codestral Mamba",
    link: "https://mistral.ai/models/codestral-mamba",
    description: "7.3B parameter model for code and reasoning tasks.",
    description2:
      "A 7.3B parameter model based on the Mamba 2 architecture, designed for code and reasoning tasks. Features linear time inference, allowing for theoretically infinite sequence lengths, with a 256K token context window. Optimized for quick responses, especially beneficial for code productivity. Available under the Apache 2.0 license.",
  },
  {
    id: 9,
    name: "Mistral 7B Instruct",
    link: "https://mistral.ai/models/mistral-7b-instruct",
    description: "High-performing 7.3B parameter model.",
    description2:
      "A high-performing, industry-standard 7.3B parameter model, optimized for speed and context length. Supports a 33K token context window.",
  },
  {
    id: 10,
    name: "Mixtral 8x22B Instruct",
    link: "https://mistral.ai/models/mixtral-8x22b-instruct",
    description: "Official instruct fine-tuned version of Mixtral 8x22B.",
    description2:
      "Mistral's official instruct fine-tuned version of Mixtral 8x22B, utilizing 39B active parameters out of 141B, offering unparalleled cost efficiency for its size. Strengths include strong math, coding, and reasoning capabilities, with a large context length of 66K tokens.",
  },
  // ... other Mistral models
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
