import { useQuery } from "@tanstack/react-query"

import { searchContragents } from "../api/api"

export function useContragentSearch(
  token: string,
  phone: string
) {
  return useQuery({
    queryKey: ["contragents", phone],

    queryFn: () =>
      searchContragents(token, phone),

    enabled: !!token && phone.replace(/\D/g, "").length >= 3,
    staleTime: 1000*60
  })
}