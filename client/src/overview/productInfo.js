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
    left: '67%',
    width: '25%',
    zIndex: '1'
  }

  const category = {
    marginTop: '12px',
    marginBottom: '0px',
    fontSize: '1.19em'
  }
  // font-size: 1.17em;

  const productName = {
    margin: '7px',
    fontSize: '2.2em'
  }
  // font-size: 2em;

  return (
    <div style={info}>

      <RatingStars metadata={metadata}/>
      <a href="#Reviews" style={cursor}>Read All {totalReviews} Reviews</a>
      <br></br>
      <div style={category}>{currentProduct.category}</div>
      <div style={productName}>{currentProduct.name}</div>

    </div>
  )
}

export default ProductInfo;
