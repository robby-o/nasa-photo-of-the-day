import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  width: 60%;
  padding-bottom: 2%;
`;

const Time = styled.time`
  font-weight: bold;
`;

const Description = props => {
  return (
    <>
      <h2>{props.title}</h2>
      <Time dateTime={props.date}>{props.date}</Time>
      <Paragraph>{props.explanation}</Paragraph>
    </>
  );
};

export default Description;
