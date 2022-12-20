import { defineOperationApi } from '@directus/extensions-sdk';
import { randomUUID } from 'crypto';
import { StabilityClient } from './client';

export default defineOperationApi({
	id: 'stable-diffusion-operation',
	handler: async (
		{ prompt, engine, api_key, width, height, cfg_scale, steps }, 
		{ services, database, getSchema }
	) => {
		const { FilesService } = services;
		const stability = new StabilityClient(api_key, engine);
		const response = await stability.txt2img(prompt, {
			// width, height, cfg_scale, steps
		});
		const files = new FilesService({ schema: await getSchema(), knex: database, accountability: { admin: true } });
		const id = await files.uploadOne(response.body, {
			type: 'image/png',
			filename_download: randomUUID()+'.png', 
			storage: 'local',
		});
		return { id };
	},
});
