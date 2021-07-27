import React from 'react';

const Modal = ({ message, isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className='modal'>
      <h2>{message}</h2>
      <button className='close' onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default Modal;