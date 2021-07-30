import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


/*
Quick Description:
This component is responsible for the expanding or collapsing the answer list per question.
Project directions are that one answer shown per question and the button should only
appear if there is more than 1 answer available to show.

This component uses hooks and a boolean flag to determine what the anchor tag should say
ex: 'see more answers' || 'collapse' . Additionally, based on the length of answers (a prop
passed down by answerItem) and determins whether to render an anchor tag or not.

*/
const style = {

  color: '#EC7063 ',
  fontFamily: 'Gill Sans, sans-serif',
  fontWeight: 'bold',
  fontSize: '12px',
  textDecoration: 'none',
  textTransform: 'uppercase',

  '&:hover': {
    textDecoration: 'underline',
  },

  '&:active': {
    color: 'black'
  }
}

const StyledA = styled.a `
  color: #EC7063;
  font-Weight: bold;
  font-Family: Gill Sans, sans-serif;
  font-Weight: bold;
  font-Size: 12px;
  text-Decoration: none;
  text-Transform: uppercase;
  margin: 3px;

  &:hover {
    text-Decoration: underline;
    color: #273746;
  }

`;




function LoadMoreAns(props) {
  const [isLoaded, setLoaded] = useState(false)

  // console.log(props);

  const handleIfLoaded = (event) => {
    setLoaded(!isLoaded)
  }

  if (props.loadMore.leng < 2) {
    return (<div>...</div>)
  }

  if (isLoaded) {
    return (
      <div className='LoadMoreButtonDiv'>
      <StyledA className='LoadMoreButton' type='submit' onClick={(event) => {props.loadMore.func(), handleIfLoaded()} }>Collpase answers</StyledA>
    </div>
    )
  }


  return(
    <div className='LoadMoreButtonDiv'>
      <StyledA className='LoadMoreButton' type='submit' onClick={(event) => {props.loadMore.func(), handleIfLoaded()} }>See more answers</StyledA>
    </div>
  )


};

export default LoadMoreAns;