import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const openSourceGenerativeAI = [
  {
    id: 1,
    name: "Stable Diffusion 3",
    link: "https://stability.ai/news/stable-diffusion-3",
    description:
      "A family of models offering high-quality text-to-image generation.",
    description2:
      "Stable Diffusion 3 introduces a range of models with parameters ranging from 800 million to 8 billion, enhancing text-to-image generation capabilities with improved efficiency and quality.",
  },
  {
    id: 2,
    name: "SDXL",
    link: "https://arxiv.org/abs/2307.01952",
    description:
      "An advanced latent diffusion model for high-resolution image synthesis.",
    description2:
      "SDXL is a latent diffusion model that improves upon previous versions by leveraging a larger UNet backbone and multiple novel conditioning schemes, enabling high-resolution image synthesis with enhanced visual fidelity.",
  },
  {
    id: 3,
    name: "ControlNet",
    link: "https://arxiv.org/abs/2302.05543",
    description:
      "A neural network structure that adds conditional control to text-to-image diffusion models.",
    description2:
      "ControlNet enables precise control in image generation by incorporating additional input conditions like edge maps, depth maps, and human poses, enhancing the flexibility and accuracy of diffusion models.",
  },

  {
    id: 4,
    name: "FLUX.1 [dev]",
    link: "https://huggingface.co/black-forest-labs/FLUX.1-dev",
    description:
      "A 12-billion parameter model for high-quality image generation; requires a separate license for commercial use.",
    description2:
      "FLUX.1 [dev] is a 12-billion parameter rectified flow transformer capable of generating images from text descriptions. It offers cutting-edge output quality, second only to the state-of-the-art model FLUX.1 [pro]. The model is released under the FLUX.1-dev Non-Commercial License, making it suitable for personal, scientific, and non-commercial purposes. For more information, please refer to the official Hugging Face page.",
  },
  {
    id: 5,
    name: "FLUX.1 [schnell]",
    link: "https://huggingface.co/black-forest-labs/FLUX.1-schnell",
    description:
      "A faster, fully open-source variant under the Apache 2.0 license.",
    description2:
      "FLUX.1 [schnell] is a 12-billion parameter rectified flow transformer optimized for speed and efficiency. Trained using latent adversarial diffusion distillation, it can generate high-quality images in only 1 to 4 steps, matching the performance of closed-source alternatives. Released under the Apache 2.0 license, the model can be used for personal, scientific, and commercial purposes. For more details, visit the official Hugging Face page.",
  },
  {
    id: 6,
    name: "Craiyon (formerly DALL-E Mini)",
    link: "https://www.craiyon.com/",
    description: "An open-source AI model generating images from text prompts.",
    description2:
      "Craiyon, previously known as DALL-E Mini, is a free AI image generator that creates images based on user-provided text prompts. Developed by Boris Dayma, it utilizes machine learning algorithms trained on existing images and text descriptions to produce unique visuals. Craiyon is accessible online without the need for sign-up, allowing users to generate multiple images simultaneously. It has gained popularity for its ability to produce surreal and humorous images, making AI-generated art accessible to a broad audience.",
  },
  {
    id: 7,
    name: "DeepAI Text-to-Image Generator",
    link: "https://deepai.org/machine-learning-model/text2img",
    description:
      "An AI-powered tool that creates images from textual descriptions.",
    description2:
      "DeepAI's Text-to-Image Generator utilizes advanced machine learning algorithms to transform user-provided text prompts into corresponding images. It offers multiple artistic styles, customization options, and high-resolution outputs, making it accessible for both personal and professional use.",
  },
  {
    id: 8,
    name: "Artbreeder",
    link: "https://www.artbreeder.com/",
    description:
      "A collaborative AI platform for creating and exploring generative art.",
    description2:
      "Artbreeder is an online platform that enables users to create and explore generative art using machine learning, particularly through a process known as 'collaborative breeding' of images. It primarily utilizes Generative Adversarial Networks (GANs) to blend and alter existing images, allowing users to generate new artworks by combining and modifying various images. The platform offers multiple tools, such as Composer and Collager, to facilitate the creation of characters, landscapes, and abstract art. With over 10 million users and 250 million images, Artbreeder fosters a community-driven approach to AI-generated art.",
  },
  {
    id: 9,
    name: "Disco Diffusion",
    link: "https://github.com/alembics/disco-diffusion",
    description:
      "An AI tool that generates artistic visuals from textual prompts using diffusion techniques.",
    description2:
      "Disco Diffusion is a free, open-source AI image generator that leverages CLIP-Guided Diffusion to create compelling and beautiful images from text inputs. Accessible via a Google Colab Notebook, it allows users to produce high-quality, artist-like images by describing the desired scene in text. The process can take from a few minutes to an hour, depending on the complexity and the computational resources used. Disco Diffusion has gained popularity for its ability to generate stunning visuals, making AI-generated art accessible to a wide audience.",
  },
  {
    id: 10,
    name: "BigGAN",
    link: "https://arxiv.org/abs/1809.11096",
    description:
      "A GAN-based model that generates high-resolution, photorealistic images.",
    description2:
      "BigGAN is a generative adversarial network designed to produce high-fidelity, high-resolution images by scaling up model and batch sizes. It incorporates techniques like class-conditional batch normalization and the hinge loss objective to enhance training stability and image quality. BigGAN has set new benchmarks in image synthesis, particularly with complex datasets like ImageNet, generating images up to 512×512 pixels with remarkable realism.",
  },
  {
    id: 11,
    name: "StyleGAN",
    link: "https://github.com/NVlabs/stylegan",
    description:
      "A GAN-based model renowned for generating highly realistic human faces and other objects.",
    description2:
      "StyleGAN, developed by NVIDIA, is a generative adversarial network (GAN) architecture that enables the synthesis of high-quality, photorealistic images. By introducing a style-based generator, it allows for unprecedented control over the visual attributes of generated images, facilitating applications in art, design, and entertainment. Subsequent versions, such as StyleGAN2 and StyleGAN3, have further enhanced image quality and addressed artifacts, solidifying StyleGAN's status as a pivotal tool in AI-driven image generation.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
