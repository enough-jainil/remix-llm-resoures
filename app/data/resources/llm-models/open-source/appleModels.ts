import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const nvidiaModels = [
  {
    id: 1,
    name: "OpenELM",
    link: "https://huggingface.co/apple/OpenELM",
    description:
      "OpenELM is a family of efficient language models designed for enhanced accuracy and performance.",
    description2:
      "Utilizing a layer-wise scaling strategy, OpenELM offers pretrained models with 270M, 450M, 1.1B, and 3B parameters, trained on a diverse dataset totaling approximately 1.8 trillion tokens.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
