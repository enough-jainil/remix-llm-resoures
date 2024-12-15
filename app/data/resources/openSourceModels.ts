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
    description2:
      "Qwen-2.5-72B is part of the Qwen 2.5 series of large language models developed by Alibaba Cloud. This model is notable for its 72 billion parameters, making it one of the larger models in the series, which includes various sizes ranging from 0.5B to 72B. Key features include pretraining on a massive dataset of up to 18 trillion tokens, enhancing its capabilities in knowledge retrieval, coding, mathematics, and instruction following compared to its predecessor, Qwen-2. The Qwen-2.5 models are open-sourced under specific licenses, allowing developers to utilize and modify them for various applications. This model excels in generating long texts and understanding complex instructions, making it suitable for a wide range of applications in natural language processing and AI-driven tasks.",
  },
  {
    id: 5,
    name: "Qwen-Coder-2.5",
    link: "https://huggingface.co/Qwen/Qwen-2.5-CodeLLaMA",
    description:
      "Alibaba's latest code generation model based on CodeLLaMA architecture.",
    description2:
      "Qwen-Coder-2.5 is a specialized version of the Qwen series of large language models developed by Alibaba Cloud, specifically tailored for coding tasks. It is designed to assist developers by providing advanced capabilities in code generation, completion, and repair. The Qwen-Coder-2.5 series includes multiple model sizes, ranging from 0.5 billion to 32 billion parameters, allowing developers to choose a model that best fits their computational resources and specific needs. It has demonstrated impressive performance across more than 40 programming languages, scoring 65.9 on the McEval benchmark and achieving a score of 75.2 on the MdEval code repair benchmark, ranking it among the top open-source models for coding tasks. Like other models in the Qwen series, Qwen-Coder-2.5 is open-source, enabling developers to access, modify, and integrate it into their projects freely. This model is particularly useful for tasks such as code generation, debugging, and providing coding assistance, making it a valuable tool for both novice and experienced programmers.",
  },
  {
    id: 6,
    name: "Qwen-2.5-4B",
    link: "https://huggingface.co/Qwen/Qwen2-4B",
    description: "Efficient version of Qwen 2.5 optimized for deployment.",
    description2:
      "Qwen-2.5-4B is part of the Qwen 2.5 series of large language models developed by Alibaba Cloud. This model features 4 billion parameters, making it suitable for a variety of natural language processing tasks while being more lightweight compared to larger models in the series. Key features include its design for tasks such as text generation, question answering, and instruction following, optimized for performance in diverse applications, including coding and logical reasoning. Like other models in the Qwen series, Qwen-2.5-4B is open-source, enabling developers to access and modify the model for their projects, fostering innovation and collaboration in the AI community. Overall, Qwen-2.5-4B represents a balance between performance and resource efficiency, making it a valuable tool for developers looking to implement advanced AI capabilities in their applications.",
  },
  {
    id: 7,
    name: "Code Gemma-7B",
    link: "https://huggingface.co/google/code-gemma-7b",
    description:
      "Google's code-specialized Gemma model optimized for programming tasks.",
    description2:
      "CodeGemma-7B is a large language model developed by Google, specifically designed for code generation and code completion tasks. It is part of the CodeGemma family, which includes various models optimized for different coding applications. Key features include 7 billion parameters, making it a powerful tool for handling complex coding tasks while remaining relatively lightweight. This model excels in fill-in-the-middle code completion, code generation, natural language understanding, mathematical reasoning, and instruction following. CodeGemma-7B has been benchmarked across various tasks, demonstrating strong performance in code understanding and generation, with a context length of 8K tokens. It is part of an initiative to democratize AI through open-source practices, making it accessible for developers and researchers to utilize and build upon.",
  },
  {
    id: 8,
    name: "Code Gemma-2B",
    link: "https://huggingface.co/google/code-gemma-2b",
    description:
      "Lightweight version of Code Gemma for efficient code generation.",
    description2:
      "CodeGemma-2B is a large language model developed by Google DeepMind, specifically designed for coding tasks. It is part of the broader Gemma family of models, which utilize advanced AI technologies similar to those found in the Gemini models. Key features include 2 billion parameters, making it a lightweight yet powerful option for various coding applications. This model has been pretrained on an extensive dataset, including 500 billion tokens of primarily English language data sourced from publicly available code repositories, open-source mathematics datasets, and synthetically generated code. CodeGemma-2B is particularly effective for tasks such as code generation, code completion, and natural language understanding related to programming. Like other models in the Gemma family, CodeGemma-2B is available as an open-source model, allowing developers to access, modify, and integrate it into their projects freely. Overall, CodeGemma-2B represents a significant advancement in AI-driven coding tools, providing robust capabilities for developers looking to enhance their coding workflows and improve productivity.",
  },
  {
    id: 9,
    name: "Gemma-7B",
    link: "https://huggingface.co/google/gemma-7b",
    description:
      "Google's latest open source model series with strong performance.",
    description2:
      "Gemma-7B is a state-of-the-art language model developed by Google DeepMind, part of the Gemma family of models. It is designed for a variety of tasks, including text generation, understanding, and code generation. Key features include 7 billion parameters, a Transformer architecture with 28 layers, and a context length of 8,000 tokens, allowing it to process substantial amounts of text effectively. Built using the same research and technology as the Gemini models, Gemma-7B achieves best-in-class performance for its size, making it particularly effective for applications requiring high-quality text generation and understanding. The Gemma models, including Gemma-7B, are available as open-source, promoting accessibility and collaboration within the AI community.",
  },

  // Late 2023 Releases
  {
    id: 10,
    name: "Mixtral-8x7B",
    link: "https://huggingface.co/mistralai/Mixtral-8x7B-v0.1",
    description: "Sparse mixture of experts model with 47B parameters.",
    description2:
      "Mixtral-8x7B is a cutting-edge language model developed by Mistral AI, characterized as a Sparse Mixture of Experts (SMoE) model. This innovative architecture allows it to efficiently handle a wide range of natural language processing tasks. Key Features include a mixture of experts approach, where each layer consists of 8 feedforward blocks (experts). For each token processed, a router network selects two experts to handle the computation, optimizing resource usage and enhancing performance. This model has demonstrated superior performance, outperforming the Llama 2 70B model on most benchmarks while achieving 6x faster inference. Released with open weights under the Apache 2.0 license, it promotes accessibility and allows developers to customize and deploy the model in various environments. The model is designed for a variety of tasks, including text generation, instruction following, and creative writing, making it versatile for both developers and researchers.",
  },
  {
    id: 11,
    name: "Mistral-7B",
    link: "https://huggingface.co/mistralai/Mistral-7B-v0.1",
    description: "High-performance 7B model with sliding window attention.",
    description2:
      "Mistral-7B is a high-performance language model designed for various natural language processing tasks. It features a sliding window attention mechanism, allowing it to efficiently process long sequences of text. This model is particularly effective for applications requiring context retention over extended inputs, making it suitable for tasks such as text generation, summarization, and dialogue systems. Mistral-7B is open-source, enabling developers to access and integrate it into their projects, fostering innovation in the AI community.",
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
  {
    id: 24,
    name: "LLama",
    link: "https://ai.meta.com/blog/large-language-model-llama-meta-ai/",
    description:
      "LLama is a groundbreaking large language model with 65 billion parameters, designed to tackle a wide range of natural language processing tasks.",
    description2:
      "Trained on extensive datasets, LLama possesses a deep understanding of linguistic patterns and semantics, enabling it to generate coherent and contextually relevant text. With its vast parameter count, LLama excels in tasks such as text generation, sentiment analysis, language translation, and more. Its robust architecture and extensive pre-training make it a versatile tool for researchers, developers, and businesses seeking to leverage state-of-the-art language processing capabilities",
  },

  // New DeepSeek model entry
  {
    id: 25,
    name: "DeepSeek-V2.5",
    link: "https://www.deepseek.com/",
    description:
      "DeepSeek's flagship model, excelling in reasoning, math, and coding tasks.",
    description2:
      "DeepSeek-V2.5 is an open-source model designed for general-purpose tasks and coding, highly competitive with leading models like GPT-4 and LLaMA3. It features innovative technologies such as Multi-head Latent Attention (MLA) for improved efficiency and is available for both academic and commercial use.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
