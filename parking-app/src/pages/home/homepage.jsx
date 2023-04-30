import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import jwt_decode from "jwt-decode";
import "./homepage-styles.scss"
export default function Home() {
    const [data, setData] = useState([{}]);
    const [user, setUser] = useState('');
    useEffect(() => {
        fetch("/example").then(res => res.json()).then(res => setData(res)).catch(error => console.error(error))
    }, [])
    useEffect(() => {
        if (localStorage.getItem("token")) {
            const token = localStorage.getItem("token");
            setUser(jwt_decode(token).user);
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
                <h2>{data.name}</h2>
                <h2>{data.message}</h2>
            </div>            
            <video autoPlay muted loop className="video">
                <source src="background-vid.mp4" type="video/mp4" />
            </video>
        </div>);
}