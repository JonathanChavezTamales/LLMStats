# Contributing to LLM Stats

Thank you for your interest in contributing. This guide outlines the process for updating and adding information.

## Table of Contents

- [General Guidelines](#general-guidelines)
- [Models](#models-🤖)
  - [Updating an Existing Model](#updating-an-existing-model)
  - [Adding a New Model](#adding-a-new-model)
- [Benchmark Results](#benchmark-results-📊)
  - [Adding and Updating Existing Benchmark Results](#adding-and-updating-existing-benchmark-results)
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

1. Locate the model in `models/[organization]/[model_name]/model.json`
2. Update the relevant fields with new information.
3. Ensure all changes are accurate and properly sourced in the fields or in the Pull Request.

### Adding a New Model

Location: `models/[organization]/[model_name]/model.jsonl`

1. Create a new JSON object that matches the `schemas/models-schema.json` schema.

## Benchmark Results 📊

### Adding and Updating Existing Benchmark Results

1. Locate the benchmark in the appropriate `models/[organization]/[model_name]/model.json` file
2. Update the relevant fields with new information
3. Ensure the `source_link` is reliable and up-to-date

## Providers 🏢

### Updating an Existing Provider

1. Locate the provider in the appropriate `providers/[provider_name]/provider.json` file
2. Update the relevant fields with new information

### Adding a New Provider

Location: `providers/[provider_name]/provider.json`

1. Create a new JSON object that matches the `schemas/providers-schema.json` schema.

### Adding and Updating Provider Models

1. Locate the model in the appropriate `providers/[provider_name]/provider.json` file
2. Update the relevant fields with new information.

## Submitting Your Contribution 🚀

1. Fork the repository
2. Make your changes in a new branch
3. Submit a pull request with a clear description of your changes

Optionally you can run `node schemas/validator.js` to validate your changes against the schema. This will be run automatically on your Pull Request as well.

For an example of a well-structured pull request, see [this example](https://github.com/JonathanChavezTamales/llm-leaderboard/pull/1).
