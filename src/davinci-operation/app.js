import { defineOperationApp } from '@directus/extensions-sdk';

export default defineOperationApp({
	id: 'davinci-operation',
	name: 'Davinci Text Generator',
	icon: 'textsms',
	description: 'Davinci Text Generator!',
	overview: ({ text }) => [
		{
			label: 'Text',
			text: text,
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
			field: 'api_key',
			name: 'OpenAI API Key',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input-hash',
				special: [ 'hash' ],
				options: { masked: true },
			},
		},
	],
});
