import React from 'react';
import Styled from 'styled-components';

const Panel = Styled.div`

`

const Img = Styled.img`
  height: 50px;
  width: 50px;
`

const Photos = ( {id, url} ) => {
  return (
    <Panel>
      <Img src={url} alt={id}/>
    </Panel>
  )

}

export default Photos;