import { defineOperationApp } from '@directus/extensions-sdk';
import { STABILITY_ENGINES } from '../lib/constants.js';


export default defineOperationApp({
	id: 'stable-diffusion-operation',
	name: 'Stable Diffusion Image Generator',
	icon: 'image',
	description: 'Stable Diffusion Image Generator',
	overview: ({ prompt, engine }) => ([
		{
			label: 'Prompt',
			text: prompt,
		},
		{
			label: 'Engine',
			text: engine,
		},
	]),
	options: [
		{
			field: 'prompt',
			name: 'Prompt',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input',
			},
		},
		{
			field: "width",
			name: "Width",
			type: "integer",
			meta: {
				width: 'half',
				interface: 'slider',
				options: {
					minValue: 512,
					maxValue: 1024,
					stepInterval: 64,
					alwaysShowValue: true
				}
			},
			schema: {
				default_value: 512
			},
		},
		{
			field: "height",
			name: "Height",
			type: "integer",
			meta: {
				width: 'half',
				interface: 'slider',
				options: {
					minValue: 512,
					maxValue: 1024,
					stepInterval: 64,
					alwaysShowValue: true
				}
			},
			schema: {
				default_value: 512
			},
		},
		{
			field: "cfg_scale",
			name: "CFG Scale",
			type: "integer",
			meta: {
				width: 'half',
				interface: 'slider',
				options: {
					minValue: 0,
					maxValue: 20,
					stepInterval: 1,
					alwaysShowValue: true
				}
			},
			schema: {
				default_value: 7
			},
		},
		{
			field: "steps",
			name: "Steps",
			type: "integer",
			meta: {
				width: 'half',
				interface: 'slider',
				options: {
					minValue: 10,
					maxValue: 150,
					stepInterval: 1,
					alwaysShowValue: true
				}
			},
			schema: {
				default_value: 50
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
			name: 'OpenAI API Key Override',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input',
				special: null,
				options: { masked: true },
			},
		},
	],
});
