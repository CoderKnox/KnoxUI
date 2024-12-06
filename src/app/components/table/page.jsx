import React from "react";
import PivotTable from "@/components/Table";

const sampleData = [
  { region: "North", product: "A", sales: 100, month: "Jan" },
  { region: "North", product: "B", sales: 200, month: "Feb" },
  { region: "South", product: "A", sales: 150, month: "Jan" },
  { region: "South", product: "B", sales: 300, month: "Feb" },
  { region: "North", product: "A", sales: 50, month: "Mar" },
];

const App = () => {
  return (
    <div className="p-6">
      <PivotTable data={sampleData} />
    </div>
  );
};

export default App;

