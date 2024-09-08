# Contributing to LLM Stats

Thank you for your interest in contributing. This guide outlines the process for updating and adding information.

## Table of Contents

- [General Guidelines](#general-guidelines)
- [Models](#models-🤖)
  - [Updating an Existing Model](#updating-an-existing-model)
  - [Adding a New Model](#adding-a-new-model)
- [Benchmark Results](#benchmark-results-📊)
  - [Updating Existing Benchmark Results](#updating-existing-benchmark-results)
  - [Adding New Benchmark Results](#adding-new-benchmark-results)
- [Providers](#providers-🏢)
  - [Updating an Existing Provider](#updating-an-existing-provider)
  - [Adding a New Provider](#adding-a-new-provider)
  - [Updating Provider Models](#updating-provider-models)
  - [Adding Provider Models](#adding-provider-models)
- [Submitting Your Contribution](#submitting-your-contribution-🚀)

## General Guidelines

1. Ensure data accuracy and provide authoritative references
2. Follow the existing file structure and naming conventions
3. Maintain consistent formatting and style
4. Submit one pull request per model or provider change

## Models 🤖

### Updating an Existing Model

1. Locate the model in `models/[organization]/[model_name]/model.jsonl`
2. Update the relevant fields with new information
3. Ensure all changes are accurate and properly sourced

### Adding a New Model

Location: `models/[organization]/[model_name]/model.jsonl`

1. Create a new JSON object with the following fields:
   - `model_id`: Full version (e.g., `gpt-4-0125-preview`)
   - `name`: Short version (e.g., `GPT-4`)
   - `organization`, `description`, `release_date`
   - `input_context_size`, `output_context_size`
   - `license`, `multimodal`, `web_hydrated`, `knowledge_cutoff`
   - `api_ref_link`, `playground_link`, `paper_link`
   - `scorecard_blog_link`, `repo_link`, `weights_link`
   - `param_count`, `training_tokens`
   - `canonical_model_id`: Set if there's a main version, else `null`
   - `fine_tuned_from_model_id`: Set if fine-tuned from another model, else `null`

## Benchmark Results 📊

### Updating Existing Benchmark Results

1. Locate the benchmark in the appropriate `qualitativemetrics.jsonl` file
2. Update the relevant fields with new information
3. Ensure the `source_link` is reliable and up-to-date

### Adding New Benchmark Results

Location: `models/[organization]/[model_name]/qualitativemetrics.jsonl`

1. Create a new JSON object for each metric with:
   - `model_id`, `dataset_name`, `score`
   - `is_self_reported`, `analysis_method`
   - `date_recorded`, `source_link`

## Providers 🏢

### Updating an Existing Provider

1. Locate the provider in the appropriate `provider.jsonl` file
2. Update the relevant fields with new information

### Adding a New Provider

Location: `providers/[provider_name]/provider.jsonl`

1. Create a new JSON object with:
   - `provider_id`, `name`, `website`

### Updating Provider Models

1. Locate the model in the appropriate `providermodels.jsonl` file
2. Update the relevant fields with new information

### Adding Provider Models

Location: `providers/[provider_name]/providermodels.jsonl`

1. Create a new JSON object for each model with:
   - `model_id`, `provider_id`
   - `price_per_input_token`, `price_per_output_token`
   - `throughput`, `latency`, `updated_at`

## Submitting Your Contribution 🚀

1. Fork the repository
2. Make your changes in a new branch
3. Submit a pull request with a clear description of your changes

For an example of a well-structured pull request, see [this example](https://github.com/JonathanChavezTamales/llm-stats/pull/1).
