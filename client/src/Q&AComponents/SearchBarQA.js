import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

/*
Quick Description:
This is the search bar component for the Question and Answer section of the page.
So far it has not functionality but will shortly.
*/



function SearchBarQA() {

  return (
    <div>
      <form>
      <input type='text' placeholder='Have a question? Search for an answer'></input>
      <button type='submit'><FaSearch /></button>
      </form>
    </div>
  )


};

export default SearchBarQA;