import { create } from "zustand"
import { Contragent } from "@/entities/Contragent/model/types/contragent"

type OrderStore = {
    warehouseId: number | null
    organizationId: number | null
    payboxId: number | null
    priceTypeId: number | null
    contragent: Contragent | null

    setWarehouseId: (id: number) => void
    setOrganizationId: (id: number) => void
    setPayboxId: (id: number) => void
    setPriceTypeId: (id: number) => void
    setContragent: (contragent: Contragent | null) => void
}

export const useOrderStore = create<OrderStore>((set) => ({
    warehouseId: null,
    organizationId:  null,
    payboxId: null,
    priceTypeId: null,
    contragent: null,

    setWarehouseId: (id) => set({warehouseId: id}),
    setOrganizationId: (id) => set({organizationId: id}),
    setPayboxId: (id) => set({payboxId: id}),
    setPriceTypeId: (id) => set({priceTypeId: id}),
    setContragent: (contragent) => set({contragent}),
}))