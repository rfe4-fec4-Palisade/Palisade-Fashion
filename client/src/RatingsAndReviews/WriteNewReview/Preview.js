import React from 'react';
import Styled from 'styled-components';

const Img = Styled.img`
height: 65px;
width: 65px;
object-fit: cover;
border: 1px solid gray;
`
const SpaceV = Styled.div`
width: 5px;
`

const Panel = Styled. div`
display: flex;
flex-direction: row;
`

const Preview = ( {photo} ) => {
  return (
    <Panel>
      <Img src={photo} alt="hello"/>
      <SpaceV></SpaceV>
    </Panel>
  )
}

export default Preview;