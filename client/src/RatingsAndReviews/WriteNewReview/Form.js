import React, { useState } from 'react';
import Characteristics from './Characteristics.js'

const Form = (props) => {
  const [rating, setRating] = useState(0) //star component 1-5
  const [recommend, setRecommend] = useState(false)
  const [characteristics, setCharacteristics] = useState(
    [
      {
        lowest: 'A size too small',
        highest: 'A size too big',
        field: 'Size',
        value: 0
      },
      {
        lowest: 'Too narrow',
        highest: 'Too wide',
        field: 'Width',
        value: 0
      },
      {
        lowest: 'Uncomfortable',
        highest: 'Perfect',
        field: 'Comfort',
        value: 0
      },
      {
        lowest: 'Poor',
        highest: 'Perfect',
        field: 'Quality',
        value: 0
      },
      {
        lowest: 'Runs short',
        highest: 'Runs long',
        field: 'Length',
        value: 0
      },
      {
        lowest: 'Runs tight',
        highest: 'Runs long',
        field: 'Fit',
        value: 0
      },
    ])
  const [summary, setSummary] = useState('')
  const [body, setBody] = useState('')
  const [nickname, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleChange = () => {

 }

  // this is working
  const handleCharChange = (field, value) => {
    let newState = characteristics;
    newState.forEach((char) => {
      if (char.field === field) {
        char.value = value*1;
      }
    })
    setCharacteristics(newState);
  }

  return (
    <form>
      <p>Overall Rating</p>
      <input type="range" min="0" max="5"/>
      <p>Do you recommend this product?</p>
      <input type="radio" name="recommend" value="Yes"/>Yes
      <input type="radio" name="recommend" value="No"/>No
      {characteristics.map((char) => <Characteristics char={char} handleCharChange={handleCharChange}/>)}
      <input type="text" placeholder="Write a summary here"/>
      <input type="text" placeholder="Write details here"/>
      <input type="text" placeholder="nickname"/>
      <input type="text" placeholder="email"/>


    </form>
  )


};

export default Form;