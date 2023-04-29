import React, { useState, useEffect } from "react";
import "../styles/listingpage.css";
import Vehicle from "../components/Vehicle";
import { Button } from "react-bootstrap";
import Login from "../components/Login";

export default function ListingPage() {
  const [token, setToken] = useState("");
  const [vehicleList, setVehicleList] = useState([]);
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
         if(data.vehicles){
        for (let i = 0; i < data.vehicles.length; i++) {
          newVehicleList.push({
            rego: data.vehicles[i][0],
            make: data.vehicles[i][1],
            model: data.vehicles[i][2],
            type: data.vehicles[i][3],
          });}}
        setVehicleList(newVehicleList);
         
      })
      .catch((error) => console.error(error));
  }, [token]);
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
              rego={vehicle.rego}
              make={vehicle.make}
              model={vehicle.model}
              type={vehicle.type}
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
