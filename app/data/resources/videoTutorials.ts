import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const videoTutorials = [
  {
    id: 1,
    name: "3Blue1Brown Neural Networks",
    link: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi",
    description:
      "Visual introduction to neural networks fundamentals with beautiful animations.",
  },
  {
    id: 2,
    name: "StatQuest ML Basics",
    link: "https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF",
    description:
      "Clear explanations of machine learning fundamentals with simple examples.",
  },
  {
    id: 3,
    name: "Andrej Karpathy: Neural Networks Zero to Hero",
    link: "https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ",
    description:
      "Comprehensive series building neural networks from scratch, leading to transformers.",
  },
  // Introduction to LLMs
  {
    id: 4,
    name: "What are Large Language Models?",
    link: "https://www.youtube.com/watch?v=5sLYAQS9sWQ",
    description:
      "Google's accessible introduction to LLMs and their capabilities.",
  },
  {
    id: 5,
    name: "How GPT Models Work",
    link: "https://www.youtube.com/watch?v=VMj-3S1tku0",
    description:
      "Clear explanation of GPT architecture and token prediction process.",
  },
  // Transformer Architecture
  {
    id: 6,
    name: "Attention Is All You Need - Paper Explained",
    link: "https://www.youtube.com/watch?v=iDulhoQ2pro",
    description:
      "Detailed walkthrough of the original transformer paper's architecture.",
  },
  {
    id: 7,
    name: "Illustrated Guide to Transformers",
    link: "https://www.youtube.com/watch?v=4Bdc55j80l8",
    description:
      "Visual explanation of transformer architecture with animations.",
  },
  // Practical Implementation
  {
    id: 8,
    name: "Building GPT from Scratch",
    link: "https://www.youtube.com/watch?v=kCc8FmEb1nY",
    description:
      "Andrej Karpathy's detailed implementation of GPT architecture in Python.",
  },
  {
    id: 9,
    name: "Fine-tuning LLMs with PEFT",
    link: "https://www.youtube.com/watch?v=Us5ZFp16PaU",
    description:
      "Tutorial on efficient fine-tuning techniques for large language models.",
  },
  // Advanced Topics
  {
    id: 10,
    name: "Yannic Kilcher LLM Paper Reviews",
    link: "https://www.youtube.com/playlist?list=PL1v8zpldgH3pR7LPX-RQzeUomqMc_Xw4-",
    description:
      "Technical breakdowns of latest LLM research papers and developments.",
  },
  {
    id: 11,
    name: "Understanding RLHF",
    link: "https://www.youtube.com/watch?v=2MBJOuVq380",
    description:
      "Deep dive into Reinforcement Learning from Human Feedback for LLMs.",
  },
  {
    id: 12,
    name: "Mixture of Experts Explained",
    link: "https://www.youtube.com/watch?v=UNiK3RiVoHo",
    description:
      "Technical explanation of MoE architecture used in modern LLMs.",
  },
  // Practical Applications
  {
    id: 13,
    name: "LangChain Crash Course",
    link: "https://www.youtube.com/watch?v=LbT1yp6quS8",
    description:
      "Quick introduction to building LLM applications with LangChain.",
  },
  {
    id: 14,
    name: "Building RAG Applications",
    link: "https://www.youtube.com/watch?v=wBhY-7B2jdY",
    description:
      "Tutorial on implementing Retrieval Augmented Generation systems.",
  },
  // Latest Developments
  {
    id: 15,
    name: "State of GPT",
    link: "https://www.youtube.com/watch?v=bZQun8Y4L2A",
    description:
      "Andrej Karpathy's overview of current state and future of GPT models.",
  },
  {
    id: 16,
    name: "Scaling Laws Explained",
    link: "https://www.youtube.com/watch?v=h1NqZvNFbE0",
    description:
      "Understanding how model performance scales with size and compute.",
  },
  // Advanced Research Topics
  {
    id: 17,
    name: "Constitutional AI",
    link: "https://www.youtube.com/watch?v=dC7_sZ2MQPE",
    description:
      "Deep dive into making AI systems more aligned and controllable.",
  },
  {
    id: 18,
    name: "Sparse Attention Mechanisms",
    link: "https://www.youtube.com/watch?v=gZIP-_2XYMM",
    description:
      "Advanced discussion of efficient attention mechanisms in transformers.",
  },
  {
    id: 19,
    name: "Model Merging Techniques",
    link: "https://www.youtube.com/watch?v=K9QVXE5M9",
    description:
      "Technical exploration of methods for combining trained models.",
  },
  {
    id: 20,
    name: "Future of LLMs",
    link: "https://www.youtube.com/watch?v=AhyznRSDPB4",
    description:
      "Research directions and challenges in language model development.",
  },
  {
    id: 21,
    name: "Neural Networks: Zero to Hero - YouTube Playlist",
    link: "https://youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ&si=XunGj0-KizQAZHET",
    description:
      "A comprehensive YouTube playlist covering neural networks from basics to advanced topics.",
  },
  {
    id: 22,
    name: "MIT Deep Learning Lectures",
    link: "https://youtube.com/playlist?list=PLNONVE5W8PCTKHkDbnKIjakw_xVpI4DjT",
    description:
      "Comprehensive lecture series on deep learning fundamentals and applications.",
  },
  {
    id: 23,
    name: "Stanford AI Alignment Lecture",
    link: "https://www.youtube.com/live/dO4TPJkeaaU",
    description:
      "In-depth discussion of AI alignment challenges and approaches.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
