import React from 'react'
import { useId } from 'react'
const UseId = () => {

    const id = useId();
  return (

    
      <form>
          <div>
            <label htmlFor={id+"username"}>username:</label>
            <input type="text" id={id + "usernameId"} name="name" />
          </div>
          <br />
          <div>
            <label htmlFor={id + "password"}>password:</label>
            <input type="password" id={id + "passwordId"} name="password" />
          </div>
          <br />
          <button type="submit">Submit</button>
      </form>
    
  )
}

export default UseId
