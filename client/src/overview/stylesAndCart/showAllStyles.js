import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SmallImages = styled.img `
  object-fit: cover;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  `;

function ShowAllStyles({ eachStyle, styleClicked }) {
  const firstImage = eachStyle.photos[0]; // display first thumbnail image for each style for User to click on
  let url = firstImage.thumbnail_url;

  if (url === null) {
    url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
  }

    return (
      <>
      <SmallImages src={url} onClick={styleClicked.bind(null, eachStyle)}/>
      </>
    )
}

export default ShowAllStyles;