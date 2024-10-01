import React from 'react'

export const Eventhandling = () => {

   const  handleButtonclick = () => {
    alert("Button Clicked");
  }
  return (
    <div>
      <button style = {{padding: "1.2rem 2.4rem", border: "none", fontSize: "1.6rem", backgroundColor: "#7dcea0", color: "var(--btn-color)", fontWeight: "bold", cursor: "pointer"}} onClick={( () => handleButtonclick())}>Click Me</button>
    </div>
  )
}


