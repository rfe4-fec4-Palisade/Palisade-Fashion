import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import validateInfo from './validateInfo.js';
import PhotoPrev from './PhotoPrev.js';
import { FaTimesCircle } from 'react-icons/fa';
import { FaCheckSquare } from 'react-icons/fa';

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
  height: 320px;
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

const PhotoPanel = styled.div`
background: #F0F0F0;
padding: 5px;
display: flex;
flex-direction: row;
`

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

const title = {
  fontFamily: 'Arial, sans-serif',
  color: '#F1948A',
  textAlign: 'center',
  fontSize: '40px'
}

function AddaAnswer(props) {

  // console.log('add anaswer props', props);
  const [questionText, setQuestionText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState([]);
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

  const createPhotoArray = () => {
    let output = []
    image.forEach((photo) => {
      output.push('https://source.unsplash.com/random')
    })
    // console.log('output', output);
    return output
  }



  const handleSubmit = (event) => {
    event.preventDefault();

    setErrors(validateInfo(allValues));
    let photoArray = createPhotoArray();
    console.log('photoArray', photoArray)

    axios.post(`/qa/questions/${productID}/answers`,  {
      body: questionText,
      name: name,
      email: email,
      photos: photoArray,
      product_id: props.data
    })
    .then((res) => {
      console.log('successfully added answer', res.data);

      setShowSubmit(!showSubmit);

        setTimeout(() => {
          setShowSubmit(false);
        }, 600)

    })
    .catch((err) => {
      console.log('error adding answer', err);
    })

  }

  const handleClick = (event) => {
    props.func();
  }

  const handleUpload = (event) => {
    if (image.length === 5) {
      event.preventDefault();
      alert('Cannot upload more than 5 images');
      return;
    }

    if (image.length >= 1) {
      var newImages =  [...image, URL.createObjectURL(event.target.files[0])];
      setImage(newImages);
    } else {
      var newimage = [URL.createObjectURL(event.target.files[0])];
      setImage(newimage)
    }
  }




  if (showSubmit) {
    return (
      <Popup>
        <PopupInner2>
        <h3 style={title}>Answer Submitted!</h3>
          <button type='submit' style={submitStyle3} onClick={event => handleClick2(event)}>
          <FaCheckSquare fontSize="40px" />
          </button>
        </PopupInner2>
      </Popup>
    )
  }

  // console.log('image', image);
 return (
   <Popup>
     <PopupInner>
     <form >
        <input type='text' style={style} placeholder='Example: jackson11!' onChange={(event) => setName(event.target.value)}></input>
        {errors.name && <p style={paragraph} >{errors.name}</p>}
        <input type='email' style={style}  placeholder='Add Your Email' onChange={(event) => setEmail(event.target.value)} ></input>
        {errors.email && <p style={paragraph} >{errors.email}</p>}
        <textarea maxLength='1000' style={style2}  type='text' placeholder='Add Your Answer' onChange={(event) => setQuestionText(event.target.value)}></textarea>
        {errors.body && <p style={paragraph} >{errors.body}</p>}
        <input type='file' placeholder='Upload Photos' accept='image/*' onChange={(event) => {handleUpload(event)}}></input>
        <button  type='submit' style={submitStyle}  onClick={(event) => handleSubmit(event)}>Submit</button>
        <button type='submit' style={submitStyle2} onClick={event => {handleClick(event)}}>
          <FaTimesCircle fontSize="30px"/>
        </button>
        {image.length >= 1 ?
        <PhotoPanel>
            {image.map((photo) => <PhotoPrev photo={photo} />)}
        </PhotoPanel> : null}
        </form>
          { props.children }
     </PopupInner>
   </Popup>
 )

};

export default AddaAnswer;


//{image.length >= 1 ?
{/* <span>
{image.map((photo) => <PhotoPrev photo={photo} />)}
</span> : null} */}


{/* <PhotoPanel>
<PhotoPrev photo={image}></PhotoPrev>
</PhotoPanel> */}