"use client"

import { Trash2 } from "lucide-react"
import { CartItem } from "@/features/createOrder/model/types"
import { QuantityControl } from "./QuantityControl"
import { Button } from "./shadcn/button"
import { Card } from "./shadcn/card"

type Props = {
  item: CartItem

  onIncrease: () => void

  onDecrease: () => void

  onRemove: () => void
}

export function CartItemCard({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}: Props) {
  return (
    <Card className="p-3">
      <div
        className="
          flex items-start justify-between
          gap-3
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
              text-sm text-muted-foreground
            "
          >
            {item.product.price} ₽
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

      <div className="mt-3">
        <QuantityControl
          quantity={item.quantity}
          onIncrease={
            onIncrease
          }
          onDecrease={
            onDecrease
          }
        />
      </div>
    </Card>
  )
}