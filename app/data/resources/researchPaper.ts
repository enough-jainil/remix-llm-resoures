import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const researchPapers = [
  {
    id: 1,
    name: "Attention Is All You Need",
    link: "https://arxiv.org/abs/1706.03762",
    description:
      "Original transformer paper (2017) that revolutionized natural language processing and deep learning.",
  },
  {
    id: 2,
    name: "BERT",
    link: "https://arxiv.org/abs/1810.04805",
    description:
      "Bidirectional transformers for language understanding (2018), introducing pre-training and fine-tuning paradigm.",
  },
  {
    id: 3,
    name: "GPT-3",
    link: "https://arxiv.org/abs/2005.14165",
    description:
      "Language models are few-shot learners (2020), introducing scaling laws and in-context learning.",
  },
  {
    id: 4,
    name: "PaLM",
    link: "https://arxiv.org/abs/2204.02311",
    description:
      "Pathways Language Model (2022), demonstrating breakthrough performance in reasoning and multilingual tasks.",
  },
  {
    id: 5,
    name: "InstructGPT",
    link: "https://arxiv.org/abs/2203.02155",
    description:
      "Training language models to follow instructions (2022) with human feedback.",
  },
  {
    id: 6,
    name: "Constitutional AI",
    link: "https://arxiv.org/abs/2212.08073",
    description:
      "Anthropic's approach (2022) to training safe and ethical AI systems.",
  },
  {
    id: 7,
    name: "LLaMA",
    link: "https://arxiv.org/abs/2302.13971",
    description:
      "Meta's efficient foundation models (Feb 2023) that democratized LLM research.",
  },
  {
    id: 8,
    name: "GPT-4",
    link: "https://arxiv.org/abs/2303.08774",
    description:
      "Technical report (Mar 2023) on OpenAI's multimodal large language model.",
  },
  {
    id: 9,
    name: "PaLM 2",
    link: "https://arxiv.org/abs/2305.10403",
    description:
      "Google's improved language model (May 2023) with enhanced multilingual capabilities.",
  },
  {
    id: 10,
    name: "RWKV",
    link: "https://arxiv.org/abs/2305.13048",
    description:
      "Linear transformers with RNN-like computation (May 2023) for efficient inference.",
  },
  {
    id: 11,
    name: "Llama 2",
    link: "https://arxiv.org/abs/2307.09288",
    description:
      "Meta's open release (Jul 2023) of improved foundation models with commercial usage.",
  },
  {
    id: 12,
    name: "Code Llama",
    link: "https://arxiv.org/abs/2308.12950",
    description:
      "Open foundation models (Aug 2023) for code understanding and generation.",
  },
  {
    id: 13,
    name: "Mistral 7B",
    link: "https://arxiv.org/abs/2310.06825",
    description:
      "Efficient open-source language model (Oct 2023) with sliding window attention.",
  },
  {
    id: 14,
    name: "Phi-2",
    link: "https://arxiv.org/abs/2311.10617",
    description:
      "Microsoft's small language model (Nov 2023) with strong reasoning capabilities.",
  },
  {
    id: 15,
    name: "Gemini",
    link: "https://arxiv.org/abs/2312.11805",
    description:
      "Google's multimodal AI model (Dec 2023) trained across text, code, audio, image, and video.",
    description2:
      "The Gemini family consists of Ultra, Pro, and Nano sizes, suitable for applications ranging from complex reasoning tasks to on-device memory-constrained use-cases. Evaluation on a broad range of benchmarks shows that the Gemini Ultra model advances the state of the art in 30 of 32 benchmarks, achieving human-expert performance on the MMLU exam benchmark and improving the state of the art in all 20 multimodal benchmarks examined. This model's capabilities in cross-modal reasoning and language understanding enable a wide variety of use cases. For more details.",
  },
  {
    id: 16,
    name: "Mixtral 8x7B",
    link: "https://arxiv.org/abs/2401.04088",
    description:
      "Mistral AI's sparse mixture-of-experts model (Jan 2024) with state-of-the-art performance.",
  },
  {
    id: 17,
    name: "Claude 3",
    link: "https://www.anthropic.com/news/claude-3-family",
    description:
      "Anthropic's latest model family (Mar 2024) with improved reasoning and capabilities.",
  },
  {
    id: 18,
    name: "Stable LM 3B",
    link: "https://arxiv.org/abs/2403.07608",
    description:
      "Small yet capable language model (Mar 2024) for efficient deployment.",
  },
  {
    id: 19,
    name: "arXiv LLM Papers",
    link: "https://arxiv.org/list/cs.CL/recent",
    description:
      "Latest research papers in computational linguistics and natural language processing.",
  },
  {
    id: 20,
    name: "Papers with Code LLM",
    link: "https://paperswithcode.com/methods/category/language-models",
    description:
      "Curated collection of LLM papers with implementation details and benchmarks.",
  },
  {
    id: 21,
    name: "The First Law of Complexodynamics",
    link: "https://arxiv.org/abs/2312.09818",
    description:
      "Sutskever's paper (2023) on fundamental principles governing complex system behavior.",
  },
  {
    id: 22,
    name: "The Unreasonable Effectiveness of RNNs",
    link: "https://karpathy.github.io/2015/05/21/rnn-effectiveness/",
    description:
      "Influential blog post (2015) by Andrej Karpathy on RNN capabilities and applications.",
  },
  {
    id: 23,
    name: "Understanding LSTM Networks",
    link: "https://colah.github.io/posts/2015-08-Understanding-LSTMs/",
    description:
      "Christopher Olah's clear explanation (2015) of LSTM architecture and functionality.",
  },
  {
    id: 24,
    name: "Recurrent Neural Network Regularization",
    link: "https://arxiv.org/abs/1409.2329",
    description:
      "Zaremba et al. (2014) on improving RNN training through dropout and other techniques.",
  },
  {
    id: 25,
    name: "Keeping Neural Networks Simple",
    link: "https://arxiv.org/abs/1412.6544",
    description:
      "Research on minimizing description length of weights for better generalization.",
  },
  {
    id: 26,
    name: "Pointer Networks",
    link: "https://arxiv.org/abs/1506.03134",
    description:
      "Novel architecture (2015) for learning sequences of pointers by Vinyals et al.",
  },
  {
    id: 27,
    name: "ImageNet Classification with Deep CNNs",
    link: "https://papers.nips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html",
    description:
      "AlexNet paper (2012) that kickstarted modern deep learning era.",
  },
  {
    id: 28,
    name: "Order Matters: Sequence to Sequence for Sets",
    link: "https://arxiv.org/abs/1511.06391",
    description:
      "Vinyals et al. (2015) on handling set-structured input and output with neural networks.",
  },
  {
    id: 29,
    name: "GPipe: Easy Scaling with Micro-Batch Pipeline Parallelism",
    link: "https://arxiv.org/abs/1811.06965",
    description:
      "Efficient pipeline parallelism (2018) for training large neural networks.",
  },
  {
    id: 30,
    name: "Deep Residual Learning for Image Recognition",
    link: "https://arxiv.org/abs/1512.03385",
    description:
      "ResNet paper (2015) introducing skip connections for very deep networks.",
  },
  {
    id: 31,
    name: "Multi-Scale Context Aggregation by Dilated Convolutions",
    link: "https://arxiv.org/abs/1511.07122",
    description:
      "Yu & Koltun (2015) on systematic use of dilated convolutions for dense prediction.",
  },
  {
    id: 32,
    name: "Neural Message Passing for Quantum Chemistry",
    link: "https://arxiv.org/abs/1704.01212",
    description:
      "Gilmer et al. (2017) on learning molecular properties through message passing.",
  },
  {
    id: 33,
    name: "Neural Machine Translation by Jointly Learning to Align and Translate",
    link: "https://arxiv.org/abs/1409.0473",
    description:
      "Bahdanau et al. (2014) introducing attention mechanism for NMT.",
  },
  {
    id: 34,
    name: "Identity Mappings in Deep Residual Networks",
    link: "https://arxiv.org/abs/1603.05027",
    description:
      "He et al. (2016) on improving residual networks through better forward propagation.",
  },
  {
    id: 35,
    name: "A Simple Neural Network Module for Relational Reasoning",
    link: "https://arxiv.org/abs/1706.01427",
    description:
      "Santoro et al. (2017) on learning relationships between entities.",
  },
  {
    id: 36,
    name: "Variational Lossy Autoencoder",
    link: "https://arxiv.org/abs/1611.02731",
    description:
      "Chen et al. (2016) on improving VAE with hierarchical latent variables.",
  },
  {
    id: 37,
    name: "Relational Recurrent Neural Networks",
    link: "https://arxiv.org/abs/1806.01822",
    description:
      "Santoro et al. (2018) on incorporating relational reasoning into RNNs.",
  },
  {
    id: 38,
    name: "Neural Turing Machines",
    link: "https://arxiv.org/abs/1410.5401",
    description:
      "Graves et al. (2014) on neural networks with external memory access.",
  },
  {
    id: 39,
    name: "Deep Speech 2",
    link: "https://arxiv.org/abs/1512.02595",
    description:
      "End-to-end speech recognition system (2015) for English and Mandarin.",
  },
  {
    id: 40,
    name: "Scaling Laws for Neural Language Models",
    link: "https://arxiv.org/abs/2001.08361",
    description:
      "Kaplan et al. (2020) on empirical laws governing LLM performance scaling.",
  },
  {
    id: 41,
    name: "A Tutorial on the MDL Principle",
    link: "https://arxiv.org/abs/0804.2251",
    description: "Grünwald (2008) on the Minimum Description Length principle.",
  },
  {
    id: 42,
    name: "Machine Super Intelligence",
    link: "https://arxiv.org/abs/2907.03512",
    description:
      "Theoretical framework for understanding and developing superintelligent AI systems.",
  },
  {
    id: 43,
    name: "Kolmogorov Complexity and Algorithmic Randomness",
    link: "https://www.springer.com/gp/book/9783540208068",
    description:
      "Li & Vitányi's comprehensive book on algorithmic information theory.",
  },
  {
    id: 44,
    name: "Stanford's CS231n CNN for Visual Recognition",
    link: "http://cs231n.stanford.edu/",
    description: "Comprehensive course materials on CNNs and computer vision.",
  },
  {
    id: 45,
    name: "Quantifying Complexity in Closed Systems",
    link: "https://arxiv.org/abs/2201.09152",
    description: "Analysis of complexity measures in closed dynamical systems.",
    description2:
      "Generative Adversarial Networks (GANs) are machine learning methods that are used in many important and novel applications. For example, in imaging science, GANs are effectively utilized in generating image datasets, photographs of human faces, image and video captioning, image-to-image translation, text-to-image translation, video prediction, and 3D object generation to name a few. In this paper, we discuss how GANs can be used to create an artificial world. More specifically, we discuss how GANs help to describe an image utilizing image/video captioning methods and how to translate the image to a new image using image-to-image translation frameworks in a theme we desire. We articulate how GANs impact creating a customized world. Comments: Computational Science and Computational Intelligence; 2021 International Conference on IEEE CPS (IEEE XPLORE, Scopus), IEEE, 2021. Subjects: Computer Vision and Pattern Recognition (cs.CV); Machine Learning (cs.LG); Image and Video Processing (eess.IV). Cite as: arXiv:2201.09152 [cs.CV] (or arXiv:2201.09152v1 [cs.CV] for this version) https://doi.org/10.48550/arXiv.2201.09152 Focus to learn more Submission history From: Soheyla Amirian [view email] [v1] Sun, 23 Jan 2022 00:57:02 UTC (5,065 KB)",
  },
  {
    id: 46,
    name: "Byte Latent Transformer: Patches Scale Better Than Tokens",
    link: "https://arxiv.org/abs/2412.09871",
    description:
      "New byte-level LLM architecture that matches tokenization-based performance with improved efficiency and robustness.",
    description2:
      "We introduce the Byte Latent Transformer (BLT), a new byte-level LLM architecture that, for the first time, matches tokenization-based LLM performance at scale with significant improvements in inference efficiency and robustness. BLT encodes bytes into dynamically sized patches, which serve as the primary units of computation. Patches are segmented based on the entropy of the next byte, allocating more compute and model capacity where increased data complexity demands it. We present the first FLOP controlled scaling study of byte-level models up to 8B parameters and 4T training bytes. Our results demonstrate the feasibility of scaling models trained on raw bytes without a fixed vocabulary. Both training and inference efficiency improve due to dynamically selecting long patches when data is predictable, along with qualitative improvements on reasoning and long tail generalization. Overall, for fixed inference costs, BLT shows significantly better scaling than tokenization-based models, by simultaneously growing both patch and model size.",
  },
  {
    id: 47,
    name: "Learning Flow Fields in Attention for Controllable Person Image Generation",
    link: "https://arxiv.org/abs/2412.08486",
    description:
      "Leffa is a state-of-the-art framework developed by Zijian Zhou et al. that enables controllable person image generation based on reference images, allowing precise adjustments in appearance and pose while maintaining high image quality.",
    description2:
      "This framework addresses the common issue of distortion in fine-grained details by learning flow fields in attention, which guides the model to focus on the correct regions of the reference image during training. Extensive experiments demonstrate that Leffa significantly reduces detail distortion and enhances the quality of generated images.",
  },
  {
    id: 48,
    name: "Meta Video Seal: Open and Efficient Video Watermarking",
    link: "https://arxiv.org/abs/2412.09492",
    description:
      "Video Seal is an open-source model for video watermarking that embeds imperceptible signals into videos, allowing for identification and protection against tampering.",
    description2:
      "Video Seal introduces a comprehensive framework for neural video watermarking, jointly training an embedder and an extractor to ensure watermark robustness. The model applies transformations such as video codecs during training to enhance robustness against distortions like flipping and blurring. The approach includes temporal watermark propagation, converting image watermarking models to efficient video watermarking models without watermarking every high-resolution frame. Experimental results demonstrate the model's effectiveness in terms of speed, imperceptibility, and robustness, outperforming strong baselines under challenging distortions. The codebase, models, and a public demo are open-sourced under permissive licenses to foster further research and development.",
  },
  {
    id: 49,
    name: "Latent Video Diffusion Models for High-Fidelity Long Video Generation",
    link: "https://arxiv.org/abs/2211.13221",
    description:
      "Lightweight video diffusion models leveraging a low-dimensional 3D latent space for high-fidelity long video generation.",
    description2:
      "AI-generated content has attracted lots of attention recently, but photo-realistic video synthesis is still challenging. Although many attempts using GANs and autoregressive models have been made in this area, the visual quality and length of generated videos are far from satisfactory. Diffusion models have shown remarkable results recently but require significant computational resources. To address this, we introduce lightweight video diffusion models by leveraging a low-dimensional 3D latent space, significantly outperforming previous pixel-space video diffusion models under a limited computational budget. In addition, we propose hierarchical diffusion in the latent space such that longer videos with more than one thousand frames can be produced. To further overcome the performance degradation issue for long video generation, we propose conditional latent perturbation and unconditional guidance that effectively mitigate the accumulated errors during the extension of video length. Extensive experiments on small domain datasets of different categories suggest that our framework generates more realistic and longer videos than previous strong baselines. We additionally provide an extension to large-scale text-to-video generation to demonstrate the superiority of our work. Our code and models will be made publicly available. Comments: Computer Vision and Pattern Recognition (cs.CV); Artificial Intelligence (cs.AI). Cite as: arXiv:2211.13221 [cs.CV] (or arXiv:2211.13221v2 [cs.CV] for this version) https://doi.org/10.48550/arXiv.2211.13221",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
