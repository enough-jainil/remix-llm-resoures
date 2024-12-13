import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const resourceBlocks = [
  {
    title: "Free Resources",
    tag: "Learning Resources",
    tag2: "Free Resources",
    description:
      "Essential learning materials and tutorials to get started with LLMs",
    color: "blue",
    resources: [
      {
        id: 1,
        name: "Hugging Face Course",
        link: "https://huggingface.co/learn/nlp-course/chapter1/1",
        description:
          "Comprehensive course covering transformers, NLP tasks, and practical implementation with real-world examples.",
        description2:
          "Hugging Face's comprehensive course covering transformers, NLP tasks, and practical implementation with real-world examples.",
      },
      {
        id: 2,
        name: "Fast.ai Practical Deep Learning",
        link: "https://course.fast.ai/",
        description:
          "Top-down approach to deep learning, teaching practical applications before diving into theory.",
      },
      {
        id: 3,
        name: "Google Machine Learning Crash Course",
        link: "https://developers.google.com/machine-learning/crash-course",
        description:
          "Fast-paced introduction to ML fundamentals using TensorFlow, with hands-on exercises.",
      },
      {
        id: 4,
        name: "TensorFlow Tutorials",
        link: "https://www.tensorflow.org/tutorials",
        description:
          "Official guides and tutorials for building ML models with TensorFlow, from basics to advanced topics.",
      },
      {
        id: 5,
        name: "PyTorch Tutorials",
        link: "https://pytorch.org/tutorials/",
        description:
          "Step-by-step tutorials for deep learning with PyTorch, covering various model architectures.",
      },
      {
        id: 6,
        name: "Deep Learning Specialization",
        link: "https://www.coursera.org/specializations/deep-learning",
        description:
          "Andrew Ng's renowned course series covering neural networks, optimization, and ML projects.",
      },
      {
        id: 7,
        name: "ML YouTube Courses",
        link: "https://github.com/dair-ai/ML-YouTube-Courses",
        description:
          "Curated collection of high-quality machine learning courses available on YouTube.",
      },
      {
        id: 8,
        name: "Papers with Code",
        link: "https://paperswithcode.com/",
        description:
          "Browse state-of-the-art ML papers with their official and community code implementations.",
      },
      {
        id: 9,
        name: "Kaggle Learn",
        link: "https://www.kaggle.com/learn",
        description:
          "Interactive tutorials on ML, deep learning, and data science with hands-on exercises.",
      },
      {
        id: 10,
        name: "OpenAI Tutorials",
        link: "https://platform.openai.com/docs/tutorials",
        description:
          "Official guides for using OpenAI's APIs and models effectively in applications.",
      },
      {
        id: 11,
        name: "ML From Scratch",
        link: "https://github.com/eriklindernoren/ML-From-Scratch",
        description:
          "Python implementations of ML algorithms and models from ground up for better understanding.",
      },
      {
        id: 12,
        name: "Deep Learning Book",
        link: "https://www.deeplearningbook.org/",
        description:
          "Comprehensive textbook on deep learning fundamentals by Goodfellow, Bengio, and Courville.",
      },
      {
        id: 13,
        name: "DeepMind Learning Resources",
        link: "https://deepmind.com/learning-resources",
        description:
          "Educational materials and research papers from DeepMind's research team.",
      },
      {
        id: 14,
        name: "UCL COMP M050: Reinforcement Learning",
        link: "https://www.davidsilver.uk/teaching/",
        description:
          "Comprehensive RL course by David Silver, covering fundamentals to advanced topics.",
      },
      {
        id: 15,
        name: "NYU Deep Learning",
        link: "https://atcold.github.io/NYU-DLSP21/",
        description:
          "Deep Learning course by Alfredo Canziani with PyTorch implementations.",
      },
      {
        id: 16,
        name: "UCF Computer Vision",
        link: "https://www.crcv.ucf.edu/courses/",
        description:
          "Computer Vision course by Mubarak Shah at University of Central Florida.",
      },
      {
        id: 17,
        name: "UWaterloo CS480/680: Intro to ML",
        link: "https://cs.uwaterloo.ca/~ppoupart/teaching/cs480-spring19/",
        description: "Introduction to Machine Learning by Pascal Poupart.",
      },
      {
        id: 18,
        name: "UMass CS685: Advanced NLP",
        link: "https://people.cs.umass.edu/~miyyer/cs685/",
        description:
          "Advanced Natural Language Processing covering latest research and techniques.",
      },
      {
        id: 19,
        name: "AMMI: Geometric Deep Learning",
        link: "https://www.africamasters.uni-tuebingen.de/",
        description:
          "African Master in Machine Intelligence by Michael M. Bronstein, Joan Bruna, Taco Cohen, and Petar Veličković.",
      },
      {
        id: 20,
        name: "Cornell CS 5787: Applied ML",
        link: "https://www.cs.cornell.edu/courses/cs5787/",
        description:
          "Applied Machine Learning by Volodymyr Kuleshov focusing on practical applications.",
      },
      {
        id: 21,
        name: "Full Stack Deep Learning",
        link: "https://fullstackdeeplearning.com/",
        description:
          "Production ML course by Sergey Karayev covering end-to-end implementation.",
      },
      {
        id: 22,
        name: "Neural Networks: Zero to Hero",
        link: "https://karpathy.ai/zero-to-hero.html",
        description:
          "Neural Networks course by Andrej Karpathy, building from fundamentals.",
      },
      {
        id: 23,
        name: "What is ChatGPT Doing",
        link: "https://www.youtube.com/watch?v=flXrLGPY3SU",
        description:
          "Technical explanation of ChatGPT's inner workings and architecture.",
      },
      {
        id: 24,
        name: "Cohere LLM University",
        link: "https://docs.cohere.com/docs/llmu",
        description:
          "Comprehensive course on LLMs covering theory, prompting, fine-tuning, and real-world applications by Cohere.",
      },
    ].map((resource) => ({
      ...resource,
      favicon: getFaviconUrl(resource.link),
    })),
  },
  {
    title: "Video Tutorials",
    tag: "Learning Resources",
    tag2: "Video Tutorials",
    description:
      "High-quality video content for visual learners, ordered from basics to advanced topics",
    color: "purple",
    resources: [
      // Fundamentals & Prerequisites
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
    ].map((resource) => ({
      ...resource,
      favicon: getFaviconUrl(resource.link),
    })),
  },
  {
    title: "Academic Courses",
    tag: "Learning Resources",
    tag2: "Academic Courses",
    description:
      "University courses from top institutions covering ML, AI, and NLP",
    color: "green",
    resources: [
      {
        id: 1,
        name: "CS324: Large Language Models",
        link: "https://stanford-cs324.github.io/winter2022/lectures/introduction/",
        description:
          "Stanford's foundational course on LLMs covering architecture, training, and deployment - Winter 2022.",
      },
      // Stanford Courses
      {
        id: 2,
        name: "CS221: Artificial Intelligence",
        link: "https://stanford-cs221.github.io/",
        description:
          "Principles and Techniques by Percy Liang and Dorsa Sadigh - Core concepts in artificial intelligence.",
      },
      {
        id: 3,
        name: "CS229: Machine Learning",
        link: "https://cs229.stanford.edu/",
        description:
          "Machine Learning fundamentals by Andrew Ng and Anand Avati - Comprehensive ML course.",
      },
      {
        id: 4,
        name: "CS230: Deep Learning",
        link: "https://cs230.stanford.edu/",
        description:
          "Deep Learning by Andrew Ng - Advanced neural network architectures and applications.",
      },
      {
        id: 5,
        name: "CS231n: CNN for Visual Recognition",
        link: "http://cs231n.stanford.edu/",
        description:
          "Convolutional Neural Networks by Fei-Fei Li, Andrej Karpathy, Justin Johnson, and Serena Yeung.",
      },
      {
        id: 6,
        name: "CS224n: NLP with Deep Learning",
        link: "http://web.stanford.edu/class/cs224n/",
        description:
          "Natural Language Processing with Deep Learning by Christopher Manning.",
      },
      {
        id: 7,
        name: "CS224w: Machine Learning with Graphs",
        link: "http://web.stanford.edu/class/cs224w/",
        description:
          "Machine Learning with Graphs by Jure Leskovec - Graph neural networks and applications.",
      },
      {
        id: 8,
        name: "CS224u: Natural Language Understanding",
        link: "https://web.stanford.edu/class/cs224u/",
        description:
          "Natural Language Understanding by Christopher Potts - Advanced NLP concepts.",
      },
      {
        id: 9,
        name: "CS234: Reinforcement Learning",
        link: "https://web.stanford.edu/class/cs234/",
        description:
          "Reinforcement Learning by Emma Brunskill - RL algorithms and applications.",
      },
      {
        id: 10,
        name: "CS330: Deep Multi-task Learning",
        link: "https://cs330.stanford.edu/",
        description:
          "Deep Multi-task and Meta Learning by Chelsea Finn - Advanced learning paradigms.",
      },
      {
        id: 11,
        name: "CS25: Transformers United",
        link: "https://web.stanford.edu/class/cs25/",
        description:
          "Transformers United by Div Garg, Steven Feng, and Rylan Schaeffer.",
      },
      {
        id: 12,
        name: "Stanford ML Explainability",
        link: "https://stanford-cs-325b.github.io/",
        description:
          "Stanford Seminar on Machine Learning Explainability and interpretability.",
      },
      {
        id: 13,
        name: "Stanford NLP",
        link: "https://web.stanford.edu/class/archive/cs/cs224n/cs224n.1214/",
        description:
          "Coursera X Stanford Natural Language Processing course materials.",
      },
      // CMU Courses
      {
        id: 14,
        name: "CMU CS 11-711: Advanced NLP",
        link: "http://phontron.com/class/anlp2024/",
        description:
          "Advanced NLP by Graham Neubig - State-of-the-art NLP techniques.",
      },
      {
        id: 15,
        name: "CMU CS 11-747: Neural Networks for NLP",
        link: "http://phontron.com/class/nn4nlp2024/",
        description:
          "Neural Networks for NLP by Graham Neubig - Deep learning for language.",
      },
      {
        id: 16,
        name: "CMU CS 11-737: Multilingual NLP",
        link: "http://phontron.com/class/multilingual2024/",
        description:
          "Multilingual NLP by Graham Neubig - Cross-lingual and multilingual methods.",
      },
      {
        id: 17,
        name: "CMU CS 11-785: Deep Learning",
        link: "https://deeplearning.cs.cmu.edu/",
        description:
          "Introduction to Deep Learning by Bhiksha Raj and Rita Singh.",
      },
      {
        id: 18,
        name: "CMU CS 11-777: Multimodal ML",
        link: "https://cmu-multicomp-lab.github.io/mmml-course/fall2023/",
        description: "Multimodal Machine Learning by Louis-Philippe Morency.",
      },
      {
        id: 19,
        name: "CMU CS 10-708: Probabilistic Graphical Models",
        link: "https://www.cs.cmu.edu/~epxing/Class/10708-20/",
        description: "Probabilistic Graphical Models by Eric Xing.",
      },
      {
        id: 20,
        name: "CMU LTI Low Resource NLP",
        link: "http://phontron.com/class/lti-colloquium2020/",
        description: "LTI Low Resource NLP Bootcamp 2020 by Graham Neubig.",
      },
      // Adding to the Academic Courses block after Stanford and CMU courses
      {
        id: 21,
        name: "MIT OpenCourseWare",
        link: "https://ocw.mit.edu/search/?t=Computer%20Science",
        description:
          "Free access to MIT's course materials covering computer science and AI.",
      },
      {
        id: 22,
        name: "MIT 6.034: Artificial Intelligence",
        link: "https://ocw.mit.edu/courses/6-034-artificial-intelligence-fall-2010/",
        description:
          "Comprehensive AI course by Patrick Winston covering core concepts and techniques.",
      },
      {
        id: 23,
        name: "MIT 6.S094: Deep Learning",
        link: "https://deeplearning.mit.edu/",
        description:
          "Deep Learning fundamentals by Lex Fridman with focus on autonomous vehicles.",
      },
      {
        id: 24,
        name: "MIT 6.S191: Introduction to Deep Learning",
        link: "http://introtodeeplearning.com/",
        description:
          "Introduction to Deep Learning by Alexander Amini and Ava Soleimany - MIT's introductory DL course.",
      },
      {
        id: 25,
        name: "MIT 6.S192: Deep Learning for Art",
        link: "http://ali-design.mit.edu/classes/6.S192/",
        description:
          "Deep Learning for Art, Aesthetics, and Creativity by Ali Jahanian.",
      },
      {
        id: 26,
        name: "MIT 6.5940: TinyML",
        link: "https://tinyml.mit.edu/",
        description:
          "TinyML and Efficient Deep Learning Computing by Song Han - Focus on model optimization.",
      },
    ].map((resource) => ({
      ...resource,
      favicon: getFaviconUrl(resource.link),
    })),
  },
  {
    title: "Research Papers",
    tag: "Learning Resources",
    tag2: "Research Papers",
    description: "Latest research papers and technical reports in LLM field",
    color: "yellow",
    resources: [
      {
        id: 1,
        name: "Attention Is All You Need",
        link: "https://arxiv.org/abs/1706.03762",
        description:
          "Original transformer paper (2017) that revolutionized natural language processing and deep learning.",
      },
      {
        id: 2,
        name: "BERT",
        link: "https://arxiv.org/abs/1810.04805",
        description:
          "Bidirectional transformers for language understanding (2018), introducing pre-training and fine-tuning paradigm.",
      },
      {
        id: 3,
        name: "GPT-3",
        link: "https://arxiv.org/abs/2005.14165",
        description:
          "Language models are few-shot learners (2020), introducing scaling laws and in-context learning.",
      },
      {
        id: 4,
        name: "PaLM",
        link: "https://arxiv.org/abs/2204.02311",
        description:
          "Pathways Language Model (2022), demonstrating breakthrough performance in reasoning and multilingual tasks.",
      },
      {
        id: 5,
        name: "InstructGPT",
        link: "https://arxiv.org/abs/2203.02155",
        description:
          "Training language models to follow instructions (2022) with human feedback.",
      },
      {
        id: 6,
        name: "Constitutional AI",
        link: "https://arxiv.org/abs/2212.08073",
        description:
          "Anthropic's approach (2022) to training safe and ethical AI systems.",
      },
      {
        id: 7,
        name: "LLaMA",
        link: "https://arxiv.org/abs/2302.13971",
        description:
          "Meta's efficient foundation models (Feb 2023) that democratized LLM research.",
      },
      {
        id: 8,
        name: "GPT-4",
        link: "https://arxiv.org/abs/2303.08774",
        description:
          "Technical report (Mar 2023) on OpenAI's multimodal large language model.",
      },
      {
        id: 9,
        name: "PaLM 2",
        link: "https://arxiv.org/abs/2305.10403",
        description:
          "Google's improved language model (May 2023) with enhanced multilingual capabilities.",
      },
      {
        id: 10,
        name: "RWKV",
        link: "https://arxiv.org/abs/2305.13048",
        description:
          "Linear transformers with RNN-like computation (May 2023) for efficient inference.",
      },
      {
        id: 11,
        name: "Llama 2",
        link: "https://arxiv.org/abs/2307.09288",
        description:
          "Meta's open release (Jul 2023) of improved foundation models with commercial usage.",
      },
      {
        id: 12,
        name: "Code Llama",
        link: "https://arxiv.org/abs/2308.12950",
        description:
          "Open foundation models (Aug 2023) for code understanding and generation.",
      },
      {
        id: 13,
        name: "Mistral 7B",
        link: "https://arxiv.org/abs/2310.06825",
        description:
          "Efficient open-source language model (Oct 2023) with sliding window attention.",
      },
      {
        id: 14,
        name: "Phi-2",
        link: "https://arxiv.org/abs/2311.10617",
        description:
          "Microsoft's small language model (Nov 2023) with strong reasoning capabilities.",
      },
      {
        id: 15,
        name: "Gemini",
        link: "https://storage.googleapis.com/deepmind-media/gemini/gemini_1_report.pdf",
        description:
          "Google's multimodal AI model (Dec 2023) trained across text, code, audio, image, and video.",
      },
      {
        id: 16,
        name: "Mixtral 8x7B",
        link: "https://arxiv.org/abs/2401.04088",
        description:
          "Mistral AI's sparse mixture-of-experts model (Jan 2024) with state-of-the-art performance.",
      },
      {
        id: 17,
        name: "Claude 3",
        link: "https://www.anthropic.com/news/claude-3-family",
        description:
          "Anthropic's latest model family (Mar 2024) with improved reasoning and capabilities.",
      },
      {
        id: 18,
        name: "Stable LM 3B",
        link: "https://arxiv.org/abs/2403.07608",
        description:
          "Small yet capable language model (Mar 2024) for efficient deployment.",
      },
      {
        id: 19,
        name: "arXiv LLM Papers",
        link: "https://arxiv.org/list/cs.CL/recent",
        description:
          "Latest research papers in computational linguistics and natural language processing.",
      },
      {
        id: 20,
        name: "Papers with Code LLM",
        link: "https://paperswithcode.com/methods/category/language-models",
        description:
          "Curated collection of LLM papers with implementation details and benchmarks.",
      },
      {
        id: 21,
        name: "The First Law of Complexodynamics",
        link: "https://arxiv.org/abs/2312.09818",
        description:
          "Sutskever's paper (2023) on fundamental principles governing complex system behavior.",
      },
      {
        id: 22,
        name: "The Unreasonable Effectiveness of RNNs",
        link: "https://karpathy.github.io/2015/05/21/rnn-effectiveness/",
        description:
          "Influential blog post (2015) by Andrej Karpathy on RNN capabilities and applications.",
      },
      {
        id: 23,
        name: "Understanding LSTM Networks",
        link: "https://colah.github.io/posts/2015-08-Understanding-LSTMs/",
        description:
          "Christopher Olah's clear explanation (2015) of LSTM architecture and functionality.",
      },
      {
        id: 24,
        name: "Recurrent Neural Network Regularization",
        link: "https://arxiv.org/abs/1409.2329",
        description:
          "Zaremba et al. (2014) on improving RNN training through dropout and other techniques.",
      },
      {
        id: 25,
        name: "Keeping Neural Networks Simple",
        link: "https://arxiv.org/abs/1412.6544",
        description:
          "Research on minimizing description length of weights for better generalization.",
      },
      {
        id: 26,
        name: "Pointer Networks",
        link: "https://arxiv.org/abs/1506.03134",
        description:
          "Novel architecture (2015) for learning sequences of pointers by Vinyals et al.",
      },
      {
        id: 27,
        name: "ImageNet Classification with Deep CNNs",
        link: "https://papers.nips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html",
        description:
          "AlexNet paper (2012) that kickstarted modern deep learning era.",
      },
      {
        id: 28,
        name: "Order Matters: Sequence to Sequence for Sets",
        link: "https://arxiv.org/abs/1511.06391",
        description:
          "Vinyals et al. (2015) on handling set-structured input and output with neural networks.",
      },
      {
        id: 29,
        name: "GPipe: Easy Scaling with Micro-Batch Pipeline Parallelism",
        link: "https://arxiv.org/abs/1811.06965",
        description:
          "Efficient pipeline parallelism (2018) for training large neural networks.",
      },
      {
        id: 30,
        name: "Deep Residual Learning for Image Recognition",
        link: "https://arxiv.org/abs/1512.03385",
        description:
          "ResNet paper (2015) introducing skip connections for very deep networks.",
      },
      {
        id: 31,
        name: "Multi-Scale Context Aggregation by Dilated Convolutions",
        link: "https://arxiv.org/abs/1511.07122",
        description:
          "Yu & Koltun (2015) on systematic use of dilated convolutions for dense prediction.",
      },
      {
        id: 32,
        name: "Neural Message Passing for Quantum Chemistry",
        link: "https://arxiv.org/abs/1704.01212",
        description:
          "Gilmer et al. (2017) on learning molecular properties through message passing.",
      },
      {
        id: 33,
        name: "Neural Machine Translation by Jointly Learning to Align and Translate",
        link: "https://arxiv.org/abs/1409.0473",
        description:
          "Bahdanau et al. (2014) introducing attention mechanism for NMT.",
      },
      {
        id: 34,
        name: "Identity Mappings in Deep Residual Networks",
        link: "https://arxiv.org/abs/1603.05027",
        description:
          "He et al. (2016) on improving residual networks through better forward propagation.",
      },
      {
        id: 35,
        name: "A Simple Neural Network Module for Relational Reasoning",
        link: "https://arxiv.org/abs/1706.01427",
        description:
          "Santoro et al. (2017) on learning relationships between entities.",
      },
      {
        id: 36,
        name: "Variational Lossy Autoencoder",
        link: "https://arxiv.org/abs/1611.02731",
        description:
          "Chen et al. (2016) on improving VAE with hierarchical latent variables.",
      },
      {
        id: 37,
        name: "Relational Recurrent Neural Networks",
        link: "https://arxiv.org/abs/1806.01822",
        description:
          "Santoro et al. (2018) on incorporating relational reasoning into RNNs.",
      },
      {
        id: 38,
        name: "Neural Turing Machines",
        link: "https://arxiv.org/abs/1410.5401",
        description:
          "Graves et al. (2014) on neural networks with external memory access.",
      },
      {
        id: 39,
        name: "Deep Speech 2",
        link: "https://arxiv.org/abs/1512.02595",
        description:
          "End-to-end speech recognition system (2015) for English and Mandarin.",
      },
      {
        id: 40,
        name: "Scaling Laws for Neural Language Models",
        link: "https://arxiv.org/abs/2001.08361",
        description:
          "Kaplan et al. (2020) on empirical laws governing LLM performance scaling.",
      },
      {
        id: 41,
        name: "A Tutorial on the MDL Principle",
        link: "https://arxiv.org/abs/0804.2251",
        description:
          "Grünwald (2008) on the Minimum Description Length principle.",
      },
      {
        id: 42,
        name: "Machine Super Intelligence",
        link: "https://arxiv.org/abs/2907.03512",
        description:
          "Theoretical framework for understanding and developing superintelligent AI systems.",
      },
      {
        id: 43,
        name: "Kolmogorov Complexity and Algorithmic Randomness",
        link: "https://www.springer.com/gp/book/9783540208068",
        description:
          "Li & Vitányi's comprehensive book on algorithmic information theory.",
      },
      {
        id: 44,
        name: "Stanford's CS231n CNN for Visual Recognition",
        link: "http://cs231n.stanford.edu/",
        description:
          "Comprehensive course materials on CNNs and computer vision.",
      },
      {
        id: 45,
        name: "Quantifying Complexity in Closed Systems",
        link: "https://arxiv.org/abs/2201.09152",
        description:
          "Analysis of complexity measures in closed dynamical systems.",
      },
    ].map((resource) => ({
      ...resource,
      favicon: getFaviconUrl(resource.link),
    })),
  },
  {
    title: "GitHub Repositories",
    tag: "Learning Resources",
    tag2: "GitHub Repositories",
    description:
      "Essential GitHub repositories for LLM development, training, and deployment",
    color: "blue",
    resources: [
      {
        id: 1,
        name: "LangChain",
        link: "https://github.com/langchain-ai/langchain",
        description:
          "Building applications with LLMs through composable components",
      },
      {
        id: 2,
        name: "vLLM",
        link: "https://github.com/vllm-project/vllm",
        description: "High-throughput and memory-efficient inference engine",
      },
      {
        id: 3,
        name: "llama.cpp",
        link: "https://github.com/ggerganov/llama.cpp",
        description: "Port of Facebook's LLaMA model in C/C++",
      },
      {
        id: 4,
        name: "text-generation-webui",
        link: "https://github.com/oobabooga/text-generation-webui",
        description: "Gradio web UI for running Large Language Models",
      },
      {
        id: 5,
        name: "FastChat",
        link: "https://github.com/lm-sys/FastChat",
        description: "Training and serving LLM chatbots",
      },
      {
        id: 6,
        name: "LocalAI",
        link: "https://github.com/go-skynet/LocalAI",
        description: "Self-hosted, community-driven LLM solution",
      },
      {
        id: 7,
        name: "LlamaIndex",
        link: "https://github.com/jerryjliu/llama_index",
        description: "Data framework for LLM applications",
      },
      {
        id: 8,
        name: "ExLlama",
        link: "https://github.com/turboderp/exllama",
        description: "Optimized inference for LLaMA models",
      },
      {
        id: 9,
        name: "PEFT",
        link: "https://github.com/huggingface/peft",
        description: "Parameter-Efficient Fine-Tuning methods",
      },
      {
        id: 10,
        name: "Transformers",
        link: "https://github.com/huggingface/transformers",
        description:
          "State-of-the-art Machine Learning for PyTorch and TensorFlow",
      },
      {
        id: 11,
        name: "GPT4All",
        link: "https://github.com/nomic-ai/gpt4all",
        description: "Run open-source LLMs locally on CPU",
      },
      {
        id: 12,
        name: "Axolotl",
        link: "https://github.com/OpenAccess-AI-Collective/axolotl",
        description: "Easy-to-use LLM fine-tuning framework",
      },
      {
        id: 13,
        name: "OpenLLM",
        link: "https://github.com/bentoml/OpenLLM",
        description: "Operating LLMs in production",
      },
      {
        id: 14,
        name: "lit-llama",
        link: "https://github.com/Lightning-AI/lit-llama",
        description: "Implementation of LLaMA in PyTorch Lightning",
      },
      {
        id: 15,
        name: "CTranslate2",
        link: "https://github.com/OpenNMT/CTranslate2",
        description: "Fast inference engine for Transformer models",
      },
      {
        id: 16,
        name: "DeepSpeed",
        link: "https://github.com/microsoft/DeepSpeed",
        description: "Deep learning optimization library",
      },
      {
        id: 17,
        name: "AutoGPT",
        link: "https://github.com/Significant-Gravitas/Auto-GPT",
        description: "Autonomous GPT-4 experiment framework",
      },
      {
        id: 18,
        name: "MLC-LLM",
        link: "https://github.com/mlc-ai/mlc-llm",
        description: "Universal LLM deployment across devices",
      },
      {
        id: 19,
        name: "LMFlow",
        link: "https://github.com/OptimalScale/LMFlow",
        description: "Toolbox for LLM fine-tuning and inference",
      },
      {
        id: 20,
        name: "LLaMA Factory",
        link: "https://github.com/hiyouga/LLaMA-Factory",
        description: "Fine-tuning framework for LLaMA models",
      },
    ].map((resource) => ({
      ...resource,
      favicon: getFaviconUrl(resource.link),
    })),
  },
  {
    title: "Data Processing Tools",
    tag: "Learning Resources",
    tag2: "Data Processing Tools",

    description:
      "Tools and utilities for processing, cleaning, and preparing LLM training data",
    color: "pink",
    resources: [
      {
        id: 1,
        name: "LangChain Text Splitters",
        link: "https://python.langchain.com/docs/modules/data_connection/document_transformers/",
        description:
          "Modern text splitting utilities for chunking and processing large documents for LLMs.",
      },
      {
        id: 2,
        name: "Unstructured.io",
        link: "https://unstructured.io/",
        description:
          "Latest open-source tool for extracting text from PDFs, images, and various document formats.",
      },
      {
        id: 3,
        name: "LlamaIndex",
        link: "https://www.llamaindex.ai/",
        description:
          "Advanced framework for ingesting, structuring, and accessing data for LLM applications.",
      },
      {
        id: 4,
        name: "Cleanlab",
        link: "https://github.com/cleanlab/cleanlab",
        description:
          "ML tool for automatically detecting and cleaning label issues in datasets.",
      },
      {
        id: 5,
        name: "TextCortex",
        link: "https://textcortex.com/",
        description:
          "AI-powered content processing and generation platform with advanced text analysis.",
      },
      {
        id: 6,
        name: "DeepSpeed",
        link: "https://www.deepspeed.ai/",
        description:
          "Microsoft's latest deep learning optimization library with data processing capabilities.",
      },
      {
        id: 7,
        name: "Doccano",
        link: "https://github.com/doccano/doccano",
        description:
          "Modern open-source text annotation tool for machine learning practitioners.",
      },
      {
        id: 8,
        name: "Label Studio",
        link: "https://labelstud.io/",
        description:
          "Open source data labeling tool with support for text, audio, images, and video.",
      },
      {
        id: 9,
        name: "Rubrix",
        link: "https://github.com/recognai/rubrix",
        description:
          "Open-source tool for data-centric NLP, focusing on dataset management and labeling.",
      },
      {
        id: 10,
        name: "Argilla",
        link: "https://argilla.io/",
        description:
          "Modern platform for data labeling, validation, and curation in NLP projects.",
      },
      {
        id: 11,
        name: "DataPrep.ai",
        link: "https://dataprep.ai/",
        description:
          "Latest tool for automated data cleaning and preparation with ML capabilities.",
      },
      {
        id: 12,
        name: "Haystack",
        link: "https://haystack.deepset.ai/",
        description:
          "End-to-end framework for building NLP pipelines with modern preprocessing tools.",
      },
      {
        id: 13,
        name: "Datasets CLI",
        link: "https://github.com/huggingface/datasets-cli",
        description:
          "Command-line tool for efficient dataset processing from Hugging Face.",
      },
      {
        id: 14,
        name: "Texthero",
        link: "https://texthero.org/",
        description:
          "Python toolkit for text preprocessing, representation and visualization.",
      },
      {
        id: 15,
        name: "Snorkel",
        link: "https://snorkel.ai/",
        description:
          "Programmatic data labeling platform for creating training datasets quickly.",
      },
      {
        id: 16,
        name: "Prodigy",
        link: "https://prodi.gy/",
        description:
          "Modern annotation tool from the makers of spaCy, with active learning capabilities.",
      },
      {
        id: 17,
        name: "DataTorch",
        link: "https://datatorch.io/",
        description:
          "Open-source platform for data labeling and ML workflow management.",
      },
      {
        id: 18,
        name: "Great Expectations",
        link: "https://greatexpectations.io/",
        description:
          "Tool for validating, documenting, and profiling data with ML support.",
      },
      {
        id: 19,
        name: "Kedro",
        link: "https://kedro.org/",
        description:
          "Production-ready framework for creating reproducible data processing pipelines.",
      },
      {
        id: 20,
        name: "Weights & Biases",
        link: "https://wandb.ai/",
        description:
          "MLOps platform with advanced data versioning and preprocessing capabilities.",
      },
      {
        id: 21,
        name: "PDFPlumber",
        link: "https://github.com/jsvine/pdfplumber",
        description:
          "Advanced PDF text and table extraction tool with precise positioning and layout analysis.",
      },
      {
        id: 22,
        name: "Nougat",
        link: "https://github.com/facebookresearch/nougat",
        description:
          "Meta's ML-powered tool for extracting text and math from academic PDFs with high accuracy.",
      },
      {
        id: 23,
        name: "Grobid",
        link: "https://github.com/kermitt2/grobid",
        description:
          "Machine learning tool for extracting and structuring scientific documents in PDF format.",
      },
      {
        id: 24,
        name: "PdfMiner.six",
        link: "https://github.com/pdfminer/pdfminer.six",
        description:
          "Python library for extracting text, images, and metadata from PDF documents.",
      },
      {
        id: 25,
        name: "OCRmyPDF",
        link: "https://github.com/ocrmypdf/OCRmyPDF",
        description:
          "Adds OCR text layer to scanned PDFs while optimizing for document quality.",
      },
      {
        id: 26,
        name: "Camelot",
        link: "https://github.com/camelot-dev/camelot",
        description:
          "Framework for extracting tables from PDF files with high precision.",
      },
      {
        id: 27,
        name: "DocTR",
        link: "https://github.com/mindee/doctr",
        description:
          "End-to-end document text recognition and analysis powered by deep learning.",
      },
      {
        id: 28,
        name: "Tabula",
        link: "https://tabula.technology/",
        description:
          "Free tool for extracting tables from PDF files into CSV and Excel formats.",
      },
      {
        id: 29,
        name: "Adobe PDF Services API",
        link: "https://developer.adobe.com/document-services/apis/pdf-services/",
        description:
          "Free tier API for PDF manipulation, extraction, and conversion with ML capabilities.",
      },
      {
        id: 30,
        name: "PaddleOCR",
        link: "https://github.com/PaddlePaddle/PaddleOCR",
        description:
          "Multilingual OCR toolkit supporting 80+ languages with document analysis features.",
      },
    ].map((resource) => ({
      ...resource,
      favicon: getFaviconUrl(resource.link),
    })),
  },
  {
    title: "Open Source Apps / Projects",
    tag: "Learning Resources",
    tag2: "Open Source Apps / Projects",

    description: "Ready-to-use applications and implementations",
    color: "red",
    resources: [
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
        description:
          "Run 🤗 Transformers in your browser with WebGL acceleration.",
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
    ].map((resource) => ({
      ...resource,
      favicon: getFaviconUrl(resource.link),
    })),
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
