import React from 'react';

const Photo = props => {
  return (
    <>
      <img alt='NASA space shot' src={props.imgUrl} />
    </>
  );
};

export default Photo;
