import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([{}]);
  
  useEffect(()=> {
    fetch("/example").then(res => res.json()).then(res => setData(res)).catch(error => console.error(error))
  }, [])
   return (
    <div className="App">
      <h1>Hello RJP</h1>
      <h2>{data.name}</h2>
       <h2>{data.message}</h2>

    </div>
  );
}

export default App;
