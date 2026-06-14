import { axiosInstance } from "@/shared/api/axios"

export async function getNomenclatures(token: string) {
  const response = await axiosInstance.get(
    `/nomenclatures?token=${token}`
  )
  
  console.log(response.data)
  return response.data
}