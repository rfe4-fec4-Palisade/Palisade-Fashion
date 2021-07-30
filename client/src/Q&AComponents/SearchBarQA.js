import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

/*
Quick Description:
This is the search bar component for the Question and Answer section of the page. The component recieves a handleChange function from the Q&A container component. The handler is activated in the larger component as the text inserted into input field must be used to manipulate search function in QandAitem component. Therefore, the functionality of this actual component is limited.
*/


const StyledDiv = styled.div `
  position: realtive;
  display: flex;
`;

const StyledInput = styled.input `
bar  {
  border: 2px solid black;
  height: 35px;
  padding: 2px 23px 2px 30px;
  width: 80%;
  outline: 0;
  background-color: #FBFCFC;
  font-family: Noto Sans, sans-serif;
  margin-left: 40px;
  margin-bottom: 10px;
},

&:hover {
  border-color: #EC7063;
},

'::placeholder' {
  border-radius: 5px;
  padding: 6px;
  font-family: Noto Sans, sans-serif;
}



`;

const style = {
  // position: 'absolute',
  color: '#273746 ',
  top: '6px',
  float: 'left',
  height: '16px',
  width: '16px',
  padding: '15px'
}

const inputStyle = {
  bar:  {
    border: '2px solid black',
    height: '35px',
    padding: '2px 23px 2px 30px',
    width: '80%',
    outline: '0',
    backgroundColor: '#FBFCFC',
    fontFamily: 'Noto Sans, sans-serif',
    marginLeft: '40px',
    marginBottom: '10px',
  },


    '::placeholder': {
      borderRadius: '5px',
      padding: '6px',
      fontFamily: 'Noto Sans, sans-serif'
    }


}


function SearchBarQA(props) {


  return (
    <StyledDiv>
      <StyledInput type='text' style={inputStyle.bar} placeholder='HAVE A QUESTION? SEARCH FOR AN ANSWER' onChange={props.handleChange}></StyledInput>
      <FaSearch style={style} />
    </StyledDiv>
  )


};

export default SearchBarQA;