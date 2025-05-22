<img width="1208" alt="image" src="https://github.com/user-attachments/assets/835f1e1b-73e6-405a-b7ad-096d5f5f567a" />

# LLM-Stats.com

[![GitHub stars](https://img.shields.io/github/stars/JonathanChavezTamales/llm-leaderboard?style=social)](https://github.com/JonathanChavezTamales/llm-leaderboard/stargazers)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Discord](https://img.shields.io/badge/Discord-Join%20Us-7289da?logo=discord&logoColor=white)](https://discord.com/invite/RxGUBvE42d)
[![Issues](https://img.shields.io/github/issues/JonathanChavezTamales/llm-leaderboard)](https://github.com/JonathanChavezTamales/llm-leaderboard/issues)

A community-driven repository of LLM data and benchmarks. Compare and explore language models through our interactive dashboard at [llm-stats.com](https://llm-stats.com).

## Found an issue or have a feature request?

[Open an issue here](https://github.com/JonathanChavezTamales/llm-leaderboard/issues). Thank you!

# Data

## 🔍 What's Inside

Our repository contains detailed information on hundreds of LLMs:

- Model parameters, context window sizes, licensing details, capabilities, and more
- Provider pricing
- Performance metrics (throughput, latency)
- Standardized benchmark results

## 🤝 How to Contribute

We welcome community contributions to keep our data accurate and up-to-date:

1. **Update Model Data**

   - Browse [`models/`](models/) and [`providers/`](providers/) directories
   - Submit a PR following our [contribution guidelines](CONTRIBUTING.md)
   - Check [`schemas/`](schemas/) for data formats

## 📈 Data Quality

Accuracy is our priority. To ensure reliable information:

- All benchmark data requires verifiable source links
- Community review process for all changes
- Multiple source citations encouraged
- Regular validation of submitted data

There's no guarantee that the data is 100% accurate, but we do our best to ensure it's as accurate as possible.

## 🌟 Community

- Join our [Discord](https://discord.gg/RxGUBvE42d) for discussions

## Leaderboard

| Name | Release Date | Input Context | Output Context | GPQA | MMLU | MATH | HumanEval | MMLU-Pro | MMMU | AIME 2024 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Claude 3.7 Sonnet | 2025-02-24 | 200,000 | 128,000 | 0.848 | N/A | N/A | N/A | N/A | 0.750 | 0.800 |
| Grok-3 Mini | 2025-02-17 | 128,000 | 8,000 | 0.846 | N/A | N/A | N/A | N/A | N/A | 0.958 |
| Grok-3 | 2025-02-17 | 128,000 | 8,000 | 0.846 | N/A | N/A | N/A | N/A | 0.780 | 0.930 |
| Gemini 2.5 Pro | 2025-03-28 | 1,048,576 | 65,536 | 0.840 | N/A | N/A | N/A | N/A | 0.817 | 0.920 |
| o3 | 2025-04-16 | 200,000 | 100,000 | 0.833 | N/A | N/A | N/A | N/A | 0.829 | 0.916 |
| o4-mini | 2025-04-16 | 200,000 | 100,000 | 0.814 | N/A | N/A | N/A | N/A | 0.816 | 0.934 |
| o1-pro | 2024-12-17 | 200,000 | 100,000 | 0.790 | N/A | N/A | N/A | N/A | N/A | 0.860 |
| Gemini 2.5 Flash | 2025-04-17 | 1,048,576 | 65,536 | 0.783 | N/A | N/A | N/A | N/A | 0.767 | 0.880 |
| o1 | 2024-12-17 | 200,000 | 100,000 | 0.780 | 0.918 | 0.964 | 0.881 | N/A | 0.776 | 0.743 |
| o3-mini | 2025-01-30 | 200,000 | 100,000 | 0.772 | 0.869 | 0.979 | N/A | N/A | N/A | 0.873 |
| Llama 3.1 Nemotron Ultra 253B v1 | 2025-04-07 | 131,072 | 131,072 | 0.760 | N/A | N/A | N/A | N/A | N/A | N/A |
| Gemini 2.0 Flash Thinking | 2025-01-21 | 1,000,000 | 65,536 | 0.742 | N/A | N/A | N/A | N/A | 0.754 | 0.733 |
| DeepSeek R1 Zero | 2025-01-20 | 131,072 | 131,072 | 0.733 | N/A | N/A | N/A | N/A | N/A | 0.867 |
| o1-preview | 2024-09-12 | 128,000 | 32,768 | 0.733 | 0.908 | 0.855 | N/A | N/A | N/A | 0.420 |
| DeepSeek-R1 | 2025-01-20 | 131,072 | 131,072 | 0.715 | 0.908 | N/A | N/A | 0.840 | N/A | 0.798 |
| Llama 4 Maverick | 2025-04-05 | 1,000,000 | 1,000,000 | 0.698 | 0.855 | 0.612 | N/A | 0.805 | 0.734 | N/A |
| GPT-4.5 | 2025-02-27 | 128,000 | 4,096 | 0.695 | 0.908 | N/A | 0.880 | N/A | 0.752 | 0.367 |
| Phi 4 Reasoning Plus | 2025-04-30 | 32,000 | 32,000 | 0.689 | N/A | N/A | N/A | 0.760 | N/A | 0.813 |
| DeepSeek-V3 0324 | 2025-03-25 | 131,072 | 131,072 | 0.684 | N/A | N/A | N/A | 0.812 | N/A | 0.594 |
| Claude 3.5 Sonnet | 2024-10-22 | 200,000 | 200,000 | 0.672 | 0.904 | 0.783 | 0.937 | 0.776 | 0.683 | N/A |
| Llama-3.3 Nemotron Super 49B v1 | 2025-03-18 | 131,072 | 131,072 | 0.667 | N/A | N/A | N/A | N/A | N/A | N/A |
| GPT-4.1 | 2025-04-14 | 1,047,576 | 32,768 | 0.663 | 0.902 | N/A | N/A | N/A | 0.748 | 0.481 |
| Phi 4 Reasoning | 2025-04-30 | 32,000 | 32,000 | 0.658 | N/A | N/A | N/A | 0.743 | N/A | 0.753 |
| Qwen3 30B A3B | 2025-04-29 | 128,000 | 128,000 | 0.658 | N/A | N/A | N/A | N/A | N/A | 0.804 |
| QwQ-32B | 2025-03-05 | 32,768 | 32,768 | 0.652 | N/A | N/A | N/A | N/A | N/A | 0.795 |
| QwQ-32B-Preview | 2024-11-28 | 32,768 | 32,768 | 0.652 | N/A | N/A | N/A | N/A | N/A | 0.500 |
| DeepSeek R1 Distill Llama 70B | 2025-01-20 | 128,000 | 128,000 | 0.652 | N/A | N/A | N/A | N/A | N/A | 0.867 |
| GPT-4.1 mini | 2025-04-14 | 1,047,576 | 32,768 | 0.650 | 0.875 | N/A | N/A | N/A | 0.727 | 0.496 |
| Gemini 2.0 Flash | 2024-12-01 | 1,048,576 | 8,192 | 0.621 | N/A | 0.897 | N/A | 0.764 | 0.707 | N/A |
| DeepSeek R1 Distill Qwen 32B | 2025-01-20 | 128,000 | 128,000 | 0.621 | N/A | N/A | N/A | N/A | N/A | 0.833 |
| o1-mini | 2024-09-12 | 128,000 | 65,536 | 0.600 | 0.852 | N/A | 0.924 | N/A | N/A | N/A |
| Gemini 1.5 Pro | 2024-05-01 | 2,097,152 | 8,192 | 0.591 | 0.859 | 0.865 | 0.841 | 0.758 | 0.659 | N/A |
| DeepSeek-V3 | 2024-12-25 | 131,072 | 131,072 | 0.591 | 0.885 | N/A | N/A | 0.759 | N/A | 0.392 |
| DeepSeek R1 Distill Qwen 14B | 2025-01-20 | 128,000 | 128,000 | 0.591 | N/A | N/A | N/A | N/A | N/A | 0.800 |
| Llama 4 Scout | 2025-04-05 | 10,000,000 | 10,000,000 | 0.572 | 0.796 | 0.503 | N/A | 0.743 | 0.694 | N/A |
| Phi 4 | 2024-12-12 | 16,000 | 16,000 | 0.561 | 0.848 | 0.804 | 0.826 | 0.704 | N/A | N/A |
| Grok-2 | 2024-08-13 | 128,000 | 8,000 | 0.560 | 0.875 | 0.761 | 0.884 | 0.755 | 0.661 | N/A |
| Llama 3.1 Nemotron Nano 8B V1 | 2025-03-18 | 131,072 | 131,072 | 0.541 | N/A | N/A | N/A | N/A | N/A | N/A |
| Phi 4 Mini Reasoning | 2025-04-30 | 128,000 | 32,768 | 0.520 | N/A | N/A | N/A | N/A | N/A | N/A |
| Gemini 2.0 Flash-Lite | 2025-02-05 | 1,048,576 | 8,192 | 0.515 | N/A | 0.868 | N/A | 0.716 | 0.680 | N/A |
| Gemini 1.5 Flash | 2024-05-01 | 1,048,576 | 8,192 | 0.510 | 0.789 | 0.779 | 0.743 | 0.673 | 0.623 | N/A |
| Grok-2 mini | 2024-08-13 | 128,000 | 128,000 | 0.510 | 0.862 | 0.730 | 0.857 | 0.720 | 0.632 | N/A |
| Llama 3.1 405B Instruct | 2024-07-23 | 128,000 | 128,000 | 0.507 | 0.873 | 0.738 | 0.890 | 0.733 | N/A | N/A |
| Llama 3.3 70B Instruct | 2024-12-06 | 128,000 | 128,000 | 0.505 | 0.860 | 0.770 | 0.884 | 0.689 | N/A | N/A |
| Claude 3 Opus | 2024-02-29 | 200,000 | 200,000 | 0.504 | 0.868 | 0.601 | 0.849 | 0.685 | N/A | N/A |
| GPT-4.1 nano | 2025-04-14 | 1,047,576 | 32,768 | 0.503 | 0.801 | N/A | N/A | N/A | 0.554 | 0.294 |
| Qwen2.5 32B Instruct | 2024-09-19 | 131,072 | 8,192 | 0.495 | 0.833 | 0.831 | 0.884 | 0.690 | N/A | N/A |
| DeepSeek R1 Distill Qwen 7B | 2025-01-20 | 128,000 | 128,000 | 0.491 | N/A | N/A | N/A | N/A | N/A | 0.833 |
| Qwen2.5 72B Instruct | 2024-09-19 | 131,072 | 8,192 | 0.490 | N/A | 0.831 | 0.866 | 0.711 | N/A | N/A |
| DeepSeek R1 Distill Llama 8B | 2025-01-20 | 128,000 | 128,000 | 0.490 | N/A | N/A | N/A | N/A | N/A | 0.800 |
| GPT-4 Turbo | 2024-04-09 | 128,000 | 4,096 | 0.480 | 0.865 | 0.726 | 0.871 | N/A | N/A | N/A |
| Qwen3 235B A22B | 2025-04-29 | 128,000 | 128,000 | 0.475 | 0.878 | 0.718 | N/A | 0.682 | N/A | 0.857 |
| Nova Pro | 2024-11-20 | 300,000 | 300,000 | 0.469 | 0.859 | 0.766 | 0.890 | N/A | 0.617 | N/A |
| Llama 3.2 90B Instruct | 2024-09-25 | 128,000 | 128,000 | 0.467 | 0.860 | 0.680 | N/A | N/A | 0.603 | N/A |
| GPT-4o | 2024-08-06 | 128,000 | 16,384 | 0.460 | 0.857 | N/A | N/A | 0.747 | 0.687 | 0.131 |
| Mistral Small 3.1 24B Instruct | 2025-03-17 | 128,000 | 128,000 | 0.460 | 0.806 | 0.693 | 0.884 | 0.668 | 0.593 | N/A |
| Qwen2.5 14B Instruct | 2024-09-19 | 131,072 | 8,192 | 0.455 | 0.797 | 0.800 | 0.835 | 0.637 | N/A | N/A |
| Mistral Small 3 24B Instruct | 2025-01-30 | 32,000 | 32,000 | 0.453 | N/A | 0.706 | 0.848 | 0.663 | N/A | N/A |
| Gemma 3 27B | 2025-03-12 | 131,072 | 131,072 | 0.424 | N/A | 0.890 | 0.878 | 0.675 | N/A | N/A |
| Qwen2 72B Instruct | 2024-07-23 | 131,072 | 131,072 | 0.424 | 0.823 | 0.597 | 0.860 | 0.644 | N/A | N/A |
| Nova Lite | 2024-11-20 | 300,000 | 2,048 | 0.420 | 0.805 | 0.733 | 0.854 | N/A | 0.562 | N/A |
| Llama 3.1 70B Instruct | 2024-07-23 | 128,000 | 128,000 | 0.417 | 0.836 | N/A | 0.805 | 0.664 | N/A | N/A |
| Claude 3.5 Haiku | 2024-10-22 | 200,000 | 200,000 | 0.416 | N/A | 0.694 | 0.881 | 0.650 | N/A | N/A |
| Gemma 3 12B | 2025-03-12 | 131,072 | 131,072 | 0.409 | N/A | 0.838 | 0.854 | 0.606 | N/A | N/A |
| Claude 3 Sonnet | 2024-02-29 | 200,000 | 200,000 | 0.404 | 0.790 | 0.431 | 0.730 | 0.568 | N/A | N/A |
| GPT-4o mini | 2024-07-18 | 128,000 | 16,384 | 0.402 | 0.820 | 0.702 | 0.872 | N/A | 0.594 | N/A |
| Nova Micro | 2024-11-20 | 128,000 | 128,000 | 0.400 | 0.776 | 0.693 | 0.811 | N/A | N/A | N/A |
| Gemini 1.5 Flash 8B | 2024-03-15 | 1,048,576 | 8,192 | 0.384 | N/A | 0.587 | N/A | 0.587 | 0.537 | N/A |
| Mistral Small 3.1 24B Base | 2025-03-17 | 128,000 | 128,000 | 0.375 | 0.810 | N/A | N/A | 0.560 | 0.593 | N/A |
| Jamba 1.5 Large | 2024-08-22 | 256,000 | 256,000 | 0.369 | 0.812 | N/A | N/A | 0.535 | N/A | N/A |
| Phi-3.5-MoE-instruct | 2024-08-23 | 128,000 | 128,000 | 0.368 | 0.789 | 0.595 | 0.707 | 0.543 | N/A | N/A |
| Qwen2.5 7B Instruct | 2024-09-19 | 131,072 | 8,192 | 0.364 | N/A | 0.755 | 0.848 | 0.563 | N/A | N/A |
| Grok-1.5 | 2024-03-28 | 128,000 | 128,000 | 0.359 | 0.813 | 0.506 | 0.741 | 0.510 | 0.536 | N/A |
| GPT-4 | 2023-06-13 | 32,768 | 32,768 | 0.357 | 0.864 | 0.420 | 0.670 | N/A | N/A | N/A |
| Mistral Small 3 24B Base | 2025-01-30 | 32,000 | 32,000 | 0.344 | 0.807 | 0.460 | N/A | 0.544 | N/A | N/A |
| DeepSeek R1 Distill Qwen 1.5B | 2025-01-20 | 128,000 | 128,000 | 0.338 | N/A | N/A | N/A | N/A | N/A | 0.527 |
| Claude 3 Haiku | 2024-03-13 | 200,000 | 200,000 | 0.333 | 0.752 | 0.389 | 0.759 | N/A | N/A | N/A |
| Llama 3.2 11B Instruct | 2024-09-25 | 128,000 | 128,000 | 0.328 | 0.730 | 0.519 | N/A | N/A | 0.507 | N/A |
| Llama 3.2 3B Instruct | 2024-09-25 | 128,000 | 128,000 | 0.328 | 0.634 | 0.480 | N/A | N/A | N/A | N/A |
| Jamba 1.5 Mini | 2024-08-22 | 256,144 | 256,144 | 0.323 | 0.697 | N/A | N/A | 0.425 | N/A | N/A |
| Gemma 3 4B | 2025-03-12 | 131,072 | 131,072 | 0.308 | N/A | 0.756 | 0.713 | 0.436 | N/A | N/A |
| Qwen2.5-Omni-7B | 2025-03-27 | 32,768 | 32,768 | 0.308 | N/A | 0.715 | 0.787 | 0.470 | 0.592 | N/A |
| GPT-3.5 Turbo | 2023-03-21 | 16,385 | 4,096 | 0.308 | 0.698 | 0.431 | 0.680 | N/A | 0.000 | N/A |
| Phi-3.5-mini-instruct | 2024-08-23 | 128,000 | 128,000 | 0.304 | 0.690 | 0.485 | 0.628 | 0.474 | N/A | N/A |
| Llama 3.1 8B Instruct | 2024-07-23 | 131,072 | 131,072 | 0.304 | 0.694 | N/A | 0.726 | 0.483 | N/A | N/A |
| Gemini 1.0 Pro | 2024-02-15 | 32,760 | 8,192 | 0.279 | 0.718 | 0.326 | N/A | N/A | 0.479 | N/A |
| Qwen2 7B Instruct | 2024-07-23 | 131,072 | 131,072 | 0.253 | 0.705 | 0.496 | N/A | 0.441 | N/A | N/A |
| Phi 4 Mini | 2025-02-01 | 128,000 | 128,000 | 0.252 | 0.673 | 0.640 | N/A | 0.528 | N/A | N/A |
| Gemma 3 1B | 2025-03-12 | 32,000 | 8,192 | 0.192 | N/A | 0.480 | 0.415 | 0.147 | N/A | N/A |
| Command R+ | 2024-08-30 | 128,000 | 128,000 | N/A | 0.757 | N/A | N/A | N/A | N/A | N/A |
| Kimi-k1.5 | 2025-01-20 | 128,000 | 128,000 | N/A | 0.874 | N/A | N/A | N/A | 0.700 | 0.775 |
| Gemma 2 9B | 2024-06-27 | 8,192 | 8,192 | N/A | 0.713 | 0.366 | 0.402 | N/A | N/A | N/A |
| Gemma 2 27B | 2024-06-27 | 8,192 | 8,192 | N/A | 0.752 | 0.423 | 0.518 | N/A | N/A | N/A |
| Phi-3.5-vision-instruct | 2024-08-23 | 128,000 | 128,000 | N/A | N/A | N/A | N/A | N/A | 0.430 | N/A |
| Phi-4-multimodal-instruct | 2025-02-01 | 128,000 | 128,000 | N/A | N/A | N/A | N/A | N/A | 0.551 | N/A |
| Qwen2.5-Coder 32B Instruct | 2024-09-19 | 128,000 | 128,000 | N/A | 0.751 | 0.572 | 0.927 | 0.504 | N/A | N/A |
| Qwen2.5-Coder 7B Instruct | 2024-09-19 | 128,000 | 128,000 | N/A | 0.676 | 0.466 | 0.884 | 0.401 | N/A | N/A |
| Qwen2-VL-72B-Instruct | 2024-08-29 | 32,768 | 32,768 | N/A | N/A | N/A | N/A | N/A | N/A | N/A |
| Qwen3 32B | 2025-04-29 | 128,000 | 128,000 | N/A | N/A | N/A | N/A | N/A | N/A | 0.814 |
| Qwen2.5 VL 7B Instruct | 2025-01-26 | 32,768 | 32,768 | N/A | N/A | N/A | N/A | N/A | 0.586 | N/A |
| QvQ-72B-Preview | 2024-12-25 | 32,768 | 32,768 | N/A | N/A | N/A | N/A | N/A | 0.703 | N/A |
| Qwen2.5 VL 72B Instruct | 2025-01-26 | 32,768 | 32,768 | N/A | N/A | N/A | N/A | N/A | 0.702 | N/A |
| Qwen2.5 VL 32B Instruct | 2025-02-28 | 32,768 | 32,768 | N/A | 0.784 | 0.822 | 0.915 | 0.688 | 0.700 | N/A |
| DeepSeek VL2 | 2024-12-13 | 129,280 | 129,280 | N/A | N/A | N/A | N/A | N/A | 0.511 | N/A |
| DeepSeek VL2 Tiny | 2024-12-13 | 129,280 | 129,280 | N/A | N/A | N/A | N/A | N/A | 0.407 | N/A |
| DeepSeek VL2 Small | 2024-12-13 | 129,280 | 129,280 | N/A | N/A | N/A | N/A | N/A | 0.480 | N/A |
| DeepSeek-V2.5 | 2024-05-08 | 8,192 | 8,192 | N/A | 0.804 | 0.747 | 0.890 | N/A | N/A | N/A |
| Grok-1.5V | 2024-04-12 | 128,000 | 128,000 | N/A | N/A | N/A | N/A | N/A | 0.536 | N/A |
| IBM Granite 4.0 Tiny Preview | 2025-05-02 | 128,000 | 128,000 | N/A | 0.604 | N/A | 0.824 | N/A | N/A | N/A |
| Granite 3.3 8B Instruct | 2025-04-16 | 128,000 | 128,000 | N/A | 0.655 | N/A | 0.897 | N/A | N/A | 0.812 |
| Granite 3.3 8B Base | 2025-04-16 | 128,000 | 128,000 | N/A | 0.639 | N/A | 0.897 | N/A | N/A | 0.812 |
| Llama 3.1 Nemotron 70B Instruct | 2024-10-01 | 128,000 | 4,000 | N/A | 0.802 | N/A | N/A | N/A | N/A | N/A |
| Mistral NeMo Instruct | 2024-07-18 | 128,000 | 128,000 | N/A | 0.680 | N/A | N/A | N/A | N/A | N/A |
| Pixtral Large | 2024-11-18 | 128,000 | 128,000 | N/A | N/A | N/A | N/A | N/A | 0.640 | N/A |
| Ministral 8B Instruct | 2024-10-16 | 128,000 | 128,000 | N/A | 0.650 | 0.545 | 0.348 | N/A | N/A | N/A |
| Pixtral-12B | 2024-09-17 | 128,000 | 8,192 | N/A | 0.692 | 0.481 | 0.720 | N/A | 0.525 | N/A |
| Codestral-22B | 2024-05-29 | 32,768 | 32,768 | N/A | N/A | N/A | 0.811 | N/A | N/A | N/A |
| Mistral Small | 2024-09-17 | 32,768 | 32,768 | N/A | N/A | N/A | N/A | N/A | N/A | N/A |
| Mistral Large 2 | 2024-07-24 | 128,000 | 128,000 | N/A | 0.840 | N/A | 0.920 | N/A | N/A | N/A |

---

<div align="center">
Built with 💙 by the AI community, for the AI community.<br>
Star this repo if you find it useful!
</div>
