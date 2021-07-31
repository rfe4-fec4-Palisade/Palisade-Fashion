import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import styled from 'styled-components';
import Thumbnail from './thumbnail.js';

const LargeImage = styled.img `
  object-fit: cover;
  width: 750px;
  height: 550px;
  overflow: hidden;
`;

const Popup = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PopupInner = styled.div `
  position: relative;
  padding: 20px;
  width: 400px;
  height: 270px;
  border-radius: 20px;
  background-color: #FFF;
  `;
  // max-width: 640px;

function ImageGallery ({ imageSelected }) {
  const [mainImageIndex, setMainImage] = useState(0);
  const [allPhotos, setPhotos] = useState([]);

  let photos = imageSelected.photos;

  let style = {
    cursor: 'zoom-in'
  };

  useEffect(() => {
    setPhotos(photos)
  }, [])

  const rightArrowClicked = () => {
    let currentIndex = mainImageIndex;
    currentIndex++;
    if (photos[currentIndex]) {
      setMainImage(currentIndex);
    }
  }

   const leftArrowClicked = () => {
    let currentIndex = mainImageIndex;
    currentIndex--;
    if (photos[currentIndex]) {
      setMainImage(currentIndex);
    }
  }

  const expandImage = () => {
    console.log('zoom main image by 2.5 times')
  }

  const changeMainImg = (e) => {
    let index = e.target.getAttribute('data-index');
    setMainImage(index);
  }

  const upDownArrows = (newIndex) => {
    setMainImage(newIndex);
  }

  if (photos === undefined) { // photos have not loaded yet due to async
    return null;
  } else {

    if (photos[0].url === null) { // no images available for product
      return (
        <LargeImage src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'/>
      )
    }
    if (mainImageIndex === 0) {
      return (
        <div>
          <Thumbnail currentPhoto={imageSelected} currentIndex={mainImageIndex} changeMainImg={changeMainImg} upDown={upDownArrows}/>
          <br></br>
          <LargeImage style={style} src={photos[mainImageIndex].url} onClick={expandImage}/>
          <FontAwesomeIcon icon={['fas', 'arrow-right']} onClick={rightArrowClicked}/>
          <br></br>
          <FontAwesomeIcon icon={['fas', 'expand']} size="2x" onClick={expandImage} style={style}/>
        </div>
      )
    } if (mainImageIndex === photos.length -1) {
      return (
        <div>
          <Thumbnail currentPhoto={imageSelected} currentIndex={mainImageIndex} changeMainImg={changeMainImg} upDown={upDownArrows}/>
          <br></br>
          <FontAwesomeIcon style={style} icon={['fas', 'arrow-left']} onClick={leftArrowClicked}/>
          <LargeImage src={photos[mainImageIndex].url} onClick={expandImage}/>
          <br></br>
          <FontAwesomeIcon icon={['fas', 'expand']} size="2x" onClick={expandImage} style={style}/>
        </div>
          )
    } else {
      return (
        <div>
          <Thumbnail currentPhoto={imageSelected} currentIndex={mainImageIndex} changeMainImg={changeMainImg} upDown={upDownArrows}/>
          <br></br>
          <FontAwesomeIcon icon={['fas', 'arrow-left']} onClick={leftArrowClicked}/>
          <LargeImage style={style} src={photos[mainImageIndex].url} onClick={expandImage}/>
          <FontAwesomeIcon icon={['fas', 'arrow-right']} onClick={rightArrowClicked}/>
          <br></br>
          <FontAwesomeIcon icon={['fas', 'expand']} size="2x" onClick={expandImage} style={style}/>
        </div>
      )
    }
  }
}

export default ImageGallery;