import React from 'react'

 const ParentComponenet = () => {
  return (
    <div>
  <p> Hello I am Component A</p>
  <ChildComponenet data="Shahid" />
    </div>
  )
}

const ChildComponenet = (props) => {
  return (
    <div>
      <p> Hello I am Component B</p>
      <GrandChildComponent data={props.data} />
    </div>
  )
}

const GrandChildComponent = (props) => {
  return (
    <div>
      <p> Hello I am Component C</p>
      <GrandGrandChildComponent data={props.data}/>
    </div>
  )
}

const GrandGrandChildComponent = (props) => {
  return (
    <div>
      <p> Hello I am Component D</p>
      <p> My name is {props.data}</p>
    </div>
  )
}

export default ParentComponenet