import { useState } from "react";
import { Button, Form } from "react-bootstrap";
// import Input from "./Input";

export default function Addrecord({ tableData, RecordSubmit }) {
  console.log("tableData----", tableData);
  const [record, setRecord] = useState({});

  console.log("record", record);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecord({ ...record, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    RecordSubmit(e, record);
    setRecord("");
  };
  if (tableData.length === 0) {
    return <div>No data available.</div>;
  }
  return (
    <Form onSubmit={handleSubmit}>
      {tableData.map((item, index) => (
        <Form.Group key={index}>
          {console.log("item-------------------", item)}
          {console.log("record-------------", record[item])}
          <Form.Label>{item}</Form.Label>
          <Form.Control
            type="text"
            name={item}
            value={record[item]}
            onChange={handleInputChange}
          />
        </Form.Group>
      ))}
      <Button
        type="submit"
        variant="secondary"
        style={{ marginTop: "10px", width: "100px" }}
      >
        Submit
      </Button>
    </Form>
  );
}
