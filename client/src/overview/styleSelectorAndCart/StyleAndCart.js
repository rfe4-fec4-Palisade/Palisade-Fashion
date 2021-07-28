import React, { useState, useEffect } from 'react';
import SelectSize from './selectSize.js';
import ShowAllStyles from './showAllStyles.js';
import ImageGallery from './ImageGallery.js';
import Thumbnail from './thumbnail.js';
import Price from './price.js';
import styled from 'styled-components';
import axios from 'axios';

function SelectedStyle (props) {
  const [allStyles, setAllStyles] = useState([]);
  const [oneStyle, setStyle] = useState([]);

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

  const userSelectedStyle = (clickedItem) => { // item will be entire object of style clicked by user
    console.log(clickedItem)
    console.log('clicked!')
    setStyle(clickedItem);
  }

  return (
    <div>
      <ImageGallery imageSelected={oneStyle}/>
      <Thumbnail/>
      <div>--------------------------------</div>
      <Price styleSelected={oneStyle}/>
      <p>Style Name: {oneStyle.name}</p>
      {allStyles.map((item) => {
        return <ShowAllStyles key={item.style_id} eachStyle={item} styleClicked={userSelectedStyle}/>
      })}
      <SelectSize styleSelected={oneStyle}/>
    </div>
  )
}

export default SelectedStyle;