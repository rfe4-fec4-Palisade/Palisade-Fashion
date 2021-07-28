import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Card from './Card.js';

const Wrapper = styled.div `
  display: flex;
`;

const RelatedItems = (props) => {
  console.log('relateditems', props);
  var product = props.currentProduct;
  const [relatedProducts, updateRelatedProducts] = useState([])
  const [current, updateCurrentProduct] = useState({})

  const [currentSlide, nextSlide] = useState({first: 0, last: 3});
  const handleClick = () => {
    let {first, last} = currentSlide;
    nextSlide({first: first + 4, last: last + 4})
    if (first >= relatedProducts.length - 1) {
      nextSlide({first: 0, last: 3})
    }
  }

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



  const listRelated = relatedProducts.map((item, index) => {


    return (
        <Card key={index} index={index} currentSlide={currentSlide} id={item} currentProduct={current}/>
    )
  })

  return (
    <div>
      <div id='modalHere'></div>
      <button onClick={handleClick}>More Products</button>
      <Wrapper>
        {listRelated}
      </Wrapper>
    </div>

  )
}

export default RelatedItems;