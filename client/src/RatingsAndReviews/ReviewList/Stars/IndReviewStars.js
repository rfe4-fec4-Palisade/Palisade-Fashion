import React, {useState, useEffect} from 'react';
import Star from './Stars.js';
import Styled from 'styled-components';
import {FaRegStar} from 'react-icons/fa';

const StyledStars = Styled.div `
  display: flex;
  justify-content: left;
  gap: 8px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const Container = Styled.div`
  padding: 0px;
  margin: 0px auto;
  `
  const IndReviewStars = ({rating}) => {

    const [grades, setGrades] = useState([1, 2, 3, 4, 5]);

  return (
    <Container>
      <StyledStars>
        {grades.map((grade, index) =>  {
          return (
            <Star index={index+1} key={grade} grade={grade} average={rating}/>
          )
        })
}

      </StyledStars>
    </Container>
  )
}

export default IndReviewStars;