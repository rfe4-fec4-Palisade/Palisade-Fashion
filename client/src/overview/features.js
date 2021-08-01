import React, { useState } from 'react';

function Features ({ oneProduct }) {
  if (oneProduct.features === undefined) {
    return null;
  } else {
     return oneProduct.features.map((item) => {
      return (
        <p key={item.feature}><b>{item.feature}</b> <em>{item.value}</em> </p>
      )
    })
  }
}

export default Features;