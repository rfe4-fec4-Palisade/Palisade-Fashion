
import React, { useState, useEffect } from 'react';
import SearchBarQA from '../Q&AComponents/SearchBarQA.js';
import QandAitem from '../Q&AComponents/q&a-Item.js';

/*
Quick Description:
This is the major container for all larger (and consquently smaller sub components)
in the Questions and Answer sections.
Not meant to have a lot of functionality other than housing all relative components
and organization.
*/


function QuestionAndAnswer(props) {

  return(
    <div>
      <SearchBarQA />
      <QandAitem id={props}/>
    </div>
  )


};


export default QuestionAndAnswer;