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

const style = {
  display: 'flex',
  padding: '3px'

}

const title = {
  fontFamily: 'Arial, sans-serif',
  float: 'left',
  margin: '10px',
  width: '40px'
}

const parrafo = {
  fontFamily: 'Arial, sans-serif',
  float: 'right',
  margin: '10px',
  width: '50%'
}

const smallBoi = {
  fontFamily: 'Arial, sans-serif',
  margin: '10px',
  color: '#A6ACAF'
}

const smallBoi2 = {
  fontFamily: 'Arial, sans-serif',
  paddingTop: '30px',
  margin: '4px',
  color: '#A6ACAF'
}

const help = {
  fontFamily: 'Arial, sans-serif',
  margin: '10px',
  color: '#273746',
  fontSize: '12px'
}



class AnswerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAnswers: '',
      clickedLoadMore: false,
    }
    this.handleLoadClick = this.handleLoadClick.bind(this);
    this.sendHelpful = this.sendHelpful.bind(this);
    this.sendReport = this.sendReport.bind(this);
  }


  componentDidMount(event) {

      setTimeout(() => {
        axios(`/qa/questions/${this.props.answers}/answers`)
        .then((res) => {
          const data = res.data.results;
          this.setState({
            currentAnswers: data,
          })
        })
        .catch((err) => {
          console.log('error retrieving answer list:', err);
        })
      }, 300)

  }


  handleLoadClick(event) {
    // event.preventDefault();

    this.setState(prevState => ({
      clickedLoadMore: !prevState.clickedLoadMore
    }))
  }

  sendHelpful(id) {
    axios.put(`/qa/answers/${id}/helpful`,  {
    })
    .then((res) => {
      console.log('successfully updated helpful count', res.data);
    })
    .catch((err) => {
      console.log('error updating helpful count', err);
    })
  }

  sendReport(id) {
    axios.put(`/qa/answers/${id}/report`,  {
    })
    .then((res) => {
      console.log('successfully updated helpful count', res.data);
    })
    .catch((err) => {
      console.log('error updating helpful count', err);
    })
  }



  render() {

    // console.log('this is answers', this.state.currentAnswers)
    const answer = this.state.currentAnswers;
    var twoAnswers = answer.slice(0, 1);
    const onLoadMore = this.state.clickedLoadMore;

    let payLoad = {
      func: this.handleLoadClick,
      leng: answer.length
    }

    if (answer === '' || answer === undefined) {
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
         <div style={style}><h4 style={title}>A:</h4> <p style={parrafo}>{answerItem.body}</p></div>
         <div style={style}><small style={smallBoi}> by {answerItem.answerer_name}</small><small style={smallBoi}>{dateParser(answerItem.date)}</small><small style={smallBoi}> | </small>
         <Helpful style={help} helpfulness={answerItem.helpfulness} id={answerItem.answer_id} sendHelpful={this.sendHelpful} sendReport={this.sendReport}/>
         </div>
         </div>
        )}
        <LoadMoreAns loadMore={payLoad}/>

      </div>

    )
  }
}

export default AnswerItem;

//helpfulness={answerItem.helpfulness} props={this.sendHelpful}
