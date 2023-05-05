import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

import "./homepage-styles.scss"
export default function Home() {
    const [user, setUser] = useState('');
    
    useEffect(() => {
        if (localStorage.getItem("name")) {
            setUser(localStorage.getItem("name"));
        }

    }, [])
    const handelLogout = () => {
        localStorage.clear();
        window.location.href = "/login";
    }
    if (user) {
        return (
            <div className='home-main'>
            <div className='home-text-signedin'>
                <div>
                    <h1>Hello {user}</h1>
                </div>
                <div>
                    <Button className='home-button-signout' onClick={handelLogout}>Logout</Button>
                </div>
                </div>
            <video autoPlay muted loop className="video">
                <source src="background-vid.mp4" type="video/mp4" />
            </video>
            </div>
        );
    }
    return (
        <div className='home-main'>

            <div className='home-text'>
                <div><h1>Hello RJP</h1></div>
            </div>            
            <video autoPlay muted loop className="video">
                <source src="background-vid.mp4" type="video/mp4" />
            </video>
        </div>);
}