import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Column = ({ ColumnSubmit,handleToastError, handleToastSuccess }) => {
  const [data, setData] = useState("");


  console.log("dataaaaaaaaaaa", data);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data === "") {
      handleToastError("Cannot be blank");
      return;
    }
    handleToastSuccess("Record submitted successfully")
    ColumnSubmit(e, data);
    setData();
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
            onChange={(e) => setData(e.target.value)}
          />
        </Form.Group>
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
