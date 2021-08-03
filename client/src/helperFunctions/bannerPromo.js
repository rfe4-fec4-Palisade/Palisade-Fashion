import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const Banner = styled.div`
  width: 100%;
  height: 50px;
  background-color: #48C9B0 ;
`;

const text = {
  fontFamily: 'Gill Sans, sans-serif',
  fontWeight: 'bold',
  fontSize: '17px',
  textAlign: 'center',
  marginTop: '15px',
  marginBottom: '5px',
  color: '#FBFCFC '
}

function Promo (props) {

  return (
    <Banner>
      <h4 style={text} >Buy One Get One Free On Select Items</h4>
    </Banner>
  )
}

export default Promo;