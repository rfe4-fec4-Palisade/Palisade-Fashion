import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AnswerItem from '../Q&AComponents/answerItem.js';
import { API_KEY } from '../../../config.js';
import LoadMoreQs from '../Q&AComponents/LoadMoreQs.js'
import AddaQuestion from '../Q&AComponents/AddaQuestion.js';

/*
Quick Description:
This large component takes care of the Q: and A: divs that are renders on browser.
Originally was meant to use hooks, but had to switch to class component to use 'ComponentDidMount'.
ComponentDidMount returns the data intercepted from the API request sent by server.
This data is checked for length because there may be multiple questions per product ID and
it has to render them accordingly.

It also passes down the question_id to the answerItem subcomponent that deals with smaller indivdual and separate information to the loadMoreQs button.
answer sections.
*/

const StyledList = styled.li `
  list-style-type: none
`;

class QandAitem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionData: '',
      loadMoreQs: false,
    }
    this.handleLoadClick = this.handleLoadClick.bind(this);
  }


  componentDidMount() {
    axios(`/qa/questions?product_id=${this.props.id.parentProps.product}`)
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


  handleLoadClick(event) {

    this.setState(prevState => ({
      loadMoreQs: !prevState.loadMoreQs
    }))

  }


  render() {
    //questionData variable (ref to value in state) for further use
    //payLoad is passed down to loadMoreQuestions button component
    const questionData = this.state.questionData;
    const productID = this.props.id.parentProps.product
    let payLoad = {
      func: this.handleLoadClick,
      leng: questionData.length
    }

    //conditional render if there is more than 1 question else render just one
    if (this.state.questionData.length > 1) {
      //if there is more than one question, render 2 first
      //if loadmore button is click, questions rendered expands to full size
        //search is still applicable to limited or expanded search

      var questionDataSliced = this.state.questionData.slice(0, 2);
      const searchTerm = this.props.id.searchTerm;
      var filteredSearch = questionDataSliced;
      const loadedMoreQs = this.state.loadMoreQs;

      if (loadedMoreQs === true) {
        questionDataSliced = this.state.questionData.slice(0, questionData.length)
        filteredSearch = questionDataSliced
      }


      if (Array.isArray(questionData)) {
        var filteredSlicedSearch = filteredSearch.filter(question => (
          question.question_body.toLowerCase().includes(searchTerm.toLowerCase())
        ))
      }
      return (
        <div>
          {filteredSlicedSearch.map(question =>
              <ul key={question.question_id}>
              <StyledList><h4>Q: {question.question_body}</h4></StyledList>

               <AnswerItem answers={question.question_id}/>
            </ul>
        )}
            <LoadMoreQs loadMore={payLoad}/>
            <AddaQuestion data={productID} />
    </div>
      )
    }
    return (
      <div>
      <ul>
        <StyledList><h4>Q: {this.state.questionData.question_body}</h4></StyledList>
         <AnswerItem answers={this.state.questionData.question_id}/>
         <LoadMoreQs loadMore={payLoad}/>
         <AddaQuestion data={productID} />
      </ul>
    </div>
    )
  }
}

export default QandAitem;

