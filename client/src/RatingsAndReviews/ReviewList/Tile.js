import React from 'react';
import dateParser from '../../helperFunctions/dateParser.js'

const ReviewTile = (props) => {
  console.log('hello from review tile', props.review.date)
  console.log('checking to see if date Parser works', dateParser(props.review.date))
  return (
    <div>
      <div> STAR RATING HERE </div>
      <div>{props.review.reviewer_name}</div>
      <div>{dateParser(props.review.date)}</div>
      <div>{props.review.summary}</div>
      <div>{props.review.body}</div>
      {props.review.recommend ?
        <div> ✓ I recommend this product </div> : null}
      {props.review.response ?
        <div>
          Response from seller:
          {props.review.response}
          </div>
          : null}
      {/* <div>
        Helpful?
        <span>Yes</span>
        <span>{props.review.helpfulness}</span>
        <span>
      </div> */}

    </div>
  )
}

export default ReviewTile;