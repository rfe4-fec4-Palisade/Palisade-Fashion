import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Card from './Card.js';

const RelatedItems = (props) => {
  var product = props.currentProduct;
  const [relatedProducts, updateRelatedProducts] = useState([])
  const getRelatedItemsData = () => {
    axios.get(`http://localhost:3000/products/${product}/related`)
    .then((result) => {
      updateRelatedProducts(result.data);
    })
    .catch((err) => {
      console.log('Error', err);
    })
  }

  useEffect(() => {
    getRelatedItemsData();
  }, [])



  const listRelated = relatedProducts.map((item) => {
    return <Card key={item} id={item}/>
  })

  return (
    <div>
      {listRelated}
    </div>

  )
}

export default RelatedItems;