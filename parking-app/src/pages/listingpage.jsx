import React, { useState } from "react";
import '../styles/listingpage.css'
import Vehicle from "../components/Vehicle";
import { Button } from "react-bootstrap";

export default function ListingPage() {
  const [vehicleList, setVehicleList] = useState([
    { front: '1234', rear: '1234', description: 'A powerful pickup truck' },
    { front: '2222', rear: '2222', description: 'A reliable sedan' },
    { front: '3322', rear: '3322', description: 'A sleek sports car' }
  ]);

  const handleAddVehicle = () => {
    setVehicleList([...vehicleList, { front: '', rear: '', description: '' }]);
  };

  return (
    <div>
      <h1>This is the listing page</h1>
      <div className="main">
        <Button onClick={handleAddVehicle}>Add Vehicle</Button>
        {vehicleList.map((vehicle, index) => (
          <Vehicle key={index} front={vehicle.front} rear={vehicle.rear} description={vehicle.description} />
        ))}
      </div>
    </div>
  );
}
