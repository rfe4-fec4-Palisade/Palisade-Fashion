import React, { useState, useEffect } from 'react';
import Percentage from './Percentage.js';
import Styled from 'styled-components'

const ProgressBar = Styled.div`
`
const Element = Styled.span`
display: flex;
flex-direction: row;
`
const StarRating = ({total, count, rating}) => {
  // console.log('total', total)
  // console.log('count', count)
  // console.log('bar', rating)

  return (
    <ProgressBar>
      <Element>{rating} stars</Element>
      <Element><Percentage percentage={count/total * 100}/></Element>
      <Element>{count}</Element>
    </ProgressBar>
  )
}

export default StarRating;