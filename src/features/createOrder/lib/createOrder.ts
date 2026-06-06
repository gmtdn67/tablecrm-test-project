import { toast }
from "sonner"

import { buildCreateSalePayload, Contragent, EntityWithId }
from "./buildCreateSalePayload"

import { createSaleRequest }
from "../api/createSale"
import { CartItem } from "../model/types"

type Params = {
  token: string
  cart: CartItem[]
  organization: EntityWithId
  warehouse: EntityWithId
  paybox: EntityWithId
  contragent: Contragent
  status: boolean
}

export async function createOrder({
  token,
  cart,
  organization,
  warehouse,
  paybox,
  contragent,
  status,
}: Params) {
  try {
    const payload =
      buildCreateSalePayload({
        cart,
        organization,
        warehouse,
        paybox,
        contragent,
        status,
      })

    await createSaleRequest(
      token,
      payload
    )

    toast.success(
      status
        ? "Продажа проведена"
        : "Продажа создана"
    )
  } catch (error) {
    console.error(error)

    toast.error(
      "Ошибка создания продажи"
    )

    throw error
  }
}