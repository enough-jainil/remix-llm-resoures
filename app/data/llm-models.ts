const getFaviconUrl = (link: string) => {
  const domain = new URL(link).hostname;
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
};

export const llmApps = [
  {
    title: "General LLM Applications",
    description: "Popular applications of LLMs in various industries.",
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
    ].map((resource) => ({
      ...resource,
      favicon: getFaviconUrl(resource.link),
    })),
  },
  {
    title: "Enterprise Solutions",
    description: "LLM tools designed for business and enterprise needs.",
    color: "green",
    resources: [
      {
        id: 1,
        name: "Salesforce Einstein GPT",
        link: "https://www.salesforce.com/einstein/gpt/",
        description:
          "AI for CRM applications, enhancing customer interactions.",
      },
      {
        id: 2,
        name: "Zendesk AI",
        link: "https://www.zendesk.com/intelligence/",
        description: "AI-powered customer support automation for businesses.",
      },
    ].map((resource) => ({
      ...resource,
      favicon: getFaviconUrl(resource.link),
    })),
  },
];
