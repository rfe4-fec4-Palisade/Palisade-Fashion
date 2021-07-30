import React, { useState, useEffect } from 'react';
import Form from './Form.js'



const NewReview = (props) => {
  const [open, setOpen] = useState(false);

    return (
     <div>
       <div onClick={()=>{setOpen(true)}}> ADD A REVIEW + </div>
       <div id="formModal"></div>
       <Form id={props.id} isOpen={open} onClose={()=>{setOpen(false)}} metadata={props.metadata} key={props.id} />
     </div>
    )

}

export default NewReview;