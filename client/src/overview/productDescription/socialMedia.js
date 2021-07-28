import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

function SocialMedia () {

  return (
    <ul>
      <FontAwesomeIcon icon={['fab', 'facebook']} size="2x"/>
      <FontAwesomeIcon icon={['fab', 'twitter-square']} size="2x"/>
      <FontAwesomeIcon icon={['fab', 'pinterest']} size="2x"/>
    </ul>
  )
}

export default SocialMedia;