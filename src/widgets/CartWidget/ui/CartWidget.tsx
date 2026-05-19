"use client"

import { useOrderStore }
from "@/features/createOrder/store"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/shadcn/card"

import { CartItemCard }
from "@/shared/ui/CartItemCard"

export function CartWidget() {
  const {
    cart,

    increaseQuantity,

    decreaseQuantity,

    removeFromCart,

    changePrice,
  } = useOrderStore()

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          8. Корзина
        </CardTitle>

        <CardDescription>
          Настройте товары заказа
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        {cart.length === 0 && (
          <div
            className="
              text-sm
              text-muted-foreground
            "
          >
            Корзина пуста
          </div>
        )}

        {cart.map((item) => (
          <CartItemCard
            key={item.product.id}
            item={item}
            onIncrease={() =>
              increaseQuantity(
                item.product.id
              )
            }
            onDecrease={() =>
              decreaseQuantity(
                item.product.id
              )
            }
            onRemove={() =>
              removeFromCart(
                item.product.id
              )
            }
            onPriceChange={(
              price
            ) =>
              changePrice(
                item.product.id,
                price
              )
            }
          />
        ))}
      </CardContent>
    </Card>
  )
}