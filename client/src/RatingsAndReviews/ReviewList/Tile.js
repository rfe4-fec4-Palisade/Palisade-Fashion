import React from 'react';
import dateParser from '../../helperFunctions/dateParser.js';
import styled from 'styled-components';

const Tile = styled.div`
    border-bottom: 1px solid grey;
    font-family: Helvetica, sans-serif;
    font-size: 12px;
    color: grey;
`;

const Summary = styled.div`
    font-weight: bold;
`;

const ReviewTile = (props) => {
  console.log('hello from review tile', props.review.date)
  console.log('checking to see if date Parser works', dateParser(props.review.date))
  return (
    <Tile>
      <div> STAR RATING HERE </div>
      <div>{props.review.reviewer_name}</div>
      <div>{dateParser(props.review.date)}</div>
      <Summary>{props.review.summary}</Summary>
      <div>{props.review.body}</div>
      {props.review.recommend ?
        <div> ✓ I recommend this product </div> : null}
      {props.review.response ?
        <div>
          Response from seller
          {props.review.response}
          </div>
          : null}
      {/* <div>
        Helpful?
        <span>Yes</span>
        <span>{props.review.helpfulness}</span>
        <span>
      </div> */}

    </Tile>
  )
}

export default ReviewTile;