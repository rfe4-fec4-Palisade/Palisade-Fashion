import React, { useState, useEffect } from 'react';
import RatingStars from '../sharedComponents/Stars/RatingStars.js';

function ProductInfo ({ currentProduct, metadata, totalReviews }) {

  const cursor = {
    cursor: 'pointer'
  }

  const info = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
    left: '70%',
    width: '25%',
    zIndex: '1'
  }

  const category = {
    marginTop: '8px',
    marginBottom: '0px'
  }

  const productName = {
    margin: '7px'
  }

  return (
    <div style={info}>

      <RatingStars metadata={metadata}/>
      <a href="#Reviews" style={cursor}>Read All {totalReviews} Reviews</a>
      <br></br>
      <h3 style={category}>{currentProduct.category}</h3>
      <h1 style={productName}>{currentProduct.name}</h1>

    </div>
  )
}

export default ProductInfo;
