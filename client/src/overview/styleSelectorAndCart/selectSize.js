import React, { useState, useEffect } from 'react';
import SelectQuantity from './selectQuantity.js';
import AddToCart from './addToCart.js';

function SelectSize({ styleSelected }) {
  const [sizeSelected, setSize] = useState('');
  const [quantitySelected, setQuantity] = useState('');
  const [qtyAvailable, setAvailableQty] = useState('');
  const [skuOfStyle, setSku] = useState('');

  const skus = styleSelected.skus;
  console.log(skus)

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
        <div>
          <select value={sizeSelected} onChange={clickedSize} disabled>
            <option value="OUT OF STOCK" hidden="hidden"> OUT OF STOCK </option>
          </select>
          <br></br>
          <select value={quantitySelected} onChange={clickedSize} disabled>
            <option value="-" hidden="hidden"> - </option>
          </select>
        </div>
      )
    } else {
      const keys = Object.keys(skus); // display all available sizes in SELECT SIZE dropdown

        return (
          <div>
            <br></br>
            <select value={sizeSelected} onChange={clickedSize}>
              <option value="Select Size" hidden="hidden"> Select Size </option>

              {keys.map((skuCode) => {
                const size = skus[skuCode]['size'];
                return (
                  <option data-code={skuCode} key={skuCode} value={size}>{size}</option>
                )
              })}

            </select>
            <br></br>
            <SelectQuantity sizeChosen={sizeSelected} qtyAvailable={qtyAvailable}/>
            <br></br>
            <AddToCart sizeChosen={sizeSelected} sku={skuOfStyle}/>
            <p>Favorite Item</p>
          </div>
        )
    }
  }

}

export default SelectSize;