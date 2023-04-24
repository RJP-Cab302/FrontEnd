import React, { useState, useEffect } from "react";
import "../styles/listingpage.css";
import Vehicle from "../components/Vehicle";
import { Button } from "react-bootstrap";
import Login from "../components/Login";

export default function ListingPage() {
  const [token, setToken] = useState("");
  const [vehicleList, setVehicleList] = useState([
    { front: "1234", rear: "1234", description: "A powerful pickup truck" },
    { front: "2222", rear: "2222", description: "A reliable sedan" },
    { front: "3322", rear: "3322", description: "A sleek sports car" },
  ]);
   useEffect(() => {
     if (localStorage.getItem("token")) {
       setToken(localStorage.getItem("token"));
     }
   }, []);
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
              front={vehicle.front}
              rear={vehicle.rear}
              description={vehicle.description}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Login url="vehicles" message="Please sign in to use this page"/>
      </div>
    );
  }
}
