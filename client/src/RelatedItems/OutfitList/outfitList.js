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

const Plus = styled.div `
  position: relative;
  left: 70px;
  top: 120px;
`;
const OutfitList = (props) => {
  return (
    <div>
      <h2>Add to Outfit</h2>
      <OutfitBox>
        <Plus>
          <FaPlus size={70}/>
        </Plus>
      </OutfitBox>
    </div>
  )
}


export default OutfitList;