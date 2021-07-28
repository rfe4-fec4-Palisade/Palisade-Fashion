import React from 'react';
import ReactDOM from 'react-dom';

const Features = ({currentProduct, card}) => {
  const currentCompare = currentProduct.features.map((item) => {
    return (
      <div key={item.value}>{item.feature}: {item.value}</div>
    )
  })
  const cardCompare = card.features.map((item) => {
    return (
      <div key={item.value}>{item.feature}: {item.value}</div>
    )
  })
  return (
    <div>
      <div>Current--- {currentCompare}</div>
      <div>Related--- {cardCompare}</div>
    </div>
  )
}

export default Features;