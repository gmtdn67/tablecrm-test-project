import axios
from "axios"

import { CreateSalePayload }
from "../model/types"

export async function createSaleRequest(
  token: string,

  payload: CreateSalePayload[]
) {
  const response =
    await axios.post(
      `/api/docs_sales?token=${token}`,

      payload
    )

  return response.data
}