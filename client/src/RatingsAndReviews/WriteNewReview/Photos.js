import React, { useState } from 'react';

const Photos = (props) => {

  const [link, setLink] = useState('');

  const handleChange = (value) => {
    setLink(value);
  };

  return (
    <div>
      <input type="text" name="photo" onChange={(event)=>{handleChange(event.target.value)}}/>
      <button type="button" onClick={(event)=>{props.uploadPhoto(link)}}> Upload </button>
      </div>
  )

};

export default Photos;