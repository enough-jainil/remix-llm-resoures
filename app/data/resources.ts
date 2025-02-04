import { freeResources } from "./resources/freeResources";
import { videoTutorials } from "./resources/videoTutorials";
import { academicCourses } from "./resources/academicCourses";
import { researchPapers } from "./resources/researchPaper";
import { githubRepos } from "./resources/githubRepos";
import { dataProcessingTools } from "./resources/dataProcessingTools";
import { openSourceApps } from "./resources/openSourceApps";
import { datasets } from "./resources/Datasets";
import { llmLeaderboards } from "./resources/llmLeaderboards";
import { llmCommunities } from "./resources/llmCommunities";
import { llmDeployment } from "./resources/llmDeployment";
import { proprietaryApps } from "./resources/proprietaryApps";
import { openSourceGenerativeAI } from "./resources/openSourceGenerativeAI";
import { proprietaryGenerativeAI } from "./resources/proprietaryGenerativeAI";
import { proprietaryVideoGeneration } from "./resources/proprietaryVideoGeneration";
import { openaiModels } from "./resources/llm-models/proprietary/openaiProprietaryModels";
import { googleModels } from "./resources/llm-models/proprietary/googleProprietaryModels";
import { mistralModels } from "./resources/llm-models/proprietary/mistralProprietaryModels";
import { anthropicModels } from "./resources/llm-models/proprietary/anthropicProprietaryModels";
import { xaiModels } from "./resources/llm-models/proprietary/xaiProprietaryModels";
import { metaModels } from "./resources/llm-models/open-source/metaModels";
import { deepseekModels } from "./resources/llm-models/open-source/deepseekModels";
import { qwenModels } from "./resources/llm-models/open-source/qwenModels";
import { nvidiaModels } from "./resources/llm-models/open-source/nvidiaModels";
import { oneaiModels } from "./resources/llm-models/open-source/01-aiModels";
import { openSourceVideoGeneration } from "./resources/openSourceVideoGeneration";
export const resourceBlocks = [
  {
    title: "Free Resources",
    tag: "Learning Resources",
    tag2: "Free Resources",
    description:
      "Essential learning materials and tutorials to get started with LLMs",
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
    resources: academicCourses,
  },
  {
    title: "Research Papers",
    tag: "Learning Resources",
    tag2: "Research Papers",
    description: "Latest research papers and technical reports in LLM field",
    resources: researchPapers,
  },
  {
    title: "GitHub Repositories",
    tag: "Learning Resources",
    tag2: "GitHub Repositories",
    description:
      "Essential GitHub repositories for LLM development, training, and deployment",
    resources: githubRepos,
  },
  {
    title: "Data Processing Tools",
    tag: "Learning Resources",
    tag2: "Data Processing Tools",
    description:
      "Tools and utilities for processing, cleaning, and preparing LLM training data",
    resources: dataProcessingTools,
  },
  {
    title: "Datasets",
    tag: "Learning Resources",
    tag2: "Datasets",
    description: "High-quality datasets and data collections for LLM training",
    resources: datasets,
  },
  {
    title: "LLM Leaderboards",
    tag: "Learning Resources",
    tag2: "Benchmarks",
    description:
      "Top benchmarks and leaderboards for comparing LLM performance across different tasks",
    resources: llmLeaderboards,
  },
  {
    title: "LLM Communities",
    tag: "Learning Resources",
    tag2: "Communities",
    description:
      "Active communities and forums for LLM developers, researchers, and enthusiasts",
    resources: llmCommunities,
  },
  {
    title: "LLM Deployment",
    tag: "Learning Resources",
    tag2: "Deployment",
    description:
      "Tools, frameworks, and platforms for deploying and serving LLM applications",
    resources: llmDeployment,
  },
  {
    title: "Meta Models",
    tag: "LLM Models Open Source",
    tag2: "Meta Models",
    description: "Open source models from Meta (Facebook AI Research)",
    resources: metaModels,
  },
  {
    title: "Mistral Models",
    tag: "LLM Models Open Source",
    tag2: "Mistral Models",
    description: "High-performance open-weight models from Mistral AI",
    resources: mistralModels,
  },
  {
    title: "DeepSeek Models",
    tag: "LLM Models Open Source",
    tag2: "DeepSeek Models",
    description: "Open source models from DeepSeek AI",
    resources: deepseekModels,
  },
  {
    title: "Qwen Models",
    tag: "LLM Models Open Source",
    tag2: "Qwen Models",
    description: "Open source models from Alibaba's Qwen team",
    resources: qwenModels,
  },
  {
    title: "NVIDIA Models",
    tag: "LLM Models Open Source",
    tag2: "NVIDIA Models",
    description: "Open source models from NVIDIA",
    resources: nvidiaModels,
  },
  {
    title: "Google Models",
    tag: "LLM Models Open Source",
    tag2: "Google Models",
    description: "Open source models from Google Research",
    resources: googleModels,
  },
  {
    title: "01.AI Models",
    tag: "LLM Models Open Source",
    tag2: "01.AI Models",
    description: "Open source models from 01.AI",
    resources: oneaiModels,
  },
  {
    title: "OpenAI Models",
    tag: "LLM Models Proprietary",
    tag2: "OpenAI Models",
    description: "Collection of OpenAI's proprietary language models",
    resources: openaiModels,
  },
  {
    title: "Google Models",
    tag: "LLM Models Proprietary",
    tag2: "Google Models",
    description: "Google's Gemini family of AI models",
    resources: googleModels,
  },
  {
    title: "Mistral Models",
    tag: "LLM Models Proprietary",
    tag2: "Mistral Models",
    description: "Open-weight models from Mistral AI",
    resources: mistralModels,
  },
  {
    title: "Anthropic Models",
    tag: "LLM Models Proprietary",
    tag2: "Anthropic Models",
    description: "Claude model family from Anthropic",
    resources: anthropicModels,
  },
  {
    title: "xAI Models",
    tag: "LLM Models Proprietary",
    tag2: "xAI Models",
    description: "Grok models from Elon Musk's xAI",
    resources: xaiModels,
  },
  {
    title: "Open Source Generative AI",
    tag: "Image Generation",
    tag2: "Open Source",
    description: "Ready-to-use applications and implementations",
    resources: openSourceGenerativeAI,
  },
  {
    title: "Proprietary Generative AI",
    tag: "Image Generation",
    tag2: "Proprietary",
    description: "Ready-to-use applications and implementations",
    resources: proprietaryGenerativeAI,
  },
  {
    title: "Open Source Video Generation",
    tag: "Video Generation",
    tag2: "Open Source",
    description: "Ready-to-use applications and implementations",
    resources: openSourceVideoGeneration,
  },
  {
    title: "Proprietary Video Generation",
    tag: "Video Generation",
    tag2: "Proprietary",
    description: "Ready-to-use applications and implementations",
    resources: proprietaryVideoGeneration,
  },
  {
    title: "Open Source Apps | Projects",
    tag: "Apps | Projects",
    tag2: "Open Source Apps | Projects",
    description: "Ready-to-use applications and implementations",
    resources: openSourceApps,
  },
  {
    title: "Proprietary Apps | Projects",
    tag: "Apps | Projects",
    tag2: "Proprietary Apps | Projects",
    description: "Ready-to-use applications and implementations",
    resources: proprietaryApps,
  },
];
