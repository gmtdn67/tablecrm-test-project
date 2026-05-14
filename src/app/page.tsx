"use client"

import { TokenForm } from "@/features/authByToken/ui/TokenForm/TokenForm"
import { useAuthStore } from "@/features/authByToken/store"
import { OrderForm } from "@/widgets/OrderForm/ui/OrderForm"
import { MobileLayout } from "@/widgets/MobileLayout/ui/MobileLayout"

export default function HomePage() {
  const token = useAuthStore((state) => state.token)

  return (
    <MobileLayout>
        <TokenForm />
        {!!token && 
        <OrderForm />}
    </MobileLayout>
  )
}