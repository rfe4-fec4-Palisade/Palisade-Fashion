import React, { useState } from 'react';
import ReviewTile from './Tile.js'

const List = ({sortOption, reviews}) => {
  const renderView = () => {
      return (
        reviews.map((review)=><ReviewTile review={review}/>)
      )
  }

  return (
    <div> This is the list component
      <div>{renderView()}</div>
    </div>
  )

}

// class List extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {}
//     this.renderRiew = this.renderView.bind(this)
//   }

//   renderView () {
//     if (this.props.sortOption === "default") {
//       return this.props.reviews.map((review)=><ReviewTile review={review}/>)
//     }
//   }
//   render() {
//     return (
//       <div> This is the list component
//         <div>{this.renderView()}</div>
//       </div>

//     )
//   }
// }

export default List;