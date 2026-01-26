import { createContext, useState } from "react";

//1.- crear el conexto
// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

//2.- compartir el contexto 
const UserContextProvider = ({children}) => {

    const [token, setToken] = useState(null);

    const login = ()=>{
        setToken(true)
    }

    const logout =()=>{
        setToken(false)
    }
   
   return(
<UserContext.Provider value={{token, setToken, login, logout}}>
    {children}
</UserContext.Provider>
   )
}
export default UserContextProvider;
