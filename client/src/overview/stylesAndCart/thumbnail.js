import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(far);

const ThumbnailStyle = styled.img `
    object-fit: cover;
    width: 70px;
    height: 70px;
    overflow: hidden;
    padding: 2px;
`;

const Positioning = styled.div `
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  width: 80px;
  top: 5%;
  z-index: 3;
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
      <Positioning>
        {allStyles.map((item, index) => {
          if (current == index) {
            return <ThumbnailStyle style={style} key={index} src={item.url} data-index={index} onClick={changeMainImg}/>
          } else {
            return <ThumbnailStyle key={index} src={item.url} data-index={index} onClick={changeMainImg}/>
          }
        })}
        <FontAwesomeIcon icon={['far', 'arrow-alt-circle-down']} size="2x" onClick={downArrowClicked}/>
      </Positioning>
    )
  } else if (currentIndex === allStyles.length - 1) {
    return (
      <Positioning>
        {allStyles.map((item, index) => {
          if (current == index) {
            return <ThumbnailStyle style={style} key={index} src={item.url} data-index={index} onClick={changeMainImg}/>
          } else {
            return <ThumbnailStyle key={index} src={item.url} data-index={index} onClick={changeMainImg}/>
          }
        })}
        <FontAwesomeIcon icon={['far', 'arrow-alt-circle-up']} size="2x" onClick={upArrowClicked}/>
      </Positioning>
    )
  } else {
    return (
      <Positioning>
        {allStyles.map((item, index) => {
          if (current == index) {
            return <ThumbnailStyle style={style} key={index} src={item.url} data-index={index} onClick={changeMainImg}/>
          } else {
            return <ThumbnailStyle key={index} src={item.url} data-index={index} onClick={changeMainImg}/>
          }
        })}
        <FontAwesomeIcon icon={['far', 'arrow-alt-circle-up']} size="2x" onClick={upArrowClicked}/>
        <FontAwesomeIcon icon={['far', 'arrow-alt-circle-down']} size="2x" onClick={downArrowClicked}/>
      </Positioning>
    )
  }
}

export default Thumbnail;