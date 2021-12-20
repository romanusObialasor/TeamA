import React, { createContext, useEffect } from "react";
import { app } from "../base";

export const GlobalProvider = createContext();

export const GlobalComponent = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState([]);

  useEffect(() => {
    app.auth().onAuthStateChanged((el) => {
      setCurrentUser(el);
    });
  }, []);

  return (
    <GlobalProvider.Provider value={{ currentUser }}>
      {children}
    </GlobalProvider.Provider>
  );
};
