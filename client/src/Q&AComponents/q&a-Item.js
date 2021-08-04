import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AnswerItems from '../Q&AComponents/answerItem.js';
// import AnswerItems from '../Q&AComponents/AnswerItems.js';
import { API_KEY } from '../../../config.js';
import LoadMoreQs from '../Q&AComponents/LoadMoreQs.js'
import AddaQuestion from '../Q&AComponents/AddaQuestion.js';
import Helpful from '../sharedComponents/Helpful.js';
import Helpful2 from '../Q&AComponents/Helpful2.0.js'

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
  list-style-type: none;
  display: flex;
  height: 29px;
`;


const style = {
  height: '370px',
  width: '90%',
  overflow: 'auto',
  backgroundColor: 'transparent',
  display: 'block',
  padding: '3px',
}

const title = {
  fontFamily: 'Arial, sans-serif',
  float: 'left',
  margin: '10px',
  width: '40px',
  height: '25px'
}

const parrafo = {
  fontFamily: 'Arial, sans-serif',
  float: 'right',
  margin: '10px',
  width: '50%',
  height: '25px'
}

const parrafo2 = {
  fontFamily: 'Arial, sans-serif',
  margin: '10px',
  width: '50%',
  height: '25px'
}

const help = {
  fontFamily: 'Arial, sans-serif',
  marginLeft: '220px',
  marginTop: '10px',
  marginBottom: '10px',
  marginRight: '10px',
  color: '#273746',
  fontSize: '12px'
}

const spain = {
  borderBottom: '1px dashed #ABB2B9 ',
  width: '90%'
}

const ul = {
  width: '95%'
}



class QandAitem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionData: '',
      loadMoreQs: false,
    }
    this.handleLoadClick = this.handleLoadClick.bind(this);
    this.submitedAnswers = this.submitedAnswers.bind(this);
  }


  componentDidMount() {
    axios(`/qa/questions?product_id=${this.props.id.parentProps.product}&count=200`)
    .then((res) => {

      var result;
      if (res.data.results.length > 1) {
        result = res.data.results;
      } else {
        result = res.data.results[0];
      }
      this.setState({
        questionData: result
      })

    })
    .catch((err) => {
      console.log('error retrieving answer list:', err);
    })

  }

  componentDidUpdate(prevProps) {

    if (this.props !== prevProps) {
      axios(`/qa/questions?product_id=${this.props.id.parentProps.product}&count=200`)
      .then((res) => {

        var result;
        if (res.data.results.length > 1) {
          result = res.data.results;
        } else {
          result = res.data.results[0];
        }
        this.setState({
          questionData: result
        })

      })
      .catch((err) => {
        console.log('error retrieving answer list:', err);
      })
    }


  }


  handleLoadClick(event) {

    this.setState(prevState => ({
      loadMoreQs: !prevState.loadMoreQs
    }))

  }

  submitedAnswers(bool) {
    if (bool === true) {
      axios(`/qa/questions?product_id=${this.props.id.parentProps.product}&count=200`)
    .then((res) => {
      var result;
      if (res.data.results.length > 1) {
        result = res.data.results;
      } else {
        result = res.data.results[0];
      }
      this.setState({
        questionData: result
      })

    })
    .catch((err) => {
      console.log('error retrieving answer list:', err);
    })

  }
}


  render() {
    //questionData variable (ref to value in state) for further use
    //payLoad is passed down to loadMoreQuestions button component
    const questionData = this.state.questionData;
    // console.log('questionData', questionData)
    const productID = this.props.id.parentProps.product


    if (questionData === undefined) {
      return (
        // <div style={style}>
        //    <div><p style={parrafo2}>No Questions or Answers!</p></div>


        //     <AddaQuestion data={productID} />
        // </div>
        null

      )
    }

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
          <div style={style}>
          {filteredSlicedSearch.map(question =>
              <ul style={ul} key={question.question_id}>
              <StyledList><h4 style={title}>Q:</h4><h4 style={parrafo}>{question.question_body}</h4><Helpful2 style={help} helpfulness={question.question_id} submitAns={this.submitedAnswers} /></StyledList>

               <AnswerItems answers={question.question_id}/>
               <div style={spain}></div>
            </ul>
        )}
          </div>

            <LoadMoreQs loadMore={payLoad}/>
            <AddaQuestion data={productID} />
    </div>
      )
    }

    return (
      <div>
        <div style={style}>
        <ul style={ul} >
      <StyledList><h4 style={title}>Q:</h4><h4 style={parrafo}>{this.state.questionData.question_body}</h4> <Helpful2 style={help} helpfulness={this.state.questionData.question_id} submitAns={this.submitedAnswers}/></StyledList>
         <AnswerItems answers={this.state.questionData.question_id}/>
         <div style={spain}></div>
      </ul>
        </div>
        <LoadMoreQs loadMore={payLoad}/>
         <AddaQuestion data={productID} />
    </div>
    )
  }
}

export default QandAitem;

