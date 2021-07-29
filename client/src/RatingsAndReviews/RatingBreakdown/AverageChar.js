import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown} from '@fortawesome/free-solid-svg-icons'

const Whole = Styled.div`
background: gray;
display: block;
height: 10px;
width: 25%;
`
const IconContainer = Styled.div`
display: block;
height: 10px;
width: ${props => props.percentage}%;
`
const Icon = Styled.div`
  float: right;
  width: 5%;
  height: 100%;
`

const AverageChar = ({char}) => {
  return (
    <div>
      <div>{char[0]}</div>
      <Whole>
      <IconContainer percentage={+char[1].value /5 * 100 }>
        <Icon>
        <FontAwesomeIcon icon={faCaretDown} />
        </Icon>
      </IconContainer>
      </Whole>
    </div>
  )
}

export default AverageChar