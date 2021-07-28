import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Card from './Card.js';

const Wrapper = styled.div `
  display: flex;
`;

const RelatedItems = (props) => {
  var product = props.currentProduct;
  const [relatedProducts, updateRelatedProducts] = useState([])
  const [current, updateCurrentProduct] = useState({})
  const getRelatedItemsData = () => {
    axios.get(`http://localhost:3000/products/${product}/related`)
    .then((result) => {
      updateRelatedProducts(result.data);
    })
    .catch((err) => {
      console.log('Error', err);
    })
  }

  const getCurrentProduct = () => {
    axios.get(`http://localhost:3000/products/${product}`)
    .then((result) => {
      updateCurrentProduct(result.data);
    })
    .catch((err) => {
      console.log('Error', err);
    })
  }

  useEffect(() => {
    getRelatedItemsData();
  }, [])

  useEffect(() => {
    getCurrentProduct();
  }, [])



  const listRelated = relatedProducts.map((item) => {
    return (
        <Card key={item} id={item} currentProduct={current}/>
    )
  })

  return (
    <div>
      <div id='modalHere'></div>
      <Wrapper>
        {listRelated}
      </Wrapper>
    </div>

  )
}

export default RelatedItems;