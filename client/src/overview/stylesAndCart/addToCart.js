import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SizeNotSelected = styled.p `
  color: red;`
  ;

function AddToCart(props) {
  const [displayMessage, setMessage] = useState('');

  const addingToCart = () => {
    if (props.sizeChosen === '') { // if no size selected & button clicked - display a message above button: "Please Select Size"
      setMessage('Select a Size!')
    } else {
      setMessage('')
      itemPostedToCart(props.sku)
    }
  }

  const itemPostedToCart = (skuCode) => {
    axios.post('http://localhost:3000/cart', {
      "sku_id": skuCode
    })
    .then((response) => {
      console.log(response)
    })
    .catch((err) => {
      console.log('error posting to cart: ', err)
    })
  }


  return (
    <>
    <SizeNotSelected>{displayMessage}</SizeNotSelected>
    <button onClick={addingToCart}>Add To Cart</button>
    </>
  )
}

export default AddToCart;