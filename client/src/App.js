import React from 'react';
import styled from 'styled-components';
// import MainReview from './RatingsAndReviews/MainReview.js'


const StyledButton = styled.button `
      background-color: pink;
      font-size: 32px;
      color: white;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: 'hello world'
    }
  }

  render() {
    return (
      <div>
        <div className="test">{this.state.greeting}</div>
        <StyledButton>Testing styled components</StyledButton>
        {/* <MainReview /> */}
      </div>
    )
  }
}

export default App;