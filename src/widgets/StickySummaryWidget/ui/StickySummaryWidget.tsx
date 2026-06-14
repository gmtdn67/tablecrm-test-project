"use client"

import { useMemo } from "react"
import { useOrderStore } from "@/features/createOrder/store"
import { Button } from "@/shared/ui/shadcn/button"
import { useAuthStore } from "@/features/authByToken/store"
import { createOrder } from "@/features/createOrder/lib/createOrder"

export function StickySummaryWidget() {
  const {cart, organization, warehouse, paybox, contragent} = useOrderStore()

  const token = useAuthStore((state) => state.token)

  const isOrderInvalid =
    !organization ||
    !warehouse ||
    !paybox ||
    !contragent ||
    cart.length === 0

  const total =
    useMemo(() => {
      return cart.reduce(
        (acc, item) =>
          acc +
          Number((item.price) || 0) *
          (Number(item.quantity) || 0),
        0
      )
    }, [cart])

    async function handleCreate(status: boolean) {
      if (
        !organization ||
        !warehouse ||
        !paybox ||
        !contragent
      ) {
        return
      }

      await createOrder({
        token,
        cart,
        organization,
        warehouse,
        paybox,
        contragent,
        status,
      })
  }

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
            {total ?? '-'} ₽
          </p>
        </div>
        <div className="flex justify-between gap-5">
          <Button 
            className="w-30 cursor-pointer"
            disabled={isOrderInvalid}
            onClick={() =>
              handleCreate(false)
            }
          >
            Создать
          </Button>

          <Button
            className="w-40 hover:bg-gray-200 cursor-pointer"
            variant="secondary"
            disabled={isOrderInvalid}
            onClick={() =>
              handleCreate(true)
            }
          >
            Создать и провести
          </Button>
        </div>
      </div>
    </div>
  )
}