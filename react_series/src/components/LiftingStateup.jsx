import React from 'react'
import { useState } from 'react'

export default function LiftingStateup() {
    const [inputValue, setInputValue] = useState('')
  return (
    <>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue}/>
      <DisplayComponent inputValue={inputValue}/>
    </>
  )
}

const InputComponent = ({inputValue,setInputValue}) => {
   
  return (
  <>
  <input type='text ' placeholder='enter your name'value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
  
  </>
  );
}
const DisplayComponent = ({inputValue}) => {
  return (
  <>
  <p>The current value is : {inputValue}</p>
  </>
  );
}