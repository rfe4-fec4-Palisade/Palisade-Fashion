import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas);
library.add(far);
import styled from 'styled-components';
import Thumbnail from './thumbnail.js';

const LargeImage = styled.img `
  object-fit: cover;
  overflow: hidden;
  width: ${props => props.expandedView ? '96%' : '60%'};
  height: ${props => props.expandedView ? '650px' : '600px'};
  cursor: ${props => props.expandedView ? 'cell' : 'zoom-in'};
  position: ${props => props.expandedView ? 'relative' : 'none'};
  z-index: ${props => props.expandedView ? '1' : 'none'};
`;

const StyledOuterDiv = styled.div`
  position: relative;
  bottom: 150px;
`;

const ZoomedIn = styled.img`
  transform: scale(2.5);
  z-index: 10;
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
  cursor: zoom-out;
  z-index: 9;
`;

function ImageGallery ({ imageSelected }) {
  const [mainImageIndex, setMainImage] = useState(0);
  const [allPhotos, setPhotos] = useState([]);
  const [expandedView, setExpanded] = useState(false);
  const [zoomedIn, setZoom] = useState(false);
  const [mouseX, setMouseX] = useState(50);
  const [mouseY, setMouseY] = useState(50);

  let photos = imageSelected.photos;

  useEffect(() => {
    setPhotos(photos)
  }, [])

  const changeMainImg = (e) => {
    let index = e.target.getAttribute('data-index');
    setMainImage(index);
  };

  const rightArrowClicked = () => {
    let currentIndex = mainImageIndex;
    currentIndex++;
    if (photos[currentIndex]) {
      setMainImage(currentIndex);
    }
  };

  const leftArrowClicked = () => {
    let currentIndex = mainImageIndex;
    currentIndex--;
    if (photos[currentIndex]) {
      setMainImage(currentIndex);
    }
  };

  const upDownArrowsClicked = (newIndex) => {
    setMainImage(newIndex);
  };

  const expandImage = () => {
    if (expandedView) {
      setZoom(true);
    } else {
      setExpanded(true);
    }
    if (expandedView && zoomedIn) {
      setZoom(false);
    }
  };

  const resetExpandedView = () => {
    setExpanded(false);
  };

  const moveImgWithMouse = (e) => {
    let positionX = (e.clientX / 1200) * 100;
    let positionY = (e.clientY / 650) * 100;
    setMouseX(positionX);
    setMouseY(positionY);
  };

  const transform = {
    transformOrigin: `${mouseX}% ${mouseY}%`,
  };

  const expandIcon = {
    position: 'relative',
    left: '57%',
    bottom: '590px',
    cursor: 'zoom-in'
  };

  const closeIcon = {
    position: 'relative',
    left: '93%',
    bottom: '640px',
    zIndex: '2'
  }

  const rightArrow = {
    position: 'relative',
    bottom: '12px',
    right: '3%',
    zIndex: '10'
  };

  const leftArrow = {
    position: 'absolute',
    bottom: '44px',
    left: '0.8%',
    zIndex: '10'
  };

  if (zoomedIn) {
    return ( <Popup>
        <ZoomedIn src={photos[mainImageIndex].url} onClick={expandImage} onMouseMove={moveImgWithMouse} style={transform}/>
    </Popup>
    )
  } else {
    if (photos === undefined) { // photos have not loaded yet due to async
      return null;
    } else {

      if (photos[0].url === null) { // no images available for product
        return (
          <StyledOuterDiv>
          <LargeImage src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'/>
          </StyledOuterDiv>
        )
      }
      if (mainImageIndex === 0) {
        return (
          <StyledOuterDiv>
            <Thumbnail currentPhoto={imageSelected} currentIndex={mainImageIndex} changeMainImg={changeMainImg} upDown={upDownArrowsClicked}/>
            <br></br>
            <LargeImage src={photos[mainImageIndex].url} onClick={expandImage} expandedView={expandedView}/>
            <FontAwesomeIcon icon={['fas', 'chevron-circle-right']} size="2x" onClick={rightArrowClicked} style={rightArrow}/>
            <br></br>
            {expandedView &&
            <FontAwesomeIcon icon={['far', 'times-circle']} size="2x" onClick={resetExpandedView} style={closeIcon}/>
            }
            <FontAwesomeIcon icon={['fas', 'expand']} size="2x" onClick={expandImage} style={expandIcon}/>
          </StyledOuterDiv>
        )
      } if (mainImageIndex === photos.length -1) {
        return (
          <StyledOuterDiv>
            <Thumbnail currentPhoto={imageSelected} currentIndex={mainImageIndex} changeMainImg={changeMainImg} upDown={upDownArrowsClicked}/>
            <br></br>
            <FontAwesomeIcon  icon={['fas', 'chevron-circle-left']} size="2x" onClick={leftArrowClicked} style={leftArrow}/>
            <LargeImage src={photos[mainImageIndex].url} onClick={expandImage} expandedView={expandedView}/>
            <br></br>
            {expandedView &&
            <FontAwesomeIcon icon={['far', 'times-circle']} size="2x" onClick={resetExpandedView} style={closeIcon}/>
            }
            <FontAwesomeIcon icon={['fas', 'expand']} size="2x" onClick={expandImage} style={expandIcon}/>
          </StyledOuterDiv>
            )
      } else {
        return (
          <StyledOuterDiv>
            <Thumbnail currentPhoto={imageSelected} currentIndex={mainImageIndex} changeMainImg={changeMainImg} upDown={upDownArrowsClicked}/>
            <br></br>
            <FontAwesomeIcon icon={['fas', 'chevron-circle-left']} size="2x" onClick={leftArrowClicked} style={leftArrow}/>
            <LargeImage src={photos[mainImageIndex].url} onClick={expandImage} expandedView={expandedView}/>
            <FontAwesomeIcon icon={['fas', 'chevron-circle-right']} size="2x" onClick={rightArrowClicked} style={rightArrow}/>
            <br></br>
            {expandedView &&
            <FontAwesomeIcon icon={['far', 'times-circle']} size="2x" onClick={resetExpandedView} style={closeIcon}/>
            }
            <FontAwesomeIcon icon={['fas', 'expand']} size="2x" onClick={expandImage} style={expandIcon}/>
          </StyledOuterDiv>
        )
      }
    }
  }
}

export default ImageGallery;