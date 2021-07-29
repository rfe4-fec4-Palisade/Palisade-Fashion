import React, { useState, useEffect } from 'react';
import StarRating from './StarRating';
import CurrentFilters from './CurrentFilters.js';
import Recommend from './Recommend.js';

const Breakdown = (props) => {
  if( props.metadata.ratings === undefined ) {
    return null;
  }
  const [total, setTotal] = useState(0);
  const [bars, setBars] = useState([5,4,3,2,1]);

  /*
     "recommended": {
        "false": "2",
        "true": "6"
    },
  */
 useEffect(()=>{
    const ratings = props.metadata.ratings
    let num = 0
    for (var key in ratings) {
      num += +ratings[key]
    }
    setTotal(num)
  }, [])

    return (
      <div>
        <Recommend recommended={props.metadata.recommended} />
        <div>
        {bars.map((bar) => <StarRating key={bar} total={total} count={props.metadata.ratings[bar]} rating={bar} filter={props.filter} onFilter={props.onFilter} />)}
        {props.filter.length === 0 ? null : `Current Filters`}
        {props.filter.map((rating)=><CurrentFilters rating={rating}/>)}
        </div>
        <div>

        </div>
      </div>
    )
}

export default Breakdown;