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
    name: "Synthesia",
    link: "https://www.synthesia.io/",
    description:
      "An AI video generation platform that creates professional videos with realistic avatars from text inputs.",
    description2:
      "Synthesia is an AI-powered video generation platform that enables users to create professional videos without the need for cameras, actors, or studios. By inputting text, users can generate videos featuring realistic AI avatars speaking in over 140 languages. Synthesia offers features such as customizable avatars, templates, and integrations, making it a versatile tool for corporate communications, training, marketing, and more. The platform emphasizes security and ethical AI use, being SOC 2 Type II and GDPR compliant, and employs both human and AI moderation processes to ensure responsible content creation.",
  },
  {
    id: 6,
    name: "Runway Gen-3 Alpha",
    link: "https://runwayml.com/research/introducing-gen-3-alpha",
    description:
      "An advanced AI model for fast, high-fidelity, and controllable video generation from text, image, or video prompts.",
    description2:
      "Runway's Gen-3 Alpha represents a significant advancement in AI-driven video generation, offering improved fidelity, consistency, and motion over its predecessors. It enables users to create high-quality videos by inputting text descriptions, images, or existing video clips, providing flexibility in content creation. Gen-3 Alpha supports various modes, including Text to Video, Image to Video, and Video to Video, making it a versatile tool for creatives seeking to generate lifelike videos from simple inputs. Integrated into Runway's suite of products, it offers a user-friendly interface for both professionals and enthusiasts.",
  },
  {
    id: 7,
    name: "Luma Labs Dream Machine",
    link: "https://lumalabs.ai/dream-machine",
    description:
      "An AI-powered tool that generates realistic and fantastical videos from text instructions and images.",
    description2:
      "Luma Labs' Dream Machine is an AI model designed to create high-quality, realistic, and imaginative videos based on user-provided text prompts or images. Utilizing a scalable and efficient transformer architecture trained directly on videos, Dream Machine excels at producing physically accurate, consistent, and dynamic scenes. It offers features such as keyframe editing, video extensions, and prompt enhancement, enabling users to craft complex narratives with ease. Accessible through a user-friendly web interface, Dream Machine provides both free and subscription-based plans to accommodate varying user needs.",
  },
  {
    id: 8,
    name: "Dreamix",
    link: "https://dreamix-video-editing.github.io/",
    description:
      "An AI model for text-guided motion and appearance editing of general videos.",
    description2:
      "Dreamix is a video diffusion model that enables text-based motion and appearance editing of real-world videos. By combining low-resolution spatio-temporal information from the original video with newly synthesized high-resolution content, Dreamix aligns the output with guiding text prompts. It employs a novel mixed finetuning approach to enhance motion editability and supports applications such as image animation and subject-driven video generation. Extensive experiments have demonstrated Dreamix's superior performance in producing temporally consistent and high-fidelity edited videos.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
