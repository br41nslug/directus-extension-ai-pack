import { defineOperationApi } from '@directus/extensions-sdk';
import { Configuration, OpenAIApi } from "openai";

export default defineOperationApi({
	id: 'davinci-operation',
	handler: async ({ text, api_key }) => {
		const configuration = new Configuration({ apiKey: api_key });
		const openai = new OpenAIApi(configuration);
		const response = await openai.createCompletion({
			model: "text-davinci-003",
			prompt: text,
			temperature: 0.5,
			max_tokens: 2048,
			top_p: 1,
			frequency_penalty: 0,
			presence_penalty: 0
		});
		return { response: response.data.choices[0].text };
	},
});
