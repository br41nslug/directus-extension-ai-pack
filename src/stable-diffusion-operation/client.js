import fetch from 'node-fetch';

export class StabilityClient {
    constructor(api_key, engine, api_url=undefined) {
        this.api_url = api_url || 'https://api.stability.ai'
        this.api_key = api_key;
        this.engine = engine;
    }
    async txt2img(prompt, options={}) {
        const url = `${this.api_url}/v1/generation/${this.engine}/text-to-image`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'image/png',
                Authorization: 'Bearer ' + this.api_key,
            },
            body: JSON.stringify({
                clip_guidance_preset: 'FAST_BLUE',
                samples: 1,
                width: options.width ?? 512, 
                height: options.height ?? 512,
                cfg_scale: options.cfg_scale ?? 7,
                steps: options.steps ?? 50,
                text_prompts: [
                    {
                        text: prompt,
                        weight: 1
                    }
                ],
            })
        });

        if (!response.ok) {
            throw new Error(`Non-200 response: ${await response.text()}`);
        }

        return response;
    }
}
