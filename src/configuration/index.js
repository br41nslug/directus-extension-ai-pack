import { groupField, openAIField, stabilityAIField } from "./fields";

export default ({ init }, { services, database, getSchema }) => {
    const { FieldsService } = services;
    async function ensureField(field, service) {
        const found = await service.readOne(field.collection, field.field)
			.catch(e => false);
        if (!found) await service.createField(field.collection, field);
    }
    init('routes.custom.after', async () => {
		const schema = await getSchema();
        const service = new FieldsService({ knex: database, schema });
		console.log(schema.collections);
        await ensureField(groupField, service);
        await ensureField(openAIField, service);
        await ensureField(stabilityAIField, service);
    })
};
