import React, { useState, useEffect } from 'react';
import Form from './Form.js'



const NewReview = (props) => {
  const [open, setOpen] = useState(false);


    return (
     <div>
       <div> MORE REVIEWS </div>
       <div onClick={()=>{setOpen(true)}}> ADD A REVIEW + </div>
       <div id="formModal"></div>
       <Form isOpen={open} onClose={()=>{setOpen(false)}}/>
     </div>
    )

}

export default NewReview;