import React from 'react';
import Description from './productDescription/Description.js';
import { API_KEY } from '../../../config.js';
import axios from 'axios';

class MainOverview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }


  render() {
    return ( <div>
      <h1>Main Overview</h1>
      <Description/>
    </div>
    )
  }

}

export default MainOverview;