import React, { useState, useEffect } from 'react';
import SizeAndQty from './sizeAndQty.js';

function SelectedStyle () {
  return (
    <div>
      <p>Style Name: 'Selected Style'</p>
      <div>Small Rounded Thumbnail Images of each Style for User to Select</div>
      <SizeAndQty/>
    </div>
  )
}

export default SelectedStyle;