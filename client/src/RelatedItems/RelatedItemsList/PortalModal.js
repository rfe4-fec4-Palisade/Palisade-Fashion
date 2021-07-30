import React, {useRef, useEffect, useCallback} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Features from './Features/features.js'

const Background = styled.div `
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content-center;
  align-item: center;
`;
const ModalWrapper = styled.div `
  width: 700px;
  height: 300px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.8);
  background-color: Aliceblue;
  position: relative;
  top: 150px;
  left: 450px;
  color: #000;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div `
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
          <Features currentProduct={currentProduct} card={card}/>
        </ModalContent>
      </ModalWrapper>
    </Background>,
    document.getElementById('modalHere')
  );
};

export default PortalModal;