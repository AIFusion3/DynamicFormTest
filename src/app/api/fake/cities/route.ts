import { NextResponse } from 'next/server';

export async function GET() {
  const cities = [
    {
      value: "34",
      label: "İstanbul"
    },
    {
      value: "06",
      label: "Ankara"
    }
  ];

  return NextResponse.json(cities);
} 