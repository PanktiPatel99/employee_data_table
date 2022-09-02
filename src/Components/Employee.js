import React, { useState } from "react";
import { nanoid } from "nanoid";
import EmployeeData from "./EmployeeData";
import "./Employee.css";

const Employee = () => {
  const [contact, setContact] = useState(EmployeeData);
  const [addFormData, setAddFormData] = useState({
    Name: "",
    City: "",
    Email: "",
    PhoneNumber: "",
  });

  const addFormChangeHandle = (e) => {
    e.preventDefault();
    // console.log(e);
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    // console.log(newFormData);

    setAddFormData(newFormData);
  };

  const addFormSubmitHandle = (e) => {
    e.preventDefault();

    const newContact = {
      Id: nanoid(),
      Name: addFormData.Name,
      City: addFormData.City,
      Email: addFormData.Email,
      PhoneNumber: addFormData.PhoneNumber,
    };
    console.log(newContact);

    const newContacts = [...contact, newContact];
    console.log(newContacts);

    setContact(newContacts);
  };

  return (
    <div className="employee">
      <table style={{ border: "2px solid black" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Email</th>
            <th>PhoneNumber</th>
          </tr>
        </thead>
        <tbody>
          {contact.map((emp) => (
            <tr key={emp.Id} data={emp}>
              <td>{emp.Name}</td>
              <td>{emp.City}</td>
              <td>{emp.Email}</td>
              <td>{emp.PhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Add a New Employee</h2>
      <form onSubmit={addFormSubmitHandle}>
        <input
          type="text"
          name="Name"
          placeholder="Enter a name"
          required
          onChange={addFormChangeHandle}
        />
        <input
          type="text"
          name="City"
          placeholder="Enter a city"
          required
          onChange={addFormChangeHandle}
        />
        <input
          type="email"
          name="Email"
          placeholder="Enter an email"
          required
          onChange={addFormChangeHandle}
        />
        <input
          type="number"
          name="PhoneNumber"
          placeholder="Enter a phone number"
          required
          onChange={addFormChangeHandle}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default Employee;
