import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MainReview from './RatingsAndReviews/MainReview.js';
import axios from 'axios';
import RelatedItems from './RelatedItems/RelatedItemsList/relatedItems.js';
import MainOverview from './overview/mainOverview.js';
import QuestionAndAnswer from './Q&AComponents/Q&Acontainer.js'

const StyledButton = styled.button `
      background-color: pink;
      font-size: 32px;
      color: white;
`;

const App = () => {
  const [allProducts, setProducts] = useState([])
  const [currentProduct, setProduct] = useState(19089)

  const fetchData = () => {
    axios.get('http://localhost:3000/products')
      .then((results) => {
        results = results.data;
        setProducts(results)

      })
      .catch((err) => {
        console.log('Error', err);
      })
  }

  const fetchMetadata = () => {

  }

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <div>
      <div className="test"></div>
      <StyledButton>Testing styled components</StyledButton>
      <MainReview currentProduct={currentProduct} />
      <RelatedItems currentProduct={currentProduct}/>
      <QuestionAndAnswer product={currentProduct} />
      <MainOverview currentProduct={currentProduct}/> 
    </div>
  )


}

export default App;