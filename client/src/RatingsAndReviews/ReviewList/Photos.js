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


const Photos = ( {id, url} ) => {
  return (
    <Panel>
      <Img src={url} alt={id}/>
      <SpaceV></SpaceV>
    </Panel>
  )
}

export default Photos;