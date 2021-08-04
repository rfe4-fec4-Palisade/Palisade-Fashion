import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

const icons = {
  padding: '4px'
}

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

  const shareIt = {
    marginBottom: '10px',
    marginTop: '28px'
  }

  return (
    <div>
      <h4 style={shareIt}>Like it? Share it!</h4>
      <FontAwesomeIcon style={icons} icon={['fab', 'facebook']} size="2x" onClick={clickedFB}/>
      <FontAwesomeIcon style={icons} icon={['fab', 'twitter-square']} size="2x"onClick={clickedTwitter}/>
      <FontAwesomeIcon style={icons} icon={['fab', 'pinterest']} size="2x" onClick={clickedPinterest}/>
    </div>
  )
}

export default SocialMedia;