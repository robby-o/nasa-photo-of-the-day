import React from 'react';

const Description = props => {
  return (
    <>
      <h2>{props.title}</h2>
      <time dateTime={props.date}>{props.date}</time>
      <p>{props.explanation}</p>
    </>
  );
};

export default Description;
