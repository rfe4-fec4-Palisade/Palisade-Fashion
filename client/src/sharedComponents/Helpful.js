import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// must pass in a function called sendHelpful. Also pass in the id as a prop!
// for onClick that will make a post request.

const Button = styled.span`
  text-decoration: underline;
  `

const Thanks = styled.span`
   color: black;

`

const Helpful = (props) => {
  const [clickedH, setClickedH] = useState(false);
  const [clickedR, setClickedR] = useState(false);

<<<<<<< HEAD
  // console.log('props from helpful component', props);
=======
  useEffect(()=>{
    setClickedH(false);
    setClickedR(false);
  }, [props.id])
>>>>>>> 165e42acd64c02807cdb23350694e0096e6eed44

  return (
    <div style={props.style}>
      {`Helpful? `}
      {clickedH ? <Thanks>Thank you for your feedback</Thanks> : <Button onClick={()=>{props.sendHelpful(props.id); setClickedH(true) }}>{`Yes`}</Button>}
      <span>{` (${props.helpfulness})  |  `}</span>
      {clickedR ? <Thanks>Thank you for your feedback</Thanks> : <Button onClick={()=>{props.sendReport(props.id); setClickedR(true) }}>{`Report`}</Button>}
    </div>
  )
};

export default Helpful;
