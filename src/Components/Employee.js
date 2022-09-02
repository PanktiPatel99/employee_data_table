import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import EmployeeData from "./EmployeeData";
import "./Employee.css";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

const Employee = () => {
  const [contact, setContact] = useState(EmployeeData);
  const [addFormData, setAddFormData] = useState({
    Name: "",
    City: "",
    Email: "",
    PhoneNumber: "",
  });
  const [editFormData, setEditFormData] = useState({
    Name: "",
    City: "",
    Email: "",
    PhoneNumber: "",
  });
  const [editContactId, setEditContactId] = useState(null);

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

  const handleEditFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    // console.log(newFormData);

    setEditFormData(newFormData);
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
    // console.log(newContact);

    const newContacts = [...contact, newContact];
    // console.log(newContacts);

    setContact(newContacts);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const editedContact = {
      Id: editContactId,
      Name: editFormData.Name,
      City: editFormData.City,
      Email: editFormData.Email,
      PhoneNumber: editFormData.PhoneNumber,
    };
    // console.log(editedContact);

    const newContacts = [...contact];
    // console.log(newContacts);

    const index = contact.findIndex((contact) => contact.Id === editContactId);

    newContacts[index] = editedContact;

    setContact(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.Id);

    const formValues = {
      Name: contact.Name,
      City: contact.City,
      Email: contact.Email,
      PhoneNumber: contact.PhoneNumber,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contact];

    const index = contact.findIndex((contact) => contact.Id === contactId);

    newContacts.splice(index, 1);

    setContact(newContacts);
  };

  return (
    <div className="employee">
      <form onSubmit={handleEditFormSubmit}>
        <table style={{ border: "2px solid black" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>Email</th>
              <th>PhoneNumber</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {contact.map((emp) => (
              <Fragment>
                {editContactId === emp.Id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={emp}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a New Employee</h2>
      <form className="addform" onSubmit={addFormSubmitHandle}>
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
