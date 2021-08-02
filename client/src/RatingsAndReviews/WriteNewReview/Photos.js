import React, { useState } from 'react';


const Photos = (props) => {
  const [link, setLink] = useState('');
  const handleChange = (event) => {
    setLink(URL.createObjectURL(event.target.files[0]))
  };

  return (
    <div>
      <input type="file" name="photo" onChange={(event)=>{handleChange(event)}}/>
      <button type="button" onClick={(event)=>{props.uploadPhoto(link)}}> Upload </button>
      </div>
  )

};

export default Photos;