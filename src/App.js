import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/header';
import Photo from './components/photo';
import Description from './components/description';
import DateButton from './components/dateButtons';
var moment = require('moment');

function App() {
  const dateToday = moment().format('YYYY-MM-DD');

  const [nasaInfo, setNasaInfo] = useState([]);
  const [date, setDate] = useState([dateToday]);

  const minusDay = date => {
    let newDate = date;
    newDate = moment(`${newDate}`)
      .subtract(1, 'days')
      .format('YYYY-MM-DD');
    setDate(newDate);
  };
  const addDay = date => {
    let newDate = date;

    // won't go to a undefined 'future' date
    if (newDate === dateToday) {
      return setDate(date);
    } else {
      newDate = moment(`${newDate}`)
        .add(1, 'days')
        .format('YYYY-MM-DD');
      setDate(newDate);
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=oRvfGOLxs1ZfgRXbCVUg7ucatO9tooIhNMhkExRW&date=${date}`
      )
      .then(response => {
        setNasaInfo(response.data);
      })
      .catch(error => {
        console.log('something is broken...', error);
      });
  }, [date]);

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
      <DateButton changeDay={minusDay} date={date} text='Previous Day' />
      <DateButton changeDay={addDay} date={date} text='Next Day' />
    </div>
  );
}

export default App;
