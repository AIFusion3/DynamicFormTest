'use client';
// pages/CompanyRegistrationPage.tsx
import React from 'react';
import DynamicForm from 'dynamic-form';
import companyFormConfig from './settings.json';
import { FormConfig } from 'dynamic-form';
import { Container } from '@mantine/core';

export default function HomePage() {
  // Form başarıyla gönderildikten sonra çalışacak event handler
  const handleSuccess = (data: any) => {
    console.log('Form başarıyla gönderildi:', data);
    // Burada kullanıcıya bildirim gösterme veya yönlendirme yapabilirsiniz
  };

  const initialData = {
    // Müşteri Bilgileri
    customerName: "Test Müşteri",
    source: "ankara",
    phone: "+90 (555) 123-45-67",
    accountType: "1",
    group: "",
    website: "https://test.com",
    prCompany: "", 
    sector2: 3,
    corporateEmail: "info@test.com",
  
    // Kurum Bilgileri
    title: "Test A.Ş.",
    city: "34", // İstanbul
    district: "34-1", // Kadıköy
    neighborhood: "34-1-1", // Örnek Mahalle
    privacy: true,
    address: "Test Adres Satırı 1\nTest Adres Satırı 2",
    accountingEmail: "muhasebe@test.com",
    accountingPhone: "02121234567",
    tags: ["blue", "red"],
    taxOffice: "Test Vergi Dairesi",
    taxNumber: "1234567890",
    amount: 50000,
    department: ["satis", "pazarlama"] // Multiselect için array
  };

  return (
    <Container size="lg" py="xl">
      <h1>Firma Kayıt Formu</h1>
      <DynamicForm
        config={companyFormConfig as FormConfig}
        initialData={initialData}
        baseUrl="https://api.ornek.com"         
        endpoint="companies/register"           
        onSuccess={handleSuccess}
        submitButtonProps={{
          variant: 'outline',
          children: 'Kaydet'
        }}
        cancelButtonProps={{
          variant: 'light',
          color: 'red',
          children: 'İptal'
        }}
      />
    </Container>
  );
}