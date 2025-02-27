import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    
    // Burada formData işlenebilir
    console.log('Form data received:', formData)
    
    // Başarılı yanıt döndür
    return NextResponse.json({ 
      success: true, 
      message: 'Form data received successfully',
      data: formData 
    })
  } catch (error) {
    console.error('Error processing form data:', error)
    return NextResponse.json(
      { success: false, message: 'Error processing form data' },
      { status: 500 }
    )
  }
} 