import React from 'react'
import { useState } from 'react'

export const State = () => {
    const [count, setCount] = useState(0)
    
    const handleIncrement = () => {
        setCount(count + 1)
    }

    return (    
        <>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            </>
    )
}

