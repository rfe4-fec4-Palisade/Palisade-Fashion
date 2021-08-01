import React, { useState, useEffect } from 'react';
import StarRating from './StarRating';
import CurrentFilters from './CurrentFilters.js';
import Recommend from './Recommend.js';
import AverageChar from './AverageChar.js';
import AverageRating from './AverageRating.js';
import Styled from 'styled-components';
import { ImCross } from 'react-icons/im'

const Container = Styled.div`
font-family: Arial, sans-serif;
`

const Remove = Styled.div`
background-color: #F0F0F0;
font-size: 12px;
padding: 5px;
width: 75px;
text-align: center;
&:hover {
  cursor: pointer;
}
`

const Breakdown = (props) => {
  if( props.metadata.ratings === undefined ) {
    return null;
  }
  const [total, setTotal] = useState(0);
  const [bars, setBars] = useState([5,4,3,2,1]);

 useEffect(()=>{
    const ratings = props.metadata.ratings
    let num = 0
    for (var key in ratings) {
      num += +ratings[key]
    }
    setTotal(num)
  }, [])

    return (
      <Container>
        <AverageRating metadata={props.metadata}/>
        <Recommend recommended={props.metadata.recommended} />
        <div>
        {bars.map((bar) => <StarRating key={bar} total={total} count={props.metadata.ratings[bar]} rating={bar} filter={props.filter} onFilter={props.onFilter} />)}
        {props.filter.length === 0 ? null :
        <div>
          <div>Current Filters</div>
          <Remove onClick={()=>{props.onFilter(0)}}><ImCross fontSize="8px"/> Remove All</Remove>
        </div>
        }
        {props.filter.map((rating)=><CurrentFilters rating={rating}/>)}
        {Object.entries(props.metadata.characteristics).map(([key, value])=> <AverageChar key={key} char={[key, value]}/>)}
        </div>
      </Container>
    )
}

export default Breakdown;