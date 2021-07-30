import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import { FaCircle } from 'react-icons/fa';
import { IconContext } from "react-icons";


const Whole = Styled.div`
display: block;
height: 10px;
border-right: 1px solid black;
border-left: 1px solid black;
width: 90%;
`
const Line = Styled.div`
display:block;
height: 50%;
border-bottom:  1px solid black;
`
const IconContainer = Styled.div`
margin-top: -11.6px;
position: relative;
display: block;
height: 10px;
width: ${props => props.percentage}%;
`
const Halfway = Styled.div`
border-right: 1px solid black;
height: 10px;
width: 50%;
`
const Space = Styled.div`
width: 5px;
`
const Icon = Styled.div`
float: right;
width: 5%;
height: 100%;
`
const Container = Styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
font-family: Arial, sans-serif;
font-size: 12px;
padding-top: 10px;
padding-bottom: 10px;
padding-left: 5px;
`

const Text = Styled.div`
width: 50px;
`

const AverageChar = ({char}) => {
  return (
    <Container>
      <Text>{char[0]}</Text>
      <Space></Space>
      <Whole>
        <Line>
          <Halfway>
          </Halfway>
        <IconContainer percentage={+char[1].value /5 * 100}>
          <IconContext.Provider value={{ color: "black", size: "8px"}}>
            <Icon>
            <FaCircle/>
            </Icon>
          </IconContext.Provider>
        </IconContainer>
        </Line>
      </Whole>
    </Container>
  )
}

export default AverageChar