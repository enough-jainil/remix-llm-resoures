import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const freeResources = [
  {
    id: 1,
    name: "Hugging Face Course",
    link: "https://huggingface.co/learn/nlp-course/chapter1/1",
    description:
      "Comprehensive course covering transformers, NLP tasks, and practical implementation with real-world examples.",
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
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
