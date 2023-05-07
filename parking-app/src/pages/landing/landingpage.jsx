import Login from "../../components/login/Login";
import React, { useState, useEffect } from 'react';
import "./landingpage-styles.scss";
import { Link } from "react-router-dom";

import {Button, Carousel } from 'react-bootstrap';
export default function LandingPage() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/example").then(res => res.json()).then(res => setData(res)).catch(error => console.error(error))
  }, [])
  return (
    

      <div>
        <LandingCarousel />

      

      
      </div>
    );
  }


  function LandingCarousel() {
    
  
    return (
      <Carousel fade>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="img/beach-parachute-picture-resized.jpg"
            alt="First slide"
          />
          <Carousel.Caption className='captionStyle'>
            <div className='slideContent'>
            <h1>Welcome to the RJP Parking app</h1>
            <h2>Book parking to reserve a good spot</h2>
            <Button as={Link} to="/book" variant = "outline-primary">Make a Booking</Button>
            </div>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          
          <img
            className="d-block w-100"
            src="img/evening-picture-resized.jpg"
            alt="Second slide"
          />
          
  
          <Carousel.Caption className='captionStyle'>
          <div className='slideContent'>
            <h1>Welcome to the RJP Parking app</h1>
            <h2>Register your vehicle</h2>
            <Button as={Link} to="/vehicles" variant = "outline-primary">Register</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval = {3000}>
          <img
            className="d-block w-100"
            src="img/rainforest-picture.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption className='captionStyle'>
          <div className='slideContent'>
            <h1>Welcome to the RJP Parking app</h1>
            <h2>Create or access your account</h2>
            <Button as={Link} to="/login" variant = "outline-primary">Sign In</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

 