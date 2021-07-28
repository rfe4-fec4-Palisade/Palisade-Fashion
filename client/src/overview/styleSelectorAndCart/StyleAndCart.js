import React, { useState, useEffect } from 'react';
import SelectSize from './selectSize.js';
import ShowAllStyles from './showAllStyles.js';
import Price from './price.js';
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

  return (
    <div>
      <Price styleSelected={oneStyle}/>
      <p>Style Name: {oneStyle.name}</p>
      {allStyles.map((item) => {
        return <ShowAllStyles key={item.style_id} eachStyle={item}/>
      })}
      <SelectSize styleSelected={oneStyle}/>
    </div>
  )
}

export default SelectedStyle;