import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const academicCourses = [
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
    description: "Introduction to Deep Learning by Bhiksha Raj and Rita Singh.",
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
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
