import React, { useState, useEffect } from 'react';
import ProductInfo from './productInfo.js';
import SelectedStyle from './stylesAndCart/DisplayStylesAndCart.js';
import SocialMedia from './socialMedia.js';
import Features from './features.js';
import axios from 'axios';

function MainOverview(props) {
  const [product, setProduct] = useState([]);
  const [totalReviews, setReviews] = useState(0);

  useEffect(() => { // useEffect is called after page is rendered
    function atelierReq() {
      let productID = props.currentProduct; // will be passed down as props when user clicks on an item
      axios.get(`http://localhost:3000/products/${productID}`)
      .then((res) => {
        console.log('this is my response: ', res.data) // res.data is an object with info of one product
        setProduct(res.data);
      })
      .catch((err) => {
        console.log('there was an error!: ', err)
      })
    }
    atelierReq();
  }, [])

  useEffect(() => {
    function reviewsReq() {
      let productID = props.currentProduct;
      axios.get(`http://localhost:3000/reviews?product_id=${productID}&count=40`)
      .then((res) => {
        setReviews(res.data.results.length);
      })
      .catch((err) => {
        console.log('there was an error!: ', err)
      })
    }
    reviewsReq();
  }, [])


  return ( <div>
    <h1>Topmost Level: Main Overview</h1>
    <div>--------------------------------</div>
    <ProductInfo currentProduct={product} metadata={props.metadata} totalReviews={totalReviews}/>
    <div>--------------------------------</div>
    <SelectedStyle id={props.currentProduct}/>
    <div>--------------------------------</div>
    <h3>{product.slogan}</h3>
    <p>{product.description}</p>
    <Features oneProduct={product}/>
    <SocialMedia/>
  </div>
  )

}

export default MainOverview;