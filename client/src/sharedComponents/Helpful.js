import React from 'react';
import styled from 'styled-components';

// must pass in a function as props for onClick that will make a post request.

const Button = styled.span`
  text-decoration: underline;
  `
const Helpful = (props) => {

  return (
    <div>
      {`Helpful? `}
      <Button onClick={()=>{return null}}>{`Yes`}</Button>
      <span>{` (${props.helpfulness})  |  `}</span>
      <Button onClick={()=>{return null}}>{`Report`}</Button>
      <span></span>
    </div>
  )
};

export default Helpful;
