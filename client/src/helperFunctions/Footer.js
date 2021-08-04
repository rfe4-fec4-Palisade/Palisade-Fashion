import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaPinterestSquare } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';




const Footy = Styled.div `
  font-family: Noto Sans, sans-serif;
  position: relative;
  height: auto;
  padding: 50px 50px 70px 100px;
  background-color: #1B2631  ;
  width: 95%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 30px;
`;

const QuickLinksAnchors = Styled.a `
display: inline-block;
with: 40px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
margin-right: 10px;

&:hover {
  text-decoration: underline;
  color: #58D68D  ;
}
`;


const div = {
  margin: '0',
  padding: '0',
  boxSizing: 'border-box'
}

const container = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  flexDirection: 'row'
}

const list = {
  marginRight: '30px',
  marginTop: '20px',
  padding: '2px',
  display: 'flex'
}

const aboutUs = {
  marginRight: '30px',
  width: '30%',
  color: '#FBFCFC '
}

const h2 = {
  position: 'relative',
  color: 'white',
  fontWeight: 'bold',
  marginBottom: '15px'
}

const listItems = {
  listStyle: 'none'
}

const anchors = {
  display: 'inline-block',
  with: '40px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '10px',
  textDecorations: 'none',
  color: 'inherit'
}

const quickLinks = {
  position: 'relative',
  width: '25%'
}

const quickLinksItems = {
  textDecorations: 'none',
  marginBottom: '10px',
  display: 'inline-block'
}

const contactItems = {
  textDecorations: 'none',
  marginBottom: '10px',
  display: 'inline-block'
}





function Footer() {

  return (
    <Footy>
        <div style={container}>
          <div style={aboutUs}>
        <h2 style={h2}>About Us</h2>
        <p >"We are team Palisade! Our team is made up of Kaite, Liam, Sandra, and Francisco. Katie is an aspiring software engineer from Queens, NY. She currently attends hack reactor and implemented the ratings and reviews feature on this webpage. Liam is a junior software engineer from Austin, TX. He was responsible for implementing the Related Products and Outfit features. Sandra is...Francisco is a software engineer responsible for the Q&A section, he is from Central Falls RI, and is hoping to make some really cool apps in the future if he ever survives CSS."
        </p>
        <ul style={list}>
        <li style={listItems} ><a href="https://www.facebook.com/" style={anchors}><FaFacebookSquare size='30px'/></a></li>
        <li style={listItems} ><a href="https://twitter.com/login?lang=en" style={anchors}><FaTwitterSquare size='30px' /></a></li>
        <li style={listItems} ><a href="https://www.pinterest.com/" style={anchors}><FaPinterestSquare size='30px'/></a></li>
      </ul>
        </div>
        <div style={aboutUs}>
          <h2 style={h2}>Quick Links</h2>
          <ul style={quickLinks}>
          <li style={quickLinksItems}> <QuickLinksAnchors href="#overview">Top of Page</QuickLinksAnchors> </li>
            <li style={quickLinksItems}> <QuickLinksAnchors>FAQ</QuickLinksAnchors> </li>
            <li style={quickLinksItems}> <QuickLinksAnchors>Privacy</QuickLinksAnchors> </li>
            <li style={quickLinksItems}> <QuickLinksAnchors>Help</QuickLinksAnchors> </li>
            <li style={quickLinksItems}> <QuickLinksAnchors>Terms + Conditions</QuickLinksAnchors> </li>
          </ul>
        </div>
        <div style={aboutUs}>
          <h2>Contact Info</h2>
          <ul>
            <span style={contactItems}>  <FaMapMarkerAlt  size="20px"/> Address: 3285 Horizon Circle, Auburn Washington, WA, 98001</span>
            <span></span>
            <span style={contactItems}>   <FaPhoneAlt size="20px"/> Telephone: 512-555-0155</span>
            <span></span>
            <span style={contactItems}>   <FaEnvelope size="20px"/> Email: palisade@hotmail.com</span>
          </ul>
        </div>

    </div>
    </Footy>
  )
}

export default Footer;
