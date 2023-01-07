# Directus AI Operations Bundle

A small bundle of Flow Operations which enable interaction with the [OpenAI](https://beta.openai.com/overview) and [Stability](https://stability.ai/) API's.

> Note: To use these you will need an API Key for the respective services.

> Tested with Directus 9.22.1

## Installation

The package is published to npm:
`npm install directus-extension-ai-operation-bundle`

**Manual Installation**
- Download or fork the repository
- Install the requirements\
  `npm install`
- Build the extension\
  `npm run build`
- Move the result to your extension folder\
  `mv dist extensions/directus-extension-ai-operation-bundle`
- Restart your Directus instance

## Bundle Content

### Stable Diffusion Operation

This operation allow you generate images from text using the Stable Diffusion models with the [Stability.ai API](https://platform.stability.ai/).
![Demo](examples/stable-diffusion-demo.gif)

### DALL-E Operation

Similar to the Stable Diffusion operation this allows you to generate images from text but using the OpenAI DALL-E models instead with the [OpenAI API](https://beta.openai.com/docs/guides/images).
![Demo](examples/dall-e-demo.gif)

### GPT-3 Davinci Operation

This operation allows text completion using the OpenAI Davinci models with the [OpenAI API](https://beta.openai.com/docs/guides/completion/introduction).
![Demo](examples/davinci-demo.gif)


### Configuration Hook

This hook ensures the existence of API Key fields in the Directus Setting. These global settings will be used by the individual operations if not overridden in its local configuration.
![Global Configuration](examples/global-configuration.png)
