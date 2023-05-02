import React from "react";
import "./vehicle-styles.scss";
import { useState, useEffect } from "react";

export default function Vehicle(props) {
  const rego = props.rego;
  const make = props.make;
  const model = props.model;
  const type = props.type;
  const [token, setToken] = useState("");
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  const handelDelete = () => {
    let headersList = {
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      vehicle_rego: rego,
      token: token,
    });

    fetch("/delete_vehicle", {
      method: "DELETE",
      body: bodyContent,
      headers: headersList,
    });

    
    window.location.reload();
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <span>Number Plate: {rego}</span>
          </div>
          <div className="col">
            <span>Make: {make}</span>
          </div>
          <div className="col">
            {" "}
            {/* Add class "align-items-end" to align child elements to bottom */}
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
            <button variant="secondary" onClick={handelDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
