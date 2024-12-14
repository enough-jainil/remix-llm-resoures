import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const llmLeaderboards = [
  {
    id: 1,
    name: "Open LLM Leaderboard",
    link: "https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard",
    description:
      "Comprehensive benchmark of open source LLMs on various tasks by Hugging Face.",
  },
  {
    id: 2,
    name: "Chatbot Arena Leaderboard",
    link: "https://chat.lmsys.org/?leaderboard",
    description:
      "Interactive LLM rankings based on human preferences and head-to-head comparisons.",
  },
  {
    id: 3,
    name: "AlpacaEval Leaderboard",
    link: "https://tatsu-lab.github.io/alpaca_eval/",
    description:
      "Evaluation of instruction-following capabilities across different models.",
  },
  {
    id: 4,
    name: "MT-Bench Leaderboard",
    link: "https://github.com/lm-sys/FastChat/tree/main/fastchat/llm_judge",
    description:
      "Multi-turn conversation benchmark for testing complex reasoning and consistency.",
  },
  {
    id: 5,
    name: "Big Code Models Leaderboard",
    link: "https://huggingface.co/spaces/bigcode/bigcode-models-leaderboard",
    description:
      "Evaluation of code generation models on multiple programming tasks.",
  },
  {
    id: 6,
    name: "HELM Benchmark",
    link: "https://crfm.stanford.edu/helm/latest/",
    description:
      "Stanford's holistic evaluation framework covering 42 scenarios.",
  },
  {
    id: 7,
    name: "BIG-bench",
    link: "https://github.com/google/BIG-bench",
    description:
      "Google's Beyond the Imitation Game benchmark with 200+ tasks.",
  },
  {
    id: 8,
    name: "C-Eval Leaderboard",
    link: "https://cevalbenchmark.com/static/leaderboard.html",
    description: "Comprehensive Chinese language capabilities evaluation.",
  },
  {
    id: 9,
    name: "MMLU Leaderboard",
    link: "https://paperswithcode.com/sota/multi-task-language-understanding-on-mmlu",
    description:
      "Massive Multitask Language Understanding benchmark across 57 subjects.",
  },
  {
    id: 10,
    name: "HumanEval Leaderboard",
    link: "https://paperswithcode.com/sota/code-generation-on-humaneval",
    description: "Evaluation of Python code generation capabilities.",
  },
  {
    id: 11,
    name: "AGIEval Benchmark",
    link: "https://github.com/microsoft/AGIEval",
    description:
      "Microsoft's benchmark for testing human-level intelligence tasks.",
  },
  {
    id: 12,
    name: "OpenCompass Leaderboard",
    link: "https://opencompass.org.cn/leaderboard-llm",
    description: "Comprehensive evaluation platform with 50+ datasets.",
  },
  {
    id: 13,
    name: "LongBench Leaderboard",
    link: "https://github.com/THUDM/LongBench",
    description:
      "Benchmark for testing long-context understanding capabilities.",
  },
  {
    id: 14,
    name: "Harness Leaderboard",
    link: "https://www.eleuther.ai/projects/harness/",
    description: "EleutherAI's framework for language model evaluation.",
  },
  {
    id: 15,
    name: "GLUE Benchmark",
    link: "https://gluebenchmark.com/leaderboard",
    description: "General Language Understanding Evaluation benchmark.",
  },
  {
    id: 16,
    name: "SuperGLUE Benchmark",
    link: "https://super.gluebenchmark.com/leaderboard",
    description: "More challenging successor to GLUE with harder tasks.",
  },
  {
    id: 17,
    name: "Multilingual LEaderboard",
    link: "https://huggingface.co/spaces/mteb/leaderboard",
    description: "MTEB benchmark for multilingual model evaluation.",
  },
  {
    id: 18,
    name: "TruthfulQA Leaderboard",
    link: "https://github.com/sylinrl/TruthfulQA",
    description: "Benchmark for measuring truthfulness in model responses.",
  },
  {
    id: 19,
    name: "Instruction Tuning Benchmark",
    link: "https://github.com/google-research/google-research/tree/master/instruction_tuning_benchmark",
    description: "Google's benchmark for instruction-following capabilities.",
  },
  {
    id: 20,
    name: "LLM Security Leaderboard",
    link: "https://www.llm-security.org/leaderboard",
    description:
      "Evaluation of models' resistance to security exploits and jailbreaks.",
  },
  {
    id: 21,
    name: "Hallucination Leaderboard",
    link: "https://github.com/vectara/hallucination-leaderboard/tree/main",
    description:
      "Public LLM leaderboard computed using Vectara's Hughes Hallucination Evaluation Model.",
    description2:
      "Public LLM leaderboard computed using Vectara's Hughes Hallucination Evaluation Model. This evaluates how often an LLM introduces hallucinations when summarizing a document. We plan to update this regularly as our model and the LLMs get updated over time. Also, feel free to check out our hallucination leaderboard on Hugging Face. The rankings in this leaderboard are computed using the HHEM-2.1 hallucination evaluation model. If you are interested in the previous leaderboard, which was based on HHEM-1.0, it is available here for more details.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
