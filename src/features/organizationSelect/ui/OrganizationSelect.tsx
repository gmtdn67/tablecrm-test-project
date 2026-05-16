"use client"

import { useOrganizations } from "@/entities/Organization/hooks/useOrganizations"
import { useAuthStore } from "@/features/authByToken/store"
import { useOrderStore } from "@/features/createOrder/store"
import { DictionarySelectCard } from "@/shared/ui/DictionarySelectCard"

export function OrganizationSelect() {

  const { token } = useAuthStore(state => state.token)
  const {
    data: organizations = [],
  } = useOrganizations(token)

  const organization =
    useOrderStore(
      (state) => state.organization
    )

  const setOrganization =
    useOrderStore(
      (state) =>
        state.setOrganization
    )

  return (
    <DictionarySelectCard
        title="3. Организация"
        description="Выберите организацию"
        items={organizations}
        value={organization}
        onSelect={setOrganization}
        placeholder="Поиск организации"
    />
  )
}