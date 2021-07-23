import React from 'react';
import styled from 'styled-components';

// must pass in a function as props for onClick that will make a post request.

const YesButton = styled.span`
  text-decoration: underline;
  `
const Helpful = (props) => {

  return (
    <div>
      {`Helpful? `}
      <YesButton onClick={()=>{return null}}>{`Yes`}</YesButton>
      <span>{` (${props.helpfulness})`}</span>
      <span></span>
    </div>
  )
};

export default Helpful;
