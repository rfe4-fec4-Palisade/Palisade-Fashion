import React, { useState, useEffect } from 'react';
import Percentage from './Percentage.js';
import Styled from 'styled-components'

const ProgressBar = Styled.div`

display: flex;
align-items: flex-start;
`

const Element = Styled.div`
`
const StarRating = ({total, count, rating, filter}) => {

  if(!count) {
    return null;
  }

  return (
    <ProgressBar>
      <Element onClick={()=>{filter()}}>{rating} stars</Element>
      <Percentage percentage={count/total * 100}/>
      <Element>{count}</Element>
    </ProgressBar>
  )
}

export default StarRating;