import React, { useState, useEffect } from 'react';
import RatingStars from '../sharedComponents/Stars/RatingStars.js';

function ProductInfo ({ currentProduct, metadata, totalReviews }) {

  const cursor = {
    cursor: 'pointer'
  }

  return (
    <div>

      <RatingStars metadata={metadata}/>
      <br></br>
      <a href="#Reviews" style={cursor}>Read All {totalReviews} Reviews</a>
      <br></br>
      <span>Category: {currentProduct.category}</span>
      <br></br>
      <span>Product: {currentProduct.name}</span>

    </div>
  )
}

export default ProductInfo;
