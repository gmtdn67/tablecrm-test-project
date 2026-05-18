import { axiosInstance } from "@/shared/api/axios"

export async function getNomenclatures(token: string) {
  const response = await axiosInstance.get(
    `/nomenclature?token=${token}`
  )

  return response.data.result
}