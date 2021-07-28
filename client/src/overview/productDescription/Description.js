import React, { useState, useEffect } from 'react';
import ProductDesc from './productDesc.js';
import SocialMedia from './socialMedia.js';
import Features from './features.js';
import axios from 'axios';

function Description({ currentProduct }) {

  return (
    <div>
      <ProductDesc singleProduct={currentProduct}/>
      <Features oneProduct={currentProduct}/>
      <SocialMedia/>
    </div>
  )
}

export default Description;