import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  try {
    const token =
      req.nextUrl.searchParams.get("token")

    const response = await fetch(
      `https://app.tablecrm.com/api/v1/warehouses/?token=${token}`,
      {
        cache: "no-store",
      }
    )

    const data = await response.json()ы

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}