import React, { useState } from 'react';

function Features ({ oneProduct }) {
  if (oneProduct.features === undefined) {
    return null;
  } else {
     return oneProduct.features.map((item) => {
      return (
        <ul key={item.feature}>
          <li>Feature: {item.feature}</li>
          <li>Value: {item.value} </li>
        </ul>
      )
    })
  }
}

export default Features;