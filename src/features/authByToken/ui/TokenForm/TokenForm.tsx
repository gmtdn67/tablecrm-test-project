"use client"

import { preloadAppData } from "@/shared/lib/preloadAppData"
import { Button } from "@/shared/ui/shadcn/button"
import { Card, CardDescription, CardHeader } from "@/shared/ui/shadcn/card"
import { Input } from "@/shared/ui/shadcn/input"
import { ChangeEvent, useMemo, useState } from "react"
import { toast } from "sonner"
import { useAuthStore } from "@/features/authByToken/store"
import { Loader2 } from "lucide-react"


export function TokenForm() {
    const [inputValue, setInputValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const setToken = useAuthStore(state => state.setToken)
    const token = useAuthStore(state => state.token)

    const isDisabled = useMemo( () => {
        return !inputValue.trim() || isLoading || !!token
    }, [inputValue, isLoading, token])

    async function connectByToken() {
        try {
            setIsLoading(true)
            setToken(inputValue)
            toast.success("Касса подключена")
        } catch (error) {
            console.error(error)
            toast.error("Неверный токен")
        } finally {
            setIsLoading(false)
        }
    }

    const inputChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    return (
        <Card>
            <CardHeader>1. Подключите кассу</CardHeader>
            <CardDescription>Введите токен для доступа к справочникам</CardDescription>
            <Input placeholder="Введите токен кассы" value={inputValue} onChange={inputChangeHandle} disabled={!!token}/>
            <Button onClick={connectByToken} disabled={isDisabled} type="button">
                {isLoading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Подключение...
                    </>
                ) : token ? (
                    "Подключено ✓"
                ) : (
                    "Подключиться"
                )}
            </Button>
        </Card>
    )
}