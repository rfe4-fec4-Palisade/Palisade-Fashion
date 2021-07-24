// main review file that will render all child components.
// make the get request here and populate state
import React, { useState } from 'react';
import Sort from './SortComponents/sort.js';
import List from './ReviewList/List.js';
import Breakdown from './RatingBreakdown/Breakdown.js';
import NewReview from './WriteNewReview/NewReview.js';
import dummyData from './dummyData.js'

const MainReview = () => {
  const [sort, setSort] = useState('default');
  const [data, setData] = useState(dummyData.results);

    console.log('hello')
    return (
        <div className="main-review">
          <h1>This is the entire review component</h1>
          <Sort/>
          <Breakdown/>
          <List sortOption={sort} reviews={data}/>
          <NewReview/>
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