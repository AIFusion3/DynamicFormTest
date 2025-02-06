import { NextResponse } from 'next/server';

export async function GET() {
  const sectors = [
    {
      value: 1,
      label: "Otomotiv"
    },
    {
      value: 2, 
      label: "Teknoloji"
    },
    {
      value: 3,
      label: "Finans"
    }
  ];

  return NextResponse.json(sectors);
} 