import React, { useState } from 'react';
import ReviewTile from './Tile.js'

const List = ({sortOption, reviews, filter, num}) => {

  return (

    <div>
      {reviews.map((review, index) => {
        return index <= num ?
        <ReviewTile review={review} filter={filter}/> :
        null;
        }
      )}
    </div>
  )

}
export default List;