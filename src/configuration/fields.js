export const groupField = {
    "collection": "directus_settings",
    "field": "ai_pack_config",
    "type": "alias",
    "schema": null,
    "meta": {
        "collection": "directus_settings",
        "field": "ai_pack_config",
        "special": [ "alias", "no-data", "group" ],
        "interface": "group-detail",
        "options": { "headerIcon": "rocket_launch" },
        "display": null,
        "display_options": null,
        "readonly": false,
        "hidden": false,
        "sort": null,
        "width": "full",
        "translations": null,
        "note": null,
        "conditions": null,
        "required": false,
        "group": null,
        "validation": null,
        "validation_message": null
    }
};

export const gptModelChoices = [
    {
        "text": "GPT-4o",
        "value": "gpt-4o"
    },
    {
        "text": "GPT-4o mini",
        "value": "gpt-4o-mini"
    },
    {
        "text": "GPT-4 Turbo",
        "value": "gpt-4-turbo-preview"
    },
    {
        "text": "GPT-4",
        "value": "gpt-4"
    },
    {
        "text": "GPT-3.5 Turbo",
        "value": "gpt-3.5-turbo"
    },
    {
        "text": "GPT-3.5 Turbo 16K",
        "value": "gpt-3.5-turbo-16k"
    }
];

export const gptDefaultModel = "gpt-4o";

export const gptModelField = {
    "collection": "directus_settings",
    "field": "Default_GPT_Model",
    "type": "string",
    "schema": {
        "name": "Default_GPT_Model",
        "table": "directus_settings",
        "data_type": "varchar",
        "default_value": gptDefaultModel,
        "max_length": 255,
        "numeric_precision": null,
        "numeric_scale": null,
        "is_generated": false,
        "generation_expression": null,
        "is_nullable": true,
        "is_unique": false,
        "is_primary_key": false,
        "has_auto_increment": false,
        "foreign_key_column": null,
        "foreign_key_table": null
    },
    "meta": {
        "collection": "directus_settings",
        "field": "Default_GPT_Model",
        "special": null,
        "interface": "select-dropdown",
        "options": {
            "choices": gptModelChoices,
        },
        "display": "formatted-value",
        "display_options": null,
        "readonly": false,
        "hidden": false,
        "sort": 1,
        "width": "full",
        "translations": null,
        "note": "Select the default GPT model to use for chat completions",
        "conditions": null,
        "required": false,
        "group": groupField.field,
        "validation": null,
        "validation_message": null
    }
};

export const openAIField = {
    "collection": "directus_settings",
    "field": "Open_AI_API_Key",
    "type": "string",
    "schema": {
        "name": "Open_AI_API_Key",
        "table": "directus_settings",
        "data_type": "varchar",
        "default_value": null,
        "max_length": 255,
        "numeric_precision": null,
        "numeric_scale": null,
        "is_generated": false,
        "generation_expression": null,
        "is_nullable": true,
        "is_unique": false,
        "is_primary_key": false,
        "has_auto_increment": false,
        "foreign_key_column": null,
        "foreign_key_table": null
    },
    "meta": {
        "collection": "directus_settings",
        "field": "Open_AI_API_Key",
        "special": null,
        "interface": "input",
        "options": { "masked": true },
        "display": null,
        "display_options": null,
        "readonly": false,
        "hidden": false,
        "sort": 2,
        "width": "full",
        "translations": null,
        "note": null,
        "conditions": null,
        "required": false,
        "group": groupField.field,
        "validation": null,
        "validation_message": null
    }
};

export const stabilityAIField = {
    "collection": "directus_settings",
    "field": "Stability_AI_API_Key",
    "type": "string",
    "schema": {
        "name": "Stability_AI_API_Key",
        "table": "directus_settings",
        "data_type": "varchar",
        "default_value": null,
        "max_length": 255,
        "numeric_precision": null,
        "numeric_scale": null,
        "is_generated": false,
        "generation_expression": null,
        "is_nullable": true,
        "is_unique": false,
        "is_primary_key": false,
        "has_auto_increment": false,
        "foreign_key_column": null,
        "foreign_key_table": null
    },
    "meta": {
        "collection": "directus_settings",
        "field": "Stability_AI_API_Key",
        "special": null,
        "interface": "input",
        "options": { "masked": true },
        "display": null,
        "display_options": null,
        "readonly": false,
        "hidden": false,
        "sort": 3,
        "width": "full",
        "translations": null,
        "note": null,
        "conditions": null,
        "required": false,
        "group": groupField.field,
        "validation": null,
        "validation_message": null
    }
};