import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StrikeThrough = styled.p `
  text-decoration: line-through;
  `;

const OnSale = styled.p `
  color: red;
  `;

function Price({ styleSelected }) {
  const salePrice = styleSelected.sale_price;
  const regularPrice = styleSelected.original_price;

  if (salePrice === undefined) {
    return null;
  }
  if (salePrice === null) {// current style is not on sale
    return (
      <h3>${regularPrice}</h3>
    )
  } else {
    return (
      <h3>
        <StrikeThrough>${regularPrice}</StrikeThrough>
        <OnSale>${salePrice}</OnSale>
      </h3>
    )
  }
}

export default Price;