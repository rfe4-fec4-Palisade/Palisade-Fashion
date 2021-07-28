import React, { useState, useEffect } from 'react';
import Percentage from './Percentage.js';
import Styled from 'styled-components'

const ProgressBar = Styled.div`

display: flex;
align-items: flex-start;
`

const Element = Styled.div`
`
const StarRating = ({total, count, rating}) => {
  // console.log('total', total)
  // console.log('count', count)
  // console.log('bar', rating)

  return (
    <ProgressBar>
      <Element>{rating} stars</Element>
      <Percentage percentage={count/total * 100}/>
      <Element>{count}</Element>
    </ProgressBar>
  )
}

export default StarRating;