import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import validateInfo from './validateInfo.js';
import { FaTimesCircle } from 'react-icons/fa';

/*
Quick Description:
This is a buttom component that should open a form or modal?

*/

/************************************* CSS Styling Section */
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
  // max-width: 640px;
  border-radius: 20px;
  background-color: #FFF;
`;

const StyledIcon = styled.i `
  font-size: 2em;
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
  marginTop: '15px'
}

const style2 = {
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
    font: 'Arial',
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
    borderRadius: '1.5rem',
    fontSize: '1.125rem',
    textTransform: 'lowercase',
    outline: 'none',
}

const submitStyle2 = {
  float: 'right',
  font: 'Arial',
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
	alignItems: 'center',
	justifyContent: 'center',
	width: '12.5rem',
	marginLeft: '50px',
	padding: '1.5rem 3.125rem',
	backgroundColor: '#CACFD2',
	border: '1px',
	borderRadius: '0.3125rem',
	boxShadow: '0 12px 24px 0 rgba(0,0,0,0.2)'
}

const paragraph = {
  marginBottom: '0',
  marginTop: '4px',
  color: 'red',
  fontSize: '14px',
  width: '300px'
}
/************************************************************************ */

function AddaQuestion(props) {
  // console.log('add question props', props)
  const [questionText, setQuestionText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isClicked, setClick] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSubmit, setShowSubmit] = useState(false);
  // const isValid = name.length > 0 && email.length > 0 && questionText.length > 0;

  var allValues = {
    'body': questionText,
    'name': name,
    'email': email,
  }

  //post request with information from the state
  const handleSubmit = (event) => {
    event.preventDefault();

    setErrors(validateInfo(allValues))
    console.log('this is errors', errors);

    // var errorObj = Object.keys(errors).length;

    // if (!errors) {
      console.log('this is errors', errors);
      axios.post('/qa/questions', {
        body: questionText,
        name: name,
        email: email,
        product_id: props.data
      })
      .then((res) => {
        console.log('successfully added question', res.data);

        setShowSubmit(!showSubmit);
        //close button from
      })
      .catch((err) => {
        console.log('error adding question', err);
      })
    // } else {
    //   console.log('returning null')
    //   return null;
    // }

  }

  const handleClick = (event) => {
    // event.preventDefault();
    setClick(!isClicked)

  }
  const handleClick2 = (event) => {
    setClick(!!false)
  }

  if (showSubmit) {
    return (
      <Popup>
        <PopupInner>
          <h3>Question Submitted!</h3>
          <button type='submit' style={submitStyle2} onClick={event => handleClick2(event)}>
          <FaTimesCircle fontSize="30px"/>
          </button>
        </PopupInner>
      </Popup>
    )
  }



  if (isClicked) {

    return(
      <Popup>
        <PopupInner>
        <form >
        <input type='text' style={style} placeholder='Example: jackson11!' onChange={(event) => setName(event.target.value)}></input>
        {errors.name && <p style={paragraph} >{errors.name}</p>}
        <input type='email' style={style}  placeholder='Add Your Email' onChange={(event) => setEmail(event.target.value)} ></input>
        {errors.email && <p style={paragraph} >{errors.email}</p>}
        <textarea maxLength='1000' style={style2}  type='text' placeholder='Add Your Question' onChange={(event) => setQuestionText(event.target.value)}></textarea>
        {errors.body && <p style={paragraph} >{errors.body}</p>}
        <button  type='submit' style={submitStyle}  onClick={(event) => handleSubmit(event)}>Submit</button>
        <button type='submit' style={submitStyle2} onClick={event => handleClick(event)}>
          <FaTimesCircle fontSize="30px"/>
        </button>
        </form>
          { props.children }
        </PopupInner>
      </Popup>
    )
  }
  return(
      <div>
         <button type='submit' style={moreQuestions} onClick={event => handleClick(event)}>ADD A QUESTION</button>
      </div>
  )
// onClick={event => handleClick(event)}
//disabled={!isValid}
//https://goshakkk.name/instant-form-fields-validation-react/

};

export default AddaQuestion;

