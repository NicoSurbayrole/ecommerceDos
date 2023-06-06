import { createContext } from "react";

export const UserContext = createContext(null);

const users = [];

export const UserContextProvider =  ({children}) => <UserContext.Provider value={users}>{children}</UserContext.Provider>