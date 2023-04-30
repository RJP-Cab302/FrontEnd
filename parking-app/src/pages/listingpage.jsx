import React, { useState, useEffect } from "react";
import "../styles/listingpage.css";
import Vehicle from "../components/Vehicle";
import { Button, Modal, Form } from "react-bootstrap";
import Login from "../components/Login";

export default function ListingPage() {
  const [token, setToken] = useState("");
  const [vehicleList, setVehicleList] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [formState, setFormState] = useState({
    vehicle_rego: "",
    vehicle_type: "",
    vehicle_make: "",
    vehicle_model: "",
    token: ""

  });
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
            make: data.vehicles[i][2],
            model: data.vehicles[i][3],
            type: data.vehicles[i][1],
          });}}
        setVehicleList(newVehicleList);
         
      })
      .catch((error) => console.error(error));
  }, [token]);
  const handleAddVehicle = () => {
    setShowAddModal(true); // show the modal on click of the "Add Vehicle" button

  };

  const handleAddModalClose = () => {
    setShowAddModal(false); // hide the modal when the user clicks the close button
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      vehicle_rego: formState.vehicle_rego,
      vehicle_type: formState.vehicle_type,
      vehicle_make: formState.vehicle_make,
      vehicle_model: formState.vehicle_model,
      token,
    };
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
    console.log(formState);
    setShowAddModal(false);
     window.location.reload();
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
              type={vehicle.type}
              model={vehicle.model}
              make={vehicle.make}
            />
          ))}
        </div>

        <Modal show={showAddModal} onHide={handleAddModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Vehicle</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <label>
                Rego:
                <input
                  type="text"
                  name="vehicle_rego"
                  value={formState.vehicle_rego}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Make:
                <input
                  type="text"
                  name="vehicle_make"
                  value={formState.vehicle_make}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Model:
                <input
                  type="text"
                  name="vehicle_model"
                  value={formState.vehicle_model}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Type: 
                <input
                  type="text"
                  name="vehicle_type"
                  value={formState.vehicle_type}
                  onChange={handleInputChange}
                />
              </label>
              <Button type="submit">Submit</Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleAddModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
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
