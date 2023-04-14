import React from "react";
import './vehicle.css'
import { useState } from "react";
export default function Vechicle(props)
{
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
        <span>Front</span>
        <input type="text" value={front} onChange={changeFront} />
        <div>
          <div>
            <span>Rear</span>
            <input type="text" value={rear} onChange={changeRear} />
          </div>
          <div>
            <span>Description</span>
            <input type="text" value={description} onChange={changeDescription} />
          </div>
          <button onClick={handleSaveClick}>Save</button>
        </div>
        <button onClick={handleSaveClick}>Cancel</button>
      </div>
    );
  }

  return (
    <div>
      <span>Front; {front}</span>
     <div> <span>Rear:{rear}</span></div>
      <div> <span>Desruption:{description}</span></div>
      <button onClick={handleEditClick}>Edit</button>
    </div>
  );
}