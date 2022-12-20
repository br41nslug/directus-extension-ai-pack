
export async function getSetting(service, field, override) {
    if (override) return override;
    const found = await service.readSingleton({ fields: [field] }).catch(() => false);
    if (!found) return null;
    return found[field];
}