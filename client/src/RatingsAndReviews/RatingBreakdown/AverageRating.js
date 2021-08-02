import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import RatingStars from '../../sharedComponents/Stars/RatingStars.js';


const Panel = Styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const AverageRating = ({metadata}) => {
  const [average, setAverage] = useState(0)

  let avg = 0

  useEffect(()=> {
    var total = 0
    var num = 0
    if (metadata.ratings) {
      for (const [key, value] of Object.entries(metadata.ratings)) {
        total += key * value;
        num += +value
      }
      avg = total/num
      setAverage(avg.toFixed(1));
    }
  }, [metadata.ratings])

  return (
    <Panel>
      <h1>{average}</h1>
      <RatingStars metadata={metadata}/>
    </Panel>
  )
}

export default AverageRating