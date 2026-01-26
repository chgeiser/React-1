import { UserContext } from '../context/UserContext'

const ProtectedRouter = ({children}) => {

    const {token}= UserContext(UserContext);
  return (
    token ? children : <Navigate to='/'/>
  )
}

export default ProtectedRouter