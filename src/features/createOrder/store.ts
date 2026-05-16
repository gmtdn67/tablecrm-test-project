import { create } from "zustand"
import { Contragent } from "@/entities/Contragent/model/types/contragent"

type DictionaryItem = {
    id: number
    name: string
}

type OrderStore = {
    warehouse: DictionaryItem | null
    organization: DictionaryItem | null
    paybox: DictionaryItem | null
    priceType: DictionaryItem | null
    contragent: Contragent | null

    setWarehouse: (id: DictionaryItem | null) => void
    setOrganization: (id: DictionaryItem | null) => void
    setPaybox: (id: DictionaryItem | null) => void
    setPriceType: (id: DictionaryItem | null) => void
    setContragent: (contragent: Contragent | null) => void
}

export const useOrderStore = create<OrderStore>((set) => ({
    warehouse: null,
    organization:  null,
    paybox: null,
    priceType: null,
    contragent: null,

    setWarehouse: (warehouse) => set({warehouse}),
    setOrganization: (organization) => set({organization}),
    setPaybox: (paybox) => set({paybox}),
    setPriceType: (priceType) => set({priceType}),
    setContragent: (contragent) => set({contragent}),
}))