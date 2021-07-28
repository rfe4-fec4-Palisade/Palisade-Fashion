import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MainReview from './RatingsAndReviews/MainReview.js';
import axios from 'axios';
import RelatedItems from './RelatedItems/RelatedItemsList/relatedItems.js';
import MainOverview from './overview/mainOverview.js';
import QuestionAndAnswer from './Q&AComponents/Q&Acontainer.js';
import RatingStars from './sharedComponents/Stars/RatingStars.js';

const StyledButton = styled.button `
      background-color: pink;
      font-size: 32px;
      color: white;
`;

const App = () => {
  const [allProducts, setProducts] = useState([])
  const [currentProduct, setProduct] = useState(19089)

  // const getRandomInt = (min, max) => {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }

  const fetchData = () => {
    axios.get('http://localhost:3000/products')
      .then((results) => {
        results = results.data;
        setProducts(results);
      })
      .catch((err) => {
        console.log('Error', err);
      })
    }

    useEffect(() => {
      fetchData();
      console.log('in useeffect', allProducts);
    }, [])


    // useEffect(() => {
    //   console.log('this is the all product', allProducts)
    //   const random = getRandomInt(0, allProducts.length - 1);
    //   const randomProduct = allProducts[random].id;
    //   console.log('random', random)
    //   console.log('random Product', randomProduct)
    //   setProduct(randomProduct);
    // }, [])


  return (
    <div>
      <div className="test"></div>
      <StyledButton>Testing styled components</StyledButton>
      <RatingStars/>
      <MainReview currentProduct={currentProduct} />
      <RelatedItems currentProduct={currentProduct} setProduct={setProduct}/>
      <QuestionAndAnswer product={currentProduct} />
      <MainOverview currentProduct={currentProduct}/>
    </div>
  )


}

export default App;