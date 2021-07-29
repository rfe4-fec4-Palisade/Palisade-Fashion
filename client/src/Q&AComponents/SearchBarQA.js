import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

/*
Quick Description:
This is the search bar component for the Question and Answer section of the page.
So far it has not functionality but will shortly.
*/

const StyledIcon = styled.i `
  position: realtive;
  padding: 8px 9px
   font-size: 0.73em;
`;

const StyledDiv = styled.div `
  position: realtive;
  display: flex;
`;

const style = {
  color: '#A6ACAF',
  top: '6px',
  left: '8px',
  height: '16px',
  width: '16px',
  padding: '12px'
}

// const StyledInput = styled.input `
// border: 1px solid grey;
//     border-radius: 5px;
//     height: 35px;
//     padding: 2px 23px 2px 30px;
//     width: 100%;
//     outline: 0;
//     background-color: #F4F6F7;
//     font: Andale Mono, monospace;

//     ::placeholder {
//       border-radius: 5px;
//       padding: 6px;

//     }
// `;

const inputStyle = {
  bar:  {
    border: '1px solid grey',
    borderRadius: '5px',
    height: '35px',
    padding: '2px 23px 2px 30px',
    width: '100%',
    outline: '0',
    backgroundColor: '#F4F6F7',
    fontFamily: 'Noto Sans, sans-serif'
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
      <input type='text' style={inputStyle.bar} placeholder='HAVE A QUESTION? SEARCH FOR AN ANSWER' onChange={props.handleChange}></input>
      {/* <StyledInput type='text' placeholder='HAVE A QUESTION? SEARCH FOR AN ANSWER' onChange={props.handleChange} ></StyledInput> */}
      <FaSearch style={style} />
    </StyledDiv>
  )


};

export default SearchBarQA;