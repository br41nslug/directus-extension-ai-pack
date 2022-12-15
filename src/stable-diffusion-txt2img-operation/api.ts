import { defineOperationApi } from '@directus/extensions-sdk';
import { randomUUID } from 'crypto';
import { StabilityClient } from './client';

export type Options = {
	text: string;
	engine: string;
	api_key: string;
};

export default defineOperationApi<Options>({
	id: 'stability-text2img',
	handler: async ({ text, engine, api_key }: Options, { services, database, getSchema }: any) => {
		const { FilesService } = services;
		const stability = new StabilityClient(api_key, engine);
		const response = await stability.txt2img(text);
		const files = new FilesService({ schema: await getSchema(), knex: database, accountability: { admin: true } });
		const id = await files.uploadOne(response.body, {
			type: 'image/png',
			filename_download: randomUUID()+'.png', 
			storage: 'local',
		});
		return { id };
	},
});
