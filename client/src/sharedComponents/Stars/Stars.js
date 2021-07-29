import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

import Styled from 'styled-components';

const EachStar = Styled.span`
  position: relative;
  cursor: pointer;

`

const Radio = Styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 1px;
  clip: rect(1px, 1px, 1px, 1px);
  `

const renderStar = (grade, average) => {
  if (grade <= average) {
    return <EachStar><FaStar className="star"/></EachStar>
  }

  if (grade >= average && grade <= Math.ceil(average)) {
    return <EachStar><FaStarHalfAlt className="star"/></EachStar>
  }

  if (grade > Math.ceil(average)) {
    return <EachStar><FaRegStar className="star"/></EachStar>
  }
}

const Star = ( {index, grade, average} ) => {
  return (
    <label className='starry' name='rating' >
      {renderStar(grade, average)}
    </label>
  )
}

export default Star;

// pass in average.. -1 every time.
// in this component, if the number is greater than 0.5, render a full star.
  // if it is <= 0.5 star, render a half star.
  // i it is <=0, render an empty star.
