import { useQuery } from "@tanstack/react-query"
import { getOrganizations } from "../api/api"

export function useOrganizations(token: string) {
  return useQuery({
    queryKey: ["organizations"],
    queryFn: () => getOrganizations(token),
    enabled: !!token,
    staleTime: Infinity
  })
}