import React, { useState, useEffect } from 'react';
import Sort from './SortComponents/sort.js';
import List from './ReviewList/List.js';
import Breakdown from './RatingBreakdown/Breakdown.js';
import NewReview from './WriteNewReview/NewReview.js';
import axios from 'axios';

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
        <div className="main-review">
          <h1>This is the entire review component</h1>
          <Sort sortOption={sort} reviews={data} count={count} changeSortOption={changeSortOption}/>
          <Breakdown id={currentProduct} metadata={metadata} onFilter={onFilter} filter={filter}/>
          <List reviews={data} filter={filter} num={num}/>
          {num+1 === count ? null : <div onClick={()=>{setNum(num+2)}}>MORE REVIEWS</div>}
          <NewReview id={currentProduct} metadata={metadata}/>
      </div>
    )
};

export default MainReview;


// filter function from MainReview.
// filter state from Main Review will be an array of numbers. Pass this filter state to review list. in review list, check if props.review.rating exists in the the array. If so, render it. If not, render null.
// start with an empty array
  // if the array is empty, render all reviews
  // if the array is not empty, check if props.review.rating is in there.
    // if so, render it
    // if not, return null
// onClick, the filter function should take event.target.value and push it to a shallow copy of state. Then setState.