export function normalizeOrganization(
  item: unknown
) {
    if (item) {
        return {
            id: item.id,
            name: item.short_name,
        }
}
}