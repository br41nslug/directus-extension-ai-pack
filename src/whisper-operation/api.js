import { Configuration, OpenAIApi } from "openai";
import { openAIField } from "../configuration/fields";
import { getSetting } from "../lib/util";

export default {
	id: 'whisper-operation',
	handler: async (
		{ asset_id, api_key, translate=false, prompt=undefined, temperature=0 }, 
		{ services, database, getSchema }
	) => {
		const { FilesService, SettingsService, AssetsService } = services;
		const schema = await getSchema();
		const settings = new SettingsService({ schema, knex: database });
		const files = new FilesService({ schema, knex: database });
		const assets = new AssetsService({ schema, knex: database })
		// open api
		const apiKey = await getSetting(settings, openAIField.field, api_key);
		const configuration = new Configuration({ apiKey });
		const openai = new OpenAIApi(configuration);
		prompt = prompt === 'undefined' ? undefined : prompt;
		// check the file for compatibility
		const file = await files.readOne(asset_id);
		if (!file) {
			throw new Error('file not found');
		}
		if (file.filesize > 25000000) { 
			throw new Error('file is more than the 25mb limit!');
		}
		const allowedMimes = ['audio/mpeg', 'video/mpeg', 'video/mp4', 'audio/x-wav', 'video/webm', 'audio/webm'];
		if (!allowedMimes.includes(file.type)) {
			throw new Error(`mime "${file.type}" is allowed (${allowedMimes.join(', ')})`);
		}
		const allowedExtensions = ['mp3', 'mp4', 'mpeg', 'mpga', 'm4a', 'wav', 'webm'];
		if (!allowedExtensions.some(ext => file.filename_download?.endsWith(ext))) {
			throw new Error(`extension is not one of ${allowedExtensions.join(', ')}`);
		}
		// transcribe audio
		const audio = await assets.getAsset(asset_id, {});
		if (translate) {
			const response = await openai.createTranslation(
				audio.stream,
				"whisper-1",
				prompt,
				'json',
				temperature
			);
			return { response: response.data.text };
		} else {
			const response = await openai.createTranscription(
				audio.stream,
				"whisper-1",
				prompt,
				'json',
				temperature
			);
			return { response: response.data.text };
		}
	},
};
