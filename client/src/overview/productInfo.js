import React, { useState, useEffect } from 'react';

function ProductInfo ({ currentProduct }) {

  return (
    <div>

      <span>Star Component</span>
      <br></br>
      {/* // onclick send user to Reviews section href="#Id of Ratings HTML Tag" should also display the total # of reviews for product*/}
      <a href="#Review">Read All Reviews</a>
      <br></br>
      <span>Category: {currentProduct.category}</span>
      <br></br>
      <span>Product Name: {currentProduct.name}</span>

    </div>
  )
}

export default ProductInfo;
