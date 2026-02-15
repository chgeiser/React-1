import React, { useContext } from 'react'
import { UserContext } from '../contexto/UserContext';
//import { useParams } from 'react-router-dom'

const Profile = () => {

  const {login, logout } = useContext(UserContext);
  
  const cerrarSesion = ()=>{
      logout();
  }

  return (
    <>
        <form>
            <label>E-mail: {login?.email}</label>
            <button type='button' onClick={cerrarSesion}>Cerrar Sesion</button>
        </form>
    </>
  )
}

export default Profile