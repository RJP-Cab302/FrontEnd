import React from "react";
import './vehicle.css'
import { useState } from "react";
export default function Vechicle(props) {
  const [front, setFront] = useState('');
  const [rear, setRear] = useState('');
  const [description, setDescription] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const changeFront = (event) => {
    setFront(event.target.value);
  };
  const changeRear = (event) => {
    setRear(event.target.value);
  };
  const changeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
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
                <span>Front</span>
              </div>
              <input type="text" value={front} onChange={changeFront} />
            </div>
            <div className="col">
              <div>
                <span>Rear</span>
              </div>
              <input type="text" value={rear} onChange={changeRear} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div>
                <span>Description</span>
              </div>
              <input type="text" value={description} onChange={changeDescription} />
            </div>
            <div className="col"> {/* Add class "align-items-end" to align child elements to bottom */}
              <button className="save-cancel" onClick={handleSaveClick}>Save</button>
              <button className="save-cancel" onClick={handleCancelClick}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <span>Front: {front}</span>
          </div>
          <div className="col">
            <span>Rear: {rear}</span>
          </div>
          <div className="col"> {/* Add class "align-items-end" to align child elements to bottom */}
            <button className="save-cancel" onClick={handleEditClick}>Edit</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <span>Description: {description}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
