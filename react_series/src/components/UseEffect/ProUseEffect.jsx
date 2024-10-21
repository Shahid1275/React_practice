import React from 'react'
import {useEffect,useState} from 'react'
const ProUseEffect = () => {
  const [count,setCount] = useState(0);
    const [date,setDate] = useState();
    const [name ,setName] = useState("shahid");
  
    useEffect(() => {
        setInterval(() => {
          const UpdatedDate = new Date();
          setDate(UpdatedDate.toLocaleTimeString());
        }, 1000);
       
      }, []);
      useEffect(() => { 
        document.title = `count : ${count}`
      }, [count]);
      useEffect(() => {
        console.log(name);
      }, [name]);
  return (
    <div>
      <h1>Date : {date}</h1>
      <p>This component will update every second.</p>
      <p>It will also clear the interval when the component unmounts.</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <h2>Name: {name}</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  )
}

export default ProUseEffect
