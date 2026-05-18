"use client"

import { Minus, Plus } from "lucide-react"
import { Button }
from "./shadcn/button"

type Props = {
  quantity: number

  onIncrease: () => void

  onDecrease: () => void
}

export function QuantityControl({
  quantity,
  onIncrease,
  onDecrease,
}: Props) {
  return (
    <div
      className="
        flex items-center gap-2
      "
    >
      <Button
        size="icon"
        variant="outline"
        onClick={onDecrease}
      >
        <Minus className="h-4 w-4" />
      </Button>

      <span
        className="
          min-w-[24px]
          text-center
          font-medium
        "
      >
        {quantity}
      </span>

      <Button
        size="icon"
        variant="outline"
        onClick={onIncrease}
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  )
}