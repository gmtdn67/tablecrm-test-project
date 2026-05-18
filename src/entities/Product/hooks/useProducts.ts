import { useAuthStore } from "@/features/authByToken/store";
import { useQuery } from "@tanstack/react-query";
import { getNomenclatures } from "../api/api";

export function useProducts() {
    const token = useAuthStore((state) => state.token)

    return useQuery({
        queryKey: ["products"],
        queryFn: () => getNomenclatures(token),
        enabled: !!token,
        staleTime: Infinity
    })
}