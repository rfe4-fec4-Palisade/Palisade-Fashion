import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Card = (props) => {

  const [card, updateCard] = useState({})

  var id = props.id;
  const getProduct = (id) => {
    axios.get(`http://localhost:3000/products/${id}`)
    .then(result => updateCard(result.data));
  }

  useEffect(() => {
    getProduct(id)
  }, [])

  console.log(card);
  return (
    <div className='card' onClick={() => console.log('YOU CLICKED THIS CARD')}>
      <h2>{id}: {card.name}</h2>
      <div>{card.slogan}</div>
      <div>{card.description}</div>
      <div>{card.catefory}</div>
    </div>
  )
}

export default Card;