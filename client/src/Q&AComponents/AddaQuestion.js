import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import validateInfo from './validateInfo.js';
import { FaTimesCircle } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaCheckSquare } from 'react-icons/fa';

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
  border-radius: 20px;
  width: 400px;
  height: 270px;
  // max-width: 640px;
  background-color: #FFF;
`;

const PopupInner2 = styled.div `
  position: relative;
  padding: 20px;
  width: 500px;
  border-radius: 20px;
  height: 170px;
  background-color: #FFF;
`;

const StyledIcon = styled.i `
  font-size: 2em;
`;

const StyledBttn = styled.button `
float: left;
margin-left: 50px;
border: 2px solid black;
width: 200px;
text-align: center;
line-height: 30px;
padding: 10px;
font-family: Arial, sans-serif;
font-size: 12px;
justify-Content: center;
background-color: #FBFCFC;

&:hover {
  color: #EC7063
}

`;

const style = {
  fontFamily: 'Arial, sans-serif',
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
  float: 'right',
  fontFamily: 'Arial, sans-serif',
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

const submitStyle3 = {
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  width: '7rem',
  color: '#797D7F ',
  border: 'transparent',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  lineHeight: '2',
  marginLeft: '185px',
  padding: '0',
  borderRadius: '1.5rem',
  fontSize: '1.125rem',
  outline: 'none',
}

const moreQuestions = {

	alignItems: 'center',
	justifyContent: 'center',
	width: '12.5rem',
	marginLeft: '50px',
	padding: '1.5rem 1.125rem',
	backgroundColor: '#CACFD2',
	border: '1px',
	borderRadius: '0.3125rem',
  fontFamily: 'Arial, sans-serif',
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

const title = {
  fontFamily: 'Arial, sans-serif',
  color: '#F1948A',
  textAlign: 'center',
  fontSize: '40px'
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

      // console.log('this is errors', errors);
      axios.post('/qa/questions', {
        body: questionText,
        name: name,
        email: email,
        product_id: props.data
      })
      .then((res) => {
        console.log('successfully added question', res);

        setShowSubmit(!showSubmit);

        setTimeout(() => {
          setShowSubmit(false);
          setClick(false);
        }, 500)
      })
      .catch((err) => {
        console.log('error adding question', err);
      })


  }

  const handleClick = (event) => {
    // event.preventDefault();
    setClick(!isClicked)
  }

  if (showSubmit) {
    return (
      <Popup>
        <PopupInner2>
          <h3 style={title}>Question Submitted!</h3>
          <button type='submit' style={submitStyle3} onClick={event => handleClick2(event)}>
          <FaCheckSquare fontSize="40px" />
          </button>
        </PopupInner2>
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
        <button type='submit' style={submitStyle2} onClick={event => handleClick(event)}><FaTimesCircle fontSize="30px"/></button>
        </form>
          { props.children }
        </PopupInner>
      </Popup>
    )

  }
  return(
      <div>
        <StyledBttn type='submit' onClick={event => handleClick(event)}>ADD A QUESTION <FaPlus margin="10px" fontSize="15px"/></StyledBttn>
         {/* <button type='submit' style={moreQuestions} onClick={event => handleClick(event)}>ADD A QUESTION <FaPlus margin="10px" fontSize="15px"/></button> */}
      </div>
  )
// onClick={event => handleClick(event)}
//disabled={!isValid}
//https://goshakkk.name/instant-form-fields-validation-react/

};

export default AddaQuestion;

