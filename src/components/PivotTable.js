'use client';

import React, { useState, useMemo } from "react";

// Helper Functions
const groupBy = (data, keys) => {
  return data.reduce((acc, row) => {
    const groupKey = keys.map((key) => row[key]).join(" | ");
    if (!acc[groupKey]) acc[groupKey] = [];
    acc[groupKey].push(row);
    return acc;
  }, {});
};

const aggregate = (group, field, func) => {
  switch (func) {
    case "sum":
      return group.reduce((acc, item) => acc + (item[field] || 0), 0);
    case "count":
      return group.length;
    case "average":
      return group.reduce((acc, item) => acc + (item[field] || 0), 0) / group.length;
    default:
      return "-";
  }
};

function PivotTable({ data }){
  // State for pivot configuration
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [values, setValues] = useState({ field: null, func: "sum" });

  // Available fields from data
  const fields = Object.keys(data[0] || {});

  // Compute Pivot Table Data
  const pivotData = useMemo(() => {
    if (!values.field) return {};

    const groupedData = groupBy(data, [...rows, ...columns]);
    const table = {};

    Object.keys(groupedData).forEach((key) => {
      const group = groupedData[key];
      const rowKey = rows.map((r) => group[0][r]).join(" | ");
      const columnKey = columns.map((c) => group[0][c]).join(" | ");
      if (!table[rowKey]) table[rowKey] = {};
      table[rowKey][columnKey] = aggregate(group, values.field, values.func);
    });

    return table;
  }, [data, rows, columns, values]);

  // Extract Row and Column Headers
  const rowKeys = Object.keys(pivotData);
  const columnKeys = useMemo(() => {
    const columnsSet = new Set();
    Object.values(pivotData).forEach((row) => {
      Object.keys(row).forEach((col) => columnsSet.add(col));
    });
    return Array.from(columnsSet);
  }, [pivotData]);

  // Helper for Dropdowns
  const handleFieldChange = (setter, field) => {
    setter((prev) => (prev.includes(field) ? prev : [...prev, field]));
  };

  const removeField = (setter, field) => {
    setter((prev) => prev.filter((f) => f !== field));
  };

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">Advanced Pivot Table</h1>

      {/* Configuration Section */}
      <div className="flex gap-4 mb-6">
        {/* Rows */}
        <div>
          <h2 className="font-semibold">Rows</h2>
          <select
            className="border rounded px-2 py-1 mb-2"
            onChange={(e) => handleFieldChange(setRows, e.target.value)}
            value=""
          >
            <option value="" disabled>
              Add Row Field
            </option>
            {fields.map((field) => (
              <option key={field} value={field}>
                {field}
              </option>
            ))}
          </select>
          <div className="flex flex-wrap gap-2">
            {rows.map((row) => (
              <span
                key={row}
                className="px-2 py-1 bg-blue-100 rounded cursor-pointer"
                onClick={() => removeField(setRows, row)}
              >
                {row} &times;
              </span>
            ))}
          </div>
        </div>

        {/* Columns */}
        <div>
          <h2 className="font-semibold">Columns</h2>
          <select
            className="border rounded px-2 py-1 mb-2"
            onChange={(e) => handleFieldChange(setColumns, e.target.value)}
            value=""
          >
            <option value="" disabled>
              Add Column Field
            </option>
            {fields.map((field) => (
              <option key={field} value={field}>
                {field}
              </option>
            ))}
          </select>
          <div className="flex flex-wrap gap-2">
            {columns.map((col) => (
              <span
                key={col}
                className="px-2 py-1 bg-green-100 rounded cursor-pointer"
                onClick={() => removeField(setColumns, col)}
              >
                {col} &times;
              </span>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="font-semibold">Values</h2>
          <select
            className="border rounded px-2 py-1 mb-2"
            onChange={(e) => setValues({ ...values, field: e.target.value })}
            value={values.field || ""}
          >
            <option value="" disabled>
              Select Value Field
            </option>
            {fields.map((field) => (
              <option key={field} value={field}>
                {field}
              </option>
            ))}
          </select>
          <select
            className="border rounded px-2 py-1"
            onChange={(e) => setValues({ ...values, func: e.target.value })}
            value={values.func}
          >
            <option value="sum">Sum</option>
            <option value="count">Count</option>
            <option value="average">Average</option>
          </select>
        </div>
      </div>

      {/* Pivot Table */}
      {values.field ? (
        <table className="border-collapse border border-gray-300 w-full text-sm">
          <thead>
            <tr>
              {/* Row Headers */}
              {rows.map((row, index) => (
                <th
                  key={`row-header-${index}`}
                  className="border border-gray-300 px-4 py-2 bg-gray-100"
                >
                  {row}
                </th>
              ))}
              {/* Column Headers */}
              {columnKeys.map((col, index) => (
                <th
                  key={`col-header-${index}`}
                  className="border border-gray-300 px-4 py-2 bg-gray-100"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rowKeys.map((rowKey, rowIndex) => (
              <tr key={`row-${rowIndex}`}>
                {/* Row Labels */}
                {rowKey.split(" | ").map((rowLabel, index) => (
                  <td
                    key={`row-label-${rowIndex}-${index}`}
                    className="border border-gray-300 px-4 py-2"
                  >
                    {rowLabel}
                  </td>
                ))}
                {/* Row Values */}
                {columnKeys.map((colKey, colIndex) => (
                  <td
                    key={`row-${rowIndex}-col-${colIndex}`}
                    className="border border-gray-300 px-4 py-2 text-center"
                  >
                    {pivotData[rowKey][colKey] || "-"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500">Please configure the pivot table above.</p>
      )}
    </div>
  );
};

export default PivotTable;
