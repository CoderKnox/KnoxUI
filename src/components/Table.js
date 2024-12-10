'use client';

import React from 'react'
import Input from './Input'
import Button from './Button'

function Table(column, data, sorting=true, search=true, exportPDF=true, exportExcel=true, title='',) {
  return (
    <div className="flex w-full">
      <div className='space-y-2 pr-2'>
        <div className="card border bg-base-100">
          <h2 className="card-title font-bold bg-base-300 text-center">VALUES</h2>
          <div className="card-body p-2">
            <ul className='*:bg-base-200 space-y-1 *:px-2 *:py-1'>
              <li>Order Qty.</li>
              <li>Price/pcs</li>
            </ul>
            <div className='space-x-2 pt-2'>
              <label className='bg-base-200 p-1'>
                <input checked name='knox-table-sum' type="radio" />SUM
              </label>
              <label className='bg-base-200 p-1'>
                <input type="radio" name='knox-table-sum' />COUNT
              </label>
            </div>
          </div>
        </div>
        <div className="card border bg-base-100">
          <h2 className="card-title font-bold bg-base-300 text-center">ROWS</h2>
          <div className="card-body p-2">
            <ul className='*:bg-base-200 space-y-1 *:px-2 *:py-1'>
              <li>Buyer</li>
              <li>Style</li>
              <li>Order Number</li>
              <li>Color</li>
            </ul>
          </div>
        </div>
        <div className="card border bg-base-100">
          <h2 className="card-title font-bold bg-base-300 text-center">COLUMN</h2>
          <div className="card-body p-2">
            <ul className='*:bg-base-200 space-y-1 *:px-2 *:py-1'></ul>
          </div>
        </div>
      </div>
      <div className='tableWrapper flex-1'>
        <div className='border mb-2'>
          <h2 className='bg-base-300 p-2 font-bold'>Pivot Table Fields (Drag and drop in column, row or values)</h2>
          <ul className='flex space-x-1 *:bg-base-200 *:px-2 *:py-1 *:rounded p-2'>
            <li>Buyer</li>
            <li>Style</li>
            <li>Order Number</li>
            <li>Color</li>
            <li>Order Qty.</li>
            <li>Price/pcs</li>
            <li>Remarks</li>
            <li>Others</li>
          </ul>
        </div>
        <div className='p-2 border'>
          <div className="flex justify-between items-center">
            <div className="title font-bold text-lg">Pivot Table</div>
            <div className='flex'>
              <Input placeholder='Search in table' />
              <Button onClick={() => {}}>Export To PDF</Button>
              <Button onClick={() => {}}>Export To Excel</Button>
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
              <td rowSpan={4}>Zara</td>
              <td rowSpan={2}>XYZ</td>
              <td>OD001</td>
              <td>Red</td>
              <td className='text-end'>1000</td>
              <td className='text-end'>200</td>
            </tr>
            <tr>
              <th>2</th>
              <td>OD002</td>
              <td>Blue</td>
              <td className='text-end'>1000</td>
              <td className='text-end'>200</td>
            </tr>
            <tr>
              <th>+</th>
              <th colSpan={4} className='text-end bg-black/20'>2000</th>
              <th className='text-end bg-black/20'>400</th>
            </tr>
            <tr>
              <th>3</th>
              <td>SDF</td>
              <td>OD003</td>
              <td>White</td>
              <td className='text-end'>800</td>
              <td className='text-end'>300</td>
            </tr>
            <tr>
              <th>+</th>
              <th colSpan={5} className='text-end bg-black/20'>2800</th>
              <th className='text-end bg-black/20'>700</th>
            </tr>
            <tr>
              <th>4</th>
              <td>H&M</td>
              <td>SDF</td>
              <td>OD004</td>
              <td>White</td>
              <td className='text-end'>800</td>
              <td className='text-end'>400</td>
            </tr>
            <tr>
              <th>5</th>
              <td>Lindex</td>
              <td>XXY</td>
              <td>OD005</td>
              <td>Black</td>
              <td className='text-end'>800</td>
              <td className='text-end'>400</td>
            </tr>
          </tbody>

          <tfoot>
            <tr className='bg-base-200'>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th>4400</th>
              <th>1500</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

export default Table



