import React, { useState } from 'react';

const Response = (props) => {
  return (
    props.response ?
      <div>
        Response from seller
        {props.response}
      </div>
      : null
  )
}

export default Response;