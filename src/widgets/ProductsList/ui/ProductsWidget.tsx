"use client"

import {
  useMemo,
  useRef,
  useState,
} from "react"

import { Search } from "lucide-react"

import { useVirtualizer }
from "@tanstack/react-virtual"

import { useProducts }
from "@/entities/Product/hooks/useProducts"

import { useOrderStore }
from "@/features/createOrder/store"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/shadcn/card"

import { Input }
from "@/shared/ui/shadcn/input"

import { ProductCard }
from "@/shared/ui/ProductCard"

export function ProductsWidget() {
  const [search, setSearch] =
    useState("")

  const parentRef =
    useRef<HTMLDivElement>(null)

  const {
    data: products = [],
    isLoading,
  } = useProducts()

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

  const rowVirtualizer =
    useVirtualizer({
      count:
        filteredProducts.length,

      getScrollElement: () =>
        parentRef.current,

      estimateSize: () => 88,

      overscan: 5,
    })

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          7. Товары
        </CardTitle>

        <CardDescription>
          Добавьте товары
          в корзину
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="relative">
          <Search
            className="
              absolute left-3 top-1/2
              h-4 w-4
              -translate-y-1/2
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

        {isLoading && (
          <div
            className="
              text-sm
              text-muted-foreground
            "
          >
            Загрузка товаров...
          </div>
        )}

        {!isLoading &&
          filteredProducts.length ===
            0 && (
            <div
              className="
                rounded-md border p-4
                text-sm
                text-muted-foreground
              "
            >
              Ничего не найдено
            </div>
          )}

        {!isLoading &&
          filteredProducts.length >
            0 && (
            <div
              ref={parentRef}
              className="
                max-h-[50vh]
                overflow-y-auto
              "
            >
              <div
                style={{
                  height: `${rowVirtualizer.getTotalSize()}px`,
                  position:
                    "relative",
                }}
              >
                {rowVirtualizer
                  .getVirtualItems()
                  .map(
                    (
                      virtualRow
                    ) => {
                      const product =
                        filteredProducts[
                          virtualRow
                            .index
                        ]

                      return (
                        <div
                          key={
                            product.id
                          }
                          style={{
                            position:
                              "absolute",

                            top: 0,

                            left: 0,

                            width:
                              "100%",

                            transform: `translateY(${virtualRow.start}px)`,
                          }}
                        >
                          <ProductCard
                            product={
                              product
                            }
                            onAdd={() =>
                              addToCart(
                                product
                              )
                            }
                          />
                        </div>
                      )
                    }
                  )}
              </div>
            </div>
          )}
      </CardContent>
    </Card>
  )
}