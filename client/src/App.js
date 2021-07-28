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
<<<<<<< HEAD
      <MainReview testProp={currentProduct} />
      <QuestionAndAnswer product={currentProduct} />
=======
      <MainReview currentProduct={currentProduct} />
      <RelatedItems currentProduct={currentProduct}/>
     {/* <MainOverview/> */}
>>>>>>> fc5cb8a841968d70fea42e3754f1c203cb7d79a9
    </div>
  )


}

export default App;