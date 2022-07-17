import React from "react";
import { useState } from "react";
import { createContext } from "react";
export const UserContext = createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState([
    { id: 1, name: "raju", position: "frontend developers", salary: 27000 },
    { id: 2, name: "mohon", position: "backend developers", salary: 40000 },
    { id: 3, name: "riad", position: "Api developers", salary: 20000 },
  ]);

  return (
    <UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
};
