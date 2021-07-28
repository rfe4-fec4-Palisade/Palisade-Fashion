import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Thumbnails = styled.img `
  object-fit: contain;
  width: 5%;
  height: 5%;
  overflow: hidden;
  border-radius: 50%;
  `;

// need to add a checkmark on image for currently selected style

function ShowAllStyles({ eachStyle, styleClicked }) {
  const firstImage = eachStyle.photos[0]; // display first thumbnail image for each style for User to click on

    return (
      <Thumbnails src={firstImage.thumbnail_url} onClick={styleClicked.bind(null, eachStyle)}/>
    )
}

export default ShowAllStyles;