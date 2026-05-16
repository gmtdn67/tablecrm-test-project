import { useQuery } from "@tanstack/react-query"
import { getWarehouses } from "../api/api"

export function useWarehouses(token: string) {
  return useQuery({
    queryKey: ["warehouses"],
    queryFn: () => getWarehouses(token),
    enabled: !!token,
    staleTime: Infinity
  })
}