import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import MainReview from './RatingsAndReviews/MainReview.js';
import axios from 'axios';
import RelatedItems from './RelatedItems/RelatedItemsList/relatedItems.js';
import MainOverview from './overview/mainOverview.js';
import QuestionAndAnswer from './Q&AComponents/Q&Acontainer.js';
import RatingStars from './sharedComponents/Stars/RatingStars.js';
import MainHeader from './helperFunctions/header.js';
import Promo from './helperFunctions/bannerPromo.js';


const Main = Styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
border: none;
margin: 0;
`

const Space = Styled.div`
height: 20px;
`


const App = () => {
  const [allProducts, setProducts] = useState([])
  const [currentProduct, setProduct] = useState(17067)

  const [metadata, setMetadata] = useState({})

  //19090
  //19092
  //19093


  const fetchData = () => {
    //'/products'
    axios.get('/products')
      .then((results) => {
        console.log(results)
        results = results.data;
        setProducts(results);
      })
      .catch((err) => {
        console.log('Error', err);
      })
    }


    const getMetadata = (id) => {
      axios.get(`/reviews/meta?product_id=${id}`)
      .then((response) => {
        let newMeta = response.data
        setMetadata(newMeta)
      })
      .catch((err) => {console.log(err)})
    }


    useEffect(() => {
      fetchData();
    }, [])

    useEffect(()=>{
      getMetadata(currentProduct)
      return () => {
        setMetadata({});
      }
    }, [])


  console.log(currentProduct)
  return (
    <Main>
      <Promo />
      <MainHeader />
      <div className="test"></div>
      <MainOverview currentProduct={currentProduct} metadata={metadata}/>
      <RelatedItems currentProduct={currentProduct} setProduct={setProduct}/>
      <QuestionAndAnswer product={currentProduct} />
      <MainReview currentProduct={currentProduct} />
    </Main>
  )

}

export default App;

