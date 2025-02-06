import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const data = await request.json()
    console.log(data)
    return NextResponse.json({
        data: data,
        message: "Bir hata oluştu",
        code: "ERROR"
    }, { status: 400 })
} 