import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const openSourceApps = [
  {
    id: 1,
    name: "Auto-GPT",
    link: "https://github.com/Significant-Gravitas/Auto-GPT",
    description:
      "Autonomous GPT-4 agent that chains together LLM thoughts to accomplish complex goals independently.",
  },
  {
    id: 2,
    name: "GPT4All",
    link: "https://gpt4all.io/",
    description:
      "Ecosystem of open-source large language models that run locally on consumer-grade hardware.",
  },
  {
    id: 3,
    name: "PrivateGPT",
    link: "https://github.com/imartinez/privateGPT",
    description:
      "Interact with documents privately using LLMs, running everything locally without data leaving your system.",
  },
  {
    id: 4,
    name: "ChatBot UI",
    link: "https://github.com/mckaywrigley/chatbot-ui",
    description:
      "Open source ChatGPT clone with clean UI and support for multiple LLM providers.",
  },
  {
    id: 5,
    name: "OpenAssistant",
    link: "https://open-assistant.io/",
    description:
      "Community-driven effort to create a free and open source AI assistant with broad capabilities.",
  },
  {
    id: 6,
    name: "Jan",
    link: "https://github.com/janhq/jan",
    description:
      "Desktop app for running open LLMs locally with chat interface and model management.",
  },
  {
    id: 7,
    name: "MiniGPT-4",
    link: "https://github.com/Vision-CAIR/MiniGPT-4",
    description:
      "Open-source implementation enhancing language models with vision capabilities.",
  },
  {
    id: 8,
    name: "LocalGPT",
    link: "https://github.com/PromtEngineer/localGPT",
    description:
      "Chat with documents locally using open-source language models for complete privacy.",
  },
  {
    id: 9,
    name: "GPT Engineer",
    link: "https://github.com/gpt-engineer-org/gpt-engineer",
    description:
      "Tool that generates entire codebases from natural language project descriptions.",
  },
  {
    id: 10,
    name: "OpenChat",
    link: "https://github.com/openchatai/OpenChat",
    description:
      "Self-hosted ChatGPT alternative supporting multiple LLM backends and custom models.",
  },
  {
    id: 11,
    name: "H2O GPT",
    link: "https://github.com/h2oai/h2ogpt",
    description:
      "Enterprise-ready stack for private LLM experimentation and deployment.",
  },
  {
    id: 12,
    name: "Dalai",
    link: "https://github.com/cocktailpeanut/dalai",
    description:
      "CLI tool for easily running LLaMA and Alpaca models locally with simple commands.",
  },
  {
    id: 13,
    name: "LangChain",
    link: "https://github.com/langchain-ai/langchain",
    description:
      "Framework for developing applications powered by language models with chains and agents.",
  },
  {
    id: 14,
    name: "LlamaIndex",
    link: "https://github.com/jerryjliu/llama_index",
    description:
      "Data framework for LLM applications to ingest, structure, and access private or domain-specific data.",
  },
  {
    id: 15,
    name: "LocalAI",
    link: "https://github.com/go-skynet/LocalAI",
    description:
      "Self-hosted, OpenAI-compatible API for running LLMs locally with consumer hardware.",
  },
  {
    id: 16,
    name: "Text Generation WebUI",
    link: "https://github.com/oobabooga/text-generation-webui",
    description:
      "Gradio web UI for running Large Language Models like LLaMA, llama.cpp, GPT-J, OPT, and GALACTICA.",
  },
  {
    id: 17,
    name: "Semantic Kernel",
    link: "https://github.com/microsoft/semantic-kernel",
    description:
      "Microsoft's SDK for integrating LLMs into applications with prompts as functions.",
  },
  {
    id: 18,
    name: "Transformers.js",
    link: "https://github.com/xenova/transformers.js",
    description: "Run 🤗 Transformers in your browser with WebGL acceleration.",
  },
  {
    id: 19,
    name: "Haystack",
    link: "https://github.com/deepset-ai/haystack",
    description:
      "Framework for building NLP applications with LLMs and Transformers.",
  },
  {
    id: 20,
    name: "vLLM",
    link: "https://github.com/vllm-project/vllm",
    description:
      "High-throughput and memory-efficient inference and serving engine for LLMs.",
  },
  {
    id: 21,
    name: "GPT4All",
    link: "https://github.com/nomic-ai/gpt4all",
    description: "Run open-source LLMs anywhere with a chat interface.",
  },
  {
    id: 22,
    name: "PrivateGPT",
    link: "https://github.com/imartinez/privateGPT",
    description:
      "Interact with documents using LLMs, 100% private, no data leaves your execution environment.",
  },
  {
    id: 23,
    name: "Flowise",
    link: "https://github.com/FlowiseAI/Flowise",
    description: "Drag & drop UI to build LLM flows with LangchainJS.",
  },
  {
    id: 24,
    name: "Chroma",
    link: "https://github.com/chroma-core/chroma",
    description: "Open-source embedding database for LLM applications.",
  },
  {
    id: 25,
    name: "LiteLLM",
    link: "https://github.com/BerriAI/litellm",
    description:
      "Unified interface to call OpenAI, Anthropic, Cohere, Hugging Face, Replicate APIs.",
  },
  {
    id: 26,
    name: "Ollama",
    link: "https://github.com/jmorganca/ollama",
    description: "Get up and running with large language models locally.",
  },
  {
    id: 27,
    name: "OpenLLM",
    link: "https://github.com/bentoml/OpenLLM",
    description:
      "Operating LLMs in production with fine-tuning and serving capabilities.",
  },
  {
    id: 28,
    name: "LMStudio",
    link: "https://github.com/lmstudio-ai/lmstudio",
    description:
      "Desktop app for running and testing local LLMs with chat interface.",
  },
  {
    id: 29,
    name: "Guidance",
    link: "https://github.com/microsoft/guidance",
    description:
      "Language model programming with structured input/output support.",
  },
  {
    id: 30,
    name: "Langflow",
    link: "https://github.com/logspace-ai/langflow",
    description: "UI for LangChain, easily experiment and prototype flows.",
  },
  {
    id: 31,
    name: "FastChat",
    link: "https://github.com/lm-sys/FastChat",
    description:
      "Training and serving framework for large language models and chatbots.",
  },
  {
    id: 32,
    name: "Text Generation Inference",
    link: "https://github.com/huggingface/text-generation-inference",
    description:
      "Hugging Face's production-ready LLM serving with optimized inference.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
