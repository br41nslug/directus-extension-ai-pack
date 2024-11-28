import { OpenAI } from "openai";
import { defineOperationApi } from "@directus/extensions-sdk";
import { getSetting } from "../lib/util";
import { openAIField, gptModelField, gptDefaultModel } from "../configuration/fields";

export default defineOperationApi({
    id: "chatgpt-operation",
    handler: async (
        {
            messages,
            api_key,
            gpt_model,
            temperature = 0.5,
            max_tokens = null,
            top_p = 1,
            frequency_penalty = 0,
            presence_penalty = 0,
        },
        { services, database, getSchema }
    ) => {
        const { SettingsService } = services;
        const schema = await getSchema();
        const settings = new SettingsService({ schema, knex: database });
    
        const apiKey = await getSetting(settings, openAIField.field, api_key);
        const model = await getSetting(settings, gptModelField.field, gpt_model) ?? gptDefaultModel;
    
        const openai = new OpenAI({ apiKey });

        try {
            const completion = await openai.chat.completions.create({
                model,
                messages: JSON.parse(messages),
                temperature,
                max_tokens,
                top_p,
                frequency_penalty,
                presence_penalty,
            });

            return {
                response: completion.choices[0].message.content,
                usage: completion.usage,
                finish_reason: completion.choices[0].finish_reason,
                model: completion.model
            };
        } catch (err) {
            throw err;
        }
    },
});