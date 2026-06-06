import { axiosInstance } from "@/shared/api/axios"
import { Organization } from "../model/types/organization"

export async function getOrganizations(token: string) {
  const response = await axiosInstance.get(
    `/organizations?token=${token}`
  )


    return response.data.result.map(
      (item: Organization) => ({
        id: item.id,
        name: item.shortName,
      })
  )
}

