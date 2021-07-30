import React, { useState } from 'react';
import ReviewTile from './Tile.js'
import Styled from 'styled-components';

const Container = Styled.div`
  height: 200px;
  overflow: auto;
`

const List = ({sortOption, reviews, filter, num}) => {

  return (
    <Container>
      {reviews.map((review, index) => {
        return index <= num ?
        <ReviewTile review={review} filter={filter} key={index}/> :
        null;
        }
      )}
    </Container>
  )

}
export default List;