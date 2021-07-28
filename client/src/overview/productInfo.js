import React, { useState, useEffect } from 'react';

function ProductInfo ({ currentProduct }) {
  console.log(currentProduct)
  return (
    <div>

      {/* <StarsComponent/> */}
      <span>Star Component</span>
      <br></br>
      {/* // onclick send user to Reviews section href="#Id of Ratings HTML Tag"*/}
      <a href="#">Read All Reviews</a>
      <br></br>
      <span>Category: {currentProduct.category}</span>
      <br></br>
      <span>Product Name: {currentProduct.name}</span>

    </div>
  )
}

export default ProductInfo;
