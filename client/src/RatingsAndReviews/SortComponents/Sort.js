import React, { useState, useEffect } from 'react';
import Option from './Option.js';
import Styled from 'styled-components';

const Drop = Styled.select`
border: 0px;
outline: 0px;
text-decoration: underline;
`;

const Text = Styled.div`
font-family: Arial, sans-serif;
font-size: 15px;
align-content: left;
`

const Sort = (props) => {
  const [options, setOptions] = useState(['Relevance', 'Helpful', 'Newest']);

  useEffect(() => {
    var sortOptions = ['Relevance', 'Helpful', 'Newest']
    for (let i = 0; i < sortOptions.length; i++) {
      let currentOption = sortOptions[i];
      if ( currentOption === props.sortOption ) {
        sortOptions.splice(i, 1);
        sortOptions.unshift(currentOption);
      } else {
        continue;
      }
    }
    setOptions(sortOptions);
  }, []);

 return (
   <Text>{props.count} reviews, sorted by
     <Drop onChange={(event)=> {props.changeSortOption(event.target.value)}}>
       {options.map((option)=> <Option key={option} option={option} />)}
     </Drop>
   </Text>
 )
}
// make it so current sort option is in form view and make other options dynamic

export default Sort