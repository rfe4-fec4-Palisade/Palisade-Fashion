import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SizeNotSelected = styled.p `
  font-family: Arial, sans-serif;
  font-size: 14px;
  margin: 8px;
  color: red;
  margin-top: 12px;
`;

const StyledBttn = styled.button `
  border: 2px solid black;
  width: 19%;
  text-align: center;
  line-height: 30px;
  padding: 10px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  justify-Content: center;
  background-color: #FBFCFC;
  margin: 12px;

  &:hover {
    color: #EC7063;
    cursor: pointer;
  }
`;

function AddToCart(props) {
  const [displayMessage, setMessage] = useState('');

  useEffect(() => {
    if (props.sizeChosen !== '') {
      setMessage('');
    }
  }, [props.sizeChosen])

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
      alert('Added to Cart!')
    })
    .catch((err) => {
      alert('Unable to add to cart, try again later')
      console.log('error posting to cart: ', err)
    })
  }

  return (
    <>
    <SizeNotSelected>{displayMessage}</SizeNotSelected>
    <StyledBttn onClick={addingToCart}>Add To Cart</StyledBttn>
    </>
  )
}

export default AddToCart;