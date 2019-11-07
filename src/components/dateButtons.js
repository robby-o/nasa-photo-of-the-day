import React from 'react';

const DateButton = props => {
  return (
    <>
      <button onClick={() => props.changeDay(props.date)}>{props.text}</button>
    </>
  );
};

export default DateButton;
