import React from "react";
import EmployeeData from "./EmployeeData";
import "./Employee.css";

const Employee = () => {
  return (
    <div className="employee">
      <table className="emp_table" style={{ border: "2px solid black" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Email</th>
            <th>PhoneNumber</th>
          </tr>
        </thead>
        <tbody>
          {EmployeeData.map((emp) => (
            <tr key={emp.Id} data={emp}>
              <td>{emp.Name}</td>
              <td>{emp.City}</td>
              <td>{emp.Email}</td>
              <td>{emp.PhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Employee;
