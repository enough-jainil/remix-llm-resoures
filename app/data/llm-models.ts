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
      {
        id: 3,
        name: "Microsoft Copilot",
        link: "https://www.microsoft.com/en-us/microsoft-365/copilot",
        description:
          "AI-powered assistant integrated across Microsoft 365 applications.",
      },
      {
        id: 4,
        name: "IBM watsonx",
        link: "https://www.ibm.com/watsonx",
        description:
          "Enterprise AI and data platform for building custom AI solutions.",
      },
      {
        id: 5,
        name: "Oracle Cloud AI",
        link: "https://www.oracle.com/artificial-intelligence/",
        description:
          "Integrated AI services for enterprise applications and workflows.",
      },
    ].map((resource) => ({
      ...resource,
      favicon: getFaviconUrl(resource.link),
    })),
  },
];
