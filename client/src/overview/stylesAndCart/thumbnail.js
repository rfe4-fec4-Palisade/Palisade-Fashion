import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);

const ThumbnailStyle = styled.img `
    object-fit: contain;
    width: 4%;
    height: 4%;
    overflow: hidden;
  `;

function Thumbnail ({ currentPhoto, currentIndex, changeMainImg }) {
  let allStyles = currentPhoto.photos;

  const style = { border: '3px solid red' };

  const upArrowClicked = (e) => {
    console.log('event in thumbnail', e)
    console.log(currentIndex)
    // let currentIndex = mainImageIndex;
    // currentIndex++;
    // if (photos[currentIndex]) {
    //   setMainImage(currentIndex);
    // }
  }

  const downArrowClicked = (e) => {
    console.log('event in thumbnail', e)
    console.log(currentIndex)
    currentIndex = 1;
    console.log(currentIndex)
    // let currentIndex = mainImageIndex;
    // currentIndex--;
    // if (photos[currentIndex]) {
    //   setMainImage(currentIndex);
    // }
  }

  return (
    <>
      {allStyles.map((item, index) => {
        if (currentIndex == index) {
          return <ThumbnailStyle style={style} key={index} src={item.url} data-index={index} onClick={changeMainImg}/>
        } else {
          return <ThumbnailStyle key={index} src={item.url} data-index={index} onClick={changeMainImg}/>
        }
      })}
      <FontAwesomeIcon icon={['fas', 'arrow-up']} onClick={upArrowClicked}/>
      <FontAwesomeIcon icon={['fas', 'arrow-down']} onClick={downArrowClicked}/>
    </>
    // Need to highlight matching thumbnail as main image changes
  )
}

export default Thumbnail;