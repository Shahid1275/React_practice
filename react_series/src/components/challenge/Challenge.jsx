import React from 'react'
import './Challenge.css'
import { useState } from 'react'
const Challenge = () => {

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  return (
    <div className='counter-challenge'>
      
    
     <h1>Counter Challenge</h1>

     <p>Count: {count}</p>

     <input type="number" value={step} onChange={(e) => setStep(Number(e.target.value))} />
     <button className = "btn "onClick={() => setCount(count + step)} disabled={count >= 100} >Increment</button>
     <button className = "btn "onClick={() => setCount(count - step)} disabled={count <= 0}>Decrement</button>
     <button className = "btn "onClick={() => setCount(0)}>Reset</button>


    </div>
  )
}

export default Challenge
