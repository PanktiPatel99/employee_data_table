import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick }) => {
  return (
    <tr>
      <td>{contact.Name}</td>
      <td>{contact.City}</td>
      <td>{contact.Email}</td>
      <td>{contact.PhoneNumber}</td>
      <td className="editform">
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
