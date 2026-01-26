import { createContext, useState } from "react";

//1.- crear el conexto
// eslint-disable-next-line react-refresh/only-export-components
const ContextoGlobal = createContext();

//2.- compartir el contexto 
const ContextoGlobalProvider = ({children}) => {

    const [cuenta, setCuenta]= useState(0);
   
   return(
<ContextoGlobal.Provider value={{cuenta, setCuenta}}>
    {children}
</ContextoGlobal.Provider>
   )
}
export {ContextoGlobal, ContextoGlobalProvider} 
