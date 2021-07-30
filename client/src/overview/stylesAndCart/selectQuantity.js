import React, { useState, useEffect } from 'react';

function SelectQuantity(props) {
  const [quantity, setQuantity] = useState('');

  console.log(props.sizeChosen)

  const clickedQty = (e) => {
    setQuantity(e.target.value);
  }

  const displayQuantity = (maxQty) => {
    let quantities = [...Array(maxQty).keys()].map(x => ++x);

      return (
          <select value={quantity} onChange={clickedQty}>
            {quantities.map((item) => {
              return <option key={item} value={item}>{item}</option>
            })}
          </select>
      )
  }

  if (!props.sizeChosen) { // no size has been chosen yet - dropdown menu is disabled
    return (
      <select value={quantity} onChange={clickedQty} disabled>
        <option value="-" hidden="hidden"> - </option>
      </select>
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