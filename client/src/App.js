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
  const [search, setSearch] = useState('')

  const themeToggler = (event) => {
  // console.log('we are in themeToggler')
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  //19090
  //19092
  //19093

  // console.log('all products', allProducts)

  const handleSearch = (event) => {
    // console.log(event.target.value)
    setSearch(event.target.value);

    filterTopSearch(search);
  }

  const filterTopSearch = (word) => {
    var searchedTerm = allProducts.filter(product => (
      product.name.toLowerCase().includes(word.toLowerCase())
    ))

    // console.log('searched term', searchedTerm[0].name);
    if (searchedTerm[0].name === undefined) {
      setProduct(17067)
    } else {
      for (var i = 0; i < allProducts.length; i++) {
        if (allProducts[i].name === searchedTerm[0].name) {
          // console.log('allProducts name',allProducts[i].name)
          var id = allProducts[i].id;
          console.log('id', id);
          setProduct(id);
        }
      }

    }



  }


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


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Main theme={theme === 'light' ? lightTheme : darkTheme} >
        <Promo />
        <MainHeader themeToggler={themeToggler} theme={theme} handleSearch={handleSearch}/>
        <div className="test"></div>
        <MainOverview currentProduct={currentProduct} metadata={metadata}/>
        <RelatedItems currentProduct={currentProduct} setProduct={setProduct}/>
        <QuestionAndAnswer product={currentProduct} />
        <MainReview currentProduct={currentProduct} theme={theme} />
        <Footer />
      </Main>
    </ThemeProvider>
  )

}

export default App;

