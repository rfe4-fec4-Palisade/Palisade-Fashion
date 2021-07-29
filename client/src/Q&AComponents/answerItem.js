import React from 'react';
import axios from 'axios';
import QandAitem from '../Q&AComponents/q&a-Item.js';
import { API_KEY } from '../../../config.js'
import Helpful from '../sharedComponents/Helpful.js';
import dateParser from '../helperFunctions/dateParser.js';
import LoadMoreAns from '../Q&AComponents/LoadMoreAns.js';
import AddaQuestion from '../Q&AComponents/AddaQuestion.js';

/*
Quick Description:
This component is responsible for the retrieval of AnswerList data and answer rendering.
Because of it needs to fetch data, a class component structure is used along with a componentDidMount.
This CMD (componentDidMount) is wrapped with a setTimeut (500 ms) because of rendering issues.
Originally the site would crash due to necessary data not loading in time. This may be refactored soon, but currently
it works with this structure.

The data fetched from the axios request is set to the state. This state is an ordered list of helpfulness
and sliced to be rendered in quantities. The subcomponent LoadMoreAns is responsible for expanding or
collapsing the additional questions not rendered on screen.

*/


class AnswerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAnswers: '',
      clickedLoadMore: false,
    }
    this.handleLoadClick = this.handleLoadClick.bind(this);
  }


  componentDidMount(event) {

      setTimeout(() => {
        axios(`/qa/questions/${this.props.answers}/answers`)
        .then((res) => {
          // console.log('this is answers list', res)
          const data = res.data.results;
          this.setState({
            currentAnswers: data,
          })
        })
        .catch((err) => {
          console.log('error retrieving answer list:', err);
        })
      }, 400)

  }


  handleLoadClick(event) {
    // event.preventDefault();

    this.setState(prevState => ({
      clickedLoadMore: !prevState.clickedLoadMore
    }))
  }


  render() {

    // console.log('this is question id', this.props.answers)
    const answer = this.state.currentAnswers;
    var twoAnswers = answer.slice(0, 1);
    const onLoadMore = this.state.clickedLoadMore;

    let payLoad = {
      func: this.handleLoadClick,
      leng: answer.length
    }


    if (answer === '') {
      return null;
    }


    if (onLoadMore === true) {
      var newAnswers = answer.slice(0, answer.length)
      twoAnswers = newAnswers
    }

    return (
      <div>
        {twoAnswers.map(answerItem =>
        <div key={answerItem.answer_id}>
         <div><h4>A:</h4> <p>{answerItem.body}</p></div>
          <span> by {answerItem.answerer_name}</span>, <span>{dateParser(answerItem.date)}</span>
         <Helpful helpfulness={answerItem.helpfulness}/>
         </div>
        )}

        <LoadMoreAns loadMore={payLoad}/>

      </div>
    )
  }
}

export default AnswerItem;
