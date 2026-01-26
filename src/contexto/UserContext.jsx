import { createContext, useState } from "react";

//1.- crear el conexto
const UserContext = createContext();

//2.- compartir el contexto 
const UserContextProvider = ({children}) => {

    const [token, setToken] = useState(true);

    const login = ()=>{
        setToken(true)
    }

    const logout =()=>{
        setToken(false)
    }
   
   return(
<UserContext.Provider value={{token, setToken,  logout, login}}>
    {children}
</UserContext.Provider>
   )
}
export {UserContext, UserContextProvider} 
