import { NextResponse } from 'next/server';

export async function GET() {
  const departments = [
    {
      value: "satis",
      label: "Satış"
    },
    {
      value: "pazarlama", 
      label: "Pazarlama"
    },
    {
      value: "muhasebe",
      label: "Muhasebe"
    },
    {
      value: "insan-kaynaklari",
      label: "İnsan Kaynakları"
    },
    {
      value: "bilgi-teknolojileri",
      label: "Bilgi Teknolojileri"
    },
    {
      value: "uretim",
      label: "Üretim"
    }
  ];

  return NextResponse.json(departments);
} 