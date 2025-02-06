import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()
  
  return NextResponse.json({
    data: data,
    message: "Kayıt başarılı",
    code: "SUCCESS"
  }, { status: 200 })
} 