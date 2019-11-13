import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from './components/header';
import Photo from './components/photo';
import Description from './components/description';
import DateButton from './components/dateButtons';
var moment = require('moment');

function App() {
  /* start Styled Components */
  const Container = styled.div`
    background: DarkSlateBlue;
    color: snow;
    width: 100%;
    display: flex;
    padding: 0;
    border: none;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
  `;
  const ButtonContainer = styled.div`
    width: 80%;
    padding: 2%;
    display: flex;
    justify-content: space-between;
  `;
  /* end Styled Components */

  const dateToday = moment().format('YYYY-MM-DD');

  const [nasaInfo, setNasaInfo] = useState([]);
  const [date, setDate] = useState([dateToday]);

  const minusDay = dateToChange => {
    let newDate = dateToChange;
    newDate = moment(`${newDate}`)
      .subtract(1, 'days')
      .format('YYYY-MM-DD');
    setDate(newDate);
  };

  const addDay = dateToChange => {
    let newDate = dateToChange;
    // won't go to a undefined 'future' date
    if (newDate === dateToday) {
      return setDate(dateToday);
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
    <Container>
      <Header />
      <Photo key={nasaInfo.date} imgUrl={nasaInfo.url} />
      <ButtonContainer>
        <DateButton
          key='previousDay'
          changeDay={minusDay}
          date={date}
          text='Previous Day'
        />
        <DateButton
          key='nextDay'
          changeDay={addDay}
          date={date}
          text='Next Day'
        />
      </ButtonContainer>
      <Description
        key={nasaInfo.title}
        title={nasaInfo.title}
        date={nasaInfo.date}
        explanation={nasaInfo.explanation}
      />
    </Container>
  );
}

export default App;
