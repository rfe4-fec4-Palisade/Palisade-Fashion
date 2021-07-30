import React, { useState, useEffect } from 'react';
import Percentage from './Percentage.js';
import Styled from 'styled-components';

const ProgressBar = Styled.div`
display: flex;
align-items: flex-start;
height: 25px;
padding: 5px;
`


const Element = Styled.div`
  height: 25px;
  width: 25px;
  padding: 5px;
`
const Filtered = Styled.div`
  text-decoration: underline;
  color: black;
  white-space: nowrap;
  padding-right: 5px;
`

const NotFiltered = Styled.div`
  text-decoration: underline;
  color: grey;
  white-space: nowrap;
  padding-right: 5px;
  &:hover {
    color: black
  }
`

const StarRating = ({total, count, rating, filter, onFilter}) => {
  if(!count) {
    return null;
  }

const renderButton = () => {
  if (filter.indexOf(rating) !== -1) {
    return <Filtered value={rating} onClick={()=>{onFilter(rating)}}>{rating} stars</Filtered>
  } else {
    return <NotFiltered value={rating} onClick={()=>{onFilter(rating)}}>{rating} stars</NotFiltered>
  }
}

  return (
    <ProgressBar>
      {renderButton()}
      <Percentage percentage={count/total * 100}/>
      <Element>{count}</Element>
    </ProgressBar>
  )
}

export default StarRating;