import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

function SocialMedia () {

  const clickedFB = () => {
    window.open('https://www.facebook.com')
  }
  const clickedTwitter = () => {
    window.open('https://twitter.com')
  }
  const clickedPinterest = () => {
    window.open('https://www.pinterest.com')
  }

  return (
    <ul>
      <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" onClick={clickedFB}/>
      <FontAwesomeIcon icon={['fab', 'twitter-square']} size="2x"onClick={clickedTwitter}/>
      <FontAwesomeIcon icon={['fab', 'pinterest']} size="2x" onClick={clickedPinterest}/>
    </ul>
  )
}

export default SocialMedia;