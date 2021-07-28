import React from 'react';
import {FaRegStar} from 'react-icons/fa';

const Star = (props) => {
  return (
    <div className='star' name='rating' id={props.grade} value={props.index}>
      <span><FaRegStar/></span>
    </div>
  )
}

export default Star;