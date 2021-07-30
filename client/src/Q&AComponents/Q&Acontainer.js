
import React, { useState, useEffect } from 'react';
import SearchBarQA from '../Q&AComponents/SearchBarQA.js';
import QandAitem from '../Q&AComponents/q&a-Item.js';

/*
Quick Description:
This is the major container for all larger (and consquently smaller sub components)
in the Questions and Answer sections.
Not meant to have a lot of functionality other than housing components and helping
the search bar with passing information along to QandAItem.

This component is currenlty using a hook to get the target value from search bar
and pass it down to QandAitem to be rendered accordingly along with productID stored in props item.
*/

const style = {
  fontFamily: 'Arial, sans-serif',
  display: 'block',
  width: '100%',
  margin: '20px'
}


function QuestionAndAnswer(props) {
  const [searchField, setSearchField] =useState('');

  var propsPackage = {
    'parentProps': props,
    'searchTerm': searchField
  }

  return(
    <div style={style}>
      <div style={style}>{'QUESTION & ANSWER'}</div>
      <SearchBarQA handleChange={(event) => {setSearchField(event.target.value)}}/>
      <QandAitem id={propsPackage}/>
      <div style={style}></div>
    </div>
  )

};


export default QuestionAndAnswer;