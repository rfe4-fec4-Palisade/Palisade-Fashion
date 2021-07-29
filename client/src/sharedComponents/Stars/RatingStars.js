import React, {useState, useEffect} from 'react';
import Star from './Stars.js';
import Styled from 'styled-components';
import {FaRegStar} from 'react-icons/fa';

const StyledStars = Styled.div `
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const Container = Styled.div`
  padding: 16px;
  margin: 16px auto;
  `
  const RatingStars = (props) => {
    const [average, setAverage] = useState(0)
    const [grades, setGrades] = useState([1, 2, 3, 4, 5]);
  let avg = 0
  useEffect(()=> {
    var total = 0
    var num = 0
    if (props.metadata.ratings) {
      for (const [key, value] of Object.entries(props.metadata.ratings)) {
        console.log(`${key}: ${value}`);
        total += key * value;
        num += +value
      }
      avg = total/num
      console.log('useeffect', total, num, avg, average)
      setAverage(avg);
    }
  }, [props.metadata.ratings])

  console.log(average)
  return (
    <Container>
      <StyledStars>
        {grades.map((grade, index) =>  {
          return (
            <Star index={index+1} key={grade} grade={grade} average={average}/>
          )
        })
}

      </StyledStars>
    </Container>
  )
}

export default RatingStars;