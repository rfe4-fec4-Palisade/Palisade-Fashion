import React from 'react';

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
        <div>{this.state.greeting}</div>
        <div></div>
      </div>
    )
  }
}

export default App;