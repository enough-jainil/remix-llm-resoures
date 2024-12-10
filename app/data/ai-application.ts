const getFaviconUrl = (link) => {
  const domain = new URL(link).hostname;
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
};

export const aiApps = [
  {
    title: "Creative AI Tools",
    description:
      "AI tools for generating creative content, including text, images, and videos.",
    color: "purple",
    resources: [
      {
        id: 1,
        name: "DALL·E",
        link: "https://openai.com/dall-e/",
        description:
          "AI-powered image generation from textual descriptions by OpenAI.",
      },
      {
        id: 2,
        name: "Runway ML",
        link: "https://runwayml.com/",
        description:
          "AI tools for video editing, text-to-video generation, and more.",
      },
      {
        id: 3,
        name: "Deep Dream Generator",
        link: "https://deepdreamgenerator.com/",
        description:
          "AI art generator that transforms photos into artistic visuals.",
      },
      {
        id: 4,
        name: "ChatGPT",
        link: "https://openai.com/chatgpt",
        description:
          "Conversational AI capable of generating creative text and engaging in dialogue.",
      },
      {
        id: 5,
        name: "Synthesia",
        link: "https://www.synthesia.io/",
        description:
          "AI-powered video creation with customizable virtual avatars.",
      },
      {
        id: 6,
        name: "Stable Diffusion",
        link: "https://stability.ai/",
        description:
          "Open-source image generation model for artistic and realistic visuals.",
      },
      {
        id: 7,
        name: "Canva AI",
        link: "https://www.canva.com/features/magic/",
        description:
          "AI-driven features for graphic design and content creation.",
      },
    ].map((resource) => ({
      ...resource,
      favicon: getFaviconUrl(resource.link),
    })),
  },
  {
    title: "AI for Productivity",
    description:
      "Applications designed to improve productivity and streamline workflows.",
    color: "blue",
    resources: [
      {
        id: 1,
        name: "Notion AI",
        link: "https://www.notion.so/product/ai",
        description:
          "AI assistant for note-taking, task management, and content generation.",
      },
      {
        id: 2,
        name: "Grammarly",
        link: "https://www.grammarly.com/",
        description:
          "AI-powered writing assistant for grammar, spelling, and style improvements.",
      },
      {
        id: 3,
        name: "Otter.ai",
        link: "https://otter.ai/",
        description: "AI-powered transcription and meeting notes application.",
      },
      {
        id: 4,
        name: "Zapier",
        link: "https://zapier.com/",
        description:
          "Automation tool that integrates with AI for task management and workflows.",
      },
      {
        id: 5,
        name: "Motion",
        link: "https://www.usemotion.com/",
        description: "AI-powered calendar and task management tool.",
      },
      {
        id: 6,
        name: "Clockwise",
        link: "https://www.getclockwise.com/",
        description:
          "AI calendar assistant for optimizing schedules and managing team availability.",
      },
    ].map((resource) => ({
      ...resource,
      favicon: getFaviconUrl(resource.link),
    })),
  },
  {
    title: "AI for Developers",
    description:
      "Tools for developers to integrate and utilize AI in applications.",
    color: "green",
    resources: [
      {
        id: 1,
        name: "GitHub Copilot",
        link: "https://github.com/features/copilot",
        description:
          "AI coding assistant that suggests code snippets and logic in real-time.",
      },
      {
        id: 2,
        name: "OpenAI Codex",
        link: "https://openai.com/blog/openai-codex",
        description:
          "Powerful AI for generating code and assisting with programming tasks.",
      },
      {
        id: 3,
        name: "Replit Ghostwriter",
        link: "https://replit.com/site/ghostwriter",
        description: "AI-powered IDE that enhances coding efficiency.",
      },
      {
        id: 4,
        name: "TabNine",
        link: "https://www.tabnine.com/",
        description:
          "AI-based code completion tool for multiple programming languages.",
      },
      {
        id: 5,
        name: "LangChain",
        link: "https://github.com/langchain-ai/langchain",
        description:
          "Framework for building applications powered by language models.",
      },
      {
        id: 6,
        name: "Hugging Face Transformers",
        link: "https://huggingface.co/transformers/",
        description:
          "Popular library for working with transformers and pretrained models.",
      },
      {
        id: 7,
        name: "RunPod",
        link: "https://www.runpod.io/",
        description:
          "Platform for running ML and AI workloads with scalable infrastructure.",
      },
    ].map((resource) => ({
      ...resource,
      favicon: getFaviconUrl(resource.link),
    })),
  },
  {
    title: "AI in Healthcare",
    description:
      "AI applications transforming healthcare and medical services.",
    color: "red",
    resources: [
      {
        id: 1,
        name: "Ada Health",
        link: "https://ada.com/",
        description: "AI-powered symptom checker and medical guidance tool.",
      },
      {
        id: 2,
        name: "Infermedica",
        link: "https://infermedica.com/",
        description:
          "AI platform for triage and preliminary medical diagnostics.",
      },
      {
        id: 3,
        name: "PathAI",
        link: "https://pathai.com/",
        description:
          "AI-driven solutions for pathology and medical diagnostics.",
      },
      {
        id: 4,
        name: "Olive AI",
        link: "https://oliveai.com/",
        description: "Automation and AI solutions for healthcare workflows.",
      },
      {
        id: 5,
        name: "Viz.ai",
        link: "https://www.viz.ai/",
        description: "AI platform for stroke detection and radiology analysis.",
      },
      {
        id: 6,
        name: "Babylon Health",
        link: "https://www.babylonhealth.com/",
        description:
          "AI tools for virtual healthcare consultations and management.",
      },
    ].map((resource) => ({
      ...resource,
      favicon: getFaviconUrl(resource.link),
    })),
  },
  {
    title: "AI in Education",
    description: "AI tools enhancing learning and educational experiences.",
    color: "yellow",
    resources: [
      {
        id: 1,
        name: "Khan Academy AI",
        link: "https://www.khanacademy.org/khan-labs",
        description: "Personalized AI tutor integrated into Khan Academy.",
      },
      {
        id: 2,
        name: "Socratic by Google",
        link: "https://socratic.org/",
        description: "AI-powered educational assistant for school subjects.",
      },
      {
        id: 3,
        name: "Duolingo Max",
        link: "https://www.duolingo.com/",
        description: "Enhanced AI-driven language learning experience.",
      },
      {
        id: 4,
        name: "Quizlet Learn",
        link: "https://quizlet.com/",
        description:
          "AI-enhanced flashcards and study tools for better retention.",
      },
      {
        id: 5,
        name: "EdTech AI",
        link: "https://www.edtech.ai/",
        description: "AI solutions for personalized learning and teaching.",
      },
      {
        id: 6,
        name: "DreamBox Learning",
        link: "https://www.dreambox.com/",
        description: "Adaptive learning platform for math and reading.",
      },
    ].map((resource) => ({
      ...resource,
      favicon: getFaviconUrl(resource.link),
    })),
  },
];
