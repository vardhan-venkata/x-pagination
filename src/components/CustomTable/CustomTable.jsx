import React, { useState, useEffect } from "react";
import "./CustomTable.css";

const CustomTable = ({ employeeData, currentPage }) => {
  const [paginationData, setpaginationData] = useState([]);

  useEffect(() => {
    const calculateList = (employeeData, currentPage) => {
      if (!employeeData || employeeData.length === 0) {
        return [];
      }

      let startIndex = (currentPage - 1) * 10;
      let endIndex = Math.min(startIndex + 10, employeeData.length);
      return employeeData.slice(startIndex, endIndex);
    };

    setpaginationData(calculateList(employeeData, currentPage));
  }, [employeeData, currentPage]);

  return (
    <div>
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
          {paginationData.map((item) => (
            <tr className="table-row">
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
