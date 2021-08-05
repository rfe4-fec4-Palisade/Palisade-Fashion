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
const Font = styled.div `
  font-family: Arial, sans-serif;
  font-size: 18px;
`;

const Plus = styled.div `
  position: relative;
  left: 70px;
  top: 120px;
`;
const Wrapper = styled.div `
  display: flex;
`;

const OutfitButton = styled.button `
float: left;
margin-left: 50px;
border: 2px solid black;
width: 200px;
text-align: center;
line-height: 30px;
padding: 10px;
font-family: Arial, sans-serif;
font-size: 12px;
justify-Content: center;
background-color: #FBFCFC;

&:hover {
 color: #EC7063
}

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
      <Font>ADD TO OUTFIT</Font>
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
      <OutfitButton onClick={()=> {
        localStorage.clear();
        changeOutfitSize(0);
        }}>CLEAR OUTFIT</OutfitButton>
    </div>
  )

}


export default OutfitList;