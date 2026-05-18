"use client"

import { useMemo }
from "react"

import { useOrderStore }
from "@/features/createOrder/store"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/shadcn/card"

import { Button }
from "@/shared/ui/shadcn/button"

import { CartItemCard }
from "@/shared/ui/CartItemCard"

export function StickyCartWidget() {
  const {
    cart,

    increaseQuantity,

    decreaseQuantity,

    removeFromCart,
  } = useOrderStore()

  const total =
    useMemo(() => {
      return cart.reduce(
        (acc, item) =>
          acc +
          item.product.price *
            item.quantity,
        0
      )
    }, [cart])

  const totalItems =
    useMemo(() => {
      return cart.reduce(
        (acc, item) =>
          acc + item.quantity,
        0
      )
    }, [cart])

  return (
    <div
      className="
        sticky bottom-0 z-50
        mt-4
      "
    >
      <Card
        className="
          border bg-background/95
          shadow-2xl backdrop-blur
        "
      >
        <CardHeader>
          <CardTitle>
            Корзина (
            {totalItems})
          </CardTitle>
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

          {cart.length > 0 && (
            <>
              <div
                className="
                  max-h-[300px]
                  space-y-2
                  overflow-y-auto
                "
              >
                {cart.map((item) => (
                  <CartItemCard
                    key={
                      item.product.id
                    }
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
                  />
                ))}
              </div>

              <div
                className="
                  flex items-center
                  justify-between
                  border-t pt-3
                "
              >
                <span
                  className="
                    font-medium
                  "
                >
                  Итого
                </span>

                <span
                  className="
                    text-lg font-bold
                  "
                >
                  {total} ₽
                </span>
              </div>

              <div
                className="
                  flex flex-col gap-2
                "
              >
                <Button>
                  Создать продажу
                </Button>

                <Button
                  variant="secondary"
                >
                  Создать и провести
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}