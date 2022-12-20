import { groupField, openAIField, stabilityAIField } from "./fields";
import { defineHook } from "@directus/extensions-sdk";
/**
 * Ensure the required API Key fields exist in settings
 */
export default defineHook(({ init }, { services, database, getSchema }) => {
    const { FieldsService } = services;
    init('routes.custom.after', async () => {
		const schema = await getSchema();
        const service = new FieldsService({ knex: database, schema });
        await ensureField(groupField, service);
        await ensureField(openAIField, service);
        await ensureField(stabilityAIField, service);
    });
    async function ensureField(field, service) {
        const found = await service.readOne(field.collection, field.field).catch(() => false);
        if (!found) await service.createField(field.collection, field);
    }
});
