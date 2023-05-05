import React from "react";
import { useState, useEffect } from "react";
import {Button} from 'react-bootstrap'
import './userprofile-styles.scss'
export default function UserProfile() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      setEmail(localStorage.getItem("email"));
      setPassword(localStorage.getItem("password"));
    }
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };
  const changeName = (event) => {
    setName(event.target.value);
  };
  const changeAddress = (event) => {
    setAddress(event.target.value);
  };
  const handleSaveClick = () => {
    let headersList = {
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      name: name,
      useraddress: address,
      token: token
    });

    fetch("/update_profile", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    setIsEditing(false);
    localStorage.setItem("name", name);
    window.location.href = `/user`;
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };
  const handelDelete = () => {
    let headersList = {
      Authorization: `Basic ${btoa(`${email}:${password}`)}`,
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      token: token,
    });

    fetch("/delete", {
      method: "DELETE",
      body: bodyContent,
      headers: headersList,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    window.location.href = `/`;
  };
  if (isEditing) {
    return (
      <div className="user-profile-main">
        <div className="container">
          <div className="row">
            <div className="col">
              <div>
                <span>Nmae</span>
              </div>
              <input type="text" value={name} onChange={changeName} />
            </div>
            <div className="col">
              <div>
                <span>Address</span>
              </div>
              <input type="text" value={address} onChange={changeAddress} />
            </div>
          </div>
          {/* Add class "align-items-end" to align child elements to bottom */}
          <Button className="save-cancel" onClick={handleSaveClick}>
            Save
          </Button>
          <Button className="save-cancel" onClick={handleCancelClick}>
            Cancel
          </Button>
        </div>
        <Button onClick={handelDelete}>Delete Account</Button>
      </div>
    );
  }
  return (
    <div className="user-profile-main">
      <div className="container">
        <div className="row">
          <div className="col">
            <span>Name: {name}</span>
          </div>
          <div className="col">
            <span>Address: {address}</span>
          </div>
          <div className="col">
            {" "}
            {/* Add class "align-items-end" to align child elements to bottom */}
            <Button className="edit" onClick={handleEditClick}>
              Edit
            </Button>
          </div>
        </div>
      </div>
      <div className="user-profile-btn">
        <Button onClick={handelDelete}>Delete Account</Button>
      </div>
    </div>
  );
}
