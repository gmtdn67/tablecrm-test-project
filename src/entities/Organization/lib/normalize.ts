import { Organization } from "../model/types/organization";

export function normalizeOrganization(
  item: Organization
) {
    if (item) {
        return {
            id: item.id,
            name: item.short_name,
        }
}
}