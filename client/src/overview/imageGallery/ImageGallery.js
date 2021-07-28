import React, { useState, useEffect } from 'react';
import Thumbnail from './thumbnail.js';

function ImageGallery () {
  return (
    <div>
      <h3>Main Default Image</h3>
      <Thumbnail/>
      <p>Expandable Option</p>
      <p>Clickable Arrows to Scroll Thru Images</p>
    </div>
  )
}

export default ImageGallery;