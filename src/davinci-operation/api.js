import { defineOperationApi } from '@directus/extensions-sdk';
import { OpenAI } from "openai";
import { openAIField } from '../configuration/fields';
import { getSetting } from '../lib/util';

export default defineOperationApi({
    id: 'davinci-operation',
    handler: async ({ text, api_key, temperature=0.5, max_tokens=2048, top_p=1, frequency_penalty=0, presence_penalty=0 }, { services, database, getSchema }) => {
        const { SettingsService } = services;
        const schema = await getSchema();
        const settings = new SettingsService({ schema, knex: database });

        const apiKey = await getSetting(settings, openAIField.field, api_key);
        const openai = new OpenAI({ apiKey });
        
        const response = await openai.completions.create({
            model: "text-davinci-003",
            prompt: text,
            temperature,
            max_tokens,
            top_p,
            frequency_penalty,
            presence_penalty
        });
        return { response: response.data.choices[0].text };
    },
});