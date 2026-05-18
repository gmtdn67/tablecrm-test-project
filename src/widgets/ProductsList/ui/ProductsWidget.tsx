"use client"

import { useMemo, useState } from "react"
import { Search } from "lucide-react"
import { useProducts } from "@/entities/Product/hooks/useProducts"
import { useOrderStore } from "@/features/createOrder/store"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/shadcn/card"
import { Input } from "@/shared/ui/shadcn/input"
import { ProductCard } from "@/shared/ui/ProductCard"

export function ProductsWidget() {
  const [search, setSearch] =
    useState("")

  const {
    data: products = [],
  } = useProducts()
  console.log(products)
  const addToCart =
    useOrderStore(
      (state) => state.addToCart
    )

  const filteredProducts =
    useMemo(() => {
      if (!search.trim()) {
        return products
      }

      return products.filter(
        (product) =>
          product.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      )
    }, [products, search])

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          7. Товары
        </CardTitle>

        <CardDescription>
          Добавьте товары в корзину
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="relative">
          <Search
            className="
              absolute left-3 top-1/2
              h-4 w-4 -translate-y-1/2
              text-muted-foreground
            "
          />

          <Input
            placeholder="Поиск товара"
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="pl-9"
          />
        </div>

        <div className="space-y-2">
          {filteredProducts.map(
            (product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={() =>
                  addToCart(product)
                }
              />
            )
          )}
        </div>
      </CardContent>
    </Card>
  )
}