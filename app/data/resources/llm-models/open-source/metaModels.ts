import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const metaModels = [
  {
    id: 1,
    name: "Llama 3.1 405B (Base)",
    link: "https://huggingface.co/meta-llama/Llama-3-405B",
    description: "405B parameter model for advanced AI tasks.",
    description2:
      "A 405-billion-parameter model, representing one of the largest open-source AI models available. It offers advanced capabilities in natural language understanding and generation, suitable for high-level research and complex AI tasks. Supports a context length of 131K tokens.",
  },
  {
    id: 1.1,
    name: "Llama 3.1 70B Instruct",
    link: "https://huggingface.co/meta-llama/Llama-3-70B-Instruct",
    description: "70B parameter model optimized for dialogue.",
    description2:
      "A 70-billion-parameter model optimized for high-quality dialogue use cases. It demonstrates strong performance compared to leading closed-source models in human evaluations. Supports a context length of 131K tokens.",
  },
  {
    id: 1.2,
    name: "Llama 3.1 8B Instruct",
    link: "https://huggingface.co/meta-llama/Llama-3-8B-Instruct",
    description: "8B parameter model for efficient dialogue performance.",
    description2:
      "An 8-billion-parameter model designed for efficient performance in dialogue and instruction-following tasks. It balances computational efficiency with robust language generation capabilities. Supports a context length of 131K tokens.",
  },
  {
    id: 1.3,
    name: "Llama 3 70B (Base)",
    link: "https://huggingface.co/meta-llama/Llama-3-70B",
    description: "70B parameter base model for NLP tasks.",
    description2:
      "A 70-billion-parameter base model offering strong performance in natural language processing tasks. It serves as a foundation for various fine-tuned versions tailored to specific applications. Supports a context length of 8K tokens.",
  },
  {
    id: 1.4,
    name: "Llama 3 8B (Base)",
    link: "https://huggingface.co/meta-llama/Llama-3-8B",
    description: "8B parameter base model for NLP tasks.",
    description2:
      "An 8-billion-parameter base model suitable for a range of natural language understanding and generation tasks. Its relatively smaller size allows for deployment in environments with limited computational resources. Supports a context length of 8K tokens.",
  },
  {
    id: 1.5,
    name: "CodeLlama 70B Instruct",
    link: "https://huggingface.co/codellama/CodeLlama-70B",
    description: "70B parameter model specialized for code generation.",
    description2:
      "A 70-billion-parameter model specialized for code generation tasks. It provides zero-shot instruction-following ability for programming, supporting a context length of 2K tokens.",
  },
  {
    id: 1.6,
    name: "CodeLlama 34B Instruct",
    link: "https://huggingface.co/codellama/CodeLlama-34B",
    description: "34B parameter model for code infilling.",
    description2:
      "A 34-billion-parameter model built upon Llama 2, excelling at code infilling and handling extensive input contexts. It supports a context length of 8K tokens.",
  },
  {
    id: 1.7,
    name: "Llama v2 13B Chat",
    link: "https://huggingface.co/meta-llama/Llama-v2-13B-Chat",
    description: "13B parameter model for chat completions.",
    description2:
      "A 13-billion-parameter model fine-tuned for chat completions, offering robust conversational AI capabilities. Supports a context length of 4K tokens.",
  },
  {
    id: 1.8,
    name: "Llama v2 70B Chat",
    link: "https://huggingface.co/meta-llama/Llama-v2-70B-Chat",
    description: "70B parameter flagship model for chat.",
    description2:
      "A flagship 70-billion-parameter model fine-tuned for chat completions, utilizing an optimized transformer architecture. Supports a context length of 4K tokens.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
