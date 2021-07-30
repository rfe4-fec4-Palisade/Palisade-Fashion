import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import validateInfo from './validateInfo.js';
import { FaTimesCircle } from 'react-icons/fa';

const Popup = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupInner = styled.div `
  position: relative;
  padding: 20px;
  width: 400px;
  height: 270px;
  background-color: #FFF;
`;

const style = {
  backgroundColor: '#CACFD2',
  borderRadius: '5px',
  border: '0',
  boxSizing: 'border-box',
  color: '#283747',
  fontSize: '15px',
  height: '25px',
  outline: '0',
  padding: '5px',
  width: '100%',
  marginTop: '15px',
  fontFamily: 'Arial, sans-serif'
}

const style2 = {
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#CACFD2',
  borderRadius: '5px',
  border: '0',
  boxSizing: 'border-box',
  color: '#283747',
  fontSize: '15px',
  height: '70px',
  outline: '0',
  padding: '5px',
  width: '100%',
  marginTop: '15px'
}

const submitStyle = {
  fontFamily: 'Arial, sans-serif',
    position: 'relative',
    overflow: 'hidden',
    width: '7rem',
    color: '#797D7F ',
    border: '2px solid #A6ACAF',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    lineHeight: '2',
    margin: '7px',
    padding: '0',
    fontSize: '1.125rem',
    textTransform: 'lowercase',
    outline: 'none',
}

const submitStyle2 = {
  fontFamily: 'Arial, sans-serif',
  float: 'right',
  position: 'relative',
  overflow: 'hidden',
  width: '7rem',
  color: '#797D7F ',
  border: 'transparent',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  lineHeight: '2',
  margin: '15px',
  padding: '0',
  borderRadius: '1.5rem',
  fontSize: '1.125rem',
  textTransform: 'lowercase',
  outline: 'none',
}

const moreQuestions = {
  fontFamily: 'Arial, sans-serif',
	alignItems: 'center',
	justifyContent: 'center',
	width: '12.5rem',
	marginLeft: '50px',
	padding: '1.5rem 1.125rem',
	backgroundColor: '#CACFD2',
	border: '1px',
	borderRadius: '0.3125rem',
	// boxShadow: '0 12px 24px 0 rgba(0,0,0,0.2)'
}

const paragraph = {
  fontFamily: 'Arial, sans-serif',
  marginBottom: '0',
  marginTop: '4px',
  color: 'red',
  fontSize: '14px',
  width: '300px'
}

function AddaAnswer(props) {

  // console.log('add anaswer props', props);
  const [questionText, setQuestionText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [isClicked, setClick] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSubmit, setShowSubmit] = useState(false);

  var productID = props.data.helpfulness;
  // console.log('q id', props.helpfulness);

  var allValues = {
    'body': questionText,
    'name': name,
    'email': email,
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrors(validateInfo(allValues))

    axios.post(`/qa/questions/${productID}/answers`,  {
      body: questionText,
      name: name,
      email: email,
      image: image,
      product_id: props.data
    })
    .then((res) => {
      console.log('successfully added answer', res.data);
      //close button from
      props.func();
    })
    .catch((err) => {
      console.log('error adding answer', err);
    })

  }

  const handleClick = (event) => {
    props.func();
  }



 return (
   <Popup>
     <PopupInner>
     <form >
        <input type='text' style={style} placeholder='Example: jackson11!' onChange={(event) => setName(event.target.value)}></input>
        {errors.name && <p style={paragraph} >{errors.name}</p>}
        <input type='email' style={style}  placeholder='Add Your Email' onChange={(event) => setEmail(event.target.value)} ></input>
        {errors.email && <p style={paragraph} >{errors.email}</p>}
        <textarea maxLength='1000' style={style2}  type='text' placeholder='Add Your Question' onChange={(event) => setQuestionText(event.target.value)}></textarea>
        {errors.body && <p style={paragraph} >{errors.body}</p>}
        <input type='file' placeholder='Upload Photos' onChange={(event) => setImage(event.target.files[0])}></input>
        <button  type='submit' style={submitStyle}  onClick={(event) => handleSubmit(event)}>Submit</button>
        <button type='submit' style={submitStyle2} onClick={event => {handleClick(event)}}>
          <FaTimesCircle fontSize="30px"/>
        </button>
        </form>
          { props.children }
     </PopupInner>
   </Popup>
 )

};

export default AddaAnswer;