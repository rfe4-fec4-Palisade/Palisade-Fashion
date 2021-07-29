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

  console.log(currentIndex);

  return (
    <>
      {allStyles.map((item, index) => {
        return <ThumbnailStyle key={index} src={item.url} data-index={index} onClick={changeMainImg}></ThumbnailStyle>
      })}
      <FontAwesomeIcon icon={['fas', 'arrow-up']}/>
      <FontAwesomeIcon icon={['fas', 'arrow-down']}/>
    </>
    // Need to highlight matching thumbnail as main image changes
  )
}

export default Thumbnail;