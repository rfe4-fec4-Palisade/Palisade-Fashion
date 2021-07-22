// main review file that will render all child components.

// make the get request here?

import React from 'react';
import Sort from './SortComponents/sort.js';
import List from './ReviewList/List.js';
import Breakdown from './RatingBreakdown/Breakdown.js';
import NewReview from './WriteNewReview/NewReview.js';

class MainReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="main-review">
        <h1>This is the entire review component</h1>
        <Sort/>
        <Breakdown/>
        <List/>
        <NewReview/>
      </div>
    )
  }
}

export default MainReview;