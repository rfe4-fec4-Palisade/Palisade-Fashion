import React, { useState } from 'react';

function Features ({ oneProduct }) {
  const styling = {
    marginBottom: '7px',
    marginTop: '7px'
  }

  if (oneProduct.features === undefined) {
    return null;
  } else {
     return oneProduct.features.map((item) => {
      return (
        <p style={styling} key={item.feature}><b>{item.feature}</b> <em>{item.value}</em> </p>
      )
    })
  }
}

export default Features;