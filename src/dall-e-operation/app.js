export default {
	id: 'dall-e-operation',
	name: 'DALL-E Image Generator',
	icon: 'image',
	description: 'DALL-E Image Generator!',
	overview: ({ text, save_assets=true }) => [
		{
			label: 'Prompt',
			text: text,
		},
		{
			label: 'Save To File Library',
			text: save_assets ? 'Yes' : 'No',
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
            field: 'save_assets',
			name: 'Save To File Library',
            type: 'boolean',
			schema: {
				default_value: true,
			},
            meta: {
				field: 'save_assets',
                special: [ 'cast-boolean' ],
                interface: "boolean",
                options: null,
            }
        },
		{
			field: 'amount',
			name: '# of pictures',
			type: 'integer',
			schema: {
				default_value: 1,
			},
			meta: {
				field: 'amount',
				special: null,
				interface: 'slider',
				options: {
					minValue: 1,
					maxValue: 10,
					stepInterval: 1,
					alwaysShowValue: true,
				},
				width: 'half',
				group: 'advanced',
			},
		},
		{
			field: 'size',
			name: 'Image Size',
			type: 'string',
			schema: {
				default_value: '1024x1024',
			},
			meta: {
				field: 'size',
				special: null,
				interface: 'select-dropdown',
				options: {
					choices: [
						{
							text: '256x256',
							value: '256x256',
						},
						{
							text: '512x512',
							value: '512x512',
						},
						{
							text: '1024x1024',
							value: '1024x1024',
						},
					],
				},
				width: 'half',
				group: 'advanced',
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
};
