import { axiosInstance } from "@/shared/api/axios"

export async function getOrganizations(token: string) {
  const response = await axiosInstance.get(
    `/organizations?token=${token}`
  )

  return response.data
}

