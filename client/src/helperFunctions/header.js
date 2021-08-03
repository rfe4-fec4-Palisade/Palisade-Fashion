import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import Promo from './bannerPromo.js';
import { FaSearch } from 'react-icons/fa';


const Header = Styled.div`
  position: absolute;
  font-family: Noto Sans, sans-serif;
  font-weight: bold;
  font-size: 30px;
  background: -webkit-linear-gradient( #AEB6BF , #85929E, #616A6B  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const HeaderBar = Styled.div`
  padding: 10px 40px 10px 70px;
  border-left: none;
  border-right: none;
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
    color: #58D68D;
  }

`;

const forSearch = {
  display: 'flex',
  width: '200px',
  height: '20px'
}

const icon = {
  position: 'relative',
  height: '14px',
  right: '10%',
  marginTop: '5px',
  color: '#48C9B0'
}


function MainHeader () {

  return (
    <HeaderBar>
      <ul style={ul}>
        <li style={logo}> <Header>Palisade Fashion</Header></li>
        <div>
          <li style={items}><Anchors >Home</Anchors></li>
          <li style={items}><Anchors >About</Anchors></li>
          <li style={items}><Anchors >Services</Anchors></li>
          <li style={items}><Anchors >Contact</Anchors></li>
        </div>
        <li style={forSearch}><StyledInput type='text' placeholder='Search...'></StyledInput><FaSearch style={icon} /></li>
      </ul>
    </HeaderBar>
  )
}

export default MainHeader;