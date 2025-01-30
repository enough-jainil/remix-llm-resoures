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
    name: "Qwen2.5-VL (Vision-Language)",
    link: "https://qwenlm.github.io/blog/qwen2.5-vl/",
    description:
      "Multimodal model excelling in visual understanding, agent capabilities, and long video comprehension",
    description2:
      "Qwen2.5-VL introduces native visual localization, structured output generation, and dynamic tool orchestration capabilities. Key features include 1+ hour video understanding, visual grounding with bounding boxes/points, and efficient dynamic resolution ViT encoder. Available in 3B, 7B, and 72B parameter sizes.",
  },
  {
    id: 2.3,
    name: "Qwen2.5-7B-Instruct-1M",
    link: "https://qwenlm.github.io/blog/qwen2.5-1m/",
    description: "7B parameter model with 1M token context length support",
    description2:
      "First open-source Qwen model supporting 1M-token contexts. Features 3-7x faster processing with sparse attention integration and vLLM-based inference framework. Includes technical report detailing training/inference optimizations.",
  },
  {
    id: 2.4,
    name: "Qwen 2.5 Coder 7B",
    link: "https://huggingface.co/qwen/Qwen-2.5-Coder-7B",
    description:
      "Qwen 2.5 Coder 7B is designed specifically for coding tasks, enhancing code generation and reasoning capabilities.",
    description2:
      "It provides advanced features for code completion and debugging, making it suitable for developers.",
  },
  {
    id: 2.5,
    name: "Qwen 2.5 Coder 32B",
    link: "https://huggingface.co/qwen/Qwen-2.5-Coder-32B",
    description:
      "Qwen 2.5 Coder 32B is a large language model focused on code generation and reasoning.",
    description2:
      "It significantly improves coding capabilities while maintaining strengths in mathematics and general competencies.",
  },
  {
    id: 2.6,
    name: "Qwen2.5-14B-Instruct-1M",
    link: "https://qwenlm.github.io/blog/qwen2.5-1m/",
    description: "14B parameter model with million-token context capabilities",
    description2:
      "Scales up Qwen's 1M-token context capabilities to 14B parameters. Maintains high throughput with optimized attention mechanisms and improved memory management. Released alongside comprehensive technical documentation.",
  },
  {
    id: 2.7,
    name: "Qwen2.5-Max",
    link: "https://qwenlm.github.io/blog/qwen2.5-max/",
    description:
      "Large-scale MoE model with 20T token pretraining and RLHF optimization",
    description2:
      "Qwen2.5-Max utilizes innovative Multi-head Latent Attention (MLA) architecture, achieving 95% of GPT-4 Turbo's performance while maintaining training efficiency. Features 128K context length and advanced reasoning capabilities through scaled reinforcement learning methodologies.",
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
  {
    id: 3.2,
    name: "DeepSeek-R1",
    link: "https://github.com/deepseek-ai/DeepSeek-R1",
    description:
      "1.3B parameter language model optimized for reasoning and multilingual tasks",
    description2:
      "DeepSeek-R1 achieves state-of-the-art performance among models under 2B parameters, featuring enhanced reasoning capabilities and support for 17 languages. Utilizes innovative training techniques including Grouped Query Attention and Rotary Positional Embeddings for efficient inference.",
  },
  {
    id: 3.3,
    name: "DeepSeek-Math-7B",
    link: "https://www.deepseek.com/deepseek-math-7b",
    description: "7B parameter model optimized for mathematical reasoning.",
    description2:
      "DeepSeek-Math-7B excels in solving complex mathematical problems and reasoning tasks.",
  },
  {
    id: 3.4,
    name: "DeepSeek-Coder-1.3",
    link: "https://www.deepseek.com/deepseek-coder-1.3",
    description: "33B parameter model specialized for code generation.",
    description2:
      "DeepSeek-Coder-1.3 is designed for efficient code generation and understanding, providing advanced capabilities for developers.",
  },
  {
    id: 3.5,
    name: "DeepSeek-VL-1.3",
    link: "https://www.deepseek.com/deepseek-vl-1.3",
    description: "7B parameter model for vision-language tasks.",
    description2:
      "DeepSeek-VL-1.3 integrates visual and language understanding for enhanced multimodal applications.",
  },
  {
    id: 3.6,
    name: "DeepSeek-MoE-16B",
    link: "https://www.deepseek.com/deepseek-moe-16b",
    description: "16B parameter Mixture-of-Experts model.",
    description2:
      "DeepSeek-MoE-16B utilizes a mixture-of-experts architecture for efficient processing and performance.",
  },
  {
    id: 3.7,
    name: "DeepSeek-v2-236B-MoE",
    link: "https://www.deepseek.com/deepseek-v2-236b-moe",
    description: "236B parameter Mixture-of-Experts model.",
    description2:
      "DeepSeek-v2-236B-MoE is designed for high-performance tasks, leveraging a large number of parameters for complex problem-solving.",
  },
  {
    id: 3.8,
    name: "DeepSeek-Coder-v2-16",
    link: "https://www.deepseek.com/deepseek-coder-v2-16",
    description: "16B parameter model for advanced code generation.",
    description2:
      "DeepSeek-Coder-v2-16 is optimized for coding tasks, providing enhanced capabilities for developers.",
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

  {
    id: 5,
    name: "Nemotron 4 340B Instruct",
    link: "https://huggingface.co/nvidia/Nemotron-4-340B-Instruct",
    description: "340B parameter model for synthetic data generation.",
    description2:
      "Part of the Nemotron-4 collection, this model is designed for Synthetic Data Generation (SDG) and includes Base, Instruct, and Reward models. It offers advanced capabilities for generating synthetic datasets, making it suitable for various AI applications.",
  },

  {
    id: 6,
    name: "Yi-VL 34B",
    link: "https://huggingface.co/collections/01-ai/yi-vl-663f557228538eae745769f3",
    description: "Image-Text-to-Text model for versatile applications.",
    description2:
      "Updated on June 26, this model excels in generating text from images, making it suitable for a variety of AI tasks involving visual data.",
  },
  {
    id: 6.1,
    name: "Yi 1.5 34B Chat",
    link: "https://huggingface.co/collections/01-ai/yi-15-2024-05-663f3ecab5f815a3eaca7ca8",
    description: "Text generation model optimized for conversational AI.",
    description2:
      "Updated on August 27, this model is designed for engaging and coherent dialogue, making it ideal for chat applications.",
  },
  {
    id: 6.2,
    name: "Yi 34B 200K",
    link: "https://huggingface.co/collections/01-ai/yi-2023-11-663f3f19119ff712e176720f",
    description: "Advanced text generation model with extensive training.",
    description2:
      "Updated on November 11, this model offers high-quality text generation capabilities, suitable for various content creation tasks.",
  },

  // ... Google  Model...

  {
    id: 7,
    name: "Gemma2-9",
    link: "https://blog.google/technology/developers/google-gemma-2/",
    description: "27B parameter model for advanced language tasks.",
    description2:
      "Gemma2-9 is designed for high-performance language understanding and generation, suitable for various applications.",
  },
  {
    id: 7.1,
    name: "Gemma-2",
    link: "https://blog.google/technology/developers/gemma-open-models/",
    description: "7B parameter model optimized for conversational AI.",
    description2:
      "Gemma-2 excels in dialogue generation and understanding, providing robust conversational capabilities.",
  },
  {
    id: 7.2,
    name: "RecurrentGemma-2B",
    link: "https://github.com/google-deepmind/recurrentgemma",
    description: "Recurrent model for enhanced context handling.",
    description2:
      "RecurrentGemma-2B is designed to maintain context over longer interactions, improving conversational flow.",
  },
  {
    id: 7.3,
    name: "T5",
    link: "https://arxiv.org/abs/1910.10683",
    description: "Text-to-Text Transfer Transformer model.",
    description2:
      "T5 is a versatile model that converts all NLP tasks into a text-to-text format, enabling a wide range of applications.",
  },
  // apple models
  {
    id: 8,
    name: "OpenELM",
    link: "https://huggingface.co/apple/OpenELM",
    description:
      "OpenELM is a family of efficient language models designed for enhanced accuracy and performance.",
    description2:
      "Utilizing a layer-wise scaling strategy, OpenELM offers pretrained models with 270M, 450M, 1.1B, and 3B parameters, trained on a diverse dataset totaling approximately 1.8 trillion tokens.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
