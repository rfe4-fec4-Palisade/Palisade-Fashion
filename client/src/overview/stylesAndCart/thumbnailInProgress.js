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
  const [allPhotos, setAllPhotos] = useState([]); // this will be my array that holds all photos - place 0 to 5 index in smaller array
                                                  // if more than 6 photos, as user clicks, update start and end indexes
  const [sixImages, setSixImages] = useState([]); // need to render these 6 images

  const [startIndex, setStartIndex] = useState(0); // indexes to select within allPhotos
  const [endIndex, setEndIndex] = useState(6);

  console.log('currentPhoto', currentPhoto)
  console.log('this should be my entire array of photos', allPhotos)
  console.log('this will be my smaller array', sixImages)
  let allStyles = currentPhoto.photos;
  // let startIndex = 0;
  // let endIndex = 6;

  useEffect(() => {
    setAllPhotos(currentPhoto.photos);
  }, [currentPhoto])

  useEffect(() => {
    let smallArray = allPhotos.slice(startIndex, endIndex)
    console.log('within useEffect', smallArray)
    setSixImages(smallArray);
  }, [allPhotos])

  useEffect(() => {
    setCurrent(currentIndex);
  }, [currentIndex])

  const upArrowClicked = () => {

    // if (current >= 5 && allPhotos.length > 6) {
    //   // then setSixImages with following indexes
    //   console.log('entire # of photos for a style', allPhotos.length)
    //   if (current === allPhotos.length -1) {
    //     // do nothing
    //   } else {
    //     let start = startIndex;
    //     start--;
    //     let end= endIndex;
    //     end--;
    //     setStartIndex(start);
    //     setEndIndex(end);
    //     console.log('start & end indexes', startIndex, endIndex)
    //     let smallArray = allPhotos.slice(start, end)
    //     setSixImages(smallArray);
    //   }
    // }






    let highlightedIndex = current;
    highlightedIndex--;
    if (highlightedIndex >= 0) {
      setCurrent(highlightedIndex);
      upDown(highlightedIndex);
    }
  }

  const downArrowClicked = () => {
    console.log('current at downarrowclicked', current)
    console.log('length of small array', sixImages.length) // 6 images total, length of 6  (index from 0 to 5)

    if (current >= 5 && allPhotos.length > 6) {
      // then setSixImages with following indexes
      console.log('entire # of photos for a style', allPhotos.length)
      if (current === allPhotos.length -1) {
        // do nothing
      } else {
        let start = startIndex;
        start++;
        let end= endIndex;
        end++;
        setStartIndex(start);
        setEndIndex(end);
        console.log('start & end indexes', startIndex, endIndex)
        let smallArray = allPhotos.slice(start, end)
        setSixImages(smallArray);
      }
    }

    let highlightedIndex = current;
    highlightedIndex++;
    if (highlightedIndex < allStyles.length) {
      console.log('highlightedIndex', highlightedIndex)
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

    return (
      <>
      <Positioning>
        {sixImages.map((item, index) => {
            console.log('current & index in render return', current, index)
          if (current == index) {
            console.log('current & index in render return', current, index)
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
 //  }
}

export default Thumbnail;




















































// if (currentIndex === 0) {
//   return (
//     <>
//     <Positioning>
//       {allStyles.map((item, index) => {
//         if (current == index) {
//           return <ThumbnailStyle style={style} key={index} src={item.url} data-index={index} onClick={changeMainImg}/>
//         } else {
//           return <ThumbnailStyle key={index} src={item.url} data-index={index} onClick={changeMainImg}/>
//         }
//       })}
//     </Positioning>
//     <FontAwesomeIcon style={downArrow}icon={['far', 'arrow-alt-circle-down']} size="2x" onClick={downArrowClicked}/>
//     </>
//   )
// } else if (currentIndex === allStyles.length - 1) {
//   return (
//     <>
//     <Positioning>
//       {allStyles.map((item, index) => {
//         if (current == index) {
//           return <ThumbnailStyle style={style} key={index} src={item.url} data-index={index} onClick={changeMainImg}/>
//         } else {
//           return <ThumbnailStyle key={index} src={item.url} data-index={index} onClick={changeMainImg}/>
//         }
//       })}
//     </Positioning>
//     <FontAwesomeIcon style={upArrow} icon={['far', 'arrow-alt-circle-up']} size="2x" onClick={upArrowClicked}/>
//     </>
//   )
// } else {
//   return (
//     <>
//     <Positioning>
//       {allStyles.map((item, index) => {
//         if (current == index) {
//           return <ThumbnailStyle style={style} key={index} src={item.url} data-index={index} onClick={changeMainImg}/>
//         } else {
//           return <ThumbnailStyle key={index} src={item.url} data-index={index} onClick={changeMainImg}/>
//         }
//       })}
//       </Positioning>
//       <FontAwesomeIcon style={upArrow} icon={['far', 'arrow-alt-circle-up']} size="2x" onClick={upArrowClicked}/>
//       <FontAwesomeIcon style={downArrow} icon={['far', 'arrow-alt-circle-down']} size="2x" onClick={downArrowClicked}/>
//     </>
//   )
// }









