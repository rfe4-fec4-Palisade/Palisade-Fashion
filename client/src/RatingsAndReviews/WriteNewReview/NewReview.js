import React, { useState, useEffect } from 'react';
import Form from './Form.js'
import Styled from 'styled-components'

const Add = Styled.div`
border: 2px solid black;
width: 120px;
text-align: center;
vertical-align: middle;
line-height: 30px;
padding: 10px;
font-family: Arial, sans-serif;
font-size: 12px;
background-color: #FBFCFC;
color: black;
&:hover {
  cursor: pointer;
  color: #EC7063;
}
`

const NewReview = (props) => {
  const [open, setOpen] = useState(false);

    return (
     <div>
       <Add onClick={()=>{setOpen(true)}}> ADD A REVIEW + </Add>
       <div id="formModal"></div>
       <Form id={props.id} isOpen={open} onClose={()=>{setOpen(false)}} metadata={props.metadata} key={props.id} />
     </div>
    )

}

export default NewReview;