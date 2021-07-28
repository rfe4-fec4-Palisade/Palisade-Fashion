import React from 'react';
import Styled from 'styled-components';

const Whole = Styled.div`
background: gray;
height: 10px;
width: 15%;
`
const Portion = Styled.div`
background: green;
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