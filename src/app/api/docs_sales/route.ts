import { NextRequest } from "next/server"

export async function POST(
  request: NextRequest
) {
  try {
    const token =
      request.nextUrl.searchParams.get(
        "token"
      )

    const body =
      await request.json()

    const response =
      await fetch(
        `https://app.tablecrm.com/api/v1/docs_sales/?token=${token}`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(
            body
          ),
        }
      )

    const data =
      await response.json()

    return Response.json(data, {
      status: response.status,
    })
  } catch (error) {
    console.error(error)

    return Response.json(
      {
        error:
          "Internal server error",
      },
      {
        status: 500,
      }
    )
  }
}