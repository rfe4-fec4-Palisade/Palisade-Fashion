import React, { useState } from 'react';
import ReactDom from 'react-dom';
import Characteristics from './Characteristics.js';
import axios from 'axios';
const Form = ({ id, isOpen, onClose }) => {
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

  const handleSubmit = (event) => {
    event.preventDefault()
    var requestBody =
      {
        "product_id": id,
        "rating": rating,
        "summary": summary,
        "body": body,
        "recommend": recommend,
        "name": nickname,
        "email": email,
        "photos": [],
        "characteristics": {}
      }
    axios.post('/reviews', requestBody)
      .then((response) => {
        console.log('posted!')
      })
      .catch((err) => {console.log(err)})
  };


  if (!isOpen) return null;

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
        {characteristics.map((char) => <Characteristics char={char} handleCharChange={handleCharChange}/>)}
        <input type="text" placeholder="Write a summary here" name="Summary" onChange={(event)=>{handleTextChange(event)}}/>
        <input type="text" placeholder="Write details here" name="Body" onChange={(event)=>{handleTextChange(event)}}/>
        <input type="text" placeholder="nickname" name="Name" onChange={(event)=>{handleTextChange(event)}}/>
        <input type="text" placeholder="email" name="Email" onChange={(event)=>{handleTextChange(event)}}/>
        <input type="submit"/>
      </form>
    </div>,
    document.getElementById('formModal')
  )

};

export default Form;