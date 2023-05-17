import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../base.css"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Addrecord({ tableData, RecordSubmit,handleToastError, handleToastSuccess}) {
  const [record, setRecord] = useState([]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecord({ ...record, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (record === "") {
      handleToastError("All fields are required");
      return;
    }
    console.log("record", record);
    handleToastSuccess("Record submitted successfully");
    RecordSubmit(e, record);
  };
  return (
    <>
      <Form >
        {tableData.map((item, index) => (
          <Form.Group key={index}>
            <Form.Label>{item}</Form.Label>
            <Form.Control
              type="text"
              name={item}
              onChange={handleInputChange}
              className="was-validated "
              
            />
          </Form.Group>))}
        <Button
          type="submit"
          variant="secondary"
          style={{ marginTop: "10px", width: "100px" }}
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
      </Form>
<ToastContainer position="top-right"/>
    </>
  );
}
