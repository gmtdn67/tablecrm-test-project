import { create } from "zustand"
import { Contragent } from "@/entities/Contragent/model/types/contragent"
import { CartItem } from "./model/types"
import { Product } from "@/entities/Product/model/types/types"

type DictionaryItem = {
    id: number
    name: string
}

type OrderStore = {
    warehouse: DictionaryItem | null
    organization: DictionaryItem | null
    paybox: DictionaryItem | null
    priceType: DictionaryItem | null
    contragent: Contragent | null
    cart: CartItem[]

    setWarehouse: (id: DictionaryItem | null) => void
    setOrganization: (id: DictionaryItem | null) => void
    setPaybox: (id: DictionaryItem | null) => void
    setPriceType: (id: DictionaryItem | null) => void
    setContragent: (contragent: Contragent | null) => void

    addToCart: (product: Product) => void
    removeFromCart: (productId: number) => void
    increaseQuantity: (productId: number) => void
    decreaseQuantity: (productId: number) => void
    clearCart: () => void
}

export const useOrderStore = create<OrderStore>((set) => ({
    warehouse: null,
    organization:  null,
    paybox: null,
    priceType: null,
    contragent: null,
    cart: [],

    setWarehouse: (warehouse) => set({warehouse}),
    setOrganization: (organization) => set({organization}),
    setPaybox: (paybox) => set({paybox}),
    setPriceType: (priceType) => set({priceType}),
    setContragent: (contragent) => set({contragent}),
    addToCart: (product) =>
        set((state) => {
          const existing =
            state.cart.find(
              (item) =>
                item.product.id ===
                product.id
            )

          if (existing) {
            return {
              cart:
                state.cart.map(
                  (item) =>
                    item.product
                      .id ===
                    product.id
                      ? {
                          ...item,
                          quantity:
                            item.quantity +
                            1,
                        }
                      : item
                ),
            }
          }

          return {
            cart: [
              ...state.cart,
              {
                product,
                quantity: 1,
              },
            ],
          }
        }),

      removeFromCart: (
        productId
      ) =>
        set((state) => ({
          cart: state.cart.filter(
            (item) =>
              item.product.id !==
              productId
          ),
        })),

      increaseQuantity: (
        productId
      ) =>
        set((state) => ({
          cart: state.cart.map(
            (item) =>
              item.product.id ===
              productId
                ? {
                    ...item,
                    quantity:
                      item.quantity +
                      1,
                  }
                : item
          ),
        })),

      decreaseQuantity: (
        productId
      ) =>
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.product.id ===
              productId
                ? {
                    ...item,
                    quantity:
                      item.quantity -
                      1,
                  }
                : item
            )
            .filter(
              (item) =>
                item.quantity > 0
            ),
        })),

      clearCart: () =>
        set({
          cart: [],
        }),
    })
)