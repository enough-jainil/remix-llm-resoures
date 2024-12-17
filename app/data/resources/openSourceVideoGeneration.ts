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
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
