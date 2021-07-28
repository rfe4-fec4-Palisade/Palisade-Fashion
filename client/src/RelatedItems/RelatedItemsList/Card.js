import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PortalModal from "./PortalModal";

const StyledCard = styled.div `
  align-items: center;
  background-color: beige;
  margin: 1rem;
  border: solid;
  width: 250px
`;

const Card = (props) => {

  const [card, updateCard] = useState({})
  const [openp, setOpenP] = useState(false);

  var id = props.id;
  const getProduct = (id) => {
    axios.get(`http://localhost:3000/products/${id}`)
    .then(result => updateCard(result.data));
  }



  useEffect(() => {
    getProduct(id)
  }, [])

  console.log('from Card.js', card);
  return (
    <div>
      <StyledCard className='card' onClick={() => setOpenP(true)}>
        <h2>{id}: {card.name}</h2>
        <div>{card.slogan}</div>
        <div>{card.description}</div>
        <div>${card.default_price}</div>
        <div>{card.category}</div>
      </StyledCard>
      <PortalModal
        message="Compare:"
        card={card}
        currentProduct={props.currentProduct}
        setOpenP={setOpenP}
        isOpen={openp}
        onClick={() => setOpenP(false)}
      />
    </div>
  )
}

export default Card;