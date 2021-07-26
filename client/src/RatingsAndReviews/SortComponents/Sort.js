import React, { useState, useEffect } from 'react';

const Sort = (props) => {
  const [options, setOptions] = useState(['Helpful', 'Newest']);

  useEffect() => {
    var sortOptions = ['Relevance', 'Helpful', 'Newest']
    var availableOptions = sortOptions.forEach((option, index)=> {
      if (option === props.sortOption) {
        sortOptions.slice(index,1)
      }
    });
    setOptions(availableOptions);
  }

  console.log('props in sort', props)
 return (
   <div>{props.count} reviews, sorted by
     <select>
       <option value ={props.sortOption}> {props.sortOption}</option>
       {options.map((option)=><option value={option}> {option} </option>)}
     </select>
   </div>
 )
}
// make it so current sort option is in form view and make other options dynamic

export default Sort