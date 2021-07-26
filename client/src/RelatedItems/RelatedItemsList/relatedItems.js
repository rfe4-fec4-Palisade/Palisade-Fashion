import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card.js';

const RelatedItems = () => {
  const [relatedProducts, updateRelatedProducts] = useState([])
  const getRelatedItemsData = () => {
    axios.get('http://localhost:3000/products/19089/related')
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