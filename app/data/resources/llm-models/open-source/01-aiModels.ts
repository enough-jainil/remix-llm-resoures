import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const oneaiModels = [
  {
    id: 1,
    name: "Yi-VL 34B",
    link: "https://huggingface.co/collections/01-ai/yi-vl-663f557228538eae745769f3",
    description: "Image-Text-to-Text model for versatile applications.",
    description2:
      "Updated on June 26, this model excels in generating text from images, making it suitable for a variety of AI tasks involving visual data.",
  },
  {
    id: 2,
    name: "Yi 1.5 34B Chat",
    link: "https://huggingface.co/collections/01-ai/yi-15-2024-05-663f3ecab5f815a3eaca7ca8",
    description: "Text generation model optimized for conversational AI.",
    description2:
      "Updated on August 27, this model is designed for engaging and coherent dialogue, making it ideal for chat applications.",
  },
  {
    id: 3,
    name: "Yi 34B 200K",
    link: "https://huggingface.co/collections/01-ai/yi-2023-11-663f3f19119ff712e176720f",
    description: "Advanced text generation model with extensive training.",
    description2:
      "Updated on November 11, this model offers high-quality text generation capabilities, suitable for various content creation tasks.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
