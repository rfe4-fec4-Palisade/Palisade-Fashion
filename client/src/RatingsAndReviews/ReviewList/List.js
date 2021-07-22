import React from 'react';
import ReviewTile from './Tile.js'

class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.renderRiew = this.renderView.bind(this)
  }

  renderView () {
    if (this.props.sortOption === "default") {
      console.log('hello in render view function')
      return this.props.reviews.map((review)=><ReviewTile review={review}/>)
    }
  }
  render() {
    console.log('we are in list', this.props);
    return (
      <div> This is the list component
        <div>{this.renderView()}</div>
      </div>

    )
  }
}

export default List;