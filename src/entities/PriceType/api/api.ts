import { axiosInstance } from "@/shared/api/axios"

export async function getPriceTypes(token: string) {
  const response = await axiosInstance.get(
    `/price_types?token=${token}`
  )

  return response.data.result
}