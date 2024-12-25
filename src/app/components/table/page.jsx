'use client';
import React from 'react';
import Table from '@/components/Table';

function checkData(row){
  const orderQuantity = row.orderQuantity;
  if (orderQuantity > 1000) {
    return { sx: { backgroundColor: 'red' } };
  }
}

const tableConfig = {
  columns: [
    { key: 'buyerName', header: 'Buyer Name', pin: "left", className:"font-bold" },
    { key: 'styleName', header: 'Style Name', pin: "left" },
    { key: 'orderNumber', header: 'Order Number', search:false },
    { key: 'color', header: 'Color' },
    { key: 'orderQuantity', header: 'Order Quantity', dataType: 'int', sum:true, cellConfig: checkData },
    { key: 'price', header: 'Price/pcs', dataType: 'float'},
    { key: 'orderDate', header: 'Order Date', dataType: 'date', pin: "right" },
    { key: 'entryDate', header: 'Entry Date', dataType: 'datetime', currentFormat: 'YYYY-MM-DDTHH:mm:ss.sssZ', sowFormat: 'DD-MM-YYYY HH:mm:ss'},
  ],
  data: [
    { 
      buyerName: 'Zara', 
      styleName: 'XYZ', 
      orderNumber: 'OD001', 
      color: 'Red',  
      orderQuantity: 11, 
      price: 200, 
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
    { 
      buyerName: 'Zara', 
      styleName: 'XYZ', 
      orderNumber: 'OD001', 
      color: 'Red',  
      orderQuantity: 11, 
      price: 200.001, 
      orderDate: '2023-06-01', 
      entryDate: '2023-06-02T10:30:00' 
    },
    { 
      buyerName: 'Zara', 
      styleName: 'XYZ', 
      orderNumber: 'OD002', 
      color: 'Red',  
      orderQuantity: 20, 
      price: 200.444, 
      orderDate: '2023-06-02', 
      entryDate: '2023-06-02T15:15:00' 
    },
    { 
      buyerName: 'H&M',  
      styleName: 'SDF', 
      orderNumber: 'OD003', 
      color: 'White', 
      orderQuantity: 101, 
      price: 300.555, 
      orderDate: '2023-06-03', 
      entryDate: '2023-06-03T09:43:00' 
    },
    { 
      buyerName: 'H&M',  
      styleName: 'SDF', 
      orderNumber: 'OD004', 
      color: 'White', 
      orderQuantity: 9, 
      price: 300.666, 
      orderDate: '2023-06-04', 
      entryDate: '2023-06-04T09:40:00' 
    },
    { 
      buyerName: 'Zara', 
      styleName: 'SDF', 
      orderNumber: 'OD005', 
      color: 'Blue', 
      orderQuantity: 1000, 
      price: 250.999, 
      orderDate: '2023-06-05', 
      entryDate: '2023-06-05T10:39:00' 
    },
    { 
      buyerName: 'Zara', 
      styleName: 'XYZ', 
      orderNumber: 'OD001', 
      color: 'Red',  
      orderQuantity: 11, 
      price: 200.001, 
      orderDate: '2023-06-01', 
      entryDate: '2023-06-01T20:30:00' 
    },
    { 
      buyerName: 'Zara', 
      styleName: 'XYZ', 
      orderNumber: 'OD002', 
      color: 'Red',  
      orderQuantity: 20, 
      price: 200.444, 
      orderDate: '2023-06-02', 
      entryDate: '2023-06-02T11:19:00' 
    },
    { 
      buyerName: 'H&M',  
      styleName: 'SDF', 
      orderNumber: 'OD003', 
      color: 'White', 
      orderQuantity: 101, 
      price: 300.555, 
      orderDate: '2023-06-03', 
      entryDate: '2023-06-03T09:05:00' 
    },
    { 
      buyerName: 'H&M',  
      styleName: 'SDF', 
      orderNumber: 'OD004', 
      color: 'White', 
      orderQuantity: 9, 
      price: 300.666, 
      orderDate: '2023-06-04', 
      entryDate: '2023-06-04T09:43:00' 
    },
    { 
      buyerName: 'Zara', 
      styleName: 'SDF', 
      orderNumber: 'OD005', 
      color: 'Blue', 
      orderQuantity: 1000, 
      price: 250.999, 
      orderDate: '2023-06-05', 
      entryDate: '2023-06-05T14:30:01' 
    },
  ]
};

export default function Page() {
  return (
    <div className="h-full rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Custom Table with Row Merging</h1>
      <Table 
        tableConfig={tableConfig} 
        // isSerialized={true} 
        // size='m'
        // header={true}
        // sum={true}
        title='My Table Title'
        // printSize='A3 vertical'
      />
    </div>
  );
}

