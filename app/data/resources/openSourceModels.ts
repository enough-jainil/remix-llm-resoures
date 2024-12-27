import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const openSourceModels = [
  // Meta Llama Models
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
  {
    id: 2,
    name: "Qwen 2.5 32B Instruct",
    link: "https://huggingface.co/qwen/Qwen-2.5-32B",
    description:
      "Qwen 2.5 32B is a transformer-based model that excels in language understanding, multilingual capabilities, coding, mathematics, and reasoning.",
    description2:
      "It features SwiGLU activation, attention QKV bias, and group query attention. It is pretrained on extensive data with supervised finetuning and direct preference optimization.",
  },
  {
    id: 2.1,
    name: "Qwen 2.5 72B Instruct",
    link: "https://huggingface.co/qwen/Qwen-2.5-72B",
    description:
      "Qwen 2.5 72B is a transformer-based model that excels in language understanding, multilingual capabilities, coding, mathematics, and reasoning.",
    description2:
      "It features SwiGLU activation, attention QKV bias, and group query attention. It is pretrained on extensive data with supervised finetuning and direct preference optimization.",
  },
  {
    id: 2.2,
    name: "Qwen 2.5 7B Instruct",
    link: "https://huggingface.co/qwen/Qwen-2.5-7B",
    description:
      "Qwen 2.5 7B is a transformer-based model that excels in language understanding, multilingual capabilities, coding, mathematics, and reasoning.",
    description2:
      "It features SwiGLU activation, attention QKV bias, and group query attention. It is pretrained on extensive data with supervised finetuning and direct preference optimization.",
  },
  {
    id: 2.3,
    name: "Qwen 2.5 Coder 7B",
    link: "https://huggingface.co/qwen/Qwen-2.5-Coder-7B",
    description:
      "Qwen 2.5 Coder 7B is designed specifically for coding tasks, enhancing code generation and reasoning capabilities.",
    description2:
      "It provides advanced features for code completion and debugging, making it suitable for developers.",
  },
  {
    id: 2.4,
    name: "Qwen 2.5 Coder 32B",
    link: "https://huggingface.co/qwen/Qwen-2.5-Coder-32B",
    description:
      "Qwen 2.5 Coder 32B is a large language model focused on code generation and reasoning.",
    description2:
      "It significantly improves coding capabilities while maintaining strengths in mathematics and general competencies.",
  },
  // New DeepSeek model entry
  {
    id: 3,
    name: "DeepSeek-V2.5",
    link: "https://www.deepseek.com/",
    description:
      "DeepSeek's flagship model, excelling in reasoning, math, and coding tasks.",
    description2:
      "DeepSeek-V2.5 is an open-source model designed for general-purpose tasks and coding, highly competitive with leading models like GPT-4 and LLaMA3. It features innovative technologies such as Multi-head Latent Attention (MLA) for improved efficiency and is available for both academic and commercial use.",
  },
  {
    id: 3.1,
    name: "DeepSeek-V3",
    link: "https://github.com/deepseek-ai/DeepSeek-V3",
    description:
      "DeepSeek-V3 is a Mixture-of-Experts (MoE) language model with 671 billion total parameters, designed for efficient inference and cost-effective training.",
    description2:
      "It features innovative Multi-head Latent Attention (MLA) and an auxiliary-loss-free strategy for load balancing, achieving state-of-the-art performance in various tasks. DeepSeek-V3 is pre-trained on 14.8 trillion tokens and demonstrates competitive capabilities against leading closed-source models.",
  },
  // Mistral AI Models
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
