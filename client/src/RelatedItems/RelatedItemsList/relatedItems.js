import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card.js';

const RelatedItems = () => {
  const [relatedProducts, updateRelatedProducts] = useState([])
  const getRelatedItemsData = () => {
    axios.get('http://localhost:3000/products/19089/related')
    .then(result => console.log(result));
  }

  useEffect(() => {
    getRelatedItemsData();
  }, [])

  return (
    <div>
      <Card/>
    </div>
  )
}

export default RelatedItems;