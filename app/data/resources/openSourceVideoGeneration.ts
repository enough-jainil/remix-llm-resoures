import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const openSourceVideoGeneration = [
  {
    id: 1,
    name: "Potat1",
    link: "https://github.com/camenduru/text-to-video-synthesis-colab",
    description:
      "An open-source AI video generator that creates high-resolution videos from text prompts.",
    description2:
      "Potat1 is a pioneering open-source AI model designed to generate high-resolution videos (up to 1024x576) from textual descriptions. Developed by the AI community, it leverages advanced diffusion models to produce coherent and high-quality video outputs. Potat1 is accessible via platforms like Google Colab, allowing users to experiment with and generate videos without the need for extensive computational resources. As an open-source project, it encourages collaboration and further development in the field of AI-driven video generation.",
  },
  {
    id: 2,
    name: "VideoGPT",
    link: "https://github.com/wilson1yan/VideoGPT",
    description:
      "A generative model that creates natural videos using likelihood-based modeling.",
    description2:
      "VideoGPT is a generative model that extends the GPT architecture to video data, enabling the creation of natural videos through likelihood-based modeling. It employs a Vector Quantized-Variational AutoEncoder (VQ-VAE) with 3D convolutions and axial self-attention to learn compressed video representations. An autoregressive GPT-like model processes these latent representations with spatio-temporal encodings to generate high-fidelity videos. VideoGPT has demonstrated performance comparable to Generative Adversarial Networks (GANs) in video quality, producing high-fidelity videos from datasets such as UCF-101 and TGIF.",
  },
  {
    id: 3,
    name: "Stable Video Diffusion",
    link: "https://stability.ai/stable-video",
    description:
      "A latent video diffusion model for generating videos from text or images.",
    description2:
      "Stable Video Diffusion, developed by Stability AI, is a state-of-the-art model for text-to-video and image-to-video generation. The model features two variants capable of producing 14 and 25 frames, with customizable frame rates ranging between 3 and 30 frames per second. It incorporates robust multi-view 3D priors, enhancing the consistency and realism of generated video sequences. Stable Video Diffusion can also fine-tune multi-view diffusion models, enabling the creation of dynamic, high-fidelity videos suitable for creative and professional applications.",
  },
  {
    id: 4,
    name: "LVDM (Latent Video Diffusion Model)",
    link: "https://github.com/YingqingHe/LVDM",

    description:
      "A lightweight video diffusion model for high-fidelity long video generation.",
    description2:
      "Developed by Tencent AI Lab, LVDM is a latent video diffusion model designed for high-fidelity long video generation. By leveraging a low-dimensional 3D latent space, LVDM efficiently generates videos with thousands of frames. Its hierarchical diffusion approach enables the production of extended video sequences, while addressing common errors in long video generation through techniques like conditional latent perturbation and unconditional guidance. LVDM has demonstrated state-of-the-art performance on various benchmarks, making it a significant advancement in AI-driven video generation.",
  },
  {
    id: 5,
    name: "StyleGAN-V",
    link: "https://github.com/universome/stylegan-v",
    description:
      "A continuous-time video generator built upon StyleGAN2, enabling high-quality video synthesis with spatial manipulations.",
    description2:
      "StyleGAN-V extends the capabilities of StyleGAN2 to video generation by treating videos as continuous signals in time. It employs neural representations with positional embeddings to model continuous motion, allowing for the generation of high-fidelity videos. Notably, StyleGAN-V can be effectively trained on sparse video datasets, requiring as few as two frames per clip. This approach facilitates spatial manipulations and offers a straightforward architecture for generating natural videos using likelihood-based modeling.",
  },
  {
    id: 6,
    name: "AnimateDiff",
    link: "https://github.com/guoyww/AnimateDiff",
    description:
      "A plug-and-play module that transforms text-to-image diffusion models into animation generators without specific tuning.",
    description2:
      "AnimateDiff is an innovative framework that enables existing text-to-image diffusion models, such as Stable Diffusion, to generate animations without requiring model-specific tuning. By integrating a pre-trained motion module, AnimateDiff imparts motion dynamics to personalized text-to-image models, allowing them to produce temporally smooth and visually consistent animation clips. This approach preserves the original model's visual quality and diversity while introducing motion, making it a versatile tool for creators seeking to animate their personalized diffusion models.",
  },
  {
    id: 7,
    name: "LaVie",
    link: "https://vchitect.github.io/LaVie-project/",
    description:
      "A high-quality text-to-video generation framework utilizing cascaded latent diffusion models.",
    description2:
      "LaVie is an advanced text-to-video (T2V) generation framework that leverages pre-trained text-to-image (T2I) models to produce visually realistic and temporally coherent videos. It operates through cascaded latent diffusion models, including a base T2V model, a temporal interpolation model, and a video super-resolution model. Key features of LaVie include the incorporation of temporal self-attentions with rotary positional encoding to capture temporal correlations and joint image-video fine-tuning to enhance creative output. Additionally, LaVie utilizes a comprehensive dataset named Vimeo25M, consisting of 25 million text-video pairs, to ensure quality, diversity, and aesthetic appeal in generated videos.",
  },
  {
    id: 8,
    name: "Latte",
    link: "https://github.com/Vchitect/Latte",
    description:
      "A Latent Diffusion Transformer model for high-quality video generation.",
    description2:
      "Latte is a novel Latent Diffusion Transformer designed for video generation. It first extracts spatio-temporal tokens from input videos and then employs a series of Transformer blocks to model video distribution in the latent space. To efficiently handle the substantial number of tokens extracted from videos, Latte introduces four efficient variants by decomposing the spatial and temporal dimensions of input videos. Comprehensive evaluations demonstrate that Latte achieves state-of-the-art performance across standard video generation datasets, including FaceForensics, SkyTimelapse, UCF101, and Taichi-HD. Additionally, Latte extends to text-to-video generation tasks, achieving comparable results to recent T2V models.",
  },
  {
    id: 9,
    name: "Open-Sora",
    link: "https://github.com/hpcaitech/Open-Sora",
    description:
      "An open-source AI video generation framework for efficient and high-quality video production.",
    description2:
      "Open-Sora is an open-source initiative dedicated to democratizing efficient video production through advanced AI techniques. It provides a comprehensive framework for generating high-quality videos from text prompts, images, or existing video clips. By embracing open-source principles, Open-Sora aims to make state-of-the-art video generation tools accessible to all, fostering innovation and collaboration within the AI and creative communities.",
  },
  {
    id: 10,
    name: "Genmo",
    link: "https://genmo.ai",
    description:
      "An AI platform offering open-source video generation models for creating high-quality videos from text prompts.",
    description2:
      "Genmo is an AI platform dedicated to developing open-source video generation models that enable users to create high-quality videos from simple text prompts. Their flagship model, Mochi 1, utilizes advanced AI techniques to produce realistic motion and superior prompt adherence, allowing for detailed control over characters, settings, and actions. Genmo provides a user-friendly interface through their Playground, where users can experiment with AI-generated videos, making advanced video generation accessible to a wider audience.",
  },
  {
    id: 11,
    name: "Mochi 1",
    link: "https://genmo.ai",
    description:
      "An open-source AI video generation model that creates high-quality videos from text prompts.",
    description2:
      "Mochi 1 is a state-of-the-art open-source AI video generation model developed by Genmo. It utilizes a novel Asymmetric Diffusion Transformer (AsymmDiT) architecture to produce high-fidelity videos with smooth motion at 30 frames per second. With a 10 billion parameter diffusion model, Mochi 1 excels in prompt adherence, ensuring that generated videos accurately reflect user inputs. Licensed under the permissive Apache 2.0 license, it is freely available for personal and commercial use. Users can access Mochi 1 through Genmo's playground or integrate it into their applications via APIs.",
  },
  {
    id: 12,
    name: "Hunyuan Video",
    link: "https://hunyuanvideoai.com/",
    description:
      "An open-source AI video generator by Tencent, transforming text descriptions into high-quality videos.",
    description2:
      "Hunyuan Video is a state-of-the-art AI video generation model developed by Tencent, featuring 13 billion parameters. It excels in creating high-quality videos from text descriptions, offering superior motion quality and visual fidelity. As an open-source model, Hunyuan Video provides creators with advanced tools for realistic and innovative video production, fostering a new era of AI-driven content creation.",
  },
  {
    id: 13,
    name: "Awesome Video Diffusion",
    link: "https://github.com/showlab/Awesome-Video-Diffusion",
    description:
      "A curated list of recent diffusion models for video generation, editing, restoration, and understanding.",
    description2:
      "Awesome Video Diffusion is a comprehensive repository that compiles state-of-the-art diffusion models and related resources in the field of video processing. It encompasses various applications, including video generation, editing, restoration, and understanding, as well as advancements in neural radiance fields (NeRF). The repository serves as a valuable resource for researchers and practitioners, providing access to open-source toolboxes, foundation models, evaluation benchmarks, and metrics. By aggregating these resources, Awesome Video Diffusion facilitates the exploration and development of cutting-edge techniques in video diffusion modeling.",
  },
  {
    id: 14,
    name: "FLUX.1",
    link: "https://flux1.ai/",
    description:
      "A state-of-the-art AI image generator developed by Black Forest Labs, offering high-quality image generation from text prompts.",
    description2:
      "FLUX.1 is an advanced AI image generation model created by Black Forest Labs. It interprets detailed text descriptions to produce high-quality images, supporting various styles and complexities. FLUX.1 is available in multiple variants, including FLUX.1 [pro], FLUX.1 [dev], and FLUX.1 [schnell], each catering to different user needs. The 'pro' version delivers top-tier performance, the 'dev' version is ideal for developers with advanced features, and the 'schnell' version offers faster image generation with slightly reduced quality. FLUX.1 is accessible through various online platforms, providing both free and subscription-based plans to accommodate diverse user requirements.",
  },
  {
    id: 15,
    name: "DeepFloyd IF",
    link: "https://github.com/deep-floyd/IF",
    description:
      "An open-source text-to-image model achieving high photorealism and language understanding.",
    description2:
      "Developed by DeepFloyd Lab at Stability AI, DeepFloyd IF is a state-of-the-art open-source text-to-image model that excels in photorealism and language comprehension. It employs a modular architecture comprising a frozen text encoder and three cascaded pixel diffusion modules. The process begins with a base model generating a 64x64 pixel image from a text prompt, followed by two super-resolution models that upscale the image to 256x256 and 1024x1024 pixels, respectively. This design enables the creation of high-quality images that accurately reflect complex textual descriptions. DeepFloyd IF has demonstrated superior performance, achieving a zero-shot FID score of 6.66 on the COCO dataset, underscoring its potential for advancing text-to-image synthesis.",
  },
  {
    id: 16,
    name: "ControlNet",
    link: "https://github.com/lllyasviel/ControlNet",
    description:
      "A neural network architecture that adds conditional control to text-to-image diffusion models.",
    description2:
      "ControlNet is a neural network structure designed to provide additional control over text-to-image diffusion models by incorporating extra conditions. It achieves this by duplicating the weights of neural network blocks into a 'locked' copy and a 'trainable' copy. The 'trainable' copy learns the new condition, while the 'locked' copy preserves the original model's integrity. This architecture allows for the integration of various conditioning inputs, such as edges, depth, segmentation, and human poses, enabling more precise and consistent image generation without compromising the quality of the pretrained diffusion models.",
  },
  {
    id: 17,
    name: "Animagine XL 3.1",
    link: "https://huggingface.co/cagliostrolab/animagine-xl-3.1",
    description:
      "An open-source, anime-themed text-to-image model for high-quality image generation.",
    description2:
      "Animagine XL 3.1 is an advanced open-source text-to-image model designed to generate high-quality anime-style images from textual prompts. Building upon its predecessor, Animagine XL 3.0, this model offers enhanced image quality, a broader range of characters from well-known anime series, an optimized dataset, and new aesthetic tags for improved image creation. Developed by Cagliostro Research Lab in collaboration with SeaArt.ai, Animagine XL 3.1 is based on Stable Diffusion XL and has been fine-tuned to better understand anime concepts, hand anatomy, and prompt interpretation. It supports Danbooru-style tags and various resolution options, making it a valuable resource for anime fans, artists, and content creators seeking accurate and detailed representations of anime characters.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
