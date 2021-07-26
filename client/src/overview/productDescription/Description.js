import React, { useState, useEffect } from 'react';
import ProductDesc from './productDesc.js';
import SocialMedia from './socialMedia.js';
import Features from './features.js';
import axios from 'axios';

function Description() {
  const [product, setProduct] = useState([]);

  useEffect(() => { // useEffect is called after page is rendered
    function atelierReq() {
      console.log('THIS WAS CALLED');
      let productID = 19089; // will need to be passed down as props when user clicks on an item
      axios.get('http://localhost:3000/products')
      .then((res) => {
        console.log('this is my response: ', res.data) // res.data is an array of products
        setProduct(res.data);
      })
      .catch((err) => {
        console.log('there was an error!: ', err)
      })
    }
    atelierReq();
  }, [])



  return (
    <div>
      {product.map((oneProduct) => (
        <ProductDesc key={oneProduct.id} singleProduct={oneProduct}/>
      ))}
      {/* {product.features.map((oneFeature) => (
        <Features singleFeature={oneFeature}/>
      ))} */}
      <SocialMedia/>
    </div>
  )
}

export default Description;