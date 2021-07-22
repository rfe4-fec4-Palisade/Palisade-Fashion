import React from 'react';

class List extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    console.log('we are in list', this.props);
    return (
      <div> This is the list component</div>
    )
  }
}

export default List;