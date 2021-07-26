import React, { useState } from 'react';
import Price from './price.js';

function ProductInfo () {
  return (
    <div>

      {/* <StarsComponent/> */}

      {/* // onclick send user to Reviews section */}
      <a href="#">Read All Reviews</a>
      <br></br>
      <span>Category: 'get category from category property'</span>
      <br></br>
      <span>Product Name: 'get product name from name property'</span>
      <br></br>
      <Price/>

    </div>
  )
}

export default ProductInfo;
