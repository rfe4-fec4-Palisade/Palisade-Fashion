import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const LargeImage = styled.img `
  object-fit: contain;
  width: 450px;
  height: 450px;
  overflow: hidden;
  `;

function ImageGallery ({ imageSelected }) {
  console.log(imageSelected.photos)
  let photos = imageSelected.photos;

  if (photos === undefined) { // photos have not loaded yet due to async
    return null;
  } else {
    let mainImage = photos[0].url;
    if (mainImage === null) { // no images available for product
      return (
        <LargeImage src="https://streetspotr.com/wp-content/uploads/2017/08/Out-of-Stock_Titelbild.png"/>
      )
    } else {
      return (
        <div>
          <LargeImage src={mainImage}/>
          <p>Expandable Option</p>
          <p>Clickable Arrows to Scroll Thru Images</p>
        </div>
      )
    }
  }
}

export default ImageGallery;