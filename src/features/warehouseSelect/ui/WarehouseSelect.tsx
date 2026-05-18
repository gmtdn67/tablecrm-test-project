"use client"

import { useWarehouses } from "@/entities/Warehouse/hooks/useWarehouses"
import { useAuthStore } from "@/features/authByToken/store"
import { useOrderStore } from "@/features/createOrder/store"
import { DictionarySelectCard } from "@/shared/ui/DictionarySelectCard"

export function WarehouseSelect() {

  const token = useAuthStore(state => state.token)
  const {
    data: warehouses = [],
  } = useWarehouses(token)

  const warehouse =
    useOrderStore(
      (state) => state.warehouse
    )

  const setWarehouse =
    useOrderStore(
      (state) =>
        state.setWarehouse
    )

  return (
    <DictionarySelectCard
        title="5. Склад"
        description="Выберите склад"
        items={warehouses || []}
        value={warehouse}
        onSelect={setWarehouse}
        placeholder="Поиск склада"
    />
  )
}