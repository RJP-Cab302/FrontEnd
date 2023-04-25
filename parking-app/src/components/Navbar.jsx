import "./navbar.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


// navigation links
export default function Navbar() {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);}
    setName(localStorage.getItem("name"));
  }, []);
 const handelLogout = () => {
   localStorage.clear();
   window.location.href = "/login";
 };
  return (
    <nav>
      <ul>
        <li>
          {token ? (
            <Link to="/user">{name}</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/vehicles">Vehicles</Link>
        </li>
        <li>
          <Link to="/book">Book</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          {token ? (
            <Link onClick={handelLogout}>Logout</Link>
          ): null}
        </li>
      </ul>
    </nav>
  );
}
