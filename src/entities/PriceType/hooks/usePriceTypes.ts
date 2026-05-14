import { useQuery } from "@tanstack/react-query"
import { getPriceTypes } from "../api/api"

export function usePriceTypes(token: string) {
  return useQuery({
    queryKey: ["warehouses"],
    queryFn: () => getPriceTypes(token),
    enabled: !!token,
  })
}