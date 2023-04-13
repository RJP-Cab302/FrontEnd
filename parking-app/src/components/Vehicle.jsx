import React from "react";
import './vehicle.css'
export default function Vechicle(props)
{
    const { front, rear, description,onDelete } = props;

    return(
        <div
        className="main-vehicle">
        
      <div>Front License Plate: {front} <button>Delete</button></div>
      <div>Rear License Plate: {rear}</div>
      <div>Description: {description}</div>
      
    </div>
    );
}