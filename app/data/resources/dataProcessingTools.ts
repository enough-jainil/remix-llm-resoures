import { getFaviconUrl } from "~/utils/getFaviconUrl";

export const dataProcessingTools = [
  {
    id: 1,
    name: "LangChain Text Splitters",
    link: "https://python.langchain.com/docs/modules/data_connection/document_transformers/",
    description:
      "Modern text splitting utilities for chunking and processing large documents for LLMs.",
  },
  {
    id: 2,
    name: "Unstructured.io",
    link: "https://unstructured.io/",
    description:
      "Latest open-source tool for extracting text from PDFs, images, and various document formats.",
  },
  {
    id: 3,
    name: "LlamaIndex",
    link: "https://www.llamaindex.ai/",
    description:
      "Advanced framework for ingesting, structuring, and accessing data for LLM applications.",
  },
  {
    id: 4,
    name: "Cleanlab",
    link: "https://github.com/cleanlab/cleanlab",
    description:
      "ML tool for automatically detecting and cleaning label issues in datasets.",
  },
  {
    id: 5,
    name: "TextCortex",
    link: "https://textcortex.com/",
    description:
      "AI-powered content processing and generation platform with advanced text analysis.",
  },
  {
    id: 6,
    name: "DeepSpeed",
    link: "https://www.deepspeed.ai/",
    description:
      "Microsoft's latest deep learning optimization library with data processing capabilities.",
  },
  {
    id: 7,
    name: "Doccano",
    link: "https://github.com/doccano/doccano",
    description:
      "Modern open-source text annotation tool for machine learning practitioners.",
  },
  {
    id: 8,
    name: "Label Studio",
    link: "https://labelstud.io/",
    description:
      "Open source data labeling tool with support for text, audio, images, and video.",
  },
  {
    id: 9,
    name: "Rubrix",
    link: "https://github.com/recognai/rubrix",
    description:
      "Open-source tool for data-centric NLP, focusing on dataset management and labeling.",
  },
  {
    id: 10,
    name: "Argilla",
    link: "https://argilla.io/",
    description:
      "Modern platform for data labeling, validation, and curation in NLP projects.",
  },
  {
    id: 11,
    name: "DataPrep.ai",
    link: "https://dataprep.ai/",
    description:
      "Latest tool for automated data cleaning and preparation with ML capabilities.",
  },
  {
    id: 12,
    name: "Haystack",
    link: "https://haystack.deepset.ai/",
    description:
      "End-to-end framework for building NLP pipelines with modern preprocessing tools.",
  },
  {
    id: 13,
    name: "Datasets CLI",
    link: "https://github.com/huggingface/datasets-cli",
    description:
      "Command-line tool for efficient dataset processing from Hugging Face.",
  },
  {
    id: 14,
    name: "Texthero",
    link: "https://texthero.org/",
    description:
      "Python toolkit for text preprocessing, representation and visualization.",
  },
  {
    id: 15,
    name: "Snorkel",
    link: "https://snorkel.ai/",
    description:
      "Programmatic data labeling platform for creating training datasets quickly.",
  },
  {
    id: 16,
    name: "Prodigy",
    link: "https://prodi.gy/",
    description:
      "Modern annotation tool from the makers of spaCy, with active learning capabilities.",
  },
  {
    id: 17,
    name: "DataTorch",
    link: "https://datatorch.io/",
    description:
      "Open-source platform for data labeling and ML workflow management.",
  },
  {
    id: 18,
    name: "Great Expectations",
    link: "https://greatexpectations.io/",
    description:
      "Tool for validating, documenting, and profiling data with ML support.",
  },
  {
    id: 19,
    name: "Kedro",
    link: "https://kedro.org/",
    description:
      "Production-ready framework for creating reproducible data processing pipelines.",
  },
  {
    id: 20,
    name: "Weights & Biases",
    link: "https://wandb.ai/",
    description:
      "MLOps platform with advanced data versioning and preprocessing capabilities.",
  },
  {
    id: 21,
    name: "PDFPlumber",
    link: "https://github.com/jsvine/pdfplumber",
    description:
      "Advanced PDF text and table extraction tool with precise positioning and layout analysis.",
  },
  {
    id: 22,
    name: "Nougat",
    link: "https://github.com/facebookresearch/nougat",
    description:
      "Meta's ML-powered tool for extracting text and math from academic PDFs with high accuracy.",
  },
  {
    id: 23,
    name: "Grobid",
    link: "https://github.com/kermitt2/grobid",
    description:
      "Machine learning tool for extracting and structuring scientific documents in PDF format.",
  },
  {
    id: 24,
    name: "PdfMiner.six",
    link: "https://github.com/pdfminer/pdfminer.six",
    description:
      "Python library for extracting text, images, and metadata from PDF documents.",
  },
  {
    id: 25,
    name: "OCRmyPDF",
    link: "https://github.com/ocrmypdf/OCRmyPDF",
    description:
      "Adds OCR text layer to scanned PDFs while optimizing for document quality.",
  },
  {
    id: 26,
    name: "Camelot",
    link: "https://github.com/camelot-dev/camelot",
    description:
      "Framework for extracting tables from PDF files with high precision.",
  },
  {
    id: 27,
    name: "DocTR",
    link: "https://github.com/mindee/doctr",
    description:
      "End-to-end document text recognition and analysis powered by deep learning.",
  },
  {
    id: 28,
    name: "Tabula",
    link: "https://tabula.technology/",
    description:
      "Free tool for extracting tables from PDF files into CSV and Excel formats.",
  },
  {
    id: 29,
    name: "Adobe PDF Services API",
    link: "https://developer.adobe.com/document-services/apis/pdf-services/",
    description:
      "Free tier API for PDF manipulation, extraction, and conversion with ML capabilities.",
  },
  {
    id: 30,
    name: "PaddleOCR",
    link: "https://github.com/PaddlePaddle/PaddleOCR",
    description:
      "Multilingual OCR toolkit supporting 80+ languages with document analysis features.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
