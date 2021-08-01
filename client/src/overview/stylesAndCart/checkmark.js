import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(far);

function Checkmark ({ styleID, currentStyle, defaultShown, initial }) {

  const style = {
    position: 'absolute'
  };

  if (defaultShown && initial === 0) {
    return (
      <FontAwesomeIcon style={style} icon={['far', 'check-square']}/>
    )
  }
  if (styleID === currentStyle) {
    return (
      <FontAwesomeIcon style={style} icon={['far', 'check-square']}/>
    )
  } else {
    return null;
  }
}

export default Checkmark;