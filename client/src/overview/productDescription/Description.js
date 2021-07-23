import React from 'react';
import ProductDesc from './productDesc.js';
import SocialMedia from './socialMedia.js';
import Features from './features.js';

class Description extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return <div>
      <ProductDesc/>
      <Features/>
      <SocialMedia/>
    </div>
  }

}

export default Description;