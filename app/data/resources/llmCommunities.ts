import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const llmCommunities = [
  {
    id: 1,
    name: "Hugging Face Forums",
    link: "https://discuss.huggingface.co/",
    description:
      "Official community for Hugging Face, discussing ML models, datasets, and implementations.",
  },
  {
    id: 2,
    name: "r/LocalLLaMA",
    link: "https://www.reddit.com/r/LocalLLaMA/",
    description:
      "Reddit community focused on running and fine-tuning LLaMA models locally.",
  },
  {
    id: 3,
    name: "r/MachineLearning",
    link: "https://www.reddit.com/r/MachineLearning/",
    description:
      "Largest ML community on Reddit, covering latest research and developments.",
  },
  {
    id: 4,
    name: "r/ArtificialIntelligence",
    link: "https://www.reddit.com/r/artificial/",
    description:
      "Reddit's main community for AI discussions, news, and developments.",
  },
  {
    id: 5,
    name: "r/ChatGPT",
    link: "https://www.reddit.com/r/ChatGPT/",
    description:
      "Community focused on ChatGPT, its applications, and latest updates.",
  },
  {
    id: 6,
    name: "r/Singularity",
    link: "https://www.reddit.com/r/singularity/",
    description:
      "Discussions about technological singularity, AGI, and future of AI.",
  },
  {
    id: 7,
    name: "LangChain Discord",
    link: "https://discord.gg/langchain",
    description:
      "Official Discord for LangChain framework discussions and support.",
  },
  {
    id: 8,
    name: "Weights & Biases Community",
    link: "https://wandb.ai/community",
    description:
      "Community platform for ML practitioners sharing experiments and insights.",
  },
  {
    id: 9,
    name: "AI Alignment Forum",
    link: "https://www.alignmentforum.org/",
    description:
      "Discussion forum focused on AI safety and alignment research.",
  },
  {
    id: 10,
    name: "EleutherAI Discord",
    link: "https://discord.gg/eleutherai",
    description:
      "Community of researchers working on open source LLMs and ML research.",
  },
  {
    id: 11,
    name: "MLOps Community",
    link: "https://mlops.community/",
    description:
      "Community focused on ML operations, deployment, and engineering.",
  },
  {
    id: 12,
    name: "Papers with Code Discord",
    link: "https://discord.gg/paperswithcode",
    description: "Discussion of latest ML papers and their implementations.",
  },
  {
    id: 13,
    name: "Together.ai Discord",
    link: "https://discord.gg/together",
    description:
      "Community focused on deploying and fine-tuning open source LLMs.",
  },
  {
    id: 14,
    name: "r/ClaudeAI",
    link: "https://www.reddit.com/r/ClaudeAI/",
    description:
      "Community focused on discussions and developments related to Claude AI.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
