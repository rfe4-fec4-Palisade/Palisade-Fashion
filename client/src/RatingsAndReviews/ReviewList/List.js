import React from 'react';
import ReviewTile from './Tile.js'

class List extends React.Component {
  constructor (props) {
    super(props)
  }
  renderView () {
    if (this.props.sortOption === "default") {
      return this.props.reviews.map((review)=>{<reviewTile/>})
    }
  }
  render() {
    console.log('we are in list', this.props);
    if (this.props.sortOption === "default")

    return (
      <div> This is the list component</div>
    )
  }
}

export default List;