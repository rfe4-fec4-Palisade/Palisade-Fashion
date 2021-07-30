import React, { useState, useEffect } from 'react';
import Sort from './SortComponents/sort.js';
import List from './ReviewList/List.js';
import Breakdown from './RatingBreakdown/Breakdown.js';
import NewReview from './WriteNewReview/NewReview.js';
import axios from 'axios';
import Styled from 'styled-components';

const Container = Styled.div`
display: block;
`

const Main = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Ratings = Styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  margin: 10px;
`

const Review = Styled.div`
  display: flex;
  flex-direction: column;
  align-items:flex-end;
  margin: 1px;
  width: 65%;
  margin: 10px;
`
const More = Styled.div`
border: 2px solid black;
width: 120px;
text-align: center;
vertical-align: middle;
line-height: 30px;
padding: 10px;
font-family: Arial, sans-serif;
font-size: 12px;
`
const Space = Styled.div`
width: 10%;
`

const Buttons = Styled.div`
display: flex;
flex-direction: row;
`

const MainReview = (props) => {
  const [sort, setSort] = useState('Relevance');
  const [currentProduct, setProduct] = useState(props.currentProduct)
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [metadata, setMetadata] = useState({});
  const [filter, setFilter] = useState([]);
  const [num, setNum] = useState(1);

  const getReviews = (id, sort = 'relevant') => {
    axios.get(`/reviews?product_id=${id}&sort=${sort}&count=500`)
      .then((response) => {
        let reviews = response.data.results
        let count = response.data.count
        setData(reviews)
        setCount(reviews.length)
      })
      .catch((err) => {console.log(err)})
  }

  const getMetadata = (id) => {
    axios.get(`/reviews/meta?product_id=${id}`)
    .then((response) => {
      let newMeta = response.data
      setMetadata(newMeta)
    })
    .catch((err) => {console.log(err)})
  }

  useEffect(()=>{
    getReviews(currentProduct)
    return () => {
      setData({});
    }
  }, [])

  useEffect(()=>{
    getMetadata(currentProduct)
    return () => {
      setMetadata({});
    }
  }, [])

  const changeSortOption = (option) => {
    var searchQuery;
    if (option === 'Relevance') {
      searchQuery = 'relevant'
    } else {
      searchQuery = option.toLowerCase();
    }
    setSort(option)
    getReviews(currentProduct, searchQuery)
  }

  const onFilter= (rating) => {
    if (filter.indexOf(rating) === -1) {
      let newState = [...filter, rating];
      setFilter(newState);
    } else {
      let newState = [...filter]
      newState.splice(filter.indexOf(rating), 1)
      setFilter(newState);
    }
  }

    return (
      <Container>
        <h3>Ratings&Reviews</h3>
          <Main className="main-review" id="Reviews">
            <Ratings>
              <Breakdown id={currentProduct} metadata={metadata} onFilter={onFilter} filter={filter}/>
            </Ratings>
            <Review>
              <Sort sortOption={sort} reviews={data} count={count} changeSortOption={changeSortOption}/>
              <List reviews={data} filter={filter} num={num}/>
              <Buttons>
                {num+1 === count ? null : <More onClick={()=>{setNum(num+2)}}>MORE REVIEWS</More>}
                <Space></Space>
                <NewReview id={currentProduct} metadata={metadata}/>
              </Buttons>
            </Review>
          </Main>
      </Container>
    )
};

export default MainReview;

