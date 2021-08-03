import React, {useState} from 'react';
import styled from 'styled-components';
import { FaPlus } from "react-icons/fa";

const OutfitBox = styled.div `
  border: solid;
  height: 300px;
  width: 220px;
  margin: 1rem;
  padding: 1rem;
`;
const Font = styled.h2 `
  font-family: Arial, sans-serif;
`;

const Plus = styled.div `
  position: relative;
  left: 70px;
  top: 120px;
`;
const OutfitList = (props) => {
  return (
    <div>
      <Font>Add to Outfit</Font>
      <OutfitBox>
        <Plus>
          <FaPlus size={70}/>
        </Plus>
      </OutfitBox>
    </div>
  )
}


export default OutfitList;