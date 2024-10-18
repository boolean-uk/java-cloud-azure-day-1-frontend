import { createContext, useState } from "react";

export const ApiContext = createContext();

function ApiProvider({ children }) {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    
  return ( 
  <ApiContext.Provider value={{ token, setToken, user, setUser }}>
    {children}
    </ApiContext.Provider>
  );
}

export default ApiProvider;
