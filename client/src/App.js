import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import CardList from './components/CardList'
import Navbar from './components/Navbar'


const App = () => {

  const [ playerData, setPlayerData ] = useState();

  useEffect(() => {
    axios.get('http://localhost:5000/api/players')
    .then(res => {
      
      setPlayerData(res.data);
      
    })
    .catch(err => console.log(err))
  }, [])
  console.log("playerdata", playerData)
  return (
    <div className="App">
      <Navbar />
      <CardList data={playerData}/>
    </div>
  );
}

export default App;
