import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Modal from "./Modal";
import PortalModal from "./PortalModal";

const Card = (props) => {

  const [card, updateCard] = useState({})
  const [open, setOpen] = useState(false);
  const [openp, setOpenP] = useState(false);

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
    <div className='card'>
      <h2>{id}: {card.name}</h2>
      <div>{card.slogan}</div>
      <div>{card.description}</div>
      <div>${card.default_price}</div>
      <div>{card.category}</div>
      <div className="container">
      <div className="button-container">
        <button className="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <button className="button" onClick={() => setOpenP(true)}>
          Open Portal Modal
        </button>
      </div>

      <div>
        <Modal
          message="Hello World!"
          isOpen={open}
          onClose={() => setOpen(false)}
        />
        <PortalModal
          message="Hello Portal World!"
          isOpen={openp}
          onClose={() => setOpenP(false)}
        />
      </div>
    </div>
    </div>
  )
}

export default Card;