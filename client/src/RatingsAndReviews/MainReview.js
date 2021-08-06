import React, { useState, useEffect } from 'react';
import Sort from './SortComponents/Sort.js';
import List from './ReviewList/List.js';
import Breakdown from './RatingBreakdown/Breakdown.js';
import NewReview from './WriteNewReview/NewReview.js';
import axios from 'axios';
import Styled from 'styled-components';
import ClickTracker from '../sharedComponents/ClickTracker.js';

const Container = Styled.div`
display: block;
padding: 40px;
`

const Title = Styled.div`
font-family: Arial, sans-serif;
font-size: 18px;
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
background-color: #FBFCFC;
color: black;
&:hover {
  cursor: pointer;
  color: #EC7063;
}
`
const Space = Styled.div`
width: 10%;
`
const SpaceR = Styled.div`
width: 2%;
`
const SpaceV = Styled.div`
height: 10%;
`

const Buttons = Styled.div`
display: flex;
flex-direction: row;
`

const SpaceBigV = Styled.div`
height: 65px;
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
    getReviews(props.currentProduct)
    return () => {
      setData([]);
    }
  }, [props.currentProduct])

  useEffect(()=>{
    getMetadata(props.currentProduct)
    return () => {
      setMetadata({});
    }
  }, [props.currentProduct])

  const changeSortOption = (option) => {
    var searchQuery;
    if (option === 'Relevance') {
      searchQuery = 'relevant'
    } else {
      searchQuery = option.toLowerCase();
    }
    setSort(option)
    getReviews(props.currentProduct, searchQuery)
  }

  const onFilter= (rating) => {
    if (rating === 0) {
      setFilter([]);
    } else if (filter.indexOf(rating) === -1) {
      let newState = [...filter, rating];
      setFilter(newState);
    } else {
      let newState = [...filter]
      newState.splice(filter.indexOf(rating), 1)
      setFilter(newState);
    }
  }

    return (
      <Container onClick={(event)=>{props.logClick(event)}} className="reviews">
        <Title className="title">RATINGS & REVIEWS</Title>
          <Main className="main-review" id="reviews">
            <Ratings className="ratings">
              <Breakdown id={props.currentProduct} metadata={metadata} onFilter={onFilter} filter={filter} theme={props.theme}/>
            </Ratings>
            <SpaceR></SpaceR>
            <Review className="reviews">
              <SpaceBigV></SpaceBigV>
              <Sort sortOption={sort} reviews={data} count={count} changeSortOption={changeSortOption}/>
              <SpaceV></SpaceV>
              <List reviews={data} filter={filter} num={num}/>
              <SpaceV></SpaceV>
              <Buttons className="buttons">
                {num+1 === count ? null : <More onClick={()=>{setNum(num+2)}}>MORE REVIEWS</More>}
                <Space></Space>
                <NewReview id={props.currentProduct} metadata={metadata} className="new review form"/>
              </Buttons>
            </Review>
          </Main>
      </Container>
    )
};


export default ClickTracker(MainReview);

