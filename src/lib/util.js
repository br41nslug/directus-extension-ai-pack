export async function getSetting(service, field, override) {
    if (override) return override;

    const found = await service
        .readSingleton({ fields: [field] })
        .catch(() => false);

    return !found ? null : found[field];
}