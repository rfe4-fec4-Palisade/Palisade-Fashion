import React from 'react';
import Styled from 'styled-components';

const Img = Styled.img`

`
const Preview = ( {photo} ) => {
  console.log('in preview', photo)
  return (
    <Img src={photo} alt="hello"/>
  )
}

export default Preview;