import React, { useState } from 'react';
import {RiStarFill} from 'react-icons/ri';
import Styled from 'styled-components';

const Radio = Styled.input`
position: absolute;
top: 0;
left: 0;
width: 1px;
height: 1px;
clip: rect(1px, 1px, 1px, 1px);
`

const StyledStars = Styled.div `
display: flex;
justify-content: center;
gap: 8px;
margin: 0;
padding: 0;
box-sizing: border-box;
`;

const ReviewStar = ({rating, changeRating}) => {
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const value = index+1
        return (
          <label key={value}>
            <Radio
              type="radio"
              name="rating"
              value={value}
              onClick={()=>{changeRating(value)}}
              ></Radio>
            <RiStarFill
              className="star"
              color={value <= (hover || rating) ? "black" : "e4e5e9"}
              onMouseEnter={()=>setHover(value)}
              onMouseLeave={()=>setHover(null)}
            />
          </label>
        )
      })}
    </div>
  );
};

export default ReviewStar;