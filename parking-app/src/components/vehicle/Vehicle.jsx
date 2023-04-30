import React from "react";
import "./vehicle-styles.scss";
import { useState, useEffect } from "react";

export default function Vehicle(props) {
  //TODO remove dummy vehicles from listing page and fetch the vehicles from DB
  const [vehicle_rego, setRegistration] = useState("");
  const [type, setType] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [token, setToken] = useState("");

  const [isEditing, setIsEditing] = useState(false);
    useEffect(() => {
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
      }
    }, []);
  const changeRegistration = (event) => {
    setRegistration(event.target.value);
  };
  const changeType = (event) => {
    setType(event.target.value);
  };
  const changeMake = (event) => {
    setMake(event.target.value);
  };
  const changeModel = (event) => {
    setModel(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    const data = { vehicle_rego, type, make, model, token };
    fetch("/add_vehicle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
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
              <input
                type="text"
                value={vehicle_rego}
                onChange={changeRegistration}
              />
            </div>
            <div className="col">
              <div>
                <span>Make</span>
              </div>
              <input type="text" value={make} onChange={changeMake} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div>
                <span>Model</span>
              </div>
              <input type="text" value={model} onChange={changeModel} />
            </div>
            <div className="col">
              <div>
                <span>Type</span>
              </div>
              <input type="text" value={type} onChange={changeType} />
            </div>
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col">
              {/* Add class "align-items-end" to align child elements to bottom */}
              <button className="save-cancel" onClick={handleSaveClick}>
                Save
              </button>
              <button className="save-cancel" onClick={handleCancelClick}>
                Cancel
              </button>
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
            <span>Number Plate: {vehicle_rego}</span>
          </div>
          <div className="col">
            <span>Make: {make}</span>
          </div>
          <div className="col">
            {" "}
            {/* Add class "align-items-end" to align child elements to bottom */}
            <button className="edit" onClick={handleEditClick}>
              Edit
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <span>Model: {model}</span>
          </div>
          <div className="col">
            <span>Type: {type}</span>
          </div>
          <div className="col">
            
          </div>
        </div>
      </div>
    </div>
  );
}
