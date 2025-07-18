// This code creates a React Context for storing user information (currentUser) globally in your app

import { createContext, useState } from "react";

//this the context or global storage box that we created
//stores currentUser, for now it is null
//setCurrentUser is the method to update the currentUser, for now it is a dummy method
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

//this is like any other react component
//but this component helps in passing the context data to all the other components without prop drilling
//we call this as the - Context Wrapper Component
//after creating this, we need to wrap App.js inside this CWC in the index.js file
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  //this is the heart
  //which lets data accessible to all the other components
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
