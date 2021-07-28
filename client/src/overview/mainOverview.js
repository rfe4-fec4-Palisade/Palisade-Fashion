import React, { useState, useEffect } from 'react';
import Description from './productDescription/Description.js';
import ProductInfo from './productInfo/productInfo.js';
import ImageGallery from './imageGallery/imageGallery.js';
import SelectedStyle from './styleSelectorAndCart/styleAndCart.js';
import { API_KEY } from '../../../config.js';
import axios from 'axios';

function MainOverview() {


    return ( <div>
      <h1>Topmost Level: Main Overview</h1>
      <ImageGallery/>
      <ProductInfo/>
      <SelectedStyle/>
      <Description/>
    </div>
    )


}

export default MainOverview;