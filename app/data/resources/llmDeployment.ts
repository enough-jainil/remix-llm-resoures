import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const llmDeployment = [
  {
    id: 1,
    name: "LangChain",
    link: "https://github.com/langchain-ai/langchain",
    description:
      "Popular framework for building applications with LLMs through composable components.",
  },
  {
    id: 2,
    name: "LlamaIndex",
    link: "https://www.llamaindex.ai/",
    description:
      "Data framework for ingesting, structuring, and accessing private or domain-specific data with LLMs.",
  },
  {
    id: 3,
    name: "Semantic Kernel",
    link: "https://github.com/microsoft/semantic-kernel",
    description:
      "Microsoft's SDK for integrating LLMs into applications with memory and planning.",
  },
  {
    id: 4,
    name: "vLLM",
    link: "https://github.com/vllm-project/vllm",
    description:
      "High-throughput and memory-efficient inference engine for LLMs.",
  },
  // Deployment Platforms
  {
    id: 5,
    name: "Modal",
    link: "https://modal.com/",
    description:
      "Cloud platform optimized for running and deploying LLMs at scale.",
  },
  {
    id: 6,
    name: "RunPod",
    link: "https://www.runpod.io/",
    description: "GPU cloud platform for training and deploying AI models.",
  },
  {
    id: 7,
    name: "Together AI",
    link: "https://www.together.ai/",
    description: "Platform for deploying and fine-tuning open source LLMs.",
  },
  // Optimization Tools
  {
    id: 8,
    name: "TensorRT-LLM",
    link: "https://github.com/NVIDIA/TensorRT-LLM",
    description:
      "NVIDIA's toolkit for optimizing LLMs for efficient inference.",
  },
  {
    id: 9,
    name: "GGML",
    link: "https://github.com/ggerganov/ggml",
    description:
      "Tensor library for machine learning optimized for CPU inference.",
  },
  {
    id: 10,
    name: "llama.cpp",
    link: "https://github.com/ggerganov/llama.cpp",
    description:
      "Port of Facebook's LLaMA model in C/C++ for efficient CPU inference.",
  },
  // Serving Frameworks
  {
    id: 11,
    name: "Text Generation Inference",
    link: "https://github.com/huggingface/text-generation-inference",
    description:
      "Hugging Face's toolkit for deploying and serving language models.",
  },
  {
    id: 12,
    name: "FastAPI",
    link: "https://fastapi.tiangolo.com/",
    description:
      "Modern web framework for building APIs with Python, popular for ML services.",
  },
  {
    id: 13,
    name: "Ray Serve",
    link: "https://docs.ray.io/en/latest/serve/index.html",
    description:
      "Scalable model serving library for building ML APIs and services.",
  },
  // Monitoring & Observability
  {
    id: 14,
    name: "Weights & Biases",
    link: "https://wandb.ai/",
    description:
      "MLOps platform for tracking experiments, models, and deployments.",
  },
  {
    id: 15,
    name: "LangSmith",
    link: "https://smith.langchain.com/",
    description:
      "Platform for debugging, testing, and monitoring LLM applications.",
  },
  // Local Deployment
  {
    id: 16,
    name: "LocalAI",
    link: "https://github.com/go-skynet/LocalAI",
    description:
      "Self-hosted, community-driven solution for running LLMs locally.",
  },
  {
    id: 17,
    name: "Ollama",
    link: "https://ollama.ai/",
    description: "Run and manage large language models locally.",
  },
  // Cloud Services
  {
    id: 18,
    name: "AWS SageMaker",
    link: "https://aws.amazon.com/sagemaker/",
    description:
      "Fully managed service for building, training, and deploying ML models.",
  },
  {
    id: 19,
    name: "Google Vertex AI",
    link: "https://cloud.google.com/vertex-ai",
    description:
      "Google's unified platform for deploying ML models and building ML-powered applications.",
  },
  {
    id: 20,
    name: "Azure ML",
    link: "https://azure.microsoft.com/en-us/services/machine-learning/",
    description: "Microsoft's cloud service for MLOps and model deployment.",
  },
  {
    id: 22,
    name: "Qwen2.5-1M Inference Framework",
    link: "https://qwenlm.github.io/blog/qwen2.5-1m/",
    description:
      "Optimized vLLM-based serving for million-token contexts with sparse attention",
    description2:
      "Open-source inference framework achieving 3-7x speedup for 1M-token inputs through sparse attention integration and memory optimizations. Supports both 7B and 14B Qwen2.5 models.",
  },
  {
    id: 23,
    name: "Qwen2.5-Max API",
    link: "https://qwenlm.github.io/blog/qwen2.5-max/",
    description: "Alibaba Cloud API endpoint for Qwen2.5-Max MoE model",
    description2:
      "Enterprise-ready API access to Qwen2.5-Max through Alibaba Cloud, featuring advanced rate limiting, monitoring, and scalability options for production deployments.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
