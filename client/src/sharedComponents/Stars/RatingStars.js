import React from 'react';
import Star from './Stars.js';
import styled from 'styled-components';
import {FaRegStar} from 'react-icons/fa';

const StyledStars = styled.div `
  display: flex;
  justify-content: center;
  gap: 8px;
`;
const RatingStars = (props) => {
  console.log('rating from metadata in rating stars', props.ratings)
  const grades = [1, 2, 3, 4, 5];
  const starList = grades.map((grade, index) => {
    return <Star index={index} key={grade}/>
  })
  return (
    <StyledStars>
      Stars Here For Now
      {starList}
    </StyledStars>
  )
}

export default RatingStars;