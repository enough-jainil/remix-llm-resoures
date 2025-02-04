import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const googleModels = [
  {
    id: 7,
    name: "Gemma2-9",
    link: "https://blog.google/technology/developers/google-gemma-2/",
    description: "27B parameter model for advanced language tasks.",
    description2:
      "Gemma2-9 is designed for high-performance language understanding and generation, suitable for various applications.",
  },
  {
    id: 7.1,
    name: "Gemma-2",
    link: "https://blog.google/technology/developers/gemma-open-models/",
    description: "7B parameter model optimized for conversational AI.",
    description2:
      "Gemma-2 excels in dialogue generation and understanding, providing robust conversational capabilities.",
  },
  {
    id: 7.2,
    name: "RecurrentGemma-2B",
    link: "https://github.com/google-deepmind/recurrentgemma",
    description: "Recurrent model for enhanced context handling.",
    description2:
      "RecurrentGemma-2B is designed to maintain context over longer interactions, improving conversational flow.",
  },
  {
    id: 7.3,
    name: "T5",
    link: "https://arxiv.org/abs/1910.10683",
    description: "Text-to-Text Transfer Transformer model.",
    description2:
      "T5 is a versatile model that converts all NLP tasks into a text-to-text format, enabling a wide range of applications.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
