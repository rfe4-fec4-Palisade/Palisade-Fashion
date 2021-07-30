import React, { useState } from 'react';
import styled from 'styled-components';
import AddaAnswer from './AddaAnswer.js';
import axios from 'axios';
// must pass in a function called sendHelpful. Also pass in the id as a prop!
// for onClick that will make a post request.

const Button = styled.span`
  text-decoration: underline;
  // font-size: 13px;
  // color: #566573;
  `

const Thanks = styled.span`
   color: black;
  //  font-size: 13px;
  //  color: #566573;

`


const Helpful2 = (props) => {
  const [clickedH, setClickedH] = useState(false);
  const [clickedA, setClickedA] = useState(false);

  // console.log('props from helpful component', props);

  const handleClicker = (event) => {
    setClickedA(false)
  }


  const sendHelpful = (id) => {
    axios.post(`/qa/questions/${id}/helpful`,  {

    })
    .then((res) => {
      console.log('successfully updated helpful count', res.data);
      //close button from

    })
    .catch((err) => {
      console.log('error updating helpful count', err);
    })
  }



  if (clickedA) {
    return (
      <AddaAnswer data={props} func={handleClicker}></AddaAnswer>
    )
  }

  return (
    <div style={props.style}>
      {`Helpful? `}
      {clickedH ? <Thanks>Thank you for your feedback</Thanks> : <Button onClick={()=>{sendHelpful(props.helpfulness); setClickedH(!clickedH) }}>{`Yes`}</Button>}

      <span>{` (${props.helpfulness})  |  `}</span>
      <Button onClick={()=>{ setClickedA(!clickedA) }}>{`Add Answer`}</Button>

      <span></span>
    </div>
  )
};

export default Helpful2;