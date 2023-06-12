import { useEffect, useState } from "react";
import { createContext } from "react";
import { onAuthStateChangedlistner, createUserFromAuth, } from "../utils/firebase/firebase";

export const UserContext = createContext({
  currentUser: null,
  setcurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState(null);
  const value = { currentUser, setcurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedlistner((user)=>{
      if(user){
        createUserFromAuth(user);
      }
      setcurrentUser(user)
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
