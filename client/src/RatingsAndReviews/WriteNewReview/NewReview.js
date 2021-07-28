import React, { useState, useEffect } from 'react';
import Form from './Form.js'



const NewReview = (props) => {
  const [open, setOpen] = useState(false);
  // const [characteristics, setCharacteristics] = useState([]);

  // const createChars = () => {
  //   console.log('char adadfasdfaefn loop', props.metadata)
  //   var chars = props.metadata.characteristics;
  //   var output = [];
  //   for (var char in chars) {
  //     let obj = {
  //       lowest: '',
  //       highest: '',
  //       field: char,
  //       value: 0
  //     }
  //     if (char === 'Size') {
  //       obj.lowest = 'A size too small'
  //       obj.highest = 'A size too big'
  //     }
  //     if (char === 'Width') {
  //       obj.lowest = 'Too narrow'
  //       obj.highest = 'Too wide'
  //     }
  //     if (char === 'Comfort') {
  //       obj.lowest = 'Uncomfortable'
  //       obj.highest = 'Perfect'
  //     }
  //     if (char === 'Quality') {
  //       obj.lowest = 'Poor'
  //       obj.highest = 'Perfect'
  //     }
  //     if (char === 'Length') {
  //       obj.lowest = 'Runs short'
  //       obj.highest = 'Runs long'
  //     }
  //     if (char === 'Fit') {
  //       obj.lowest = 'Runs tight'
  //       obj.highest = 'Runs loose'
  //     }
  //     output.push(obj)

  //   }
  //   console.log('output in loop', output)
  //   return output;
  // }
  // useEffect(()=>{
  //   let values = createChars()
  //   setCharacteristics(values);
  //   console.log(characteristics)
  //   return () => {
  //     setCharacteristics({})
  //   }
  // }, [])

    return (
     <div>
       <div> MORE REVIEWS </div>
       <div onClick={()=>{setOpen(true)}}> ADD A REVIEW + </div>
       <div id="formModal"></div>
       <Form id={props.id} isOpen={open} onClose={()=>{setOpen(false)}} metadata={props.metadata} />
     </div>
    )

}

export default NewReview;