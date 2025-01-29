import { Button, Input, Select, Checkbox, Table } from "knoxui-react";
import tableData from '../data/table.json';


const selectOptions = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "date", label: "Date" },
  { value: "elderberry", label: "Elderberry" },
  { value: "fig", label: "Fig" },
  { value: "grape", label: "Grape" },
];

const tableConfig = {
  data: [
    { name: "Mohan", age: 30, city: "Gurugram", dob: "2000-01-05" },
    { name: "Rohan", age: 25, city: "Agra", dob: "1999-02-12" },
    { name: "Sohan", age: 27, city: "New Delhi", dob: "1998-03-08" },
  ],
  columns: [
    { key: "name", header: "Name" },
    { key: "age", header: "Age", dataType: "int", sum: true },
    { key: "city", header: "City" },
    { key: "dob", header: "DoB", dataType: "date", formatDate:"DD-MM-YYYY" },
  ],
};

const components = [
  // Button
  {
    title: "Button",
    link: "/docs/button",
    content: (
      <div className="gap-2 grid grid-cols-2">
        <Button variant="primary" size="md">
          Primary Button
        </Button>
        <Button variant="secondary" size="md">
          Secondary Button
        </Button>
        <Button variant="error" size="md">
          Error Button
        </Button>
        <Button variant="success" size="md">
          Success Button
        </Button>
        <Button variant="warning" size="md">
          Warning Button
        </Button>
        <Button variant="ghost" size="md">
          Ghost Button
        </Button>
        <Button variant="primary" size="md" isLoading={true}>
          Loading Button
        </Button>
        <Button variant="primary" size="md" disabled={true}>
          Disabled Button
        </Button>
        <Button variant="primary" size="lg">
          Large Button
        </Button>
        <Button variant="primary" size="sm">
          Small Button
        </Button>
      </div>
    ),
  },
  // Input
  {
    title: "Input",
    link: "docs/input",
    content: (
      <div className="space-y-4">
        <Input type="text" color="primary" placeholder="Text input" />
        <Input type="password" color="error" placeholder="Enter Password" />
        <Input
          type="text"
          color="warning"
          placeholder="input with label"
          label="Enter text"
        />
        <Input
          type="text"
          color="success"
          max={10}
          placeholder="Large Input"
          size="l"
        />
      </div>
    ),
  },
  // Select
  {
    title: "Select",
    className: "row-span-2",
    content: (
      <div className="space-y-2">
        <Select
          size="s"
          color="primary"
          placeholder="Small select"
          onChange={(option) => console.log(option.value)}
          options={selectOptions}
        />
        <Select
          size="m"
          color="error"
          label="Select an option"
          onChange={(option) => console.log(option.value)}
          options={selectOptions}
        />
        <Select
          size="m"
          color="warning"
          label="Select without search"
          hideSearch
          onChange={(option) => console.log(option.value)}
          options={selectOptions}
          placeholder="Select a fruit"
          selected={"banana"}
        />
        <Select
          size="m"
          color="success"
          label="Select without search"
          multiple
          hideSearch
          onChange={(option) => console.log(option.value)}
          options={selectOptions}
          placeholder="Select multiple fruits"
          selected={["banana", "cherry"]}
        />
      </div>
    ),
  },
  // Radio
  {
    title: "Radio",
    content: (
      <div className="space-y-2"></div>
    ),
  },
  // // Checkbox
  {
    title: "Checkbox",
    content: (
      <div className="space-y-2">
        <Checkbox 
          label="Subscribe to newsletter" 
          size="lg" 
          variant="success" 
        />
        <Checkbox variant="success" checked />
      </div>
    ),
  },
  // Table
  {
    title: "Table",
    className: "col-span-2",
    content: (
      <div className="border rounded-lg overflow-hidden border-gray-800/20">
        <Table 
          tableConfig={tableConfig}
          title="Custom Table with Row Merging"
          size="m"
          sum={true}
          header={true}
        ></Table>
      </div>
    ),
  },
];

export default components;
