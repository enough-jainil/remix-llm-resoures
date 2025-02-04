import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const microsoftModels = [
  {
    id: 1,
    name: "Phi-1",
    link: "https://huggingface.co/collections/microsoft/phi-1-6626e29134744e94e222d572", // placeholder link
    description:
      "The initial model in the series, offering strong performance for smaller tasks.",
    description2:
      "Phi-1 is designed for efficient performance on less intensive tasks, providing a good balance of speed and resource usage.",
  },
  {
    id: 2,
    name: "Phi-2",
    link: "https://www.microsoft.com/phi-2", // placeholder link
    description: "An improved version with better accuracy and efficiency.",
    description2:
      "Phi-2 enhances the initial capabilities with improved accuracy and streamlined performance for more demanding applications.",
  },
  {
    id: 3,
    name: "Phi-3",
    link: "https://huggingface.co/collections/microsoft/phi-3-6626e15e9585a200d2d761e3", // placeholder link
    description:
      "Available in mini, small, medium, and vision versions, trained with different parameter amounts to serve various application scenarios.",
    description2:
      "Phi-3 comes in multiple sizes, tailoring its performance and resource requirements to fit specific use cases, including a vision-enabled version for multimodal tasks.",
  },
  {
    id: 4,
    name: "Phi-3.5",
    link: "https://techcommunity.microsoft.com/blog/azure-ai-services-blog/discover-the-new-multi-lingual-high-quality-phi-3-5-slms/4225280", // placeholder link
    description:
      "Optimized for specific use cases, including Windows Copilot+ PCs.",
    description2:
      "Phi-3.5 is fine-tuned for optimal performance in targeted scenarios such as integration with Windows systems, providing enhanced support for productivity applications.",
  },
  {
    id: 5,
    name: "Phi-4",
    link: "https://huggingface.co/collections/microsoft/phi-4-677e9380e514feb5577a40e4", // placeholder link
    description:
      "The latest addition, specializing in complex reasoning and math problems.",
    description2:
      "Phi-4 takes on the most demanding tasks with advanced reasoning capabilities and is particularly adept at solving complex mathematical challenges.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
