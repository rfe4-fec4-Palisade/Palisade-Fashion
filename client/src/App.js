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
import Footer from './helperFunctions/Footer.js';
import { lightTheme, darkTheme, GlobalStyles }  from './helperFunctions/theme.js';
import { ThemeProvider } from 'styled-components';


const Main = Styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
border: none;
margin: 0;
color: ${props => props.theme.fontColor};
`

const Space = Styled.div`
height: 20px;
`


const App = () => {
  const [allProducts, setProducts] = useState([])
  const [currentProduct, setProduct] = useState(17067)
  const [metadata, setMetadata] = useState({})
  const [theme, setTheme] = useState('light')
<<<<<<< HEAD
=======

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
>>>>>>> ab8d021af61adccef36a85bd472df80e673790e2

  //19090
  //19092
  //19093
  const fetchData = () => {
    //'/products'
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

  const toggleTheme = () => {

  }

  return (
<<<<<<< HEAD
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Main theme={theme === 'light' ? lightTheme : darkTheme}>
        <Promo />
        <MainHeader />
        <div className="test"></div>
        <MainOverview currentProduct={currentProduct} metadata={metadata}/>
        <RelatedItems currentProduct={currentProduct} setProduct={setProduct}/>
        <QuestionAndAnswer product={currentProduct} />
        <MainReview currentProduct={currentProduct} />
        <Footer />
      </Main>
    </ThemeProvider>
=======
    <Main>
      <Promo />
      <MainHeader />
      <div className="test"></div>
      <MainOverview currentProduct={currentProduct} metadata={metadata}/>
      <RelatedItems currentProduct={currentProduct} setProduct={setProduct}/>
      <QuestionAndAnswer product={currentProduct} />
      <MainReview currentProduct={currentProduct} />
      <Footer />
    </Main>
>>>>>>> ab8d021af61adccef36a85bd472df80e673790e2
  )

}

export default App;

