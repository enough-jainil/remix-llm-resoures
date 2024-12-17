import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const proprietaryVideoGeneration = [
  {
    id: 1,
    name: "Sora",
    link: "https://sora.com/",
    description:
      "OpenAI's advanced text-to-video model that generates realistic videos from textual prompts.",
    description2:
      "Sora is OpenAI's state-of-the-art video generation model capable of creating high-quality videos based on user-provided text descriptions. Leveraging advanced AI techniques, Sora can produce videos up to 1080p resolution and 20 seconds in length, supporting various aspect ratios. Users can generate entirely new content from text or enhance existing media by extending, remixing, and blending assets. Integrated into OpenAI's suite of products, Sora offers a user-friendly interface for both creative professionals and enthusiasts, marking a significant advancement in generative video technology.",
  },
  {
    id: 2,
    name: "Kling",
    link: "https://kling.kuaishou.com/en",
    description:
      "A Chinese generative AI model that creates realistic videos from text prompts.",
    description2:
      "Developed by Kuaishou, Kling is a generative AI model that transforms textual descriptions into high-quality videos. Leveraging advanced 3D face and body reconstruction technology, Kling accurately simulates real-world physics and complex motions, producing videos up to 1080p resolution at 30 frames per second. It supports various aspect ratios and shot types, making it a versatile tool for content creators seeking to generate lifelike videos from simple text inputs.",
  },
  {
    id: 3,
    name: "Runway Gen-2",
    link: "https://runwayml.com/research/gen-2",
    description:
      "A multimodal AI system that generates novel videos from text, images, or video clips.",
    description2:
      "Runway's Gen-2 is an advanced AI model that enables users to create high-quality videos by inputting text descriptions, images, or existing video clips. It offers various modes, including Text to Video, Text + Image to Video, and Image to Video, providing flexibility in content creation. While primarily a commercial tool, Gen-2 has garnered interest within open-source communities, leading to the development of unofficial clients and integrations that expand its accessibility and functionality.",
  },
  {
    id: 4,
    name: "Pika Labs",
    link: "https://pika.art/",
    description:
      "An AI-powered platform that transforms text or image prompts into short, engaging videos.",
    description2:
      "Pika Labs is a free AI video generator that allows users to create animated videos from simple text or image inputs. Operating through a user-friendly web interface and a Discord-based platform, it offers features like 'Pikaffects' for imaginative transformations and cinematic camera controls. Pika Labs supports various styles, including 3D animation and realistic visuals, making it a versatile tool for content creators seeking to enhance their digital storytelling.",
  },

  {
    id: 5,
    name: "Runway Gen-3 Alpha",
    link: "https://runwayml.com/research/introducing-gen-3-alpha",
    description:
      "An advanced AI model for fast, high-fidelity, and controllable video generation from text, image, or video prompts.",
    description2:
      "Runway's Gen-3 Alpha represents a significant advancement in AI-driven video generation, offering improved fidelity, consistency, and motion over its predecessors. It enables users to create high-quality videos by inputting text descriptions, images, or existing video clips, providing flexibility in content creation. Gen-3 Alpha supports various modes, including Text to Video, Image to Video, and Video to Video, making it a versatile tool for creatives seeking to generate lifelike videos from simple inputs. Integrated into Runway's suite of products, it offers a user-friendly interface for both professionals and enthusiasts.",
  },
  {
    id: 6,
    name: "Luma Labs Dream Machine",
    link: "https://lumalabs.ai/dream-machine",
    description:
      "An AI-powered tool that generates realistic and fantastical videos from text instructions and images.",
    description2:
      "Luma Labs' Dream Machine is an AI model designed to create high-quality, realistic, and imaginative videos based on user-provided text prompts or images. Utilizing a scalable and efficient transformer architecture trained directly on videos, Dream Machine excels at producing physically accurate, consistent, and dynamic scenes. It offers features such as keyframe editing, video extensions, and prompt enhancement, enabling users to craft complex narratives with ease. Accessible through a user-friendly web interface, Dream Machine provides both free and subscription-based plans to accommodate varying user needs.",
  },
  {
    id: 7,
    name: "Dreamix",
    link: "https://dreamix-video-editing.github.io/",
    description:
      "An AI model for text-guided motion and appearance editing of general videos.",
    description2:
      "Dreamix is a video diffusion model that enables text-based motion and appearance editing of real-world videos. By combining low-resolution spatio-temporal information from the original video with newly synthesized high-resolution content, Dreamix aligns the output with guiding text prompts. It employs a novel mixed finetuning approach to enhance motion editability and supports applications such as image animation and subject-driven video generation. Extensive experiments have demonstrated Dreamix's superior performance in producing temporally consistent and high-fidelity edited videos.",
  },
  {
    id: 8,
    name: "Meta's Movie Gen",
    link: "https://movie-gen.net/",
    description:
      "An AI-powered video generator that creates high-definition videos with synchronized audio from text inputs.",
    description2:
      "Meta's Movie Gen is an advanced AI model capable of generating realistic videos and audio clips based on user prompts. It can create videos up to 16 seconds long and audio up to 45 seconds, showcasing tasks such as swimmers, surfers, and interactive manipulations like adding elements or changing environments in a scene. Movie Gen allows users to produce high-quality videos and audio, edit existing videos with precision, and transform images into unique video content. While currently in the research phase and not publicly available, Movie Gen represents a significant advancement in AI-driven media generation, with potential applications in content creation and editing.",
  },
  {
    id: 9,
    name: "Veo",
    link: "https://deepmind.google/technologies/veo/",
    description:
      "An advanced AI video generation model by Google DeepMind, capable of producing high-quality 1080p videos over a minute long from text, image, or video prompts.",
    description2:
      "Veo is Google DeepMind's most advanced video generation model, introduced in May 2024. It generates high-definition 1080p videos exceeding a minute in length, accommodating a wide range of cinematic and visual styles. Veo interprets complex prompts, accurately capturing nuances and tones, and simulates real-world physics. It offers creative control over camera angles, movements, and shot styles, making it a versatile tool for filmmakers, educators, and content creators. Veo is currently available to select creators through VideoFX, an experimental tool at labs.google, with plans for broader integration into platforms like YouTube Shorts.",
  },
  {
    id: 10,
    name: "Pictory",
    link: "https://pictory.ai/",
    description:
      "An AI-powered video creation platform that transforms text content into engaging videos.",
    description2:
      "Pictory is an AI-driven video creation tool that enables users to produce professional-quality videos without prior video editing experience. It offers features such as transforming scripts or blog posts into videos, adding captions automatically, and converting long-form content into short, shareable clips. With a vast library of royalty-free visuals and music, Pictory streamlines the video production process, making it accessible for content creators, marketers, and businesses aiming to enhance their digital presence.",
  },
  {
    id: 11,
    name: "Colossyan Creator",
    link: "https://www.colossyan.com/",
    description:
      "An AI-powered video creation platform that transforms text into engaging videos with realistic AI avatars.",
    description2:
      "Colossyan Creator is an AI-driven video generation platform that enables users to create professional-quality videos from text inputs. It offers a diverse range of AI avatars, supports over 70 languages and accents, and provides features such as instant avatar creation, voice cloning, and automatic translation. Designed for applications in learning, training, communication, marketing, and sales, Colossyan Creator streamlines the video production process, making it accessible and efficient for businesses and individuals alike.",
  },
  {
    id: 12,
    name: "HeyGen",
    link: "https://www.heygen.com/",
    description:
      "An AI-powered video creation platform that transforms text into engaging videos with customizable AI avatars.",
    description2:
      "HeyGen is an innovative AI-driven video generation platform that enables users to create professional-quality videos from text inputs. It offers a diverse range of AI avatars, supports multiple languages and accents, and provides features such as video translation, personalized video creation, and interactive avatars. Designed for applications in marketing, e-learning, and corporate communications, HeyGen streamlines the video production process, making it accessible and efficient for businesses and individuals alike.",
  },
  {
    id: 13,
    name: "Luma AI",
    link: "https://lumalabs.ai/",
    description:
      "An AI platform specializing in 3D scene reconstruction and video generation from text and images.",
    description2:
      "Luma AI is an innovative platform that leverages advanced artificial intelligence to enable users to create lifelike 3D models and high-quality videos from simple text descriptions or images. Their flagship product, Dream Machine, utilizes a scalable transformer architecture trained directly on videos, allowing for the generation of physically accurate and consistent scenes. Luma AI also offers tools for 3D scene capture and reconstruction, making it accessible for applications in gaming, virtual reality, and digital content creation.",
  },
  {
    id: 14,
    name: "Fliki",
    link: "https://fliki.ai/",
    description:
      "An AI-powered platform that transforms text into engaging videos with lifelike voiceovers.",
    description2:
      "Fliki is an AI-driven video creation tool that enables users to effortlessly convert text into captivating videos. It offers a user-friendly script-based editor, a vast library of over 2,000 realistic text-to-speech voices across 80+ languages, and access to millions of stock media assets. Fliki supports various use cases, including content creation, marketing, education, and e-commerce, making it a versatile solution for individuals and businesses seeking to enhance their digital content efficiently.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
