
import React from "react";
import Table from "react-bootstrap/Table";
import DeleteIcon from "@mui/icons-material/Delete";

const TableData = ({ data, bodyData, onDelete,columnDelete }) => {
  const handleRowDelete = (index) => {
    onDelete(index); // Call the onDelete function with the index of the row to delete
  };

  const handleColumnDelete = (column) => {
    const updatedData = data.filter((item) => item !== column);
    columnDelete(updatedData);
  };
  return (
    <div style={{ marginLeft: "300px" }}>
      <div className="col-sm-8">
        <div className="shadow">
          <Table striped bordered hover>
            <thead>
              <tr>
                {data.map((item) => (
                  <th key={item} className="text-center">
                    {item}
                    <DeleteIcon
                      className="text-center"
                      style={{ fontSize: "20px", marginLeft: "5px", cursor: "pointer" }}
                      onClick={() => handleColumnDelete(item)}
                    />
                  </th>
                ))}
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {bodyData.map((items, index) => (
                <tr key={index}>
                  {data.map((item) => (
                    <td key={items[item]} className="text-center">
                      {items[item]}
                    </td>
                  ))}
                  <td className="text-center">
                    <DeleteIcon
                      style={{ fontSize: "20px", cursor: "pointer" }}
                      onClick={() => handleRowDelete(index)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default TableData;
