import './App.css';
import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import Landing from './components/Landing';
function App() {
  const [data, setData] = useState([{}]);
  
  useEffect(()=> {
    fetch("/example").then(res => res.json()).then(res => setData(res)).catch(error => console.error(error))
  }, [])
   return (
    <div className="App">
      <Header/>
      
      <div><Landing/></div>
       <p>
</p>
<p></p>
      <Footer/>
    </div>
  );
}

export default App;
