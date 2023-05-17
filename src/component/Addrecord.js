import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddRecord({ tableData, RecordSubmit }) {
  const [record, setRecord] = useState({});
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecord((prevRecord) => ({ ...prevRecord, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formValid = true;
    const newErrors = {};

    tableData.forEach((item) => {
      if (!record[item]) {
        newErrors[item] = "Field is required";
        formValid = false;
      }
    });

    if (!formValid) {
      setErrors(newErrors);
      toast.error("Please fill in all required fields");
      return;
    }

    RecordSubmit(e, record);
    toast.success("Record submitted successfully");
    setRecord({});
  };

  return (
    <>
      <Form>
        {tableData.map((item, index) => (
          <Form.Group key={index}>
            <Form.Label>{item}</Form.Label>
            <Form.Control
              type="text"
              name={item}
              value={record[item] || ""}
              onChange={handleInputChange}
              isInvalid={!!errors[item]}
              required
            />
            <Form.Control.Feedback type="invalid" style={{marginTop:'-15px'}}>{errors[item]}</Form.Control.Feedback>
          </Form.Group>
        ))}
        <Button
          type="submit"
          variant="secondary"
          style={{ marginTop: "10px", width: "100px" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form>
      <ToastContainer position="top-right" />
    </>
  );
}
