import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const proprietaryModels = [
  // Define the ChatGPT model from OpenAI
  {
    id: 1, // Unique identifier for the model
    name: "ChatGPT", // Name of the model
    link: "https://openai.com/chatgpt", // Link to the model's website
    description:
      "OpenAI's conversational AI for general-purpose question answering and tasks.", // Short description of the model
    description2:
      "ChatGPT is designed to assist users in generating human-like text based on the input provided. It has evolved through multiple iterations, enhancing its capabilities in understanding and generating natural language, making it a versatile tool for various applications, including content creation, coding assistance, and more.", // Detailed description of the model
  },
  // Overview of OpenAI Proprietary LLM Models
  {
    id: 1.1,
    name: "GPT-1",
    link: "https://openai.com/gpt-1",
    description: "OpenAI's first generative pre-trained transformer model.",
    description2:
      "Released in 2018, GPT-1 demonstrated the potential of unsupervised pre-training for language understanding.",
  },
  {
    id: 1.2,
    name: "GPT-2",
    link: "https://openai.com/gpt-2",
    description: "Significant improvement in language generation capabilities.",
    description2:
      "Released in 2019, GPT-2 featured 1.5 billion parameters, producing coherent and contextually relevant text.",
  },
  {
    id: 1.3,
    name: "GPT-3",
    link: "https://openai.com/gpt-3",
    description: "A major leap forward in NLP capabilities.",
    description2:
      "Launched in 2020, GPT-3 introduced 175 billion parameters, enabling a wide range of tasks from translation to coding assistance.",
  },
  {
    id: 1.4,
    name: "GPT-3.5",
    link: "https://openai.com/gpt-3.5",
    description: "Enhanced version of GPT-3 for better performance.",
    description2:
      "Released in March 2022, GPT-3.5 marked significant progress in NLP, excelling in generating coherent and contextually relevant text across diverse topics.",
  },
  {
    id: 1.5,
    name: "GPT-4",
    link: "https://openai.com/gpt-4",
    description: "Enhanced multimodal AI model for text and image processing.",
    description2:
      "Released in March 2023, GPT-4 introduced improved performance in understanding and generating nuanced text, alongside multimodal capabilities.",
  },
  {
    id: 1.6,
    name: "GPT-4o",
    link: "https://openai.com/gpt-4o",
    description:
      "Advanced multimodal model for text, image, and audio processing.",
    description2:
      "Introduced in May 2024, GPT-4o achieved state-of-the-art results across various benchmarks.",
  },
  {
    id: 1.7,
    name: "GPT-4o Mini",
    link: "https://openai.com/gpt-4o-mini",
    description:
      "Cost-effective version of GPT-4o for resource-limited environments.",
    description2:
      "Launched in July 2024, this smaller model provided high performance with reduced computational costs.",
  },
  {
    id: 1.8,
    name: "o1",
    link: "https://openai.com/o1",
    description: "Model focusing on enhanced reasoning capabilities.",
    description2:
      "Released in September 2024, o1 excelled in tasks requiring logical thinking and complex problem-solving.",
  },
  {
    id: 1.9,
    name: "o3",
    link: "https://openai.com/o3",
    description: "Successor to o1 with improved benchmark performance.",
    description2:
      "Unveiled in December 2024, o3 provided enhanced reasoning for challenging tasks and logical workflows.",
  },
  {
    id: 1.1,
    name: "Codex",
    link: "https://openai.com/codex",
    description: "AI model for programming and code generation.",
    description2:
      "Released in August 2021, Codex specializes in understanding and writing code, powering tools like GitHub Copilot to assist developers efficiently.",
  },
  // Other Models
  {
    id: 2,
    name: "Gemini",
    link: "https://gemini.google.com",
    description:
      "Google's AI model for general-purpose question answering and tasks.",
    description2:
      "Gemini is Google's latest AI model, designed to leverage advanced machine learning techniques for accurate and context-aware responses. It excels in various applications, including natural language understanding, image processing, and real-time data analysis. Gemini's architecture allows it to handle complex queries and provide insightful answers, making it suitable for both casual users and professionals seeking reliable AI assistance.",
  },
  // Gemini Model Family
  {
    id: 2.4,
    name: "Gemini Ultra",
    link: "https://deepmind.google/technologies/gemini-ultra",
    description: "The most powerful model in the Gemini family.",
    description2:
      "Designed for highly complex tasks, Gemini Ultra offers advanced reasoning and problem-solving abilities.",
  },
  {
    id: 2.5,
    name: "Gemini Nano",
    link: "https://deepmind.google/technologies/gemini-nano",
    description: "Optimized for on-device tasks.",
    description2:
      "Gemini Nano operates efficiently on edge devices like smartphones, enabling AI capabilities without heavy cloud reliance.",
  },
  {
    id: 2.6,
    name: "Gemini 1.5 Pro",
    link: "https://deepmind.google/technologies/gemini-1.5-pro",
    description: "Mid-size multimodal model for reasoning tasks.",
    description2:
      "Optimized for tasks like processing large data sets, including extended video and audio content.",
  },
  {
    id: 2.7,
    name: "Gemini 1.5 Flash",
    link: "https://deepmind.google/technologies/gemini-1.5-flash",
    description: "Distilled version of Gemini 1.5 Pro for faster performance.",
    description2:
      "Provides versatility across various tasks while ensuring efficiency.",
  },
  {
    id: 2.8,
    name: "Gemini 1.5 Flash-8B",
    link: "https://deepmind.google/technologies/gemini-1.5-flash-8b",
    description: "Smaller variant of Gemini 1.5 Flash.",
    description2:
      "Designed for high-volume, low-intelligence tasks in resource-constrained environments.",
  },
  {
    id: 2.9,
    name: "Gemini 2.0 Flash Experimental",
    link: "https://deepmind.google/technologies/gemini-2.0-flash-experimental",
    description: "The latest experimental model in the Gemini series.",
    description2:
      "Features real-time audio and video interactions, enhanced spatial understanding, and text-to-speech generation.",
  },
  // Anthropic Models
  {
    id: 3,
    name: "Claude",
    link: "https://anthropic.com/claude",
    description:
      "Anthropic's advanced AI assistant for analysis, writing, and coding tasks.",
    description2:
      "Claude is designed to assist users in generating human-like text based on the input provided. It is trained on the latest real-time data, making it capable of providing up-to-date information and insights. Claude excels in various applications, including content creation, data analysis, and coding assistance. Accessible through platforms like Slack, it offers a user-friendly interface for seamless interaction, making it a valuable tool for both casual users and professionals seeking reliable AI support.",
  },
  {
    id: 3.1,
    name: "Claude Instant 1.1",
    link: "https://openrouter.ai/anthropic/claude-instant-1.0",
    description:
      "The first model in the Claude series, aimed at providing basic conversational capabilities.",
    description2:
      "Claude Instant 1.1 served as a foundation for subsequent models, focusing on general tasks without advanced features. It was designed to assist users in basic conversational scenarios, making it suitable for a wide range of applications.",
  },
  {
    id: 3.2,
    name: "Claude Instant 1.2",
    link: "https://www.anthropic.com/news/releasing-claude-instant-1-2",
    description:
      "An improvement over Instant 1.1, enhancing performance in math and coding tasks.",
    description2:
      "Claude Instant 1.2 offers improved versatility for users needing assistance in technical subjects. It builds on the foundation of its predecessor, providing better accuracy and response times in various applications.",
  },
  {
    id: 3.3,
    name: "Claude 3 Haiku",
    link: "https://www.anthropic.com/news/claude-3-haiku",
    description:
      "The entry-level model in the Claude 3 series, designed for general tasks.",
    description2:
      "Claude 3 Haiku strikes a balance between performance and efficiency, making it suitable for users who need reliable assistance without the complexity of higher-tier models. It is ideal for everyday tasks and general inquiries.",
  },
  {
    id: 3.4,
    name: "Claude 3 Sonnet",
    link: "https://openrouter.ai/anthropic/claude-3-sonnet",
    description:
      "A mid-tier model providing enhanced capabilities for complex tasks.",
    description2:
      "Claude 3 Sonnet is designed for a broader range of applications, including more complex conversational tasks and content generation. It offers improved performance over the Haiku model, making it suitable for users with diverse needs.",
  },
  {
    id: 3.5,
    name: "Claude 3 Opus",
    link: "https://anthropic.com/claude-3-opus",
    description:
      "The most advanced model in the Claude 3 series, excelling in high-performance tasks.",
    description2:
      "Claude 3 Opus is tailored for users who require the highest level of capability from a language model, particularly in coding and complex problem-solving. It is designed to handle demanding tasks with ease.",
  },
  {
    id: 3.6,
    name: "Claude 3.5 Haiku",
    link: "https://anthropic.com/claude-3-5-haiku",
    description:
      "An upgraded version of Haiku with improved performance and usability.",
    description2:
      "Claude 3.5 Haiku enhances the capabilities of its predecessor, making it more effective for everyday tasks and providing users with a more seamless experience.",
  },
  {
    id: 3.7,
    name: "Claude 3.5 Sonnet",
    link: "https://anthropic.com/claude-3-5-sonnet",
    description:
      "Builds on the capabilities of Sonnet, particularly in coding and task execution.",
    description2:
      "Claude 3.5 Sonnet can perform actions like keystrokes and mouse clicks, allowing it to interact with computer environments more effectively. It is designed for users who need advanced functionality in their applications.",
  },

  // xAI Models
  {
    id: 4,
    name: "Grok",
    link: "https://x.ai/",
    description:
      "Grok is now faster, sharper, and has improved multilingual support.",
    description2:
      "Grok is an AI chatbot developed by Elon Musk's company xAI, capable of generating text and engaging in conversations with users. It has real-time access to information through the social media platform X (formerly Twitter), allowing it to respond to edgy and provocative questions with witty and rebellious answers. Grok operates in two modes: 'Fun Mode' for humorous interactions and 'Regular Mode' for more accurate responses. It was trained using a custom tech stack, including Kubernetes, JAX, and Rust, enabling efficient development. Grok's unique personality is inspired by Douglas Adams' 'The Hitchhiker's Guide to the Galaxy,' aiming to provide a playful yet insightful conversational experience. Unlike other chatbots, Grok is designed to tackle taboo topics and provide unfiltered responses, making it a distinct alternative to more politically correct models like ChatGPT.",
  },
  {
    id: 4.1,
    name: "Grok-1",
    link: "https://x.ai/blog/grok-os",
    description:
      "314B parameter Mixture-of-Experts model with open-source weights.",
    description2:
      "Grok-1 is a 314 billion parameter Mixture-of-Experts model trained from scratch by xAI, designed for generating text and engaging in conversations. It operates in two modes: 'Fun Mode' for humorous interactions and 'Regular Mode' for more accurate responses. Grok-1 has real-time access to information through the social media platform X (formerly Twitter), allowing it to respond to edgy and provocative questions. This model is not fine-tuned for any specific application and was developed using a custom tech stack on JAX and Rust. For more details, visit the [Grok-1 blog](https://x.ai/blog/grok-os).",
  },
  {
    id: 4.2,
    name: "Grok-1.5",
    link: "https://x.ai/blog/grok-1-5",
    description: "Enhanced model with 128K token context length.",
    description2:
      "Announced on March 29, 2024, Grok-1.5 introduced improved reasoning capabilities and an extended context length of 128,000 tokens, enabling more complex and nuanced language processing.",
  },
  {
    id: 4.3,
    name: "Grok-1.5 Vision",
    link: "https://x.ai/blog/grok-1-5v",
    description: "First multimodal model in the Grok family.",
    description2:
      "Introduced on April 12, 2024, Grok-1.5V is xAI's first multimodal model, capable of processing a wide variety of visual information, including documents, diagrams, graphs, screenshots, and photographs, enhancing its applicability across diverse tasks.",
  },
  {
    id: 4.4,
    name: "Grok-2",
    link: "https://x.ai/blog/grok-2",
    description: "Advanced model with image generation capabilities.",
    description2:
      "Grok-2 represents a significant advancement over its predecessor, Grok-1.5, showcasing frontier capabilities in chat, coding, and reasoning. It has been tested on the LMSYS leaderboard, outperforming both Claude 3.5 Sonnet and GPT-4-Turbo. Grok-2 is designed for real-time information access and excels in various academic benchmarks, including reasoning, reading comprehension, and coding tasks. It is available in beta on 𝕏 and will be accessible through an enterprise API for developers.",
  },
  // Mistral AI Models
  {
    id: 5,
    name: "Mistral Large 2411",
    link: "https://mistral.ai/models/mistral-large-2411",
    description:
      "Updated version of Mistral Large 2 with significant improvements.",
    description2:
      "An updated version of Mistral Large 2, released alongside Pixtral Large 2411. It offers significant improvements in long-context understanding, a new system prompt, and more accurate function calling. Features a 128K token context window.",
  },
  {
    id: 5.1,
    name: "Mistral Large 2407",
    link: "https://mistral.ai/models/mistral-large-2407",
    description: "Flagship model excelling in reasoning and code generation.",
    description2:
      "Mistral AI's flagship model, excelling in reasoning, code generation, JSON handling, and chat functionalities. Supports multiple languages, including French, German, Spanish, Italian, Portuguese, Arabic, Hindi, Russian, Chinese, Japanese, and Korean, as well as over 80 coding languages. Equipped with a 128K token context window.",
  },
  {
    id: 5.2,
    name: "Pixtral Large 2411",
    link: "https://mistral.ai/models/pixtral-large-2411",
    description: "Open-weight multimodal model built on Mistral Large 2.",
    description2:
      "A 124B parameter, open-weight, multimodal model built on Mistral Large 2. Capable of understanding documents, charts, and natural images. Available under the Mistral Research License (MRL) for research and educational use, and the Mistral Commercial License for commercial purposes. Features a 128K token context window.",
  },
  {
    id: 5.3,
    name: "Ministral 8B",
    link: "https://mistral.ai/models/ministral-8b",
    description: "8B parameter model for faster, memory-efficient inference.",
    description2:
      "An 8B parameter model with an interleaved sliding-window attention pattern for faster, memory-efficient inference. Designed for edge use cases, supporting up to a 128K token context length. Excels in knowledge and reasoning tasks, outperforming peers in the sub-10B category.",
  },
  {
    id: 5.4,
    name: "Ministral 3B",
    link: "https://mistral.ai/models/ministral-3b",
    description: "3B parameter model optimized for edge computing.",
    description2:
      "A 3B parameter model optimized for on-device and edge computing. Excels in knowledge, commonsense reasoning, and function-calling, outperforming larger models like Mistral 7B on most benchmarks. Supports up to a 128K token context length.",
  },
  {
    id: 5.5,
    name: "Pixtral 12B",
    link: "https://mistral.ai/models/pixtral-12b",
    description: "First multimodal text+image-to-text model.",
    description2:
      "Mistral's first multimodal, text+image-to-text model. Weights were launched via torrent. Supports a 4K token context window.",
  },
  {
    id: 5.6,
    name: "Mistral Nemo",
    link: "https://mistral.ai/models/mistral-nemo",
    description: "12B parameter multilingual model.",
    description2:
      "A 12B parameter model with a 128K token context length, built in collaboration with NVIDIA. Multilingual, supporting languages such as English, French, German, Spanish, Italian, Portuguese, Chinese, Japanese, Korean, Arabic, and Hindi. Supports function calling and is released under the Apache 2.0 license.",
  },
  {
    id: 5.7,
    name: "Codestral Mamba",
    link: "https://mistral.ai/models/codestral-mamba",
    description: "7.3B parameter model for code and reasoning tasks.",
    description2:
      "A 7.3B parameter model based on the Mamba 2 architecture, designed for code and reasoning tasks. Features linear time inference, allowing for theoretically infinite sequence lengths, with a 256K token context window. Optimized for quick responses, especially beneficial for code productivity. Available under the Apache 2.0 license.",
  },
  {
    id: 5.8,
    name: "Mistral 7B Instruct",
    link: "https://mistral.ai/models/mistral-7b-instruct",
    description: "High-performing 7.3B parameter model.",
    description2:
      "A high-performing, industry-standard 7.3B parameter model, optimized for speed and context length. Supports a 33K token context window.",
  },
  {
    id: 5.9,
    name: "Mixtral 8x22B Instruct",
    link: "https://mistral.ai/models/mixtral-8x22b-instruct",
    description: "Official instruct fine-tuned version of Mixtral 8x22B.",
    description2:
      "Mistral's official instruct fine-tuned version of Mixtral 8x22B, utilizing 39B active parameters out of 141B, offering unparalleled cost efficiency for its size. Strengths include strong math, coding, and reasoning capabilities, with a large context length of 66K tokens.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
