// main review file that will render all child components.
// make the get request here and populate state
import React, { useState, useEffect } from 'react';
import Sort from './SortComponents/sort.js';
import List from './ReviewList/List.js';
import Breakdown from './RatingBreakdown/Breakdown.js';
import NewReview from './WriteNewReview/NewReview.js';
import dummyData from './dummyData.js'
import axios from 'axios';

const MainReview = (props) => {
  const [sort, setSort] = useState('Relevance');
  const [currentProduct, setProduct] = useState(props.currentProduct)
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  const getReviews = (id, sort = 'relevant') => {
    axios.get(`/reviews?product_id=${id}&sort=${sort}`)
      .then((response) => {
        let reviews = response.data.results
        let count = response.data.count
        setData(reviews)
        setCount(count)
      })
      .catch((err) => {console.log(err)})
  }

  useEffect(()=>{
    getReviews(currentProduct)
    return () => {
      setData({});
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


    return (
        <div className="main-review">
          <h1>This is the entire review component</h1>
          <Sort sortOption={sort} reviews={data} count={count} changeSortOption={changeSortOption}/>
          <Breakdown/>
          <List reviews={data}/>
          <NewReview id={currentProduct}/>
      </div>
    )
};

// class MainReview extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       // sort default is regular view
//         // helpful, newest, relevant
//         // pass this.state.sort and data down to the sort component
//         // the sort component should render out  the dropdown list
//         // also pass in a function on click that will change the sort value here.
//         // according to sort value, render out the list.
//       sort: 'default',
//       data: dummyData.results
//     }
//   }

//   render() {
//     return (
//       <div className="main-review">
//         <h1>This is the entire review component</h1>
//         <Sort/>
//         <Breakdown/>
//         <List sortOption={this.state.sort} reviews={this.state.data}/>
//         <NewReview/>
//       </div>
//     )
//   }
// }

export default MainReview;