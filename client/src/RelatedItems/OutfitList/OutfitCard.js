import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import RatingStars from '../../sharedComponents/Stars/RatingStars.js';
import { FaPlus } from "react-icons/fa";

const OutfitBox = styled.div `
  align-items: center;
  padding: 1rem;
  width: 220px;
  height: 55px;
  font-family: Arial, sans-serif;
`;

const StyledPic = styled.img `
  object-fit: fill;
  align-items: center;
  display: block;
  height: 300px;
  width: 260px;
`;

const Wrapper = styled.div `
  margin: 1rem;
  border: solid;
  border-wdith: thin;
  border-color: gray;
`;

const OutfitCard = (props) => {

  const [picurl, updatePic] = useState('');

  const getPic = (id) => {
    axios.get(`http://localhost:3000/products/${id}/styles`)
    .then(result =>  updatePic(result.data.results[0].photos[0].thumbnail_url));
  }

  const product = props.product;
  useEffect(() => {
    getPic(product.id);
  }, [picurl])

  return (
    <Wrapper>
      <StyledPic src={picurl}></StyledPic>
      <OutfitBox>
        <div>{product.name}</div>
        <div>{product.default_price}</div>
        <div>{product.category}</div>
      </OutfitBox>
    </Wrapper>
  )
}

export default OutfitCard;



