import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Styled from 'styled-components';

const Img = Styled.img`
height: auto;
width: 75px;
border: 1px solid gray;
`
const SpaceV = Styled.div`
width: 5px;
`

const Panel = Styled. div`
display: flex;
flex-direction: row;
`

function PhotoPrev ( props ) {

  console.log('props from photoprev', props)

  if (props.photo.length === 0) {
    return (
      <Panel>
      <Img src={'https://i.stack.imgur.com/y9DpT.jpg'} alt="hello"/>
      <SpaceV></SpaceV>
    </Panel>
    )
  }
  return (
    <Panel>
    <Img src={props.photo} alt="hello"/>
    <SpaceV></SpaceV>
  </Panel>
  )
}

export default PhotoPrev;