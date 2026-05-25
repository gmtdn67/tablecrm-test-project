import { Product } from "@/entities/Product/model/types/types"

export type CartItem = {
    product: Product
    quantity: number
    price: number
}

export type CreateSalePayload = {
  priority: number
  dated: number
  operation: string
  tax_included: boolean
  tax_active: boolean

  goods: {
    price: number
    quantity: number
    unit: number
    discount: number
    sum_discounted: number
    nomenclature: number
  }[]

  settings: Record<string, unknown>
  warehouse: number
  contragent: number
  paybox: number
  organization: number
  status: boolean
  paid_rubles: number
  paid_lt: number
  loyality_card_id?: number
}