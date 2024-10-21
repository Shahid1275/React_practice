// import{useBioContext} from '.'
import { useContext } from "react";
import { UserContext } from ".";
const Home = () => {
  // const {myName,myAge} = useBioContext();   // using custom hook
  // const {myName,myAge} = useContext(UserContext);   // using user context
  const {myName,myAge} = useContext(UserContext); // using use hook new in eact 
  return (
    <>
      <p>HI i am from Home component. My name is {myName }. i am {myAge} years Old</p>
  </>
  )
}

export default Home
