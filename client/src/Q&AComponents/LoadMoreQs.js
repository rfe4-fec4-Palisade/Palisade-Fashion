import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

/*
Quick Description:
Component responsible for loading more Questions if there is more than 1 per product ID. Similar LoadMoreAns component, it takes in props that has a function and length.
The onClick handler allows it to change from More to Less questions based on a boolean flag set up in Q&A-items.

*/



const StyledBttn = styled.button `
float: left;
margin-left: 50px;
border: 2px solid black;
width: 250px;
text-align: center;
line-height: 30px;
padding: 10px;
font-family: Arial, sans-serif;
font-size: 12px;
justify-Content: center;
background-color: #FBFCFC;

&:hover {
  color: #EC7063
}
`;



function LoadMoreQs(props) {
  // console.log(props);
  const [isLoaded, setLoaded] = useState(false)

  const handleIfLoaded = (event) => {
    setLoaded(!isLoaded)
  }

  if (props.loadMore.leng < 3) {
    return (<StyledBttn >THERE ARE NO MORE QUESTIONS</StyledBttn>)
  }

  if (isLoaded) {
    return (
      <div>
      <StyledBttn className='addQuestions' type='submit' onClick={(event) => {props.loadMore.func(), handleIfLoaded()} }>LESS ANSWERED QUESTIONS</StyledBttn>
    </div>
    )
  }


  return(
    <div>
      <StyledBttn className='addQuestions' type='submit' onClick={(event) => {props.loadMore.func(), handleIfLoaded()} }>MORE ANSWERED QUESTIONS</StyledBttn>
    </div>
  )


};

export default LoadMoreQs;