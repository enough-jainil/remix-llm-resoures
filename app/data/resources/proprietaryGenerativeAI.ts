import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const proprietaryGenerativeAI = [
  {
    id: 1,
    name: "DALL·E 2",
    link: "https://openai.com/dall-e-2/",
    description:
      "An AI system that creates realistic images and art from natural language descriptions.",
    description2:
      "Developed by OpenAI, DALL·E 2 generates more realistic and accurate images with 4x greater resolution than its predecessor. It can combine concepts, attributes, and styles, and is capable of adding and removing elements while considering shadows, reflections, and textures. DALL·E 2 can also create different variations of an image inspired by the original. While it offers significant advancements in image generation, access has been limited to ensure responsible use.",
  },
  {
    id: 2,
    name: "Midjourney",
    link: "https://www.midjourney.com/",
    description:
      "A proprietary AI tool that generates high-quality artistic images from user prompts.",
    description2:
      "Midjourney is an AI-powered image generator that transforms textual descriptions into high-quality, artistic visuals. Accessible via a Discord bot and a web interface, it allows users to create unique images by entering descriptive prompts. Midjourney has gained popularity among digital artists and creatives for its ability to produce diverse and detailed artwork, making it a valuable tool in the realms of design, advertising, and entertainment.",
  },
  {
    id: 3,
    name: "Adobe Firefly",
    link: "https://www.adobe.com/products/firefly.html",
    description:
      "Adobe's suite of generative AI tools integrated into their creative software ecosystem.",
    description2:
      "Adobe Firefly is a family of generative AI models designed to enhance creativity and streamline workflows within Adobe's suite of applications. Integrated into tools like Photoshop, Illustrator, and Adobe Express, Firefly enables users to generate images, apply text effects, and perform complex edits using simple text prompts. By leveraging Adobe's extensive content libraries and AI capabilities, Firefly offers creators intuitive and powerful features to bring their ideas to life efficiently.",
  },
  {
    id: 4,
    name: "Runway",
    link: "https://runwayml.com/",
    description:
      "A suite of AI-powered generative tools for creatives, offering capabilities in video and image generation.",
    description2:
      "Runway is an applied research company building the next era of art, entertainment, and human creativity. Their platform provides a range of AI tools that facilitate the creation of multimedia content through easy-to-use interfaces. These tools include capabilities for text-to-video, video-to-video, image-to-image transformations, and more, making complex tasks simpler and more accessible. Runway's generative AI models, such as Gen-1, Gen-2, and Gen-3 Alpha, allow users to create detailed and nuanced media from basic inputs. Integrated into a web platform and accessible via an API, Runway's tools are utilized by professionals in filmmaking, music production, visual effects, and other creative industries.",
  },
  {
    id: 5,
    name: "DreamStudio",
    link: "https://dreamstudio.ai/",
    description:
      "A user-friendly web interface for Stable Diffusion, enabling easy image generation without technical setup.",
    description2:
      "DreamStudio, developed by Stability AI, provides a commercial platform for users to generate images using the Stable Diffusion model. It offers an intuitive interface that allows users to create images from text prompts without the need for complex installations or technical expertise. DreamStudio includes features such as negative and multi-prompting, inpainting, outpainting, and CLIP guidance, enhancing the creative process for artists and designers. Users can purchase credits to access various functionalities, making it a flexible tool for both hobbyists and professionals.",
  },
  {
    id: 6,
    name: "NVIDIA GauGAN",
    link: "https://www.nvidia.com/en-us/research/ai-playground/",
    description:
      "An AI tool that transforms simple sketches into photorealistic images using GAN technology.",
    description2:
      "Developed by NVIDIA, GauGAN utilizes generative adversarial networks (GANs) to convert basic doodles into stunning, lifelike landscapes. By interpreting segmentation maps, it fills in details like reflections, shadows, and textures, enabling users to create realistic scenes with minimal input. GauGAN has evolved into applications like NVIDIA Canvas, offering artists intuitive tools for rapid concept visualization and design.",
  },
  {
    id: 7,
    name: "ChatGPT with DALL·E Integration",
    link: "https://openai.com/dall-e-3/",
    description:
      "An AI system that combines conversational text generation with image creation capabilities.",
    description2:
      "OpenAI's integration of DALL·E 3 into ChatGPT allows users to generate detailed images directly from conversational prompts. This seamless fusion enables users to describe a scene or concept in natural language, and ChatGPT, leveraging DALL·E 3, produces corresponding images. This functionality enhances creative workflows by providing visual content generation within the chat interface, making it accessible for various applications, including design, education, and entertainment.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
