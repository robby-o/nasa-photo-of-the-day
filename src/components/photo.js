import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 80%;
  max-width: 800px;
`;
const Photo = props => {
  return (
    <>
      <Img alt='NASA space shot' src={props.imgUrl} />
    </>
  );
};

export default Photo;
