import { useState, useEffect } from 'react'
import './App.css'
import Home from './components/ContextApi/Home'
import About from './components/ContextApi/About'
import { UserProvider } from './components/ContextApi'
// import ParetComponenet from './components/PropDrilling';
// import UseId from './components/UseId'
// import UseEffect from './components/UseEffect/ProUseEffect'
// import UseReff from './components/UseReff'
// import ContactForm from './components/ContactForm/ContactForm'
// import Challenge from './components/challenge/Challenge';
// import {ToggleSwitch} from './components/ToggleProject/ToggleSwitch'
// import Todo from './components/Todo/Todo'
// import { Eventhandling } from './components/Eventhandling'
// import { EventProps } from './components/EventProps'
// import { State}  from './components/State'
// import {DerivedState} from './components/DerivedState'
// import LiftingStateup from './components/LiftingStateup'

function App() {
  return (
    <>
{/* <Eventhandling/>
<EventProps/> */}
{/* <DerivedState/>
<State/> */}
{/* <LiftingStateup /> */}
{/* <ToggleSwitch/> */}
{/* <Todo /> */}
{/* <Challenge/> */}
 {/* <ContactForm/> */}
 {/* <UseEffect/> */}
 {/* <UseReff/> */}
 {/* <ParetComponenet/> */}
 <UserProvider>
  <Home />
  <About/>
</UserProvider>

    {/* <UseId/> */}

    </>
  )
}

export default App
