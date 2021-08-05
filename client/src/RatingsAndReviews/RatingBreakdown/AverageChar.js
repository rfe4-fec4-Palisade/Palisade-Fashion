import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import { FaCircle } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { lightBorder, darkBorder, GlobalStyles }  from '../../helperFunctions/theme.js';

const Whole = Styled.div`
display: block;
height: 10px;
border-right: ${props => props.theme.borderStyle};
border-left: ${props => props.theme.borderStyle};
width: 100%;
`
const Line = Styled.div`
display:block;
height: 50%;
border-bottom:  ${props => props.theme.borderStyle};
`
const IconContainer = Styled.div`
margin-top: -11.6px;
position: relative;
display: block;
height: 10px;
width: ${props => props.percentage}%;
`
const Halfway = Styled.div`
border-right: ${props => props.theme.borderStyle};
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

const Wrapper = Styled.div`
display: flex;
flex-direction: column;
display: block;
height: 10px;
width: 90%;
`

const Description = Styled.div`
display: flex;
flex-direction: row;
font-size: 12px;
justify-content: space-between;
`


const Text = Styled.div`
width: 50px;
`
const TextL = Styled.div`
width: 25%;
text-align: left;
`
const TextM = Styled.div`
width: 25%;
text-align: center;
`
const TextR = Styled.div`
width: 25%;
text-align: right;
`

const End = Styled.div`
height: 25px;
width: 25px;
`

const AverageChar = ({char, theme}) => {
const [description, setDescription] = useState({
  Size: {
      lowest: 'A size too small',
      highest: 'A size too big',
      middle: 'Perfect'
    },
  Width:
    {
      lowest: 'Too narrow',
      highest: 'Too wide',
      middle: 'Perfect'
    },
  Comfort:
    {
      lowest: 'Uncomfortable',
      highest: 'Comfortable',
      middle: null
    },
  Quality:
    {
      lowest: 'Poor',
      highest: 'Perfect',
      middle: null
    },
  Length:
    {
      lowest: 'Runs short',
      highest: 'Runs long',
      middle: 'Perfect'
    },
  Fit:
    {
      lowest: 'Runs tight',
      highest: 'Runs loose',
      middle: 'Perfect'
    },

})

  return (

      <Container>
        <Text>{char[0]}</Text>
        <Space></Space>
        <Wrapper>
        <Whole theme={theme === 'light' ? lightBorder : darkBorder}>
          <Line theme={theme === 'light' ? lightBorder : darkBorder}>
            <Halfway theme={theme === 'light' ? lightBorder : darkBorder}>
            </Halfway>
          <IconContainer percentage={+char[1].value /5 * 100}>
            <IconContext.Provider value={{ color: "gray", size: "8px"}}>
              <Icon>
              <FaCircle/>
              </Icon>
            </IconContext.Provider>
          </IconContainer>
          </Line>
        </Whole>
        <Description>
          <TextL>{description[char[0]].lowest}</TextL>
          <Space></Space>
          <TextM>{description[char[0]].middle}</TextM>
          <Space></Space>
          <TextR>{description[char[0]].highest}</TextR>
        </Description>
        </Wrapper>
        <End></End>
      </Container>
  )
}

export default AverageChar