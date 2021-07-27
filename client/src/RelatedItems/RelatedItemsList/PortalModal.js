import React from 'react';
import ReactDOM from 'react-dom';
import Features from './Features/features.js'

const PortalModal = ({currentProduct, card, message, isOpen, onClose}) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className='modal'>
      <h2>{message}</h2>
      <div>{card.name} - {currentProduct.name}</div>
      <div>{card.default_price} - {currentProduct.default_price}</div>
      <Features currentProduct={currentProduct} card={card}/>
      <button className='close' onClick={onClose}>
        Close
      </button>
    </div>,
    document.getElementById('modalHere')
  );
};

export default PortalModal;