import { useContext } from 'react';
import { UserContext } from '../contexto/UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedRouter = ({children, to='/'}) => {

    const {token}= useContext(UserContext);
  return (
    token ? children : <Navigate to={to}/>
  )
}

export default ProtectedRouter