import React, { useState } from 'react';

function ProductDesc({ singleProduct }) {

  return (
    <div>
      <h3>{singleProduct.slogan}</h3>
      <p>{singleProduct.description}</p>
    </div>
  )
}

export default ProductDesc;