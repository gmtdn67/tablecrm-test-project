"use client"

import { memo } from "react"

import { Plus } from "lucide-react"

import { Button } from "./shadcn/button"

import { Card } from "./shadcn/card"

import { Product } from "@/entities/Product/model/types/types"

type Props = {
  product: Product

  onAdd: () => void
}

function ProductCardComponent({
  product,
  onAdd,
}: Props) {
  return (
    <Card className="p-3">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate font-medium">
            {product.name}
          </p>

          <p className="text-sm text-muted-foreground">
            {product.price} ₽
          </p>
        </div>

        <Button
          size="sm"
          onClick={onAdd}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  )
}

export const ProductCard = memo(
  ProductCardComponent
)