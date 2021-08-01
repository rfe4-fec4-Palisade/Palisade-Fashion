import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledQty = styled.select`
  font-family: Arial, sans-serif;
  padding: 12px;
  border: 2px solid black;
  font-size: 14px;
  width: 6%;
  margin: 5px;

  &:hover {
    cursor: pointer;
  }
`;

function SelectQuantity(props) {
  const [quantity, setQuantity] = useState('');

  const clickedQty = (e) => {
    setQuantity(e.target.value);
  }

  const displayQuantity = (maxQty) => {
    let quantities = [...Array(maxQty).keys()].map(x => ++x);

      return (
          <StyledQty value={quantity} onChange={clickedQty}>
            {quantities.map((item) => {
              return <option key={item} value={item}>{item}</option>
            })}
          </StyledQty>
      )
  }

  if (!props.sizeChosen) { // no size has been chosen yet - dropdown menu is disabled
    return (
      <StyledQty value={quantity} onChange={clickedQty} disabled>
        <option value="-" hidden="hidden"> - </option>
      </StyledQty>
    )
  } else { // display quantities available for selected size

    if (props.qtyAvailable >= 15) { // if qty is 15 or greater display options 1 to 15
      return displayQuantity(15);

    } else { // if qty is less than 15 display options 1 to qtyAvailable
      return displayQuantity(props.qtyAvailable);
    }
  }

}

export default SelectQuantity;