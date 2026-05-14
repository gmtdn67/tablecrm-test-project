import { axiosInstance } from "@/shared/api/axios"

export async function getPayboxes(token: string) {
  const response = await axiosInstance.get(
    `/payboxes?token=${token}`
  )

  return response.data
}