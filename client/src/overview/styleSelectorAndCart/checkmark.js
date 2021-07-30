import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);

function Checkmark ({ styleID, currentStyle, defaultShown, initial, photo }) {

  if (defaultShown && initial === 0 && photo !== null) {
    return (
      <FontAwesomeIcon icon={['fas', 'check-square']}/>
    )
  }
  if (styleID === currentStyle) {
    return (
      <FontAwesomeIcon icon={['fas', 'check-square']}/>
    )
  } else {
    return null;
  }
}

export default Checkmark;