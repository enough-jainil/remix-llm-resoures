import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const deepseekModels = [
  {
    id: 1,
    name: "DeepSeek-V2.5",
    link: "https://www.deepseek.com/",
    description:
      "DeepSeek's flagship model, excelling in reasoning, math, and coding tasks.",
    description2:
      "DeepSeek-V2.5 is an open-source model designed for general-purpose tasks and coding, highly competitive with leading models like GPT-4 and LLaMA3. It features innovative technologies such as Multi-head Latent Attention (MLA) for improved efficiency and is available for both academic and commercial use.",
  },
  {
    id: 2,
    name: "DeepSeek-V3",
    link: "https://github.com/deepseek-ai/DeepSeek-V3",
    description:
      "DeepSeek-V3 is a Mixture-of-Experts (MoE) language model with 671 billion total parameters, designed for efficient inference and cost-effective training.",
    description2:
      "It features innovative Multi-head Latent Attention (MLA) and an auxiliary-loss-free strategy for load balancing, achieving state-of-the-art performance in various tasks. DeepSeek-V3 is pre-trained on 14.8 trillion tokens and demonstrates competitive capabilities against leading closed-source models.",
  },
  {
    id: 3,
    name: "DeepSeek-R1",
    link: "https://github.com/deepseek-ai/DeepSeek-R1",
    description:
      "1.3B parameter language model optimized for reasoning and multilingual tasks",
    description2:
      "DeepSeek-R1 achieves state-of-the-art performance among models under 2B parameters, featuring enhanced reasoning capabilities and support for 17 languages. Utilizes innovative training techniques including Grouped Query Attention and Rotary Positional Embeddings for efficient inference.",
  },
  {
    id: 4,
    name: "DeepSeek-Math-7B",
    link: "https://www.deepseek.com/deepseek-math-7b",
    description: "7B parameter model optimized for mathematical reasoning.",
    description2:
      "DeepSeek-Math-7B excels in solving complex mathematical problems and reasoning tasks.",
  },
  {
    id: 5,
    name: "DeepSeek-Coder-1.3",
    link: "https://www.deepseek.com/deepseek-coder-1.3",
    description: "33B parameter model specialized for code generation.",
    description2:
      "DeepSeek-Coder-1.3 is designed for efficient code generation and understanding, providing advanced capabilities for developers.",
  },
  {
    id: 6,
    name: "DeepSeek-VL-1.3",
    link: "https://www.deepseek.com/deepseek-vl-1.3",
    description: "7B parameter model for vision-language tasks.",
    description2:
      "DeepSeek-VL-1.3 integrates visual and language understanding for enhanced multimodal applications.",
  },
  {
    id: 7,
    name: "DeepSeek-MoE-16B",
    link: "https://www.deepseek.com/deepseek-moe-16b",
    description: "16B parameter Mixture-of-Experts model.",
    description2:
      "DeepSeek-MoE-16B utilizes a mixture-of-experts architecture for efficient processing and performance.",
  },
  {
    id: 8,
    name: "DeepSeek-v2-236B-MoE",
    link: "https://www.deepseek.com/deepseek-v2-236b-moe",
    description: "236B parameter Mixture-of-Experts model.",
    description2:
      "DeepSeek-v2-236B-MoE is designed for high-performance tasks, leveraging a large number of parameters for complex problem-solving.",
  },
  {
    id: 9,
    name: "DeepSeek-Coder-v2-16",
    link: "https://www.deepseek.com/deepseek-coder-v2-16",
    description: "16B parameter model for advanced code generation.",
    description2:
      "DeepSeek-Coder-v2-16 is optimized for coding tasks, providing enhanced capabilities for developers.",
  },
  {
    id: 10,
    name: "Janus-Pro-7B",
    link: "https://huggingface.co/deepseek-ai/Janus-Pro-7B",
    description:
      "7B parameter model for unified multimodal understanding and generation.",
    description2:
      "Janus-Pro-7B is an advanced model that enhances multimodal understanding and visual generation capabilities, achieving significant advancements in text-to-image instruction-following.",
  },
  {
    id: 11,
    name: "JanusFlow-1.3B",
    link: "https://huggingface.co/deepseek-ai/JanusFlow-1.3B",
    description:
      "1.3B parameter model integrating autoregressive language models with rectified flow.",
    description2:
      "JanusFlow-1.3B harmonizes autoregression and rectified flow for improved multimodal understanding and generation, outperforming existing unified approaches.",
  },
  {
    id: 12,
    name: "Janus-1.3B",
    link: "https://huggingface.co/deepseek-ai/Janus-1.3B",
    description: "1.3B parameter model for multimodal tasks.",
    description2:
      "Janus-1.3B decouples visual encoding for unified multimodal understanding and generation, providing flexibility and high performance across various tasks.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
