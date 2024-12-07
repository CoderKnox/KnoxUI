'use client';

import React from 'react'
import Input from './Input'
import Button from './Button'

function Table(column, data, sorting=true, search=true, exportPDF=true, exportExcel=true, title='',) {
  return (
    <div className='tableWrapper'>
      <div className='p-2'>
        <div className="flex justify-between items-center">
          <div className="title font-bold text-lg">Table Title</div>
          <div className='flex'>
            <Input placeholder='Search in table' />
            <Button onClick={() => {}}>Export</Button>
          </div>
        </div>
      </div>
      <table className='w-full border-collapse [&>*_th]:border [&>*_td]:border [&>*_td]:p-1'>
        <thead>
          <tr className='bg-base-200'>
            <th>#</th>
            <th>Buyer</th>
            <th>Style</th>
            <th>Order Number</th>
            <th>Color</th>
            <th>Order Qty.</th>
            <th>Price/pcs</th>
          </tr>
        </thead>
        
        <tbody>
          <tr>
            <th>1</th>
            <td>Zara</td>
            <td>XYZ</td>
            <td>OD001</td>
            <td>Red</td>
            <td>1000</td>
            <td>200</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Zara</td>
            <td>XYZ</td>
            <td>OD001</td>
            <td>Blue</td>
            <td>1000</td>
            <td>200</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Zara</td>
            <td>SDF</td>
            <td>OD002</td>
            <td>White</td>
            <td>800</td>
            <td>400</td>
          </tr>
        </tbody>
        
        <tfoot>
          <tr className='bg-base-200'>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>2800</th>
            <th>800</th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default Table



