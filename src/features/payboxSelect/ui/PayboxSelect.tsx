"use client"
import { usePayboxes } from "@/entities/Paybox/hooks/usePayboxes"
import { useAuthStore } from "@/features/authByToken/store"
import { useOrderStore } from "@/features/createOrder/store"
import { DictionarySelectCard } from "@/shared/ui/DictionarySelectCard"

export function PayboxSelect() {

  const token = useAuthStore(state => state.token)
  const {
    data: payboxes = [],
  } = usePayboxes(token)

  const paybox =
    useOrderStore(
      (state) => state.paybox
    )

  const setPaybox =
    useOrderStore(
      (state) =>
        state.setPaybox
    )

  return (
    <DictionarySelectCard
        title="4. Счет"
        description="Выберите счет"
        items={payboxes}
        value={paybox}
        onSelect={setPaybox}
        placeholder="Поиск счета"
    />
  )
}