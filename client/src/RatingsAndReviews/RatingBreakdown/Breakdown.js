import React, { useState, useEffect } from 'react';

const Breakdown = (props) => {

  const [total, setTotal] = useState(0);
  /*
  {
    "product_id": "19089",
    "ratings": {
        "1": "15",
        "2": "30",
        "3": "15",
        "4": "12",
        "5": "39"
    },
}

  approach for rating breakdown: go into metadata.ratings and total up all the values. set state total.
  */

  useEffect(()=>{
    // let ratingTotal = props.metadata.ratings.1 + props.metadata.ratings.2 + props.metadata.ratings.3 + props.metadata.ratings.4;
    console.log('this is ratingTotal', props.metadata);
  }, [])

    return (
      <div> This is the rating breakdown component</div>
    )
}

export default Breakdown;