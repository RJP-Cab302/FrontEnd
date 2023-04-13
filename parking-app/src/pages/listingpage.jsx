import React from "react";
import '../styles/listingpage.css'
import Vehicle from "../components/Vehicle";
export default function ListingPage()
{
    const vehicleData = [
  { front: '1234', rear: '1234', description: 'A powerful pickup truck' },
    { front: '2222', rear: '2222', description: 'A reliable sedan' },
    { front: '3322', rear: '3322', description: 'A sleek sports car' }
];
    return(
        <div>   <h1>This is listing page</h1>
        <div className="main">
            <button>Add Vechicle</button>
        
           {vehicleData.map((vehicle, index) => (
        <Vehicle key={index} front={vehicle.front} rear={vehicle.rear} description={vehicle.description} />
      ))}
        </div>
        </div>
    );
}