import React from "react";
import './vehicle.css'
import { useState } from "react";
export default function Vechicle(props) {
  const [numberPlate, setNumberPlate] = useState('');
  const [color, setColor] = useState('');
  const [description, setDescription] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const changeNumberPlate = (event) => {
    setNumberPlate(event.target.value);
  };
  const changeColor = (event) => {
    setColor(event.target.value);
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
                <span>Number Plate</span>
              </div>
              <input type="text" value={numberPlate} onChange={changeNumberPlate} />
            </div>
            <div className="col">
              <div>
                <span>Color</span>
              </div>
              <input type="text" value={color} onChange={changeColor} />
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
            <span>Number Plate: {numberPlate}</span>
          </div>
          <div className="col">
            <span>Color: {color}</span>
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
