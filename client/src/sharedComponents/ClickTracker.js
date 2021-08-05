import React from 'react';
import axios from 'axios';

const ClickTracker = (WrapperComponent, props) => {
  class HOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      }
      this.logClick = this.logClick.bind(this)
    }

    logClick(event) {
      let data = {
        element: '',
        widget: '',
        time: ''
      }
      data.element = event.target.localName || '';
      data.widget = event.target.classList[2] || '';
      data.time =  JSON.stringify(event.timeStamp);

      axios.post('/interactions', data)
        .then((response) => {console.log(response.data)})
        .catch((err) =>{console.log(err)})
    };

    render() {
      return <WrapperComponent {...this.props} logClick={this.logClick}/>
    }
  }

  return HOC;
}

export default ClickTracker;