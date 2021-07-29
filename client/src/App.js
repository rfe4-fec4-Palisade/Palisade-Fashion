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
    axios.get('/products')
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
     {/* <MainOverview/> */}
    </div>
  )




}

export default App;


/*
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

var random = getRandomInt(0, allProducts.length)

  var idHolder = {
    item: 'Loading in case there is no data...'
  }

  if (allProducts.length) {
    idHolder = allProducts[random]
  }

  if (!allProducts.length) {
    return (
      <div>
        <h3>Loading data...</h3>
      </div>
    )
  } else {
    return (
    <div>
    </div>
  )
  }
*/