import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Column from "./component/Column";
import Addrecord from "./component/Addrecord";
import "bootstrap/dist/css/bootstrap.css";
import TableData from "./component/TableData";

export default function App() {
  const [showColumnModal, setShowColumnModal] = useState(false);
  const [showAddrecordModal, setShowAddrecordModal] = useState(false);
  const [tableData, setTableData] = useState([]);

  console.log('tableData', tableData);

  useEffect(() => {
    const data = localStorage.getItem("tableData");
    if (data) {
      setTableData(JSON.parse(data));
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
    const updatedTableData = [...tableData, data];
    console.log('updatedTableData@@@@@@', updatedTableData)
    setTableData(updatedTableData);
    localStorage.setItem("tableData", JSON.stringify(updatedTableData));
    handleCloseAddrecordModal();
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
              <Column ColumnSubmit={onColumnFormSubmit} />
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
              <Addrecord
                RecordSubmit={onAddrecordFormSubmit}
                tableData={tableData}
              />
            </Modal.Body>
          </Modal>
        </div>
      </div>
      <TableData data={tableData} />
    </>
  );
}
