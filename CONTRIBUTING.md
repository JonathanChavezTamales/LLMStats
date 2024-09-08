# Models

Model ids should be the full version of the model, i.e. gpt-4-0125, this should be unique.
Name should be the short version of the model, i.e. gpt-4, this can be repeated for multiple models.

Canonical model id should be set if there's another model that is the main version of the model.
If the model is the main version, then canonical model id should be null.

If a model is a fine-tuned version of another model, the fine_tuned_from_model_id should be set to the id of the model it was fine-tuned from.
If the model is not a fine-tuned version, then fine_tuned_from_model_id should be null.
