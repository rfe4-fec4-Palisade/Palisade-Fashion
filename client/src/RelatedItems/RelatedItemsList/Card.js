import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PortalModal from './PortalModal';
import RatingStars from '../../sharedComponents/Stars/RatingStars.js';
import {FaRegStar} from 'react-icons/fa';

const StyledCard = styled.div `
  align-items: center;
  padding: 1rem;
  width: 220px;
  height: 55px;
  font-family: Arial, sans-serif;
`;

const StyledButton = styled.div `
  position: relative;
  bottom: 185px;
  left: 250px;
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


const Card = (props) => {
  var id = props.id;


  const [card, updateCard] = useState({})
  const [openp, setOpenP] = useState(false);
  const [pic, changePic] = useState('');
  const [metadata, setMetadata] = useState({});


  const getProduct = (id) => {
    axios.get(`http://localhost:3000/products/${id}`)
    .then(result => updateCard(result.data));
  }

  const getPic = (id) => {
    axios.get(`http://localhost:3000/products/${id}/styles`)
    .then(result => changePic(result.data.results[0].photos[0].thumbnail_url));
  }

  const getMetadata = (id) => {
    axios.get(`/reviews/meta?product_id=${id}`)
    .then((response) => {
      let newMeta = response.data
      setMetadata(newMeta)
    })
    .catch((err) => {console.log(err)})
  }



  useEffect(() => {
    getProduct(id)
  }, [id])

  useEffect(() => {
    getPic(id)
  }, [id])

  useEffect(() => {
    getMetadata(id)
    return () => {
      setMetadata({});
    }
  }, [])

  if (props.index < props.currentSlide ||  props.index > (props.currentSlide + 3)) {
    return null;
  }

  if (typeof(pic) === 'string') {
    var image = pic;
  } else {
    var image = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
  }


  return (
    <div>
      <PortalModal
        message="Compare:"
        card={card}
        currentProduct={props.currentProduct}
        setOpenP={setOpenP}
        isOpen={openp}
      />
      <Wrapper onClick={() => props.setProduct(id)}>
        <StyledPic src={image}></StyledPic>
        <StyledCard className='card'>
          <div>{card.name}</div>
          <span>${card.default_price}</span>
          <div>{card.category}</div>
        </StyledCard>
        <div><RatingStars metadata={metadata}/></div>
      </Wrapper>
      <StyledButton>
        <FaRegStar onClick={() => setOpenP(!openp)}/>
      </StyledButton>
    </div>
  )
}

export default Card;