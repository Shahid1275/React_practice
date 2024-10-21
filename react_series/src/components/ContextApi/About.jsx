import {  UserContext } from ".";
import {  useContext } from "react";
const About = () => {
  const {myName, myAge} = useContext(UserContext);
  return (
    <>
      <p>HI i am from Home component. My name is {myName}. my {myAge} is years Old</p>
    </>
  )
}

export default About
