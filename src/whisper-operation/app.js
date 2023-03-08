export default {
	id: 'whisper-operation',
	name: 'Whisper Speech to Text',
	icon: 'mic',
	description: 'Whisper Speech to Text',
	overview: ({ asset_id, translate=false, prompt='' }) => [
		(prompt ? {
			label: 'Prompt',
			text: prompt,
		} : {}),
		{
			label: 'File',
			text: asset_id,
		},
		{
			label: 'Translate to EN',
			text: translate ? 'Yes' : 'No',
		},
	],
	options: [
		{
			field: 'asset_id',
			name: 'File',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input',
			},
		},
		{
			field: 'translate',
			name: 'Translate to EN',
			type: 'boolean',
			meta: {
				width: 'full',
				interface: 'toggle',
			},
		},
		{
			field: 'prompt',
			name: 'Prompt',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input',
				group: "advanced",
			},
		},
		{
			field: "temperature",
			name: "Temperature",
			type: "float",
			schema: {
				default_value: 0,
			},
			meta: {
				field: "temperature",
				special: null,
				interface: "slider",
				options: {
					minValue: 0,
					maxValue: 1,
					stepInterval: 0.01,
					alwaysShowValue: true,
				},
				group: "advanced",
			},
		},
		{
			field: "api_key",
			name: "OpenAI API Key",
			type: "string",
			meta: {
				width: "full",
				interface: "input",
				special: null,
				options: {
					masked: true,
					placeholder: "Use globally set key...",
				},
				group: "advanced",
			},
		},
		{
			field: "advanced",
			name: "Advanced Settings",
			type: "alias",
			meta: {
				field: "advanced",
				special: ["alias", "no-data", "group"],
				interface: "group-detail",
				options: {
					start: "closed",
				},
				width: "full",
			},
		},
	],
};
