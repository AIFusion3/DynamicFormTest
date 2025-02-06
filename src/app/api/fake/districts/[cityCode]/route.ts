import { NextResponse } from 'next/server';

type Districts = {
  [key: string]: { value: string; label: string; }[];
}

export async function GET(request: Request, { params }: { params: { cityCode: string } }) {
  const districts: Districts = {
    "34": [
      { value: "34-1", label: "Kadıköy" },
      { value: "34-2", label: "Beşiktaş" }
    ],
    "6": [
      { value: "06-1", label: "Çankaya" },
      { value: "06-2", label: "Keçiören" }
    ]
  };

  return NextResponse.json(districts[params.cityCode] || []);
} 