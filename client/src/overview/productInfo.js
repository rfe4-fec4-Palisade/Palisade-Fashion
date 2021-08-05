import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RatingStars from '../sharedComponents/Stars/RatingStars.js';

const Cursor = styled.a `
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: inline-block;

  &:hover {
    transform: scale(1.07);
    text-decoration: underline;
  }
`;

function ProductInfo ({ currentProduct, metadata, totalReviews }) {

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
      <Cursor href="#Reviews">Read All {totalReviews} Reviews</Cursor>
      <br></br>
      <div style={category}>{currentProduct.category}</div>
      <div style={productName}>{currentProduct.name}</div>

    </div>
  )
}

export default ProductInfo;
