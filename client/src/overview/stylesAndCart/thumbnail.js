import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);

const ThumbnailStyle = styled.img `
    object-fit: cover;
    width: 70px;
    height: 70px;
    overflow: hidden;
    padding: 2px;
  `;

function Thumbnail ({ currentPhoto, currentIndex, changeMainImg, upDown }) {
  const [current, setCurrent] = useState(0);
  let allStyles = currentPhoto.photos;

  useEffect(() => {
    setCurrent(currentIndex)
  }, [currentIndex])

  const style = { border: '3px solid red' };

  const upArrowClicked = () => {
    let highlightedIndex = current;
    highlightedIndex--;
    if (highlightedIndex >= 0) {
      setCurrent(highlightedIndex);
      upDown(highlightedIndex);
    }
  }

  const downArrowClicked = () => {
    let highlightedIndex = current;
    highlightedIndex++;
    if (highlightedIndex < allStyles.length) {
      setCurrent(highlightedIndex);
      upDown(highlightedIndex);
    }
  }

  if (currentIndex === 0) {
    return (
      <>
        {allStyles.map((item, index) => {
          if (current == index) {
            return <ThumbnailStyle style={style} key={index} src={item.url} data-index={index} onClick={changeMainImg}/>
          } else {
            return <ThumbnailStyle key={index} src={item.url} data-index={index} onClick={changeMainImg}/>
          }
        })}
        <FontAwesomeIcon icon={['fas', 'arrow-down']} onClick={downArrowClicked}/>
      </>
    )
  } else if (currentIndex === allStyles.length - 1) {
    return (
      <>
        {allStyles.map((item, index) => {
          if (current == index) {
            return <ThumbnailStyle style={style} key={index} src={item.url} data-index={index} onClick={changeMainImg}/>
          } else {
            return <ThumbnailStyle key={index} src={item.url} data-index={index} onClick={changeMainImg}/>
          }
        })}
        <FontAwesomeIcon icon={['fas', 'arrow-up']} onClick={upArrowClicked}/>
      </>
    )
  } else {
    return (
      <>
        {allStyles.map((item, index) => {
          if (current == index) {
            return <ThumbnailStyle style={style} key={index} src={item.url} data-index={index} onClick={changeMainImg}/>
          } else {
            return <ThumbnailStyle key={index} src={item.url} data-index={index} onClick={changeMainImg}/>
          }
        })}
        <FontAwesomeIcon icon={['fas', 'arrow-up']} onClick={upArrowClicked}/>
        <FontAwesomeIcon icon={['fas', 'arrow-down']} onClick={downArrowClicked}/>
      </>
    )
  }
}

export default Thumbnail;