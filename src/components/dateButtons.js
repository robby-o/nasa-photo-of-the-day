import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 20%;
  border: none;
  border-radius: 4px;
  box-shadow: 1px 1px black;
  background-color: ivory;
  color: DarkSlateGrey;
  font-weight: bold;
  padding: 2%;
  font-size: 1rem;

  :hover {
    background-color: AntiqueWhite;
  }

  :active {
    background-color: AntiqueWhite;
    box-shadow: 0 2px black;
    transform: translateY(4px);
  }
`;

const DateButton = props => {
  return (
    <StyledButton onClick={() => props.changeDay(props.date)}>
      {props.text}
    </StyledButton>
  );
};

export default DateButton;
