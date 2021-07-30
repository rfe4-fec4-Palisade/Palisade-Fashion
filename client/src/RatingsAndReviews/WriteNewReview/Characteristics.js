import React, { useState } from 'react';
import Styled from 'styled-components';

const Panel = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  `;

const Radios = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5px;
`

const Characteristics = (props) => {

  if (!props.metadata.characteristics.hasOwnProperty(props.char.field)) {
    return null;
  }

  return (
    <Panel onChange={(event)=>{props.handleCharChange(props.char.field, event.target.value)}}>
      <div>{props.char.field}</div>
      <Radios>
        {props.char.lowest} <input type="radio" name={props.field} value="1"/>
        <input type="radio" name={props.field} value="2"/>
        <input type="radio" name={props.field} value="3"/>
        <input type="radio" name={props.field} value="4"/>
        <input type="radio" name={props.field} value="5"/> {props.char.highest}
      </Radios>
    </Panel>
  )


}

export default Characteristics

// form state  should have an array of characterstics.
// map over the array and for each characteristics, create a characteristics div that will create 5 radio buttons.


// const [size, setSize] = useState()
// const [width, setWidth] = useState()
// const [comfort, setComfort] = useState()
// const [quality, setQuality] = useState()
// const [length, setLength] = useState()
// const [fit, setFit] = useState()