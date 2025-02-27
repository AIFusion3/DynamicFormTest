'use client';
// pages/CompanyRegistrationPage.tsx
import React from 'react';
import DynamicForm from 'dynamic-form';
import companyFormConfig from './settings.json';
import { FormConfig } from 'dynamic-form';
import { Container } from '@mantine/core';
import '@mantine/notifications/styles.css';

export default function HomePage() {
  // Form submitted successfully event handler
  const handleSuccess = (data: any) => {
    console.log('Form submitted successfully:', data);
    // You can notify the user or redirect them here
  };

  

  const initialData = {
    // Customer Information
    id: 1,
    customerName: "Test Müşteri",
    source: "ankara",
    phone: "+90 (555) 123-45-67",
    accountType: "1",
    group: "",
    website: "https://test.com",
    prCompany: "", 
    sector2: 3,
    corporateEmail: "info@test.com",
  
    // Company Information
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
    department: ["satis", "pazarlama"] // Multiselect for array
  };

  return (
    <Container size="lg" py="xl">
      <h1>Company Registration Form</h1>
      <DynamicForm
        config={companyFormConfig as FormConfig}
        //initialData={initialData}
        useToken={true}
        pk_field='id'
        showDebug={false}
        baseUrl="/api"         
        endpoint="fake/account"           
        onSuccess={handleSuccess}
        submitButtonProps={{
          variant: 'outline',
          children: 'Kaydet'
        }}
        cancelButtonProps={{
          variant: 'outline',
          color: 'red',
          children: 'İptal'
        }}
      />
    </Container> 
  );
}