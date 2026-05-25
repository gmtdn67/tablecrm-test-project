import { CartItem }
from "../model/types"

type Params = {
  cart: CartItem[]
  organization: any
  warehouse: any
  paybox: any
  contragent: any
  status: boolean
}

export function buildCreateSalePayload({
  cart,
  organization,
  warehouse,
  paybox,
  contragent,
  status,
}: Params) {
  const total =
    cart.reduce(
      (acc, item) =>
        acc +
        item.price *
          item.quantity,

      0
    )

  return [
    {
      priority: 0,
      dated: Math.floor(
        Date.now() / 1000
      ),
      operation: "Заказ",
      tax_included: true,
      tax_active: true,
      goods: cart.map(
        (item) => ({
          price: item.price,
          quantity:
            item.quantity,
          unit: 116,
          discount: 0,
          sum_discounted: 0,
          nomenclature:
            item.product.id,
        })
      ),
      settings: {},
      warehouse:
        warehouse.id,
      contragent:
        contragent.id,
      paybox: paybox.id,
      organization:
        organization.id,
      status,
      paid_rubles: total,
      paid_lt: 0,
      ...(contragent
        ?.loyality_card_id && {
        loyality_card_id:
          contragent.loyality_card_id,
      }),
    },
  ]
}