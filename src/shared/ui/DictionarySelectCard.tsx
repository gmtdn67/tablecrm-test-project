import { useMemo, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./shadcn/card"
import { Input } from "./shadcn/input"

type Item = {
    id: number, 
    name: string
}

type Props = {
    title: string
    description: string
    items: Item[]
    value: Item | null
    onSelect: (item: Item) => void
    placeholder?: string
}
export function DictionarySelectCard({
    title,
  description,
  items,
  value,
  onSelect,
  placeholder,
}: Props) {
    const [search, setSearch] = useState("")

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.name
        .toLowerCase()
        .includes(search.toLowerCase())
    )
  }, [items, search])

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {title}
        </CardTitle>

        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        <Input
          placeholder={
            placeholder || "Поиск"
          }
          value={
            value?.name || search
          }
          onChange={(e) => {
            setSearch(e.target.value)
          }}
        />

        {!value &&
          filteredItems.length > 0 && (
            <div className="overflow-hidden rounded-xl border">
              <div className="max-h-[240px] overflow-y-auto">
                {filteredItems.map(
                  (item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        onSelect(item)

                        setSearch("")
                      }}
                      className="
                        flex w-full items-center
                        border-b p-3 text-left
                        transition-colors hover:bg-muted
                        last:border-b-0
                      "
                    >
                      {item.name}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
      </CardContent>
    </Card>
  )
}