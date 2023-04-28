import React from 'react'
import { useState } from 'react'
export default function UserProfile() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const changeName = (event) => {
    setName(event.target.value);
  };
  const changeAddress = (event) => {
    setAddress(event.target.value);
  };
  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };
  if (isEditing) {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div>
                <span>Nmae</span>
              </div>
              <input
                type="text"
                value={name}
                onChange={changeName}
              />
            </div>
            <div className="col">
              <div>
                <span>Address</span>
              </div>
              <input type="text" value={address} onChange={changeAddress} />
            </div>
          </div>
              {/* Add class "align-items-end" to align child elements to bottom */}
              <button className="save-cancel" onClick={handleSaveClick}>
                Save
              </button>
              <button className="save-cancel" onClick={handleCancelClick}>
                Cancel
              </button>
            </div>
          </div>
    );
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <span>Name: {name}</span>
          </div>
          <div className="col">
            <span>Address: {address}</span>
          </div>
          <div className="col">
            {" "}
            {/* Add class "align-items-end" to align child elements to bottom */}
            <button className="edit" onClick={handleEditClick}>
              Edit
            </button>
          </div>
        </div>


      </div>
    </div>

  )
}

