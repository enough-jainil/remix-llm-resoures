import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const qwenModels = [
  {
    id: 1,
    name: "Qwen 2.5 32B Instruct",
    link: "https://huggingface.co/qwen/Qwen-2.5-32B",
    description:
      "Qwen 2.5 32B is a transformer-based model that excels in language understanding, multilingual capabilities, coding, mathematics, and reasoning.",
    description2:
      "It features SwiGLU activation, attention QKV bias, and group query attention. It is pretrained on extensive data with supervised finetuning and direct preference optimization.",
  },
  {
    id: 2,
    name: "Qwen 2.5 72B Instruct",
    link: "https://huggingface.co/qwen/Qwen-2.5-72B",
    description:
      "Qwen 2.5 72B is a transformer-based model that excels in language understanding, multilingual capabilities, coding, mathematics, and reasoning.",
    description2:
      "It features SwiGLU activation, attention QKV bias, and group query attention. It is pretrained on extensive data with supervised finetuning and direct preference optimization.",
  },
  {
    id: 3,
    name: "Qwen2.5-VL (Vision-Language)",
    link: "https://qwenlm.github.io/blog/qwen2.5-vl/",
    description:
      "Multimodal model excelling in visual understanding, agent capabilities, and long video comprehension",
    description2:
      "Qwen2.5-VL introduces native visual localization, structured output generation, and dynamic tool orchestration capabilities. Key features include 1+ hour video understanding, visual grounding with bounding boxes/points, and efficient dynamic resolution ViT encoder. Available in 3B, 7B, and 72B parameter sizes.",
  },
  {
    id: 4,
    name: "Qwen2.5-7B-Instruct-1M",
    link: "https://qwenlm.github.io/blog/qwen2.5-1m/",
    description: "7B parameter model with 1M token context length support",
    description2:
      "First open-source Qwen model supporting 1M-token contexts. Features 3-7x faster processing with sparse attention integration and vLLM-based inference framework. Includes technical report detailing training/inference optimizations.",
  },
  {
    id: 5,
    name: "Qwen 2.5 Coder 7B",
    link: "https://huggingface.co/qwen/Qwen-2.5-Coder-7B",
    description:
      "Qwen 2.5 Coder 7B is designed specifically for coding tasks, enhancing code generation and reasoning capabilities.",
    description2:
      "It provides advanced features for code completion and debugging, making it suitable for developers.",
  },
  {
    id: 6,
    name: "Qwen 2.5 Coder 32B",
    link: "https://huggingface.co/qwen/Qwen-2.5-Coder-32B",
    description:
      "Qwen 2.5 Coder 32B is a large language model focused on code generation and reasoning.",
    description2:
      "It significantly improves coding capabilities while maintaining strengths in mathematics and general competencies.",
  },
  {
    id: 7,
    name: "Qwen2.5-14B-Instruct-1M",
    link: "https://qwenlm.github.io/blog/qwen2.5-1m/",
    description: "14B parameter model with million-token context capabilities",
    description2:
      "Scales up Qwen's 1M-token context capabilities to 14B parameters. Maintains high throughput with optimized attention mechanisms and improved memory management. Released alongside comprehensive technical documentation.",
  },
  {
    id: 8,
    name: "Qwen2.5-Max",
    link: "https://qwenlm.github.io/blog/qwen2.5-max/",
    description:
      "Large-scale MoE model with 20T token pretraining and RLHF optimization",
    description2:
      "Qwen2.5-Max utilizes innovative Multi-head Latent Attention (MLA) architecture, achieving 95% of GPT-4 Turbo's performance while maintaining training efficiency. Features 128K context length and advanced reasoning capabilities through scaled reinforcement learning methodologies.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
