import { defineOperationApp } from '@directus/extensions-sdk';

export default defineOperationApp({
	id: 'davinci-operation',
	name: 'Davinci Text Generator',
	icon: 'textsms',
	description: 'Davinci Text Generator!',
	overview: ({ text }) => [
		{
			label: 'Prompt',
			text: text,
		},
	],
	options: [
		{
			field: 'text',
			name: 'Prompt',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input',
			},
		},
		{
			field: 'temperature',
			name: 'Temperature',
			type: 'float',
			schema: {
				default_value: 0.5,
			},
			meta: {
				field: 'temperature',
				special: null,
				interface: 'slider',
				options: {
					minValue: 0,
					maxValue: 0,
					stepInterval: 0.01,
					alwaysShowValue: true,
				},
				width: 'half',
				group: 'advanced',
			},
		},
		{
			field: 'max_tokens',
			name: 'Maximum Length',
			type: 'integer',
			schema: {
				default_value: 2048,
			},
			meta: {
				field: 'max_tokens',
				special: null,
				interface: 'slider',
				options: {
					minValue: 1,
					maxValue: 4000,
					stepInterval: 1,
					alwaysShowValue: true,
				},
				width: 'half',
				group: 'advanced',
			},
		},
		{
			field: 'top_p',
			name: 'Top P',
			type: 'float',
			schema: {
				default_value: 1,
			},
			meta: {
				field: 'top_p',
				special: null,
				interface: 'slider',
				options: {
					minValue: 0,
					maxValue: 1,
					stepInterval: 0.01,
					alwaysShowValue: true,
				},
				width: 'half',
				group: 'advanced',
			},
		},
		{
			field: 'frequency_penalty',
			name: 'Frequency Penalty',
			type: 'float',
			schema: {
				default_value: 0,
			},
			meta: {
				field: 'frequency_penalty',
				special: null,
				interface: 'slider',
				options: {
					minValue: 0,
					maxValue: 2,
					stepInterval: 0.01,
					alwaysShowValue: true,
				},
				width: 'half',
				group: 'advanced',
			},
		},
		{
			field: 'presence_penalty',
			name: 'Presence Penalty',
			type: 'float',
			schema: {
				default_value: 0,
			},
			meta: {
				field: 'presence_penalty',
				special: null,
				interface: 'slider',
				options: {
					minValue: 0,
					maxValue: 2,
					stepInterval: 0.01,
					alwaysShowValue: true,
				},
				width: 'half',
				group: 'advanced',
			},
		},
		{
			field: 'api_key',
			name: 'OpenAI API Key',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input',
				special: null,
				options: { 
					masked: true,
                    placeholder: 'Use globally set key...',
				},
				group: 'advanced',
			},
		},
		{
			field: 'advanced',
			name: 'Advanced Settings',
			type: 'alias',
			meta: {
				field: 'advanced',
				special: ['alias', 'no-data', 'group'],
				interface: 'group-detail',
				options: {
					start: 'closed',
				},
				width: 'full',
			},
		},
	],
});
