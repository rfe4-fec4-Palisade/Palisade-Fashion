import React, { useState } from 'react';

function ProductDesc({ singleProduct }) {
  // slogan
  // detailed

  return (
    <div>
      <h3>Slogan/CatchPhrase: {singleProduct.slogan}</h3>
      <p>Detailed Product Description: {singleProduct.description}</p>
    </div>
  )
}

export default ProductDesc;