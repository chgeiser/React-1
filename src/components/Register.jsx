import React, { useState } from 'react';
import './Register.css';


const Register = () => {

    const  [email, setEmail]=useState('');
    const  [clave, setClave]=useState('');
    const  [confirmacion, setConfirmacion]=useState('');

    const handleSubmit =() =>{
        
        if(!email ||  clave != confirmacion){
            alert('la clave o el email estan incorrectos')
        }else{
            alert('registro guardado exitosamente');
            
        }
    }
  return (
    <form>
        <div className='input-group'>
            <label>Email</label>
            <input type='email' id='email' onChange={(event)=> setEmail(event.target.value)}></input>
        </div>

        <div className='input-group'>
            <label>Password</label>
            <input type='password' id='clave' onChange={(e)=> setClave(e.target.value)}></input>
        </div>
        <div className='input-group'>
            <label>Confirmacion</label>
            <input type='password' id='confirmacion' onChange={(e) =>setConfirmacion(e.target.value)}></input>
        </div>
        <hr></hr>
        <button type='button' onClick={handleSubmit}>Enviar</button>
    </form>
  );
}

export default Register