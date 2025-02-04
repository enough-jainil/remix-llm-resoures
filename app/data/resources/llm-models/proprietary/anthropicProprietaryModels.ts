import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const anthropicProprietaryModels = [
  {
    id: 1,
    name: "Claude",
    link: "https://anthropic.com/claude",
    description:
      "Anthropic's advanced AI assistant for analysis, writing, and coding tasks.",
    description2:
      "Claude is designed to assist users in generating human-like text based on the input provided. It is trained on the latest real-time data, making it capable of providing up-to-date information and insights. Claude excels in various applications, including content creation, data analysis, and coding assistance. Accessible through platforms like Slack, it offers a user-friendly interface for seamless interaction, making it a valuable tool for both casual users and professionals seeking reliable AI support.",
  },
  {
    id: 2,
    name: "Claude Instant 1.1",
    link: "https://openrouter.ai/anthropic/claude-instant-1.0",
    description:
      "The first model in the Claude series, aimed at providing basic conversational capabilities.",
    description2:
      "Claude Instant 1.1 served as a foundation for subsequent models, focusing on general tasks without advanced features. It was designed to assist users in basic conversational scenarios, making it suitable for a wide range of applications.",
  },
  {
    id: 3,
    name: "Claude Instant 1.2",
    link: "https://www.anthropic.com/news/releasing-claude-instant-1-2",
    description:
      "An improvement over Instant 1.1, enhancing performance in math and coding tasks.",
    description2:
      "Claude Instant 1.2 offers improved versatility for users needing assistance in technical subjects. It builds on the foundation of its predecessor, providing better accuracy and response times in various applications.",
  },
  {
    id: 4,
    name: "Claude 3 Haiku",
    link: "https://www.anthropic.com/news/claude-3-haiku",
    description:
      "The entry-level model in the Claude 3 series, designed for general tasks.",
    description2:
      "Claude 3 Haiku strikes a balance between performance and efficiency, making it suitable for users who need reliable assistance without the complexity of higher-tier models. It is ideal for everyday tasks and general inquiries.",
  },
  {
    id: 5,
    name: "Claude 3 Sonnet",
    link: "https://openrouter.ai/anthropic/claude-3-sonnet",
    description:
      "A mid-tier model providing enhanced capabilities for complex tasks.",
    description2:
      "Claude 3 Sonnet is designed for a broader range of applications, including more complex conversational tasks and content generation. It offers improved performance over the Haiku model, making it suitable for users with diverse needs.",
  },
  {
    id: 6,
    name: "Claude 3 Opus",
    link: "https://anthropic.com/claude-3-opus",
    description:
      "The most advanced model in the Claude 3 series, excelling in high-performance tasks.",
    description2:
      "Claude 3 Opus is tailored for users who require the highest level of capability from a language model, particularly in coding and complex problem-solving. It is designed to handle demanding tasks with ease.",
  },
  {
    id: 7,
    name: "Claude 3.5 Haiku",
    link: "https://anthropic.com/claude-3-5-haiku",
    description:
      "An upgraded version of Haiku with improved performance and usability.",
    description2:
      "Claude 3.5 Haiku enhances the capabilities of its predecessor, making it more effective for everyday tasks and providing users with a more seamless experience.",
  },
  {
    id: 8,
    name: "Claude 3.5 Sonnet",
    link: "https://anthropic.com/claude-3-5-sonnet",
    description:
      "Builds on the capabilities of Sonnet, particularly in coding and task execution.",
    description2:
      "Claude 3.5 Sonnet can perform actions like keystrokes and mouse clicks, allowing it to interact with computer environments more effectively. It is designed for users who need advanced functionality in their applications.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
