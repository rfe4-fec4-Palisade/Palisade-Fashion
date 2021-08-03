import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import Characteristics from './Characteristics.js';
import Styled from 'styled-components'
import axios from 'axios';
import Photos from './Photos.js';
import ReviewStar from './ReviewStar.js';
import validateInfo from './validateInfo.js';
import Preview from './Preview.js';

const ModalWrapper = Styled.div `
display: flex;
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
background-color: rgba(0, 0, 0, 0.2);
justify-content: center;
align-items: center;
font-family: Arial, sans-serifs;
`;

const ModalContent = Styled.div `
display: flex;
position: relative;
width: 600px;
height: 400px;
padding: 20px;
background-color: #FFF;
border-radius: 20px;
overflow: auto;
`;

const FormContent = Styled.form`
justify-content: space-around;
flex-direction: column;
width: 100%
`

const Header = Styled.header`
display: flex;
flex-direction: row;
`

const SecondRow = Styled.span`
display: flex;
justify-content: space-between;
`

const Recommend = Styled.div`
display:flex;
flex-direction: column;
align-items: center;
`
const Rating = Styled.div`
`

const Text = Styled.div`
display: flex;
flex-direction: column;
font-size: 12px;
`
const SmallBox = Styled.input`
fontFamily: 'Arial, sans-serif';
backgroundColor: '#E0E0E0';
height: 25px;
padding: 10px;
`

const Box = Styled.input`
fontFamily: 'Arial, sans-serif';
backgroundColor: '#E0E0E0';
height: 75px;
padding: 10px;
`
const SpaceV = Styled.div`
height: 10px;
`
const PhotoPanel = Styled.div`
background: #F0F0F0;
padding: 5px;
display: flex;
flex-direction: row;
`

const paragraph = {
  marginBottom: '0',
  marginTop: '4px',
  color: 'red',
  fontSize: '14px',
  width: '300px'
 }


const Form = ({ id, isOpen, onClose, metadata, createChars}) => {
  const [rating, setRating] = useState(1)
  const [recommend, setRecommend] = useState(null)
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
  const [errors, setErrors] = useState({})

  let mandatoryValues = {
    'rating': rating,
    'recommend': recommend,
    'characteristics': characteristics,
    'email': email,
    'nickname': nickname,
    'body': body
  }

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
      var newState = [...photos, link];
      setPhotos(newState);
      console.log(photos)
    } else {
      alert('maximum number of photos reached')
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateInfo(mandatoryValues))
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
        onClose()
      })
      .catch((err) => {console.log(err)})
  };

  const changeRating = (value) => {
    setRating(value);
  };

  if (!isOpen) return null;

  return ReactDom.createPortal (
    <ModalWrapper>
      <ModalContent>
        <FormContent onSubmit={(event)=>{handleSubmit(event)}}>
          <header>
            <h1>Write a new review</h1>
            <button className="close" onClick={onClose}>
              X close
            </button>
          </header>
          <SecondRow>
            <Rating>
              <p>Overall Rating</p>
              <ReviewStar rating={rating} changeRating={changeRating}/>
              {errors.rating && <p style={paragraph} >{errors.rating}</p>}
            </Rating>
            <Recommend>
              <p>Do you recommend this product?</p>
              <span>
              <input type="radio" name="recommend" onChange={(event)=>{handleRecChange(event.target.value)}} value="true"/>Yes
              <input type="radio" name="recommend" onChange={(event)=>{handleRecChange(event.target.value)}} value="false"/>No
              </span>
              {errors.recommend && <p style={paragraph} >{errors.recommend}</p>}
            </Recommend>
          </SecondRow>
          {characteristics.map((char) => <Characteristics char={char} metadata={metadata} handleCharChange={handleCharChange} key={char.field}/>)}
          <Text>
            <SmallBox type="text" placeholder="Example: Best purchase ever!" name="Summary" onChange={(event)=>{handleTextChange(event)}}></SmallBox>
            <SpaceV></SpaceV>
            <Box type="text" placeholder="Why did you like the product or not?" name="Body" onChange={(event)=>{handleTextChange(event)}}></Box>
            <SpaceV></SpaceV>
            <input type="text" placeholder="Example:Jackson11!" name="Name" onChange={(event)=>{handleTextChange(event)}}/>
            <div>For privacy reasons, do not use your full name or email address</div>
            {errors.name && <p style={paragraph} >{errors.name}</p>}
            <SpaceV></SpaceV>
            <input type="text" placeholder="Example: jackson11@email.com" name="Email" onChange={(event)=>{handleTextChange(event)}}/>
            {errors.email && <p style={paragraph} >{errors.email}</p>}
            <div>For authentication reasons, you will not be emailed</div>
          </Text>
          <SpaceV></SpaceV>
          <Photos uploadPhoto={uploadPhoto} placeholder="Upload a photo!"/>
          <SpaceV></SpaceV>
          {photos.length >= 1 ?
          <PhotoPanel>
            {photos.map((photo)=><Preview photo={photo}/>)}
          </PhotoPanel> : null }
          <SpaceV></SpaceV>
          <input type="submit"/>
        </FormContent>
      </ModalContent>
    </ModalWrapper>,
    document.getElementById('formModal')
  )

};

export default Form;