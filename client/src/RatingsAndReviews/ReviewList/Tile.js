import React from 'react';
import dateParser from '../../helperFunctions/dateParser.js';
import styled from 'styled-components';
import Helpful from '../../sharedComponents/Helpful.js'

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
      <Helpful helpfulness={props.review.helpfulness}/>



    </Tile>
  )
}

export default ReviewTile;