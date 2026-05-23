"use client"

import { Trash2 }
from "lucide-react"

import { CartItem }
from "@/features/createOrder/model/types"

import { QuantityControl }
from "./QuantityControl"

import { Button }
from "./shadcn/button"

import { Card }
from "./shadcn/card"

import { Input }
from "./shadcn/input"

type Props = {
  item: CartItem

  onIncrease: () => void

  onDecrease: () => void

  onRemove: () => void

  onPriceChange: (
    price: number
  ) => void
}

export function CartItemCard({
  item,

  onIncrease,

  onDecrease,

  onRemove,

  onPriceChange,
}: Props) {
  const subtotal =
    (Number(item.price) || 0) *
    (Number(item.quantity) || 0)

  return (
    <Card className="p-3">
      <div
        className="
          flex items-start
          justify-between gap-3
        "
      >
        <div className="min-w-0">
          <p
            className="
              truncate font-medium
            "
          >
            {item.product.name}
          </p>

          <p
            className="
              text-sm
              text-muted-foreground
            "
          >
            Сумма:
            {" "}
            {subtotal} ₽
          </p>
        </div>

        <Button
          size="icon"
          variant="ghost"
          onClick={onRemove}
        >
          <Trash2
            className="h-4 w-4"
          />
        </Button>
      </div>

      <div
        className="
          mt-4 grid grid-cols-2
          gap-3
        "
      >
        <div>
          <p
            className="
              mb-1 text-sm
              text-muted-foreground
            "
          >
            Цена
          </p>

          <Input
            type="number"
            min={0}
            value={String(item.price ?? "")}
            onChange={(e) =>
              onPriceChange(
                Number(
                  e.target.value
                )
              )
            }
          />
        </div>

        <div>
          <p
            className="
              mb-1 text-sm
              text-muted-foreground
            "
          >
            Количество
          </p>

          <QuantityControl
            quantity={
              item.quantity
            }
            onIncrease={
              onIncrease
            }
            onDecrease={
              onDecrease
            }
          />
        </div>
      </div>
    </Card>
  )
}