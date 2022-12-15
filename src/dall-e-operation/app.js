export default {
	id: 'dall-e-text2img',
	name: 'DALL-E Image Generator',
	icon: 'box',
	description: 'DALL-E Image Generator!',
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
				interface: 'input',
			},
		},
	],
};
