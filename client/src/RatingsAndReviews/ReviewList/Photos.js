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



const Photos = ( {id, url} ) => {
  return (
    <div>
      <Img src={url} alt={id}/>
      <SpaceV></SpaceV>
    </div>
  )
}

export default Photos;