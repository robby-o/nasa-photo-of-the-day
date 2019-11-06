import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/header';
import Photo from './components/photo';
import Description from './components/description';

function App() {
  const [nasaInfo, setNasaInfo] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=oRvfGOLxs1ZfgRXbCVUg7ucatO9tooIhNMhkExRW`
      )
      .then(response => {
        setNasaInfo(response.data);
      })
      .catch(error => {
        console.log('something is broken...', error);
      });
  }, []);

  return (
    <div className='App'>
      <Header />
      <Photo key={nasaInfo.date} imgUrl={nasaInfo.url} />
      <Description
        key={nasaInfo.title}
        title={nasaInfo.title}
        date={nasaInfo.date}
        explanation={nasaInfo.explanation}
      />
    </div>
  );
}

export default App;
