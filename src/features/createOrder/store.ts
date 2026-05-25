import { create } from "zustand"
import { Product } from "@/entities/Product/model/types/types"

type DictionaryItem = {
    id: number
    name: string
    short_name?: string
}

type Contragent = {
  id: number
  name: string
  phone: string
  loyality_card_id?: number
}

type CartItem = {
  product: Product
  quantity: number
  price: number
}


type OrderStore = {
    organization: DictionaryItem | null
    warehouse: DictionaryItem | null
    paybox: DictionaryItem | null
    priceType: DictionaryItem | null
    contragent: Contragent | null
    cart: CartItem[]

    setOrganization: (item: DictionaryItem | null) => void
    setWarehouse: (item: DictionaryItem | null) => void
    setPaybox: (item: DictionaryItem | null) => void
    setPriceType: (item: DictionaryItem | null) => void
    setContragent: (item: Contragent | null) => void
    
    addToCart: (product: Product) => void
    increaseQuantity: (productId: number) => void
    decreaseQuantity: (productId: number) => void
    changePrice: (productId: number, price: number) => void
    removeFromCart: (productId: number) => void
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
   
    addToCart: (
        product
      ) =>
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

                price:
                  Number(
                    product.price
                  ) || 0,
              },
            ],
          }
        }),

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

      changePrice: (
        productId,
        price
      ) =>
        set((state) => ({
          cart: state.cart.map(
            (item) =>
              item.product.id ===
              productId
                ? {
                    ...item,

                    price:
                      Number(
                        price
                      ) || 0,
                  }
                : item
          ),
        })),

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
    })
)