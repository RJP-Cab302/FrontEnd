import React, { useState } from "react";
import '../styles/listingpage.css'
import Vehicle from "../components/Vehicle";
import { Modal, Button, Form } from "react-bootstrap";

export default function ListingPage() {
  const [vehicleList, setVehicleList] = useState([
    { front: '1234', rear: '1234', description: 'A powerful pickup truck' },
    { front: '2222', rear: '2222', description: 'A reliable sedan' },
    { front: '3322', rear: '3322', description: 'A sleek sports car' }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newVehicle, setNewVehicle] = useState({ front: '', rear: '', description: '' });

  const handleAddVehicle = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setNewVehicle({ front: '', rear: '', description: '' });
  };

  const handleSaveVehicle = () => {
    setVehicleList([...vehicleList, newVehicle]);
    handleCloseModal();
  };

  const handleChangeFront = (event) => {
    setNewVehicle({ ...newVehicle, front: event.target.value });
  };

  const handleChangeRear = (event) => {
    setNewVehicle({ ...newVehicle, rear: event.target.value });
  };

  const handleChangeDescription = (event) => {
    setNewVehicle({ ...newVehicle, description: event.target.value });
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
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Vehicle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formFront">
              <Form.Label>Front</Form.Label>
              <Form.Control type="text" placeholder="Enter front" value={newVehicle.front} onChange={handleChangeFront} />
            </Form.Group>
            <Form.Group controlId="formRear">
              <Form.Label>Rear</Form.Label>
              <Form.Control type="text" placeholder="Enter rear" value={newVehicle.rear} onChange={handleChangeRear} />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Enter description" value={newVehicle.description} onChange={handleChangeDescription} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveVehicle}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
