import { defineOperationApi } from '@directus/extensions-sdk';
import { randomUUID } from 'crypto';
import { StabilityClient } from './client';
import { stabilityAIField } from '../configuration/fields';
import { getSetting } from '../lib/util';

function getStorage(env) {
	if (env['STORAGE_LOCATIONS']) {
		const locations = String(env['STORAGE_LOCATIONS']);
		if (locations.includes(',')) return locations.split(',')[0];
		return locations;
	}
	return 'local';
}

export default defineOperationApi({
	id: 'stable-diffusion-operation',
	handler: async (
		{ prompt, engine='stable-diffusion-512-v2-1', api_key, width=512, height=512, cfg_scale=7, steps=50 }, 
		{ services, database, getSchema, env }
	) => {
		const { FilesService, SettingsService } = services;
		const schema = await getSchema();
		const settings = new SettingsService({ schema, knex: database });
		const files = new FilesService({ schema, knex: database });
		const storage = getStorage(env);

		const apiKey = await getSetting(settings, stabilityAIField.field, api_key);
		const stability = new StabilityClient(apiKey, engine);
		const response = await stability.txt2img(prompt, {
			width, height, cfg_scale, steps
		});
		const id = await files.uploadOne(response.body, {
			type: 'image/png',
			filename_download: randomUUID()+'.png', 
			storage,
		});
		return { id };
	},
});
