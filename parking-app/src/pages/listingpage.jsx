import React, { useState, useEffect } from "react";
import "../styles/listingpage.css";
import Vehicle from "../components/Vehicle";
import { Button } from "react-bootstrap";
import Login from "../components/Login";

export default function ListingPage() {
  const [token, setToken] = useState("");
  const [vehicleList, setVehicleList] = useState([
    { id:"", rego: "", make: "", model: "", type: "" },
  ]);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);
  useEffect(() => {
    let headersList = {
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      token: token,
    });

    fetch("/user_get_vehicles", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    })
      .then((res) => res.json())
      .then((data) => {
        let newVehicleList = [];
         for (let i = 0; i < 5; i++) {
           newVehicleList.push({
             rego: data.vehicles[i][0],
             make: data.vehicles[i][1],
             model: data.vehicles[i][2],
             type: data.vehicles[i][3],
           });
            setVehicleList(newVehicleList);
         }
      })
      .catch((error) => console.error(error));
  }, [token, vehicleList]);
  const handleAddVehicle = () => {
    setVehicleList([...vehicleList, { front: "", rear: "", description: "" }]);
  };

  if (token) {
    return (
      <div>
        <h1>This is the listing page</h1>
        <div className="main">
          <div className="main-Button">
            <Button onClick={handleAddVehicle}>Add Vehicle</Button>
          </div>
          {vehicleList.map((vehicle, index) => (
            <Vehicle
              key={index}
              vehicle_rego={vehicle.rego}
              vehicle_type={vehicle.type}
              vehicle_make={vehicle.make}
              vehicle_model={vehicle.model}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Login url="vehicles" message="Please sign in to use this page" />
      </div>
    );
  }
}
