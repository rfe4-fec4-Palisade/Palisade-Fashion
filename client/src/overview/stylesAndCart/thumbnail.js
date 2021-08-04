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
  left: 0.5%;
  height: 480px;
  overflow: hidden;
`;

function Thumbnail ({ currentPhoto, currentIndex, changeMainImg, upDown }) {
  const [current, setCurrent] = useState(0);
  let allStyles = currentPhoto.photos;

  useEffect(() => {
    setCurrent(currentIndex)
  }, [currentIndex])

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

  const style = {
    border: '3px solid red'
  };

  const upArrow = {
    position: 'relative',
    top: '520px',
    left: '0.8%'
  }

  const downArrow = {
    position: 'relative',
    top: '520px',
    left: '1.4%'
  }

  if (currentIndex === 0) {
    return (
      <>
      <Positioning>
        {allStyles.map((item, index) => {
          if (current == index) {
            return <ThumbnailStyle style={style} key={index} src={item.url} data-index={index} onClick={changeMainImg}/>
          } else {
            return <ThumbnailStyle key={index} src={item.url} data-index={index} onClick={changeMainImg}/>
          }
        })}
      </Positioning>
      <FontAwesomeIcon style={downArrow}icon={['far', 'arrow-alt-circle-down']} size="2x" onClick={downArrowClicked}/>
      </>
    )
  } else if (currentIndex === allStyles.length - 1) {
    return (
      <>
      <Positioning>
        {allStyles.map((item, index) => {
          if (current == index) {
            return <ThumbnailStyle style={style} key={index} src={item.url} data-index={index} onClick={changeMainImg}/>
          } else {
            return <ThumbnailStyle key={index} src={item.url} data-index={index} onClick={changeMainImg}/>
          }
        })}
      </Positioning>
      <FontAwesomeIcon style={upArrow} icon={['far', 'arrow-alt-circle-up']} size="2x" onClick={upArrowClicked}/>
      </>
    )
  } else {
    return (
      <>
      <Positioning>
        {allStyles.map((item, index) => {
          if (current == index) {
            return <ThumbnailStyle style={style} key={index} src={item.url} data-index={index} onClick={changeMainImg}/>
          } else {
            return <ThumbnailStyle key={index} src={item.url} data-index={index} onClick={changeMainImg}/>
          }
        })}
        </Positioning>
        <FontAwesomeIcon style={upArrow} icon={['far', 'arrow-alt-circle-up']} size="2x" onClick={upArrowClicked}/>
        <FontAwesomeIcon style={downArrow} icon={['far', 'arrow-alt-circle-down']} size="2x" onClick={downArrowClicked}/>
      </>
    )
  }
}

export default Thumbnail;