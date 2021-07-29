import React, {useRef, useEffect, useCallback} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Features from './Features/features.js'

const Background = styled.div `
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  justify-content-center;
  align-item: center;
`;
const ModalWrapper = styled.div `
  width: 250px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.8);
  background-color: lightblue;
  position: relative;
  left: 550px;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #141414;
`;

const PortalModal = ({currentProduct, card, message, isOpen, setOpenP}) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <Background onClick={()=> setOpenP(!isOpen)}>
      <ModalWrapper>
        <ModalContent>
          <h2>{message}</h2>
          <div>{card.name} - {currentProduct.name}</div>
          <div>{card.default_price} - {currentProduct.default_price}</div>
          <Features currentProduct={currentProduct} card={card}/>
        </ModalContent>
      </ModalWrapper>
    </Background>,
    document.getElementById('modalHere')
  );
};

export default PortalModal;