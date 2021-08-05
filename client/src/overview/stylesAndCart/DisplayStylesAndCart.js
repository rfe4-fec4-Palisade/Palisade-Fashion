import React, { useState, useEffect } from 'react';
import SelectSize from './selectSize.js';
import ShowAllStyles from './showAllStyles.js';
import ImageGallery from './ImageGallery.js';
import Thumbnail from './thumbnail.js';
import Checkmark from './checkmark.js';
import Price from './price.js';
import styled from 'styled-components';
import axios from 'axios';

const price = {
  position: 'relative',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
  left: '67%',
  bottom: '660px',
  width: '25%'
}

const wrapsRightSide = {
  display: 'flex',
  flexDirection: 'column'
}

const container = {
  width: '29%',
  display: 'flex',
  flexWrap: 'wrap',
  position: 'relative',
  left: '67%',
  bottom: '625px'
}
// position: 'absolute',
// right: '5%',
// top: '52.5%'

const individualStyle = {
  flexBasis: 'calc(25%)'
}

function SelectedStyle (props) {
  const [allStyles, setAllStyles] = useState([]);
  const [oneStyle, setStyle] = useState([]);
  const [currentStyle, setCurrent] = useState('');
  const [defaultSelected, setDefault] = useState(true);

  useEffect(() => {
    function getStyles() {
      axios.get(`http://localhost:3000/products/${props.currentProduct.id}/styles`)
      .then((response) => {
        setAllStyles(response.data.results) // results is an array of objects
        setStyle(response.data.results[0])
      })
      .catch((err) => {
        console.log('Error getting styles: ', err)
      })
    }
    if (props.currentProduct.id !== undefined) {
      getStyles();
    }
  }, [props.currentProduct])

  const userSelectedStyle = (clickedItem, e) => { // item will be entire object of style clicked by user
    setStyle(clickedItem);
    setCurrent(clickedItem.style_id);
    setDefault(false);
  }

  const styleName = {
    fontSize: '1.7em'
  }

  return (
    <div>
      <div>
        <ImageGallery imageSelected={oneStyle}/>
      </div>

      <div className="wrapsRightSide" style={wrapsRightSide}>
        <div style={price}>
          <Price styleSelected={oneStyle}/>
          <div style={styleName}>Style: {oneStyle.name}</div>
        </div>

        <div style={container}>
          {allStyles.map((item, index) => {
            return  <div key={item.style_id} style={individualStyle}>
              <Checkmark  key={item.style_id} styleID={item.style_id} currentStyle={currentStyle} defaultShown={defaultSelected} initial={index}/>
              <ShowAllStyles  eachStyle={item} styleClicked={userSelectedStyle}/>
            </div>
          })}
        </div>

        <div>
          <SelectSize styleSelected={oneStyle}/>
        </div>
      </div>

    </div>
  )
}

export default SelectedStyle;