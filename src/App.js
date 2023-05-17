import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Column from "./component/Column";
import Addrecord from "./component/Addrecord";
import "bootstrap/dist/css/bootstrap.css";
import TableData from "./component/TableData";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [showColumnModal, setShowColumnModal] = useState(false);
  const [showAddrecordModal, setShowAddrecordModal] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [bodyData, setBodyData] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("tableData");
    if (data) {
      setTableData(JSON.parse(data));
    }
  }, []);
  useEffect(() => {
    const body = localStorage.getItem("bodyData");
    if (body) {
      setBodyData(JSON.parse(body));
    }
  }, []);
 
  const handleCloseColumnModal = () => setShowColumnModal(false);
  const handleShowColumnModal = () => setShowColumnModal(true);

  const handleCloseAddrecordModal = () => setShowAddrecordModal(false);
  const handleShowAddrecordModal = () => setShowAddrecordModal(true);

  const onColumnFormSubmit = (e, data) => {
    e.preventDefault();
    setTableData([...tableData, data]);
    localStorage.setItem("tableData", JSON.stringify([...tableData, data]));
    handleCloseColumnModal();
  };
  const onAddrecordFormSubmit = (e, data) => {
    e.preventDefault();
    const updatedTableData = [...bodyData, data];
    console.log('updatedTableData@@@@@@', updatedTableData)
    setBodyData(updatedTableData);
    localStorage.setItem("bodyData", JSON.stringify(updatedTableData));
    handleCloseAddrecordModal();
  };
  const handleDelete = (index) => {
    const updatedBodyData = [...bodyData];
    updatedBodyData.splice(index, 1);
    setBodyData(updatedBodyData);
    localStorage.setItem("bodyData", JSON.stringify(updatedBodyData));
  };
  const handleColumnDelete = (updatedData) => {
    setTableData(updatedData);
    localStorage.setItem("tableData", JSON.stringify(updatedData));
  };
  const handleToastSuccess = (message) => {
    toast.success(message);
  };
  
  const handleToastError = (message) => {
    toast.error(message);
  };
  return (
    <>
      <div>
        <div>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: "20vh" }}
          >
            <Button variant="secondary" onClick={handleShowColumnModal}>
              Add Column
            </Button>
          </div>
          <Modal show={showColumnModal} onHide={handleCloseColumnModal}>
            <Modal.Header closeButton>
              <Modal.Title>Column Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Column ColumnSubmit={onColumnFormSubmit} 
              handleToastSuccess={handleToastSuccess} handleToastError={handleToastError}/>
            </Modal.Body>
          </Modal>
        </div>
        <div>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: "20vh" }}
          >
            <Button variant="secondary" onClick={handleShowAddrecordModal}>
              Add Record
            </Button>
          </div>
          <Modal show={showAddrecordModal} onHide={handleCloseAddrecordModal}>
            <Modal.Header closeButton>
              <Modal.Title>Add Record Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Addrecord tableData={tableData} RecordSubmit={onAddrecordFormSubmit} 
              handleToastSuccess={handleToastSuccess} handleToastError={handleToastError}/>
            </Modal.Body>
          </Modal>
        </div>
      </div>
      <TableData data={tableData} bodyData={bodyData} onDelete={handleDelete} columnDelete={handleColumnDelete} />
      <ToastContainer position="top-right" />
    </>
  );
}
