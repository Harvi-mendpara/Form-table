import React from "react";
import Table from "react-bootstrap/Table";

const TableData = ({ data }) => {
  return (
    <>
      <div style={{ marginLeft: "300px" }}>
        <div className="col-sm-8">
          <div className="shadow">
            <Table striped bordered hover>
              <thead>
                <tr>
                  {
                    data.map((item) => (
                      <th key={item}>{item}</th>
                    ))}
                </tr>
              </thead>
              
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableData;
