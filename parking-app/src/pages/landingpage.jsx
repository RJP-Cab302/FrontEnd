import Login from "../components/Login";
import React, { useState, useEffect } from 'react';
export default function LandingPage() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/example").then(res => res.json()).then(res => setData(res)).catch(error => console.error(error))
  }, [])
  return (
    <div>
      <h2>{data.name}</h2>
      <h2>{data.message}</h2>
      <Login url="home"/>
    </div>

  );
}