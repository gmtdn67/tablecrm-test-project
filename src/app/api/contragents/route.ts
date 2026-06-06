import { NextRequest, NextResponse } from "next/server"

interface Customer {
  id?: string | number;
  name?: string;
  phone?: string;
}

export async function GET(req: NextRequest) {
  try {
    const token =
      req.nextUrl.searchParams.get("token")

    const phone =
      req.nextUrl.searchParams.get("phone")

    if (!token) {
      return NextResponse.json(
        { error: "Token required" },
        { status: 400 }
      )
    }

    const response = await fetch(
      `https://app.tablecrm.com/api/v1/contragents/?token=${token}`,
      {
        cache: "no-store",
      }
    )

    const data = await response.json()

    if (!phone) {
      return NextResponse.json([])
    }

    const normalized = phone.replace(/\D/g, "")

    const filtered = data.filter(
      (customer: Customer) => {
        const phone =
          customer.phone?.replace(/\D/g, "") || ""

        return phone.includes(normalized)
      }
    )

    return NextResponse.json(filtered)

  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}