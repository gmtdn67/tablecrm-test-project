import { axiosInstance } from "@/shared/api/axios"

export async function getNomenclatures(token: string) {
  const response = await axiosInstance.get(
    `/nomencaltures?token=${token}`
  )

  return response.data
}