import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr className="editform">
      <td>
        <input
          type="text"
          name="Name"
          value={editFormData.Name}
          placeholder="Enter a name"
          required
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="City"
          value={editFormData.City}
          placeholder="Enter a city"
          required
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="email"
          name="Email"
          value={editFormData.Email}
          placeholder="Enter an email"
          required
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="number"
          name="PhoneNumber"
          value={editFormData.PhoneNumber}
          placeholder="Enter a phone number"
          required
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <button type="submit">Save</button>
        <button
          className="margin-left"
          type="button"
          onClick={handleCancelClick}
        >
          Cancle
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
