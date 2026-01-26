import { useContext } from 'react';
import { UserContext } from '../contexto/UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedRouter = ({children}) => {

    const {token}= useContext(UserContext);
  return (
    token ? children : <Navigate to='/'/>
  )
}

export default ProtectedRouter