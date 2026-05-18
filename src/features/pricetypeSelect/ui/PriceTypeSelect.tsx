"use client"

import { usePriceTypes } from "@/entities/PriceType/hooks/usePriceTypes"
import { useAuthStore } from "@/features/authByToken/store"
import { useOrderStore } from "@/features/createOrder/store"
import { DictionarySelectCard } from "@/shared/ui/DictionarySelectCard"

export function PriceTypeSelect() {

  const token = useAuthStore(state => state.token)
  const {
    data: priceTypes = [],
  } = usePriceTypes(token)

  const priceType =
    useOrderStore(
      (state) => state.priceType
    )

  const setPriceType =
    useOrderStore(
      (state) =>
        state.setPriceType
    )

  return (
    <DictionarySelectCard
        title="6. Тип цены"
        description="Выберите тип цены"
        items={priceTypes || []}
        value={priceType}
        onSelect={setPriceType}
        placeholder="Поиск типов цены"
    />
  )
}