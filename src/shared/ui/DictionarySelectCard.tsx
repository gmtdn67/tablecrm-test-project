"use client"

import { useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/shared/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./shadcn/card"
import { Button } from "./shadcn/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./shadcn/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./shadcn/command"

type Item = {
  id: number
  name: string
}

type Props = {
  title: string
  description: string

  items?: Item[]

  value: Item | null

  onSelect: (item: Item) => void

  placeholder?: string
}

export function DictionarySelectCard({
  title,
  description,
  items = [],
  value,
  onSelect,
  placeholder,
}: Props) {
  const [open, setOpen] =
    useState(false)

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

      <CardContent>
        <Popover
          open={open}
          onOpenChange={setOpen}
        >
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="
                w-full justify-between
                font-normal
              "
            >
              {value
                ? value.name
                : placeholder 
              }

              <ChevronsUpDown
                className="
                  ml-2 h-4 w-4
                  shrink-0 opacity-50
                "
              />
            </Button>
          </PopoverTrigger>

          <PopoverContent
            className="
              w-[var(--radix-popover-trigger-width)]
              p-0
            "
            align="start"
          >
            <Command>
              <CommandInput
                placeholder={
                  placeholder ||
                  "Поиск..."
                }
              />

              <CommandList className="max-h-[240px]">
                <CommandEmpty>
                  Ничего не найдено
                </CommandEmpty>

                <CommandGroup>
                  {Array.isArray(items) && items.map((item) => (
                    <CommandItem
                      key={item.id}
                      value={item.name}
                      onSelect={() => {
                        onSelect(item)

                        setOpen(false)
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value?.id ===
                            item.id
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />

                      {item.name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </CardContent>
    </Card>
  )
}