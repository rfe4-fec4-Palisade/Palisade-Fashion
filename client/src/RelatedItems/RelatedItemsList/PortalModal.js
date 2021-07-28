import React from 'react';
import ReactDOM from 'react-dom';
import Features from './Features/features.js'

const PortalModal = ({currentProduct, card, message, isOpen}) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className='modal'>
      <h2>{message}</h2>
      <div>{card.name} - {currentProduct.name}</div>
      <div>{card.default_price} - {currentProduct.default_price}</div>
      <Features currentProduct={currentProduct} card={card}/>
    </div>,
    document.getElementById('modalHere')
  );
};

export default PortalModal;