import React, { useState } from 'react';

function Features ({ singleFeature }) {

  return (
    <ul>
      <li>Feature #1: { singleFeature.feature }</li>
      <li>Value #1: { singleFeature.value }</li>
    </ul>
  )
}

export default Features;