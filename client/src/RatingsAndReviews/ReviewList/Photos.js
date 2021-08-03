import React from 'react';
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


const Photos = ( {id, url} ) => {
  return (
    <Panel>
      <Img src={url} alt={id}/>
      <SpaceV></SpaceV>
    </Panel>
  )
}

export default Photos;