import React from 'react';

class ProductDesc extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      slogan: '',
      detailed: ''
    }
  }

  render () {
    return <div>
      <h3>Slogan/CatchPhrase</h3>
      <p>Detailed Product Description</p>
      </div>
  }
}

export default ProductDesc;