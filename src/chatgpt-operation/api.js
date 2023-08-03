import { Configuration, OpenAIApi } from "openai";

import { defineOperationApi } from "@directus/extensions-sdk";
import { getSetting } from "../lib/util";
import { openAIField } from "../configuration/fields";

export default defineOperationApi({
	id: "chatgpt-operation",
	handler: async (
		{
			messages,
			api_key,
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
		const configuration = new Configuration({ apiKey });
		const openai = new OpenAIApi(configuration);

		try {
			const completion = await openai.createChatCompletion({
				model: "gpt-3.5-turbo",
				messages: JSON.parse(messages),
				temperature,
				max_tokens,
				top_p,
				frequency_penalty,
				presence_penalty,
			});
			const response = completion.data.choices[0].message.content;

			return {
				response: response,
				usage: completion.data.usage,
				finish_reason: completion.data.choices[0].finish_reason,
			};
		} catch (err) {
			throw err;
		}
	},
});
