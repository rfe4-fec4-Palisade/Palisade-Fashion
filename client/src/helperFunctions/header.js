import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import Promo from './bannerPromo.js';
import { FaSearch } from 'react-icons/fa';
import TopSearchBar from './topSearchBar.js';


const Header = Styled.div`
  position: relative;
  font-family: Courier, monospace;
  // font-weight: bold;
  font-size: 28px;
  letter-spacing: 2.3px;
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

const Button = Styled.button`
  border: none;
  font-family: Noto Sans, sans-serif;
  background-color: inherit;
  color: inherit;
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
  justifyContent: 'center',
  paddingLeft: '20px'
}

const logo = {
  flex: '1',
  marginTop: '17px',
  marginBottom: '35px',
  width: '150px'
}

const items = {
  padding: '0 25px',
  display: 'inline-flex',
  fontFamily: 'Arial, sans-serif'
}

const Anchors = Styled.a  `
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
  marginBottom: '20px'
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
  // console.log('props', props)
  return (
    <HeaderBar>
      <ul style={ul}>
        <li style={logo}> <Header>Palisade Fashion</Header></li>
        <div>
          <li style={items}><Anchors >Home</Anchors></li><span style={spany}> | </span>
          <li style={items}><Anchors >About</Anchors></li><span style={spany}> | </span>
          <li style={items}><Anchors >Contact</Anchors></li> <span style={spany}> | </span>
          <li style={items}><Button onClick={(event)=>{props.themeToggler(event)}}>{props.theme === 'light' ? 'Dark Mode' : 'Light Mode'}</Button></li>
        </div>
        <li style={forSearch}><TopSearchBar handleSearch={props.handleSearch} products={props.products} search={props.search} /></li>
      </ul>
    </HeaderBar>
  )
}

export default MainHeader;

//<StyledInput type='text' placeholder='Search Products...' onChange={(event) => props.handleSearch(event)} ></StyledInput><FaSearch style={icon} />