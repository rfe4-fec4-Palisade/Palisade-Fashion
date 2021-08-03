import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';


const Footy = Styled.div `
  height: 400px:
  width: 100%;
  color: #1ABC9C;

`;

function Footer() {

  return (
    <Foot>
      <ul>
        <li>Contact Us</li>
        <li>Social Media</li>
        <li>Help</li>
        <li>Extras</li>
      </ul>
    </Foot>
  )
}

export default Footer;