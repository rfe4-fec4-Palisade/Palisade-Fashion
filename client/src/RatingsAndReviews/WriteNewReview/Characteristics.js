import React, { useState } from 'react';

const Characteristics = (props) => {
  console.log(props);
  if (!props.metadata.characteristics.hasOwnProperty(props.char.field)) {
    return null;
  }

  return (
    <div onChange={(event)=>{props.handleCharChange(props.char.field, event.target.value)}}>
      {props.char.field}
      <input type="radio" name={props.field} value="1"/> {props.char.lowest}
      <input type="radio" name={props.field} value="2"/>
      <input type="radio" name={props.field} value="3"/>
      <input type="radio" name={props.field} value="4"/>
      <input type="radio" name={props.field} value="5"/> {props.char.highest}
    </div>
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