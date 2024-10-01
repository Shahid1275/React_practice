import React from 'react'
import './Todo.css';
import { useState } from 'react';
export default function Todo() {

    const [ inputValue,setInputValue] = useState('')

    const handleInputchange = (value) =>{
        setInputValue(value);
    }
  return (
    <>
    <section className='todo-container'>
       <header>
       <h2>Todo list</h2>
       </header>
    </section>
    <section className='form '>
        <form>
          <div>
            <input type="text" className='todo-input' autoComplete='off' value={inputValue}  onChange={(event) => handleInputchange(event.target.value)}/>
          </div>
          <div className='todo-button'> Add Task</div>
        </form>
    </section>
    </>
  )
}
