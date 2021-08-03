import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { FaPlus } from "react-icons/fa";
import OutfitCard from "./OutfitCard.js";

const OutfitBox = styled.div `
  border: solid;
  height: 352px;
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
const Wrapper = styled.div `
  display: flex;
`;

const OutfitList = (props) => {

  const [OutfitSize, changeOutfitSize] = useState(Object.keys(localStorage).length);

  const handleClick = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  }

  var outfitCards = Object.keys(localStorage).map((key) => {
    return (
      <OutfitCard key={key} product={JSON.parse(localStorage[key])}/>
      )
  })

  useEffect(() => {

  }, [OutfitSize]);




  return (
    <div>
      <Font>Add to Outfit</Font>
      <Wrapper>
        <OutfitBox>
          <Plus>
            <FaPlus size={70} onClick={() => {
              handleClick(props.current.id, props.current);
              changeOutfitSize(OutfitSize + 1);
              }}/>
          </Plus>
        </OutfitBox>
      {outfitCards}
      </Wrapper>
      <button onClick={()=> {
        localStorage.clear();
        changeOutfitSize(0);
        }}>Clear Outfit</button>
    </div>
  )

}


export default OutfitList;