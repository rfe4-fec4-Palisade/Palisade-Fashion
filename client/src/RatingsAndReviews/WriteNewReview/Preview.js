import React from 'react';
import Styled from 'styled-components';

const Img = Styled.img`

`

const extractURL = (blob) => {
  Reader = new FileReader()
  return Reader.readAsDataURL(blob)
}
const Preview = ( {photo} ) => {
  if (photo.indexOf('blob')) {
    photo = extractURL(photo)
  }
  return (
    <Img src={photo} alt="hello"/>
  )
}

export default Preview;