import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import styled from 'styled-components';
import Thumbnail from './thumbnail.js';

const LargeImage = styled.img `
  object-fit: contain;
  width: 500px;
  height: 500px;
  overflow: hidden;
  `;

function ImageGallery ({ imageSelected }) {
  const [mainImageIndex, setMainImage] = useState(0);
  const [allPhotos, setPhotos] = useState([]); // contains an array of all photos to display

  // console.log(imageSelected)
  // console.log(imageSelected.photos)
  let photos = imageSelected.photos;

  useEffect(() => {
    setPhotos(photos)
  }, [])

  // onClick of right arrow display photos at next index
  const rightArrowClicked = () => {
    console.log('show next image')
    let currentIndex = mainImageIndex;
    currentIndex++;
    if (photos[currentIndex]) {
      setMainImage(currentIndex);
    }
  }

   // onClick of left arrow display photos at prev index
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

  if (photos === undefined) { // photos have not loaded yet due to async
    return null;
  } else {

    if (photos === null) { // no images available for product
      return (
        <LargeImage src="https://streetspotr.com/wp-content/uploads/2017/08/Out-of-Stock_Titelbild.png"/>
      )
    }
    if (mainImageIndex === 0) {
      return (
        <div>
          <Thumbnail currentPhoto={imageSelected} currentIndex={mainImageIndex} changeMainImg={changeMainImg}/>
          <br></br>
          <LargeImage src={photos[mainImageIndex].url}/>
          <FontAwesomeIcon icon={['fas', 'arrow-right']} onClick={rightArrowClicked}/>
          <br></br>
          <FontAwesomeIcon icon={['fas', 'expand']} size="2x" onClick={expandImage}/>
        </div>
      )
    } if (mainImageIndex === photos.length-1) {
      return (
            <div>
              <Thumbnail currentPhoto={imageSelected} currentIndex={mainImageIndex} changeMainImg={changeMainImg}/>
              <br></br>
              <FontAwesomeIcon icon={['fas', 'arrow-left']} onClick={leftArrowClicked}/>
              <LargeImage src={photos[mainImageIndex].url}/>
              <br></br>
              <FontAwesomeIcon icon={['fas', 'expand']} size="2x" onClick={expandImage}/>
            </div>
          )
    } else {
      return (
        <div>
          <Thumbnail currentPhoto={imageSelected} currentIndex={mainImageIndex} changeMainImg={changeMainImg}/>
          <br></br>
          <FontAwesomeIcon icon={['fas', 'arrow-left']} onClick={leftArrowClicked}/>
          <LargeImage src={photos[mainImageIndex].url}/>
          <FontAwesomeIcon icon={['fas', 'arrow-right']} onClick={rightArrowClicked}/>
          <br></br>
          <FontAwesomeIcon icon={['fas', 'expand']} size="2x" onClick={expandImage}/>
        </div>
      )

    }
  }
}

export default ImageGallery;