import React from 'react';
import Styled from 'styled-components';

const Whole = Styled.div`
background: gray;
display: block;
height: 10px;
width: 15%;
`
const Portion = Styled.div`
background: green;
display: block;
height: 10px;
width: ${props => props.percentage}%;
`
const Percentage = ({percentage}) => {

  return (
    <Whole>
      <Portion percentage={percentage}></Portion>
    </Whole>
  )

}

export default Percentage