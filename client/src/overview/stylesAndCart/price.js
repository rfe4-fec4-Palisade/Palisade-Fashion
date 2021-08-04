import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StrikeThrough = styled.p `
  text-decoration: line-through;
  margin-top: 12px;
  padding-right: 16px;
  margin-bottom: 10px;
  `;

const OnSale = styled.p `
  color: red;
  margin-top: 12px;
  margin-bottom: 10px;
  `;

function Price({ styleSelected }) {
  const salePrice = styleSelected.sale_price;
  const regularPrice = styleSelected.original_price;

  const outerDiv = {
    fontSize: '1.17em',
    display: 'flex',
    justifyContent: 'center',
    height: '43.5px'
  }

  const innerDiv = {
    fontSize: '1.17em',
    display: 'flex',
    margin: 'auto',
    justifyContent: 'center',
    padding: '3%'
  }

  if (salePrice === undefined) {
    return null;
  }
  if (salePrice === null) {// current style is not on sale
    return (
      <div style={innerDiv}>${regularPrice}</div>
    )
  } else {
    return (
      <div style={outerDiv}>
        <StrikeThrough>${regularPrice}</StrikeThrough>
        <OnSale>${salePrice}</OnSale>
      </div>
    )
  }
}

export default Price;