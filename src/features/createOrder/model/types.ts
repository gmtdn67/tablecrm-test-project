import { Product } from "@/entities/Product/model/types/types"

export type CartItem = {
    product: Product
    quantity: number
    price: number
}