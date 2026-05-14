import { axiosInstance } from "@/shared/api/axios"

export async function getContragents(token: string) {
  const response = await axiosInstance.get(
    `/contragents?token=${token}`
  )
  return response.data
}

export async function searchContragents(token: string, phone: string) {
  const response = await axiosInstance.get(
    `/contragents?token=${token}&phone=${phone}`
  )
  console.log(response.data)
  return response.data.result
}