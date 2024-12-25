'use client';
import React from 'react';
import Table from '@/components/Table';

const tableConfig = {
  columns: [
    { key: 'buyerName', header: 'Buyer Name' },
    { key: 'styleName', header: 'Style Name' },
    { key: 'orderNumber', header: 'Order Number' },
    { key: 'color', header: 'Color', dataType: 'str' },
    { key: 'orderQuantity', header: 'Order Quantity', dataType: 'int' },
    { key: 'price', header: 'Price/pcs', dataType: 'float' },
    { key: 'orderDate', header: 'Order Date', dataType: 'date' },
    { key: 'entryDate', header: 'Entry Date', dataType: 'datetime' },
  ],
  data: [
    { 
      buyerName: 'Zara', 
      styleName: 'XYZ', 
      orderNumber: 'OD001', 
      color: 'Red',  
      orderQuantity: 11, 
      price: 200.001, 
      orderDate: '2023-06-01', 
      entryDate: '2023-06-01T10:30:00' 
    },
    { 
      buyerName: 'Zara', 
      styleName: 'XYZ', 
      orderNumber: 'OD002', 
      color: 'Red',  
      orderQuantity: 20, 
      price: 200.444, 
      orderDate: '2023-06-02', 
      entryDate: '2023-06-02T11:15:00' 
    },
    { 
      buyerName: 'H&M',  
      styleName: 'SDF', 
      orderNumber: 'OD003', 
      color: 'White', 
      orderQuantity: 101, 
      price: 300.555, 
      orderDate: '2023-06-03', 
      entryDate: '2023-06-03T09:45:00' 
    },
    { 
      buyerName: 'H&M',  
      styleName: 'SDF', 
      orderNumber: 'OD004', 
      color: 'White', 
      orderQuantity: 9, 
      price: 300.666, 
      orderDate: '2023-06-04', 
      entryDate: '2023-06-04T09:45:00' 
    },
    { 
      buyerName: 'Zara', 
      styleName: 'SDF', 
      orderNumber: 'OD005', 
      color: 'Blue', 
      orderQuantity: 1000, 
      price: 250.999, 
      orderDate: '2023-06-05', 
      entryDate: '2023-06-05T14:30:00' 
    },
  ]
};

export default function Page() {
  return (
    <div className="h-full rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Custom Table with Row Merging</h1>
      <Table 
        tableConfig={tableConfig} 
        isSerialized={true} 
        size='m'
        header={true}
        title='My Table Title'
      />
    </div>
  );
}

