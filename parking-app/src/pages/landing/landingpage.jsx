import Login from "../../components/login/Login";
import React, { useState, useEffect } from 'react';
import "./landingpage-styles.scss";
export default function LandingPage() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/example").then(res => res.json()).then(res => setData(res)).catch(error => console.error(error))
  }, [])
  return (
    <div className="landing-main">
      <div className="landing-content">
        <h2>{data.name}</h2>
        <h2>{data.message}</h2>
      </div>
      <div className="landing-login">
        <Login url="home"/>
      </div>
      <video autoPlay muted loop className="video">
                <source src="background-vid.mp4" type="video/mp4" />
      </video>
    </div>

  );
}