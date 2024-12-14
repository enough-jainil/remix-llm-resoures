import { getFaviconUrl } from "~/utils/getFaviconUrl";
import { freeResources } from "./resources/freeResources";
import { videoTutorials } from "./resources/videoTutorials";
import { academicCourses } from "./resources/academicCourses";
import { researchPapers } from "./resources/researchPaper";
import { githubRepos } from "./resources/githubRepos";
import { dataProcessingTools } from "./resources/dataProcessingTools";
import { openSourceApps } from "./resources/openSourceApps";
// Import other resource blocks as needed

export const resourceBlocks = [
  {
    title: "Free Resources",
    tag: "Learning Resources",
    tag2: "Free Resources",
    description:
      "Essential learning materials and tutorials to get started with LLMs",
    color: "blue",
    resources: freeResources,
  },
  {
    title: "Video Tutorials",
    tag: "Learning Resources",
    tag2: "Video Tutorials",
    description:
      "High-quality video content for visual learners, ordered from basics to advanced topics",
    resources: videoTutorials,
  },
  {
    title: "Academic Courses",
    tag: "Learning Resources",
    tag2: "Academic Courses",
    description:
      "University courses from top institutions covering ML, AI, and NLP",
    color: "green",
    resources: academicCourses,
  },
  {
    title: "Research Papers",
    tag: "Learning Resources",
    tag2: "Research Papers",
    description: "Latest research papers and technical reports in LLM field",
    color: "yellow",
    resources: researchPapers,
  },
  {
    title: "GitHub Repositories",
    tag: "Learning Resources",
    tag2: "GitHub Repositories",
    description:
      "Essential GitHub repositories for LLM development, training, and deployment",
    color: "blue",
    resources: githubRepos,
  },
  {
    title: "Data Processing Tools",
    tag: "Learning Resources",
    tag2: "Data Processing Tools",

    description:
      "Tools and utilities for processing, cleaning, and preparing LLM training data",
    color: "pink",
    resources: dataProcessingTools,
  },
  {
    title: "Open Source Apps / Projects",
    tag: "Learning Resources",
    tag2: "Open Source Apps / Projects",

    description: "Ready-to-use applications and implementations",
    color: "red",
    resources: openSourceApps,
  },
  {
    title: "Datasets",
    tag: "Learning Resources",
    tag2: "Datasets",

    description: "High-quality datasets and data collections for LLM training",
    color: "zinc",
    resources: [
      {
        id: 1,
        name: "HuggingFace Datasets",
        link: "https://huggingface.co/datasets",
        description:
          "Comprehensive repository of datasets for machine learning, with easy integration into ML pipelines.",
      },
      {
        id: 2,
        name: "Common Crawl",
        link: "https://commoncrawl.org/",
        description:
          "Massive web crawl data used for training large language models, freely available for download.",
      },
      {
        id: 3,
        name: "The Pile",
        link: "https://pile.eleuther.ai/",
        description:
          "800GB diverse, open-source language modeling dataset curated for training large language models.",
      },
      {
        id: 4,
        name: "RedPajama",
        link: "https://github.com/togethercomputer/RedPajama-Data",
        description:
          "Open dataset replicating LLaMA training data, with 1.2 trillion tokens across various sources.",
      },
      {
        id: 5,
        name: "LAION-400M",
        link: "https://laion.ai/blog/laion-400-open-dataset/",
        description:
          "Large-scale dataset of image-text pairs for multimodal AI training.",
      },
      {
        id: 6,
        name: "OpenWebText2",
        link: "https://openwebtext2.readthedocs.io/",
        description:
          "Web text dataset extracted from URLs shared on Reddit with high engagement.",
      },
      {
        id: 7,
        name: "C4 (Colossal Clean Crawled Corpus)",
        link: "https://www.tensorflow.org/datasets/catalog/c4",
        description:
          "Massive cleaned web crawl dataset used for T5 and other language models.",
      },
      {
        id: 8,
        name: "WikiText",
        link: "https://blog.salesforceairesearch.com/the-wikitext-long-term-dependency-language-modeling-dataset/",
        description:
          "Long-term dependency language modeling dataset extracted from Wikipedia articles.",
      },
      {
        id: 9,
        name: "Books3",
        link: "https://datasets.pythonmachinelearning.com/books3.tar.gz",
        description:
          "Large collection of books in plain text format for language model training.",
      },
      {
        id: 10,
        name: "Stack Exchange Data Dump",
        link: "https://archive.org/details/stackexchange",
        description:
          "Complete archive of Stack Exchange network's question-answer pairs.",
      },
      {
        id: 11,
        name: "Ubuntu IRC Logs",
        link: "https://irclogs.ubuntu.com/",
        description:
          "Extensive collection of IRC chat logs for conversational AI training.",
      },
      {
        id: 12,
        name: "ArXiv Dataset",
        link: "https://www.kaggle.com/Cornell-University/arxiv",
        description:
          "Over 1.7 million scholarly papers across multiple scientific fields.",
      },
      {
        id: 13,
        name: "GitHub Code Dataset",
        link: "https://huggingface.co/datasets/codeparrot/github-code",
        description:
          "Large collection of source code from GitHub repositories for code LLM training.",
      },
      {
        id: 14,
        name: "OpenAssistant Conversations",
        link: "https://huggingface.co/datasets/OpenAssistant/oasst1",
        description:
          "High-quality conversation dataset for training AI assistants.",
      },
      {
        id: 15,
        name: "Alpaca Dataset",
        link: "https://github.com/tatsu-lab/stanford_alpaca",
        description:
          "52K instructions following ChatGPT format for fine-tuning language models.",
      },
      {
        id: 16,
        name: "ShareGPT",
        link: "https://huggingface.co/datasets/anon8231489123/ShareGPT_Vicuna_unfiltered",
        description:
          "Collection of ChatGPT conversations for training conversational AI models.",
      },
      {
        id: 17,
        name: "OSCAR",
        link: "https://oscar-corpus.com/",
        description:
          "Large multilingual corpus extracted from Common Crawl web data.",
      },
      {
        id: 18,
        name: "mC4",
        link: "https://www.tensorflow.org/datasets/catalog/c4#c4multilingual",
        description:
          "Multilingual version of C4 dataset covering 101 languages.",
      },
      {
        id: 19,
        name: "Dolly Dataset",
        link: "https://www.databricks.com/blog/2023/04/12/dolly-first-open-commercially-viable-instruction-tuned-llm",
        description:
          "Instruction-following dataset for fine-tuning language models.",
      },
      {
        id: 20,
        name: "WMT Translation Datasets",
        link: "https://www.statmt.org/wmt23/",
        description:
          "High-quality parallel corpora for machine translation training.",
      },
      {
        id: 21,
        name: "PubMed Central",
        link: "https://www.ncbi.nlm.nih.gov/pmc/tools/openftlist/",
        description:
          "Archive of biomedical and life sciences journal literature.",
      },
      {
        id: 22,
        name: "CodeSearchNet",
        link: "https://github.com/github/CodeSearchNet",
        description:
          "Large dataset for code search and documentation in multiple programming languages.",
      },
      {
        id: 23,
        name: "MATH Dataset",
        link: "https://github.com/hendrycks/math",
        description:
          "Mathematics problems with step-by-step solutions for training reasoning capabilities.",
      },
      {
        id: 24,
        name: "GSM8K",
        link: "https://github.com/openai/grade-school-math",
        description:
          "Grade school math word problems for testing mathematical reasoning.",
      },
      {
        id: 25,
        name: "BIG-bench",
        link: "https://github.com/google/BIG-bench",
        description:
          "Collaborative benchmark for measuring and extrapolating language model capabilities.",
      },
      {
        id: 26,
        name: "MMLU",
        link: "https://github.com/hendrycks/test",
        description:
          "Massive Multitask Language Understanding benchmark across various domains.",
      },
      {
        id: 27,
        name: "Natural Questions",
        link: "https://ai.google.com/research/NaturalQuestions",
        description:
          "Real Google search questions with answers from Wikipedia.",
      },
      {
        id: 28,
        name: "SQuAD 2.0",
        link: "https://rajpurkar.github.io/SQuAD-explorer/",
        description:
          "Reading comprehension dataset with questions and answers from Wikipedia articles.",
      },
      {
        id: 29,
        name: "HotpotQA",
        link: "https://hotpotqa.github.io/",
        description:
          "Question answering dataset requiring multi-hop reasoning.",
      },
      {
        id: 30,
        name: "TruthfulQA",
        link: "https://github.com/sylinrl/TruthfulQA",
        description: "Benchmark for measuring truthfulness in language models.",
      },
      {
        id: 31,
        name: "Open Images Dataset",
        link: "https://storage.googleapis.com/openimages/web/index.html",
        description:
          "Large-scale dataset of images with annotations for vision-language tasks.",
      },
      {
        id: 32,
        name: "WebText",
        link: "https://paperswithcode.com/dataset/webtext",
        description:
          "Dataset of web pages from Reddit submissions with high engagement.",
      },
      {
        id: 33,
        name: "BookCorpus",
        link: "https://huggingface.co/datasets/bookcorpus",
        description:
          "Collection of unpublished books for training language understanding.",
      },
      {
        id: 34,
        name: "CC-Stories",
        link: "https://paperswithcode.com/dataset/cc-stories",
        description:
          "Filtered subset of CommonCrawl focused on story-like content.",
      },
      {
        id: 35,
        name: "RealNews",
        link: "https://github.com/rowanz/grover/tree/master/realnews",
        description: "Large dataset of news articles from reliable sources.",
      },
      {
        id: 36,
        name: "Anthropic Constitutional AI",
        link: "https://www.anthropic.com/constitutional-ai-data",
        description:
          "Dataset for training AI systems with specific behavioral constraints.",
      },
      {
        id: 37,
        name: "ROOTS",
        link: "https://github.com/bigscience-workshop/roots",
        description:
          "Multilingual dataset curated for the BLOOM language model.",
      },
      {
        id: 38,
        name: "Pile of Law",
        link: "https://arxiv.org/abs/2207.00220",
        description:
          "Large legal text dataset including cases, statutes, and regulations.",
      },
      {
        id: 39,
        name: "Code Alpaca",
        link: "https://github.com/sahil280114/codealpaca",
        description:
          "Dataset for training code generation and understanding capabilities.",
      },
      {
        id: 40,
        name: "Multilingual Amazon Reviews",
        link: "https://registry.opendata.aws/amazon-reviews-ml/",
        description:
          "Product reviews in multiple languages for sentiment analysis and recommendation.",
      },
    ].map((resource) => ({
      ...resource,
      favicon: getFaviconUrl(resource.link),
    })),
  },

  {
    title: "LLM Leaderboards",
    tag: "Learning Resources",
    tag2: "Benchmarks",

    description:
      "Top benchmarks and leaderboards for comparing LLM performance across different tasks",
    color: "purple",
    resources: [
      {
        id: 1,
        name: "Open LLM Leaderboard",
        link: "https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard",
        description:
          "Comprehensive benchmark of open source LLMs on various tasks by Hugging Face.",
      },
      {
        id: 2,
        name: "Chatbot Arena Leaderboard",
        link: "https://chat.lmsys.org/?leaderboard",
        description:
          "Interactive LLM rankings based on human preferences and head-to-head comparisons.",
      },
      {
        id: 3,
        name: "AlpacaEval Leaderboard",
        link: "https://tatsu-lab.github.io/alpaca_eval/",
        description:
          "Evaluation of instruction-following capabilities across different models.",
      },
      {
        id: 4,
        name: "MT-Bench Leaderboard",
        link: "https://github.com/lm-sys/FastChat/tree/main/fastchat/llm_judge",
        description:
          "Multi-turn conversation benchmark for testing complex reasoning and consistency.",
      },
      {
        id: 5,
        name: "Big Code Models Leaderboard",
        link: "https://huggingface.co/spaces/bigcode/bigcode-models-leaderboard",
        description:
          "Evaluation of code generation models on multiple programming tasks.",
      },
      {
        id: 6,
        name: "HELM Benchmark",
        link: "https://crfm.stanford.edu/helm/latest/",
        description:
          "Stanford's holistic evaluation framework covering 42 scenarios.",
      },
      {
        id: 7,
        name: "BIG-bench",
        link: "https://github.com/google/BIG-bench",
        description:
          "Google's Beyond the Imitation Game benchmark with 200+ tasks.",
      },
      {
        id: 8,
        name: "C-Eval Leaderboard",
        link: "https://cevalbenchmark.com/static/leaderboard.html",
        description: "Comprehensive Chinese language capabilities evaluation.",
      },
      {
        id: 9,
        name: "MMLU Leaderboard",
        link: "https://paperswithcode.com/sota/multi-task-language-understanding-on-mmlu",
        description:
          "Massive Multitask Language Understanding benchmark across 57 subjects.",
      },
      {
        id: 10,
        name: "HumanEval Leaderboard",
        link: "https://paperswithcode.com/sota/code-generation-on-humaneval",
        description: "Evaluation of Python code generation capabilities.",
      },
      {
        id: 11,
        name: "AGIEval Benchmark",
        link: "https://github.com/microsoft/AGIEval",
        description:
          "Microsoft's benchmark for testing human-level intelligence tasks.",
      },
      {
        id: 12,
        name: "OpenCompass Leaderboard",
        link: "https://opencompass.org.cn/leaderboard-llm",
        description: "Comprehensive evaluation platform with 50+ datasets.",
      },
      {
        id: 13,
        name: "LongBench Leaderboard",
        link: "https://github.com/THUDM/LongBench",
        description:
          "Benchmark for testing long-context understanding capabilities.",
      },
      {
        id: 14,
        name: "Harness Leaderboard",
        link: "https://www.eleuther.ai/projects/harness/",
        description: "EleutherAI's framework for language model evaluation.",
      },
      {
        id: 15,
        name: "GLUE Benchmark",
        link: "https://gluebenchmark.com/leaderboard",
        description: "General Language Understanding Evaluation benchmark.",
      },
      {
        id: 16,
        name: "SuperGLUE Benchmark",
        link: "https://super.gluebenchmark.com/leaderboard",
        description: "More challenging successor to GLUE with harder tasks.",
      },
      {
        id: 17,
        name: "Multilingual LEaderboard",
        link: "https://huggingface.co/spaces/mteb/leaderboard",
        description: "MTEB benchmark for multilingual model evaluation.",
      },
      {
        id: 18,
        name: "TruthfulQA Leaderboard",
        link: "https://github.com/sylinrl/TruthfulQA",
        description: "Benchmark for measuring truthfulness in model responses.",
      },
      {
        id: 19,
        name: "Instruction Tuning Benchmark",
        link: "https://github.com/google-research/google-research/tree/master/instruction_tuning_benchmark",
        description:
          "Google's benchmark for instruction-following capabilities.",
      },
      {
        id: 20,
        name: "LLM Security Leaderboard",
        link: "https://www.llm-security.org/leaderboard",
        description:
          "Evaluation of models' resistance to security exploits and jailbreaks.",
      },
      {
        id: 21,
        name: "Hallucination Leaderboard",
        link: "https://github.com/vectara/hallucination-leaderboard/tree/main",
        description:
          "Public LLM leaderboard computed using Vectara's Hughes Hallucination Evaluation Model.",
        description2:
          "Public LLM leaderboard computed using Vectara's Hughes Hallucination Evaluation Model. This evaluates how often an LLM introduces hallucinations when summarizing a document. We plan to update this regularly as our model and the LLMs get updated over time. Also, feel free to check out our hallucination leaderboard on Hugging Face. The rankings in this leaderboard are computed using the HHEM-2.1 hallucination evaluation model. If you are interested in the previous leaderboard, which was based on HHEM-1.0, it is available here for more details.",
      },
    ].map((resource) => ({
      ...resource,
      favicon: getFaviconUrl(resource.link),
    })),
  },
  {
    title: "LLM Communities",
    tag: "Learning Resources",
    tag2: "Communities",
    description:
      "Active communities and forums for LLM developers, researchers, and enthusiasts",
    color: "pink",
    resources: [
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
        description:
          "Discussion of latest ML papers and their implementations.",
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
    ].map((resource) => ({
      ...resource,
      favicon: getFaviconUrl(resource.link),
    })),
  },
  {
    title: "LLM Deployment",
    tag: "Learning Resources",
    tag2: "Deployment",

    description:
      "Tools, frameworks, and platforms for deploying and serving LLM applications",
    color: "green",
    resources: [
      // Frameworks & SDKs
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
        description:
          "Microsoft's cloud service for MLOps and model deployment.",
      },
    ].map((resource) => ({
      ...resource,
      favicon: getFaviconUrl(resource.link),
    })),
  },
  {
    title: "Open Source Models",
    tag: "LLM Models",
    tag2: "Open Source Models",

    description:
      "Collection of open source large language models available for research and deployment",
    color: "yellow",
    resources: [
      // 2024 Latest Releases
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
        description:
          "Upstage's model optimized for long context understanding.",
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
    ].map((resource) => ({
      ...resource,
      favicon: getFaviconUrl(resource.link),
    })),
  },
  {
    title: "Proprietary Models",
    tag: "LLM Models",
    tag2: "Proprietary Models",
    description: "Popular LLM applications and models",
    color: "blue",
    resources: [
      {
        id: 1,
        name: "ChatGPT",
        link: "https://openai.com/chatgpt",
        description:
          "OpenAI's conversational AI for general-purpose question answering and tasks.",
      },
      {
        id: 2,
        name: "Jasper AI",
        link: "https://www.jasper.ai/",
        description:
          "AI-powered content creation tool for marketing, copywriting, and more.",
      },
      {
        id: 3,
        name: "GitHub Copilot",
        link: "https://github.com/features/copilot",
        description:
          "AI pair programmer that suggests code completions and snippets.",
      },
      {
        id: 4,
        name: "Claude",
        link: "https://anthropic.com/claude",
        description:
          "Anthropic's advanced AI assistant for analysis, writing, and coding tasks.",
      },
      {
        id: 5,
        name: "Bard",
        link: "https://bard.google.com",
        description:
          "Google's experimental conversational AI service powered by PaLM.",
      },
    ].map((resource) => ({
      ...resource,
      favicon: getFaviconUrl(resource.link),
    })),
  },
  {
    title: "AI Applications",
    description:
      "Popular applications and tools powered by artificial intelligence",
    tag: "AI Applications",
    color: "purple",
    resources: [
      {
        id: 1,
        name: "Midjourney",
        link: "https://www.midjourney.com/",
        description: "AI-powered image generation from text descriptions",
      },
      {
        id: 2,
        name: "DALL-E",
        link: "https://openai.com/dall-e-2",
        description: "OpenAI's text-to-image generation model",
      },
      {
        id: 3,
        name: "Stable Diffusion",
        link: "https://stability.ai/",
        description: "Open-source image generation model",
      },
      {
        id: 4,
        name: "Runway",
        link: "https://runwayml.com/",
        description: "AI-powered creative tools for video and content creation",
      },
      {
        id: 5,
        name: "Synthesia",
        link: "https://www.synthesia.io/",
        description: "AI video generation platform",
      },
    ].map((resource) => ({
      ...resource,
      favicon: getFaviconUrl(resource.link),
    })),
  },
];
