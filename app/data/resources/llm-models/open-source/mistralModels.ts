import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const mistralModels = [
  {
    id: 4,
    name: "Mistral 7B",
    link: "https://huggingface.co/mistral/Mistral-7B",
    description: "Mistral's first dense model with 7 billion parameters.",
    description2:
      "Released in September 2023, this model matches the capabilities of models up to 30B parameters, making it suitable for experimentation, customization, and quick iteration.",
  },
  {
    id: 4.1,
    name: "Mixtral 8x7B",
    link: "https://huggingface.co/mistral/Mixtral-8x7B",
    description:
      "Sparse mixture-of-experts model leveraging up to 45 billion parameters.",
    description2:
      "Introduced in December 2023, this model uses about 12 billion during inference, enhancing throughput for various tasks.",
  },
  {
    id: 4.2,
    name: "Mixtral 8x22B",
    link: "https://huggingface.co/mistral/Mixtral-8x22B",
    description:
      "Mistral's largest open-source model with up to 141 billion parameters.",
    description2:
      "Launched in April 2024, it employs about 39 billion during inference, offering excellent performance in code-related tasks and multilingual capabilities.",
  },
  {
    id: 4.3,
    name: "Mistral NeMo",
    link: "https://huggingface.co/mistral/Mistral-NeMo",
    description:
      "Multilingual open-source model for a wide range of languages.",
    description2:
      "Released in July 2024, this model enhances versatility in various applications.",
  },
  {
    id: 4.4,
    name: "Codestral Mamba",
    link: "https://huggingface.co/mistral/Codestral-Mamba",
    description: "Model tailored for code generation tasks.",
    description2:
      "Introduced in July 2024, it leverages the Mamba 2 architecture to handle longer inputs efficiently.",
  },
  {
    id: 4.5,
    name: "Mathstral",
    link: "https://huggingface.co/mistral/Mathstral",
    description: "Model focused on mathematical reasoning and problem-solving.",
    description2:
      "Unveiled in July 2024, Mathstral is suitable for STEM-related applications.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
