import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const nvidiaModels = [
  {
    id: 5,
    name: "Nemotron 4 340B Instruct",
    link: "https://huggingface.co/nvidia/Nemotron-4-340B-Instruct",
    description: "340B parameter model for synthetic data generation.",
    description2:
      "Part of the Nemotron-4 collection, this model is designed for Synthetic Data Generation (SDG) and includes Base, Instruct, and Reward models. It offers advanced capabilities for generating synthetic datasets, making it suitable for various AI applications.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
