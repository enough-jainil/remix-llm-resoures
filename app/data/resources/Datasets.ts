import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const datasets = [
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
    description: "Multilingual version of C4 dataset covering 101 languages.",
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
    description: "Archive of biomedical and life sciences journal literature.",
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
    description: "Real Google search questions with answers from Wikipedia.",
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
    description: "Question answering dataset requiring multi-hop reasoning.",
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
    description: "Multilingual dataset curated for the BLOOM language model.",
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
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
