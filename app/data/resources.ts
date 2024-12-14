import { getFaviconUrl } from "~/utils/getFaviconUrl";
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
import { openSourceModels } from "./resources/openSourceModels";
import { proprietaryModels } from "./resources/proprietaryModels";
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
    resources: datasets,
  },

  {
    title: "LLM Leaderboards",
    tag: "Learning Resources",
    tag2: "Benchmarks",

    description:
      "Top benchmarks and leaderboards for comparing LLM performance across different tasks",
    color: "purple",
    resources: llmLeaderboards,
  },
  {
    title: "LLM Communities",
    tag: "Learning Resources",
    tag2: "Communities",
    description:
      "Active communities and forums for LLM developers, researchers, and enthusiasts",
    color: "pink",
    resources: llmCommunities,
  },
  {
    title: "LLM Deployment",
    tag: "Learning Resources",
    tag2: "Deployment",

    description:
      "Tools, frameworks, and platforms for deploying and serving LLM applications",
    color: "green",
    resources: llmDeployment,
  },
  {
    title: "Open Source Models",
    tag: "LLM Models",
    tag2: "Open Source Models",

    description:
      "Collection of open source large language models available for research and deployment",
    color: "yellow",
    resources: openSourceModels,
  },
  {
    title: "Proprietary Models",
    tag: "LLM Models",
    tag2: "Proprietary Models",
    description: "Popular LLM applications and models",
    color: "blue",
    resources: proprietaryModels,
  },
];
