import React from 'react';
import dateParser from '../../helperFunctions/dateParser.js';
import styled from 'styled-components';
import Helpful from '../../sharedComponents/Helpful.js'
import Response from './Response';
import axios from 'axios';
import IndReviewStars from './Stars/IndReviewStars.js'
import Photos from './Photos.js'

const Tile = styled.div`
border-bottom: 1px dashed #E0E0E0;
font-family: Arial, sans-serif;
font-size: 12px;
display:flex;
flex-direction: column;
width: 100%
float: left;
padding: 10px;
`;

const Summary = styled.div`
font-size: 15px;
// font-weight: bold;
padding: 5px;
`;

const Body = styled.div`
padding: 5px;
font-size: 12px;
color: grey;
`;

const Star = styled.div`
padding: 5px;
`
const Space = styled.div`
width: 7px;
`

const NameDate = styled.div`
display: flex;
flex-direction: row;
color: grey;
`

const TileTop = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

const PhotoPanel = styled.div`
background: #F0F0F0;
padding: 5px;
display: flex;
flex-direction: row;
`

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
        <TileTop>
          <Star>
            <IndReviewStars rating={props.review.rating}/>
          </Star>
          <NameDate>
            <div>{props.review.reviewer_name}</div>
            <Space></Space>
            <div>{dateParser(props.review.date)}</div>
          </NameDate>
        </TileTop>
        <Summary>{props.review.summary}</Summary>
        <Body>{props.review.body}</Body>
        {props.review.recommend ?
        <Body> ✓ I recommend this product </Body> : null}
        {props.review.photos.length >= 1 ?
          <PhotoPanel>
            {props.review.photos.map((photo) => <Photos key={photo.id} id={photo.id} url={photo.url}/>)}
          </PhotoPanel> : null
        }
        <Response response={props.review.response}/>
        <Helpful helpfulness={props.review.helpfulness} sendHelpful={sendHelpful} sendReport={sendReport} id={props.review.review_id} />
      </Tile>
    )
  } else {
    if (props.filter.indexOf(+props.review.rating) !== -1) {
      return (
        <Tile>
        <TileTop>
          <Star>
            <IndReviewStars rating={props.review.rating}/>
          </Star>
          <NameDate>
            <div>{props.review.reviewer_name}</div>
            <Space></Space>
            <div>{dateParser(props.review.date)}</div>
          </NameDate>
        </TileTop>
        <Summary>{props.review.summary}</Summary>
        <Body>{props.review.body}</Body>
        {props.review.recommend ?
        <Body> ✓ I recommend this product </Body> : null}
        <Response response={props.review.response}/>
        <Helpful helpfulness={props.review.helpfulness} sendHelpful={sendHelpful} sendReport={sendReport} id={props.review.review_id} />
      </Tile>
      )
    } else {
      return null;
    }
  }
}

export default ReviewTile;