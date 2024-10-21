import React, { createContext, useContext } from 'react'
import { use } from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const myName = "SHAHID";
  const myAge = 22;
  return <UserContext.Provider value={{myName:myName,myAge:myAge}}>
    {children}
    </UserContext.Provider>
}

// /custom hooks create 
export const useBioContext = () => {
  const context = useContext(UserContext);
  if ( context === undefined) {
    throw new Error("useBioContext must be used within a UserProvider");
  }
  return context;
}