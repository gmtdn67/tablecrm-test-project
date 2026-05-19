"use client"

import { useMemo }
from "react"

import { useOrderStore }
from "@/features/createOrder/store"

import { Button }
from "@/shared/ui/shadcn/button"

export function StickySummaryWidget() {
  const cart =
    useOrderStore(
      (state) => state.cart
    )

  const total =
    useMemo(() => {
      return cart.reduce(
        (acc, item) =>
          acc +
          item.price *
            item.quantity,
        0
      )
    }, [cart])

  return (
    <div
      className="
        sticky bottom-0 left-0
        z-50 border-t
        bg-background/95
        backdrop-blur
      "
    >
      <div
        className="
          flex items-center
          justify-between gap-4
          p-4
        "
      >
        <div>
          <p
            className="
              text-sm
              text-muted-foreground
            "
          >
            Итого
          </p>

          <p
            className="
              text-2xl font-bold
            "
          >
            {total} ₽
          </p>
        </div>

        <Button
          disabled={
            cart.length === 0
          }
        >
          Создать продажу
        </Button>
      </div>
    </div>
  )
}