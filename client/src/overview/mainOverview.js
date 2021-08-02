import React, { useState, useEffect } from 'react';
import ProductInfo from './productInfo.js';
import SelectedStyle from './stylesAndCart/DisplayStylesAndCart.js';
import SocialMedia from './socialMedia.js';
import Features from './features.js';
import axios from 'axios';
import Styled from 'styled-components';

const Nav = Styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`


function MainOverview(props) {
  const [product, setProduct] = useState([]);
  const [totalReviews, setReviews] = useState(0);

  useEffect(() => { // useEffect is called after page is rendered
    function atelierReq() {
      let productID = props.currentProduct; // will be passed down as props when user clicks on an item
      axios.get(`http://localhost:3000/products/${productID}`)
      .then((res) => {
        setProduct(res.data); // res.data is an object with info of one product
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

  const info = {
    position: 'relative',
    fontFamily: 'Arial, sans-serif',
    width: '50%',
    left: '4%',
    bottom: '400px'
  }

  const entireWidget = {
    height: '1010px',
    fontFamily: 'Arial, sans-serif'
  }

  return (
  <div style={entireWidget}>
    <Nav>
      <h1>Palisade Fashion</h1>
      {/* <input type="text" placeholder="Product ID"></input> */}
    </Nav>
    <ProductInfo currentProduct={product} metadata={props.metadata} totalReviews={totalReviews}/>
    <SelectedStyle id={props.currentProduct}/>
    <div style={info}>
      <h2>{product.slogan}</h2>
      <p>{product.description}</p>
      <Features oneProduct={product}/>
      <SocialMedia/>
    </div>
  </div>
  )

}

export default MainOverview;