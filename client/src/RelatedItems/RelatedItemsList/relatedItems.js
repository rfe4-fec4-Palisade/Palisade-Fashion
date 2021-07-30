import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import OutfitList from '../OutfitList/outfitList.js';
import Card from './Card.js';
import {FaAngleRight} from 'react-icons/fa';

const Wrapper = styled.div `
  display: flex;
`;

const Arrow = styled.div `
  position: relative;
  left: 1250px;
  top: 350px;
`;

const RelatedItems = (props) => {
  var product = props.currentProduct;
  console.log('current prodyct',product)
  const [relatedProducts, updateRelatedProducts] = useState([])
  const [current, updateCurrentProduct] = useState({})

  const [currentSlide, nextSlide] = useState(0);
  const handleClick = () => {
    nextSlide(currentSlide + 4)
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
  }, [product])

  useEffect(() => {
    getCurrentProduct();
  }, [product])

  useEffect(() => {
    if (currentSlide < relatedProducts.length) {
      return null;
    } else {
      nextSlide(0);
    }
  }, [currentSlide])


  const listRelated = relatedProducts.map((item, index) => {


    return (
        <Card key={index} index={index} currentSlide={currentSlide} id={item} currentProduct={current} setProduct={props.setProduct} metadata={props.metadata}/>
    )
  })

  return (
    <div>
      <div id='modalHere'></div>
      <Arrow><FaAngleRight size={70} onClick={handleClick}/></Arrow>
      <h2>Related Products</h2>
      <Wrapper>
        {listRelated}
      </Wrapper>
      <OutfitList/>
    </div>

  )
}

export default RelatedItems;