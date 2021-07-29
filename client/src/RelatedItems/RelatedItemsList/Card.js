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

  console.log(props.currentSlide);
  if (props.index < props.currentSlide.first ||  props.index > props.currentSlide.last) {
    return null;
  }

  return (
    <div>
      <PortalModal
        message="Compare:"
        card={card}
        currentProduct={props.currentProduct}
        setOpenP={setOpenP}
        isOpen={openp}
      />
      <StyledCard className='card'>
        <h2>{id}: {card.name}</h2>
        <div>{card.slogan}</div>
        <div>{card.description}</div>
        <div>${card.default_price}</div>
        <div>{card.category}</div>
        <button onClick={() => props.setProduct(id)}>Go To</button>
        <button onClick={() => setOpenP(!openp)}>View Details</button>
      </StyledCard>
    </div>
  )
}

export default Card;