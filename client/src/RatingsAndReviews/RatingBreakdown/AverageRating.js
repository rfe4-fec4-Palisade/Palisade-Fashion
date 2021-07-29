import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import RatingStars from '../../sharedComponents/Stars/RatingStars.js';


const AverageRating = ({metadata}) => {
  return (
    <div>
      <div>
        <RatingStars metadata={metadata}/>
      </div>
    </div>
  )
}

export default AverageRating