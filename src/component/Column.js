import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Column = ({ ColumnSubmit, tableData }) => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data === "") {
      toast.error("Cannot be blank");
      return;
    }
    const checkIfExists = (value) => {
      const existingColumns = tableData;
      return existingColumns.includes(value);
    };
    const isExistingField = checkIfExists(data);
    if (isExistingField) {
      toast.error("Field already exists");
      setError("Field already exists");
      return;
    }
    toast.success("Record submitted successfully");
    ColumnSubmit(e, data);
    setData("");
    setError("");
  };
  const handleInputChange = (e) => {
    setData(e.target.value);
    setError("");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Column</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Column"
            value={data}
            onChange={handleInputChange}
          />
        </Form.Group>
        {error && <p className="text-danger">{error}</p>}
        <Button
          variant="secondary"
          type="submit"
          block
          style={{ marginTop: "10px", width: "100px" }}
        >
          Add
        </Button>
      </Form>
      <ToastContainer position="top-right" />
    </>
  );
};

export default Column;
