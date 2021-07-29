import React from 'react';
import dateParser from '../../helperFunctions/dateParser.js';
import styled from 'styled-components';
import Helpful from '../../sharedComponents/Helpful.js'
import Response from './Response';
import axios from 'axios';

const Tile = styled.div`
    border-bottom: 1px solid grey;
    font-family: Helvetica, sans-serif;
    font-size: 12px;
    color: grey;
`;

const Summary = styled.div`
    font-weight: bold;
`;

const sendHelpful = (id) => {
  axios.put(`/reviews/${id}/helpful`, {review_id: id})
    .then((response) => {console.log("You marked this review as helpful")})
    .catch((err) => {console.log(err)})
}

const sendReport = (id) => {
  axios.put(`/reviews/${id}/report`, {review_id: id})
  .then((response) => {console.log('You reported this review')})
  .catch((err) => {console.log(err)})
}

const ReviewTile = (props) => {
  if (props.filter.length === 0) {
    return (
      <Tile>
        <div> Star rating here: {props.review.rating} </div>
        <div>{props.review.reviewer_name}</div>
        <div>{dateParser(props.review.date)}</div>
        <Summary>{props.review.summary}</Summary>
        <div>{props.review.body}</div>
        {props.review.recommend ?
        <div> ✓ I recommend this product </div> : null}
        <Response response={props.review.response}/>
        <Helpful helpfulness={props.review.helpfulness} sendHelpful={sendHelpful} sendReport={sendReport} id={props.review.review_id} />
      </Tile>
    )
  } else {
    if (props.filter.indexOf(+props.review.rating) !== -1) {
      return (
        <Tile>
          <div> Star rating here: {props.review.rating} </div>
          <div>{props.review.reviewer_name}</div>
          <div>{dateParser(props.review.date)}</div>
          <Summary>{props.review.summary}</Summary>
          <div>{props.review.body}</div>
          {props.review.recommend ?
            <div> ✓ I recommend this product </div> : null}
          <Response response={props.review.response}/>
          <Helpful helpfulness={props.review.helpfulness} sendHelpful={sendHelpful} sendReport={sendReport} id={props.review.review_id}/>
        </Tile>
      )
    } else {
      return null;
    }
  }
}

export default ReviewTile;