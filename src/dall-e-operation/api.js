import { defineOperationApi } from '@directus/extensions-sdk';
import { Configuration, OpenAIApi } from "openai";

// add extra configuration
export default defineOperationApi({
	id: 'dall-e-operation',
	handler: async ({ text, api_key }, { services, database, getSchema }) => {
		const { FilesService } = services;
		console.log(`prompt: ${text}`);
		const configuration = new Configuration({ apiKey: api_key });
		const openai = new OpenAIApi(configuration);
		const response = await openai.createImage({
			prompt: text,
			n: 1,
			size: "1024x1024",
		});
		const url = response.data.data[0].url;
		console.log(`image url: ${url}`);
		const files = new FilesService({ schema: await getSchema(), knex: database, accountability: { admin: true } });
		const id = await files.importOne(url);
		console.log(`new id: ${id}`);
		return { url, id };
	},
});
