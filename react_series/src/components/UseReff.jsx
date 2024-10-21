import React from 'react'
import { useRef } from 'react'
const UseReff = () => {

    const username = useRef(null);
    const password = useRef(null);
    console.log(username);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username.current.value, password.current.value);
    }
  return (
    <form onSubmit={handleSubmit}>
      
      <input type="text" placeholder='enter your name' id='username' ref={username}/>
      <br />
      <br />
      <input type="text" placeholder='enter your password'  id='password' ref={password}/> 
      <br /> 
      <br />
        <button>Submit</button>
    </form>
  )
}

export default UseReff
