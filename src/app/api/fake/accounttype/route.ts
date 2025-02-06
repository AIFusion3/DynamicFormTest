import { NextResponse } from 'next/server';

export async function GET() {
  const accountTypes = [
    {
      value: "kurumsal",
      label: "Kurumsal" 
    },
    {
      value: "kamu",
      label: "Kamu"
    },
    {
      value: "bireysel",
      label: "Bireysel"
    }
  ];

  return NextResponse.json(accountTypes);
} 