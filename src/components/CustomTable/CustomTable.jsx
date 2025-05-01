import React, { useState, useEffect } from "react";
import "./CustomTable.css";

const CustomTable = ({ empData, currentPage }) => {
  const [paginationData, setpaginationData] = useState([]);

  useEffect(() => {
    const calculateList = (empData, currentPage) => {
      if (!empData || empData.length === 0) {
        return [];
      }

      let startIndex = (currentPage - 1) * 10;
      let endIndex = Math.min(startIndex + 10, empData.length);
      return empData.slice(startIndex, endIndex);
    };

    setpaginationData(calculateList(empData, currentPage));
  }, [empData, currentPage]);

  return (
    <div>
      {paginationData && paginationData.length > 0 ? (
        <table className="table">
          <thead>
            <tr className="table-heading">
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {paginationData &&
              paginationData.length > 0 &&
              paginationData.map((item) => (
                <tr className="table-row">
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <div>No data to display</div>
      )}
    </div>
  );
};

export default CustomTable;
