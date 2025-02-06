import { NextResponse } from 'next/server';

type Neighborhoods = {
  [key: string]: { value: string; label: string; }[];
}

export async function GET(request: Request, { params }: { params: { districtCode: string } }) {
  const neighborhoods: Neighborhoods = {
    "34-1": [
      { value: "34-1-1", label: "Caferağa" },
      { value: "34-1-2", label: "Fenerbahçe" }
    ],
    "34-2": [
      { value: "34-2-1", label: "Levent" },
      { value: "34-2-2", label: "Etiler" }
    ],
    "06-1": [
      { value: "06-1-1", label: "Kızılay" },
      { value: "06-1-2", label: "Bahçelievler" }
    ],
    "06-2": [
      { value: "06-2-1", label: "Etlik" },
      { value: "06-2-2", label: "Kalaba" }
    ]
  };

  return NextResponse.json(neighborhoods[params.districtCode] || []);
} 