import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import Promo from './bannerPromo.js';
import { FaSearch } from 'react-icons/fa';


const Header = Styled.div`
  position: absolute;
  font-family: Noto Sans, sans-serif;
  font-weight: bold;
  font-size: 30px;
  // background: -webkit-linear-gradient( #16A085 , #48C9B0 );
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
`

const HeaderBar = Styled.div`
  padding: 10px 40px 10px 70px;
  border-left: none;
  border-right: none;
  box-shadow: 0 10px 10px -5px #CCD1D1;
`

const StyledInput = Styled.input `
  position: relative;
  border: 2px solid black;
  border-radius: 10px;
  height: 15px;
  padding: 2px 10px 2px 10px;
  width: 200px;
  background-color: #FBFCFC;
  font-family: Noto Sans, sans-serif;
  border-style: solid;
  border-color: #808B96 ;
  outline: none;
`;

const div = {
  margin: '0',
  padding: '0',
  boxSizing: 'borderBox',
}

const ul = {
  display: 'flex',
  listStyle: 'none',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center'
}

const logo = {
  flex: '1',
  marginBottom: '35px'
}

const items = {
  padding: '0 25px',
  display: 'inline-flex',
  fontFamily: 'Arial, sans-serif'
}

const Anchors = Styled.a  `
  color: black;
  font-family: Arial, sans-serif;
  text-decoration: none;
  font-size: 14px;
  padding: 0 12px;

  &:hover {
    text-Decoration: underline;
    color: #2471A3 ;
  }

`;

const forSearch = {
  display: 'flex',
  width: '250px',
  height: '30px',
}

const icon = {
  position: 'relative',
  height: '14px',
  right: '10%',
  marginTop: '5px',
  color: '#212F3C'
}

const spany = {
  fontSize: '20px',
  color: '#34495E '
}


function MainHeader (props) {
  console.log('props.theme', props.theme)
  return (
    <HeaderBar>
      <ul style={ul}>
        <li style={logo}> <Header>Palisade Fashion</Header></li>
        <div>
          <li style={items}><Anchors >Home</Anchors></li><span style={spany}> | </span>
          <li style={items}><Anchors >About</Anchors></li><span style={spany}> | </span>
          <li style={items}><Anchors >Services</Anchors></li><span style={spany}> | </span>
          <li style={items}><Anchors >Contact</Anchors></li> <span style={spany}> | </span>
          <li style={items}><button onClick={(event)=>{props.themeToggler(event)}}>{props.theme === 'light' ? 'Dark Mode' : 'Light Mode'}</button></li>
        </div>
        <li style={forSearch}><StyledInput type='text' placeholder='Search...'></StyledInput><FaSearch style={icon} /></li>
      </ul>
    </HeaderBar>
  )
}

export default MainHeader;