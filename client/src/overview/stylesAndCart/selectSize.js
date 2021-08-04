import React, { useState, useEffect } from 'react';
import SelectQuantity from './selectQuantity.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import AddToCart from './addToCart.js';

const StyledSelect = styled.select`
  font-family: Arial, sans-serif;
  padding: 12px;
  border: 2px solid black;
  font-size: 14px;
  width: 12%;
  margin: 18px;
  margin-bottom: 4px;
  margin-left: 10px;
  margin-right: 6px;

  &:hover {
    cursor: pointer;
  }
`;

const StyledDiv = styled.div`
  position: relative;
  left: 70%;
  bottom: 600px;
`;

function SelectSize({ styleSelected }) {
  const [sizeSelected, setSize] = useState('');
  const [quantitySelected, setQuantity] = useState('');
  const [qtyAvailable, setAvailableQty] = useState('');
  const [skuOfStyle, setSku] = useState('');

  const skus = styleSelected.skus;

  const clickedSize = (e) => {
    const index = e.target.options.selectedIndex;
    const skuNumber = e.target.options[index].getAttribute('data-code');
    let quantity = skus[skuNumber]['quantity']
    setSku(skuNumber);
    setSize(e.target.value);
    setAvailableQty(quantity);
  }

  if (skus === undefined) { // skus have not loaded yet due to async
    return null;
  } else {
    if (skus[null]) { // no sizes available for selected style
      return (
        <StyledDiv>
          <StyledSelect value={sizeSelected} onChange={clickedSize} disabled>
            <option value="OUT OF STOCK" hidden="hidden"> OUT OF STOCK </option>
          </StyledSelect>

          <StyledSelect value={quantitySelected} onChange={clickedSize} disabled>
            <option value="-" hidden="hidden"> - </option>
          </StyledSelect>
        </StyledDiv>
      )
    } else {
      const keys = Object.keys(skus); // display all available sizes in SELECT SIZE dropdown

      return (
        <StyledDiv>

          <StyledSelect value={sizeSelected} onChange={clickedSize}>
            <option value="Select Size" hidden="hidden"> Select Size </option>

            {keys.map((skuCode) => {
              const size = skus[skuCode]['size'];
              return (
                <option data-code={skuCode} key={skuCode} value={size}>{size}</option>
              )
            })}

          </StyledSelect>

          <SelectQuantity sizeChosen={sizeSelected} qtyAvailable={qtyAvailable}/>
          <br></br>
          <AddToCart sizeChosen={sizeSelected} sku={skuOfStyle}/>
          <FontAwesomeIcon icon={faStar} size="2x"/>
        </StyledDiv>
      )
    }
  }

}

export default SelectSize;