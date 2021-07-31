import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// must pass in a function called sendHelpful. Also pass in the id as a prop!
// for onClick that will make a post request.

const Button = styled.span`
text-decoration: underline;
&:hover {
  color: black
}
`
const Thanks = styled.span`
color: black;
`
const Text = styled.div`
color: #A9A9A9;
padding: 5px;
cursor: pointer;
`

const Helpful = (props) => {
  const [clickedH, setClickedH] = useState(false);
  const [clickedR, setClickedR] = useState(false);

  useEffect(()=>{
    setClickedH(false);
    setClickedR(false);
  }, [props.id])

  return (
    <Text>
      <div style={props.style}>
      {`Helpful? `}
      {clickedH ? <Thanks>Thank you for your feedback</Thanks> : <Button onClick={()=>{props.sendHelpful(props.id); setClickedH(true) }}>{`Yes`}</Button>}
      <span>{` (${props.helpfulness})  |  `}</span>
      {clickedR ? <Thanks>Thank you for your feedback</Thanks> : <Button onClick={()=>{props.sendReport(props.id); setClickedR(true) }}>{`Report`}</Button>}
      </div>
    </Text>
  )
};

export default Helpful;
