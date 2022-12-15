import { defineOperationApp } from '@directus/extensions-sdk';
import { STABILITY_ENGINES } from './constants';
import { Options } from './api';


export default defineOperationApp({
	id: 'stability-text2img',
	name: 'Stable Diffusion Image Generator',
	icon: 'image',
	description: 'Stable Diffusion Image Generator',
	overview: ({ text, engine }: Options) => [
		{
			label: 'Text',
			text: text,
		},
		{
			label: 'Engine',
			text: engine,
		},
	],
	options: [
		{
			field: 'text',
			name: 'Text',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input',
			},
		},
		{
			field: 'engine',
			name: 'Engine',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'select-dropdown',
				options: {
					choices: STABILITY_ENGINES
				},
			},
		},
		{
			field: 'api_key',
			name: 'OpenAI API Key',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input',
			},
		},
	],
});
