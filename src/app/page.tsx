'use client';
// pages/CompanyRegistrationPage.tsx
import React from 'react';
import companyFormConfig from './settings.json';
import DynamicForm from 'dynamic-form';
import DynamicView from 'dynamic-form/dist/DynamicView';
import type { FormConfig } from 'dynamic-form';
import type { ViewConfig } from 'dynamic-form/dist/DynamicView';

import { Container } from '@mantine/core';
import '@mantine/notifications/styles.css';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/tiptap/styles.css';

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

  // Örnek kullanım
const viewConfig = {
  layout: 'vertical', // veya 'vertical'
  fieldStyle: {
    fontWeight: '600',
    fontSize: '12px',
    width: 'calc(100%)'
  },
  labelStyle: {
    weight: '400',
    size: 'sm',
    width: '110px',
  },
  rows: [
      {
          title: 'Kişisel Bilgiler',
          columns: [
            {
              span: 3,
              fields: [
                {
                  field: 'photo',
                  title: '',
                  type: 'image',
                  imageWidth: '100%',
                  imageHeight: '100%'
                }
              ]
            },
            {
              span: 5,
              fields: [
                  {
                      field: 'name',
                      title: 'Ad Soyad',
                      type: 'text'
                  },
                  {
                      field: 'birthDate',
                      title: 'Doğum Tarihi',
                      type: 'date'
                  }
              ]
          },
          {
            span: 4,
            fields: [
                {
                    field: 'father_name',
                    title: 'Baba Adı',
                    type: 'text'
                },
                {
                    field: 'isok',
                    title: 'İş Okulu',
                    type: 'boolean'
                }
            ]
        }
              
          ]
      }
      
  ]
};

const data = {
  name: 'Ahmet Yılmaz',
  birthDate: '1990-01-01',
  father_name: 'Mehmet Yılmaz',
  mother_name: 'Ayşe Yılmaz',
  isok: true,
  photo: 'https://i0.shbdn.com/photos/46/30/10/12324630106rl.jpg',
  documents: [
      'https://example.com/doc1.jpg',
      'https://example.com/doc2.jpg'
  ]
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
        hiddenCancel={true}
        onSuccess={handleSuccess}
        submitButtonProps={{
          variant: 'outline',
          children: 'Kaydet!'
        }}
        cancelButtonProps={{
          variant: 'outline',
          color: 'red',
          children: 'İptal'
        }}
      />
      

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <DynamicView config={viewConfig as ViewConfig} data={data} />
    </Container> 
  );
}