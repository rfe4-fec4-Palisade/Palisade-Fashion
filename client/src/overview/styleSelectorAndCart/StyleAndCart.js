import React, { useState, useEffect } from 'react';
import SelectSize from './selectSize.js';
import ShowAllStyles from './showAllStyles.js';
import ImageGallery from './ImageGallery.js';
import Thumbnail from './thumbnail.js';
import Checkmark from './checkmark.js';
import Price from './price.js';
import styled from 'styled-components';
import axios from 'axios';

function SelectedStyle (props) {
  const [allStyles, setAllStyles] = useState([]);
  const [oneStyle, setStyle] = useState([]);
  const [currentStyle, setCurrent] = useState('');
  const [defaultSelected, setDefault] = useState(true);

  useEffect(() => {
    function getStyles() {
      axios.get(`http://localhost:3000/products/${props.id}/styles`)
      .then((response) => {
        console.log('data from axios request: ', response.data.results[0])
        setAllStyles(response.data.results) // results is an array of objects
        setStyle(response.data.results[0])
      })
      .catch((err) => {
        console.log('Error getting styles: ', err)
      })
    }
    getStyles();
  }, [])

  const userSelectedStyle = (clickedItem, e) => { // item will be entire object of style clicked by user
    setStyle(clickedItem);
    setCurrent(clickedItem.style_id);
    setDefault(false);
  }

  return (
    <div>
      {/* <Thumbnail imageSelected={oneStyle}/> */}
      <ImageGallery imageSelected={oneStyle}/>
      <div>--------------------------------</div>
      <Price styleSelected={oneStyle}/>
      <p>Current Style: {oneStyle.name}</p>
      {allStyles.map((item, index) => {
        return  <React.Fragment key={item.style_id}>
          <Checkmark  key={item.style_id} styleID={item.style_id} currentStyle={currentStyle} defaultShown={defaultSelected} initial={index} photo={item.photos[0].url}/>
          <ShowAllStyles  eachStyle={item} styleClicked={userSelectedStyle}/>
        </React.Fragment>
      })}
      <SelectSize styleSelected={oneStyle}/>
    </div>
  )
}

export default SelectedStyle;