import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const openSourceModels = [
  {
    id: 1,
    name: "Llama-3-405B",
    link: "https://huggingface.co/meta-llama/Llama-3-405b",
    description:
      "Meta's latest and largest model with 405B parameters and enhanced capabilities.",
  },
  {
    id: 2,
    name: "Llama-3-70B",
    link: "https://huggingface.co/meta-llama/Llama-3-70b",
    description:
      "More efficient version of Llama 3 with strong performance at 70B scale.",
  },
  {
    id: 3,
    name: "Llama-3-32B",
    link: "https://huggingface.co/meta-llama/Llama-3-32b",
    description:
      "Balanced version of Llama 3 optimized for broader accessibility.",
  },
  {
    id: 4,
    name: "Qwen-2.5-72B",
    link: "https://huggingface.co/Qwen/Qwen2-72B",
    description:
      "Latest version of Qwen with improved instruction following and reasoning.",
  },
  {
    id: 5,
    name: "Qwen-Coder-2.5",
    link: "https://huggingface.co/Qwen/Qwen-2.5-CodeLLaMA",
    description:
      "Alibaba's latest code generation model based on CodeLLaMA architecture.",
  },
  {
    id: 6,
    name: "Qwen-2.5-4B",
    link: "https://huggingface.co/Qwen/Qwen2-4B",
    description: "Efficient version of Qwen 2.5 optimized for deployment.",
  },
  {
    id: 7,
    name: "Code Gemma-7B",
    link: "https://huggingface.co/google/code-gemma-7b",
    description:
      "Google's code-specialized Gemma model optimized for programming tasks.",
  },
  {
    id: 8,
    name: "Code Gemma-2B",
    link: "https://huggingface.co/google/code-gemma-2b",
    description:
      "Lightweight version of Code Gemma for efficient code generation.",
  },
  {
    id: 9,
    name: "Gemma-7B",
    link: "https://huggingface.co/google/gemma-7b",
    description:
      "Google's latest open source model series with strong performance.",
  },

  // Late 2023 Releases
  {
    id: 10,
    name: "Mixtral-8x7B",
    link: "https://huggingface.co/mistralai/Mixtral-8x7B-v0.1",
    description: "Sparse mixture of experts model with 47B parameters.",
  },
  {
    id: 11,
    name: "Mistral-7B",
    link: "https://huggingface.co/mistralai/Mistral-7B-v0.1",
    description: "High-performance 7B model with sliding window attention.",
  },
  {
    id: 12,
    name: "OpenHermes-2.5-Mistral-7B",
    link: "https://huggingface.co/teknium/OpenHermes-2.5-Mistral-7B",
    description: "Instruction-tuned Mistral model for chat and reasoning.",
  },
  {
    id: 13,
    name: "Zephyr-7B",
    link: "https://huggingface.co/HuggingFaceH4/zephyr-7b-beta",
    description:
      "Fine-tuned Mistral model with improved instruction following.",
  },

  // Mid 2023 Releases
  {
    id: 14,
    name: "Llama-2-70B",
    link: "https://huggingface.co/meta-llama/Llama-2-70b",
    description:
      "Meta's largest open source model with strong reasoning capabilities.",
  },
  {
    id: 15,
    name: "CodeLlama-34B",
    link: "https://huggingface.co/codellama/CodeLlama-34b-hf",
    description: "Specialized code generation model based on Llama 2.",
  },
  {
    id: 16,
    name: "Falcon-180B",
    link: "https://huggingface.co/tiiuae/falcon-180B",
    description: "TII's largest open source model with 180B parameters.",
  },
  {
    id: 17,
    name: "Yi-34B",
    link: "https://huggingface.co/01-ai/Yi-34B",
    description: "Large bilingual model trained on diverse datasets.",
  },

  // Early 2023 Releases
  {
    id: 18,
    name: "MPT-30B",
    link: "https://huggingface.co/mosaicml/mpt-30b",
    description:
      "MosaicML's efficient transformer model with strong performance.",
  },
  {
    id: 19,
    name: "SOLAR-10.7B",
    link: "https://huggingface.co/upstage/SOLAR-10.7B-v1.0",
    description: "Upstage's model optimized for long context understanding.",
  },
  {
    id: 20,
    name: "Vicuna-13B",
    link: "https://huggingface.co/lmsys/vicuna-13b-v1.5",
    description: "Fine-tuned LLaMA model with strong chat capabilities.",
  },

  // 2022 and Earlier
  {
    id: 21,
    name: "BLOOM-176B",
    link: "https://huggingface.co/bigscience/bloom",
    description:
      "Multilingual model supporting 46+ languages and 13 programming languages.",
  },
  {
    id: 22,
    name: "Pythia-12B",
    link: "https://huggingface.co/EleutherAI/pythia-12b",
    description: "EleutherAI's model trained on The Pile dataset.",
  },
  {
    id: 23,
    name: "StableLM-3B",
    link: "https://huggingface.co/stabilityai/stablelm-3b-4e1t",
    description: "Stability AI's efficient base model for fine-tuning.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
