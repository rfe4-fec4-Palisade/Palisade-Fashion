import React, { useState, useEffect } from 'react';
import Description from './productDescription/Description.js';
import ProductInfo from './productInfo.js';
import SelectedStyle from './styleSelectorAndCart/StyleAndCart.js';
import axios from 'axios';

function MainOverview(props) {
  const [product, setProduct] = useState([]);

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


    return ( <div>
      <h1>Topmost Level: Main Overview</h1>
      <div>--------------------------------</div>
      <ProductInfo currentProduct={product}/>
      <div>--------------------------------</div>
      <SelectedStyle id={props.currentProduct}/>
      <div>--------------------------------</div>
      <Description currentProduct={product}/>
    </div>
    )

}

export default MainOverview;