import React from 'react';
import dateParser from '../../helperFunctions/dateParser.js'

const ReviewTile = (props) => {
  console.log('hello from review tile', props.review.date)
  console.log('checking to see if date Parser works', dateParser(props.review.date))
  return (
    <div>
      <div> STAR RATING HERE </div>
      <div></div>
      <div></div>
    </div>
  )
}

export default ReviewTile;