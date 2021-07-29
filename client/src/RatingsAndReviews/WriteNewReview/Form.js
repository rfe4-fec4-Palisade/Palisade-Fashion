import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import Characteristics from './Characteristics.js';
import Styled from 'styled-components'
import axios from 'axios';
import Photos from './Photos.js';

const Form = ({ id, isOpen, onClose, metadata, createChars}) => {
  const [rating, setRating] = useState(1) //star component 1-5
  const [recommend, setRecommend] = useState(false)

  const [characteristics, setCharacteristics] = useState(
    [
      {
        lowest: 'A size too small',
        highest: 'A size too big',
        field: 'Size',
        value: 0
      },
      {
        lowest: 'Too narrow',
        highest: 'Too wide',
        field: 'Width',
        value: 0
      },
      {
        lowest: 'Uncomfortable',
        highest: 'Perfect',
        field: 'Comfort',
        value: 0
      },
      {
        lowest: 'Poor',
        highest: 'Perfect',
        field: 'Quality',
        value: 0
      },
      {
        lowest: 'Runs short',
        highest: 'Runs long',
        field: 'Length',
        value: 0
      },
      {
        lowest: 'Runs tight',
        highest: 'Runs long',
        field: 'Fit',
        value: 0
      },
    ])

  const [summary, setSummary] = useState('')
  const [body, setBody] = useState('')
  const [nickname, setName] = useState('')
  const [email, setEmail] = useState('')
  const [photos, setPhotos] = useState([])

  const handleRecChange = (value) => {
    if (JSON.parse(value) === true) {
      setRecommend(true);
    } else {
      setRecommend(false);
    }
 }

 const handleCharChange = (field, value) => {
   let newState = characteristics;
   newState.forEach((char) => {
     if (char.field === field) {
       char.value = value*1;
      }
    })
    setCharacteristics(newState);
  }

  const handleTextChange = (event) => {
    const {name, value} = event.target;
    if (name === 'Summary') {
      setSummary(value)
    }
    if (name === 'Body') {
      setBody(value)
    }
    if (name === 'Name') {
      setName(value)
    }
    if (name === 'Email') {
      setEmail(value)
    }
  }

  const uploadPhoto = (link) => {
    if (photos.length < 5) {
      var newState = photos;
      newState.push(link);
      setPhotos(newState);
    } else {
      alert('maximum number of photos reached')
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    var requestBody =
      {
        "product_id": id,
        "rating": rating,
        "summary": summary,
        "body": body,
        "recommend": recommend,
        "name": nickname,
        "email": email,
        "photos": photos,
        "characteristics": {}
      }
    axios.post('/reviews', requestBody)
      .then((response) => {
        console.log('posted!')
      })
      .catch((err) => {console.log(err)})
  };


  if (!isOpen) return null;

  const Radio = Styled.input`
  `

  return ReactDom.createPortal (
    <div className="modal">
      <button className="close" onClick={onClose}>
        X close
      </button>
      <form onSubmit={(event)=>{handleSubmit(event)}}>
        <p>Overall Rating</p>
        <input type="range" min="1" max="5" step="1" defaultValue="1" onChange={(event)=>{setRating(event.target.value*1)}}/>
        <p>Do you recommend this product?</p>
        <input type="radio" name="recommend" onChange={(event)=>{handleRecChange(event.target.value)}} value="true"/>Yes
        <input type="radio" name="recommend" onChange={(event)=>{handleRecChange(event.target.value)}} value="false"/>No
        {characteristics.map((char) => <Characteristics char={char} metadata={metadata} handleCharChange={handleCharChange}/>)}
        <input type="text" placeholder="Example: Best purchase ever!" name="Summary" onChange={(event)=>{handleTextChange(event)}}/>
        <input type="text" placeholder="Why did you like the product or not?" name="Body" onChange={(event)=>{handleTextChange(event)}}/>
        <input type="text" placeholder="Example:Jackson11!" name="Name" onChange={(event)=>{handleTextChange(event)}}/>
        <div>For privacy reasons, do not use your full name or email address</div>
        <input type="text" placeholder="Example: jackson11@email.com" name="Email" onChange={(event)=>{handleTextChange(event)}}/>
        <div>For authentication reasons, you will not be emailed</div>
        <Photos uploadPhoto={uploadPhoto}/>
        <input type="submit"/>
      </form>
    </div>,
    document.getElementById('formModal')
  )

};

export default Form;