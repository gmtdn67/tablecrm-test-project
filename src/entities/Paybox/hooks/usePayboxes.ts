import { useQuery } from "@tanstack/react-query"
import { getPayboxes } from "../api/api"

export function usePayboxes(token: string) {
  return useQuery({
    queryKey: ["warehouses"],
    queryFn: () => getPayboxes(token),
    enabled: !!token,
  })
}