import { axiosInstance } from "@/shared/api/axios"

export async function getWarehouses(token: string) {
  const response = await axiosInstance.get(
    `/warehouses?token=${token}`
  )

  return response.data.result
}