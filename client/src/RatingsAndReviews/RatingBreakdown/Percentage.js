import React from 'react';
import Styled from 'styled-components';

const Whole = Styled.span`
background: #E0E0E0;
display: block;
height: 6px;
width: 100%;
border-radius: 10px;
margin-top: 10px;
`
const Portion = Styled.div`
background: #90EE90;
display: block;
height: 6px;
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