import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
    try {
        const token =
            req.nextUrl.searchParams.get("token")

        const response = await fetch(
            `https://app.tablecrm.com/api/v1/organizations/?token=${token}`
        )

        const data = await response.json()
        return NextResponse.json(data.result)
    } catch (error) {
        return NextResponse.json(
            { error: "Internal error" },
            { status: 500 }
        )
    }
}