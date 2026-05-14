"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { useDebounce } from "@/shared/lib/hooks/useDebounce"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/shadcn/card"
import { Input } from "@/shared/ui/shadcn/input"
import { useAuthStore } from "@/features/authByToken/store"
import { useContragentSearch } from "@/entities/Contragent/hooks/useContragentSearch"
import { normalizePhone } from "@/shared/lib/normalizePhone"


type Contragent = {
  id: number
  name: string
  phone: string
}

export function ContragentSearch() {
  const token = useAuthStore(
    (state) => state.token
  )

  const [search, setSearch] = useState("+7")

  const [selected, setSelected] =
    useState<Contragent | null>(null)

  const debouncedSearch =
    useDebounce(search, 450)

  const {
    data: contragents = [],
    isLoading,
  } = useContragentSearch(
    token,
    debouncedSearch
  )

  const showDropdown =
    debouncedSearch.length >= 3 &&
    !selected

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          2. Клиент
        </CardTitle>
        <CardDescription>
          Поиск клиента по телефону
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="relative">
          <Input
            placeholder="+7хххххххххх"
            value={
              selected
                ? selected.phone
                : search
            }
            onChange={(e) => {
              setSelected(null)

              const normalized =
                normalizePhone(e.target.value)

              setSearch(normalized)
            }}
            className="pl-3"
          />
        </div>

        {isLoading && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />

            Поиск клиентов...
          </div>
        )}

        {showDropdown &&
        contragents.length > 0 && (
          <div className="overflow-hidden rounded-xl border bg-background shadow-sm">
            <div className="max-h-50 overflow-y-auto rounded-md overscroll-contain">
              {contragents.map(
                (contragent: Contragent) => (
                  <button
                    key={contragent.id}
                    type="button"
                    onClick={() => {
                      setSelected(
                        contragent
                      )

                      setSearch("")
                    }}
                    className="flex w-full flex-col items-start border-b p-3 text-left transition-colors hover:bg-muted last:border-b-0"
                  >
                    <span className="font-medium">
                      {contragent.name}
                    </span>

                    <span className="text-sm text-muted-foreground">
                      {contragent.phone}
                    </span>
                  </button>
                )
              )}
            </div>
          </div>
      )}
        {showDropdown &&
          !isLoading &&
          contragents.length === 0 && (
            <div className="rounded-md border p-3 text-sm text-muted-foreground">
              Клиенты не найдены
            </div>
          )}
      </CardContent>
    </Card>
  )
}