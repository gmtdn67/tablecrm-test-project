import { toast }
from "sonner"

import { buildCreateSalePayload }
from "./buildCreateSalePayload"

import { createSaleRequest }
from "../api/createSale"

type Params = {
  token: string
  cart: any[]
  organization: any
  warehouse: any
  paybox: any
  contragent: any
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