import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Column = ({ ColumnSubmit }) => {
  const [data, setData] = useState("");

  console.log("dataaaaaaaaaaa", data);

  const handleSubmit = (e) => {
    e.preventDefault();
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
   
    </>
  );
};

export default Column;
