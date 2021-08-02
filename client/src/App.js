import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import MainReview from './RatingsAndReviews/MainReview.js';
import axios from 'axios';
import RelatedItems from './RelatedItems/RelatedItemsList/relatedItems.js';
import MainOverview from './overview/mainOverview.js';
import QuestionAndAnswer from './Q&AComponents/Q&Acontainer.js';
import RatingStars from './sharedComponents/Stars/RatingStars.js';

const Main = Styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`

const Space = Styled.div`
height: 20px;
`

const Header = Styled.div`
  position: absolute;
  margin-left: 20px;
  margin-top: 10px;
  display: flex;
  font-weight: bold;
  font-family: Noto Sans, sans-serif;
  font-size: 60px;
  color: #E9F7EF;

`

const HeaderBar = Styled.div`
  position: relative;
  width: 100%;
  height: 20%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  // background-image: linear-gradient(213deg, #F4D03F 0%, #16A085 67%);
`


const App = () => {
  const [allProducts, setProducts] = useState([])
  const [currentProduct, setProduct] = useState(19091)
  const [metadata, setMetadata] = useState({})

  //19090
  //19092
  //19093


  const fetchData = () => {
    axios.get('/products')
      .then((results) => {
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


  return (
    <Main>
      <HeaderBar>
        <Header>Palisade Fashion</Header>
        <img src='/Users/franciscoveranicola/HackReactorSEI/ecommerce-front-end-capstone-2/images/michael-benz--IZ2sgQKIhM-unsplash.jpg'></img>
      </HeaderBar>
      <div className="test"></div>
      <MainOverview currentProduct={currentProduct} metadata={metadata}/>
      <RelatedItems currentProduct={currentProduct} setProduct={setProduct} metadata={metadata}/>
      <QuestionAndAnswer product={currentProduct} />
      <MainReview currentProduct={currentProduct} />
    </Main>
  )

}

export default App;

