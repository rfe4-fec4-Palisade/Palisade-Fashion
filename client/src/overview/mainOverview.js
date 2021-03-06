import React, { useState, useEffect } from 'react';
import ProductInfo from './productInfo.js';
import SelectedStyle from './stylesAndCart/DisplayStylesAndCart.js';
import SocialMedia from './socialMedia.js';
import Features from './features.js';
import ClickTracker from '../sharedComponents/ClickTracker.js';
import axios from 'axios';
import Styled from 'styled-components';


function MainOverview(props) {
  const [product, setProduct] = useState(`${props.currentProduct}`);
  const [totalReviews, setReviews] = useState(0);

  useEffect(() => { // useEffect is called after page is rendered
    function atelierReq() {
      let productID = props.currentProduct; // will be passed down as props when user clicks on an item
      axios.get(`/products/${productID}`)
      .then((res) => {
        setProduct(res.data); // res.data is an object with info of one product
      })
      .catch((err) => {
        console.log('there was an error!: ', err)
      })
    }
    atelierReq();
  }, [props.currentProduct])

  useEffect(() => {
    function reviewsReq() {
      let productID = props.currentProduct;
      axios.get(`/reviews?product_id=${productID}&count=40`)
      .then((res) => {
        setReviews(res.data.results.length);
      })
      .catch((err) => {
        console.log('there was an error!: ', err)
      })
    }
    reviewsReq();
  }, [props.currentProduct])

  const info = {
    fontFamily: 'Arial, sans-serif',
    position: 'absolute',
    top: '915px',
    width: '55%',
    left: '3%'
  }

  const entireWidget = {
    height: '990px',
    fontFamily: 'Arial, sans-serif',
    margin: '20px'
  }

  const slogan = {
    fontSize: '2.1em',
    marginTop: '25px'
  }

  const description = {
    fontSize: '1.1em',
    marginBottom: '22px'
  }

  return (
  <div style={entireWidget} id="overview" onClick={(event)=>{props.logClick(event)}} className="overview">


    <div className="productInfoAndStyles" className="overview">
      <ProductInfo currentProduct={product} metadata={props.metadata} totalReviews={totalReviews}/>
      <SelectedStyle currentProduct={product}/>
    </div>

    <div style={info}>
      <div style={slogan}>{product.slogan}</div>
      <p style={description}>{product.description}</p>
      <Features oneProduct={product}/>
      <SocialMedia/>
    </div>

  </div>
  )
}

export default ClickTracker(MainOverview);