import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AnswerItem from '../Q&AComponents/answerItem.js';
import { API_KEY } from '../../../config.js'

/*
Quick Description:
This is large component takes care of the Q: and A: divs that are renders on browser.
Originally was meant to use hooks, but had to switch to class component to use 'ComponentDidMount'.
ComponentDidMount returns the data intercepted from the API request sent by server.
This data is checked for length because there may be multiple questions per product ID and
it has to render them accordingly.

It also passes down the question_id to the answerItem subcomponent that deals with smaller indivdual
answer sections.
*/

const StyledList = styled.li `
  list-style-type: none
`;

class QandAitem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionData: ''
    }
  }


  componentDidMount() {
    axios(`http://localhost:3000/qa/questions?product_id=${this.props.id.product}`)
    .then((res) => {

      var result;
      if (res.data.results.length > 1) {
        result = res.data.results;
      } else {
        result = res.data.results[0];
      }
      console.log('this is result from api', res.data)

      this.setState({
        questionData: result
      })

    })
    .catch((err) => {
      console.log('error retrieving answer list:', err);
    })

  }


  render() {

    const questionData = this.state.questionData;

    if (this.state.questionData.length > 1) {
      return (
        <div>
          {questionData.map(question =>
              <ul key={question.question_id}>
              <StyledList><h4>Q: {question.question_body}</h4></StyledList>
               <AnswerItem answers={question.question_id}/>
            </ul>
        )}
    </div>
      )
    }
    return (
      <div>
      <ul>
        <StyledList><h4>Q: {this.state.questionData.question_body}</h4></StyledList>
         <AnswerItem answers={this.state.questionData.question_id}/>
      </ul>
    </div>
    )
  }
}

export default QandAitem;

