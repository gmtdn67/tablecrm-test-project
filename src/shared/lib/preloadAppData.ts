import { getContragents } from "@/entities/Contragent/api/api";
import { getOrganizations } from "@/entities/Organization/api/api";
import { getPayboxes } from "@/entities/Paybox/api/api";
import { getPriceTypes } from "@/entities/PriceType/api/api";
import { getWarehouses } from "@/entities/Warehouse/api/api";

export async function preloadAppData(token: string) {
    return Promise.all([
        getWarehouses(token),
        getOrganizations(token),
        getPayboxes(token),
        getPriceTypes(token),
        getContragents(token)
    ])
}