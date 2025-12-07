import React, { useState } from "react";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(e.target.name, e.target.value)) {
      setErrors({ ...errors, [e.target.name]: "" });
    } else {
      setErrors({ ...errors, [e.target.name]: "el valor no es valido" });
    }
    setForm({ email: "", password: "" });
  };

const validateForm = (name, value) => {
    if (name === "email") {
      return value.includes("@");
    }
    if (name === "password") {
      return value.length >= 6;
    }
    return true;
  };

  //const  [email, setEmail]=useState('');
  //const  [clave, setClave]=useState('');

  /*const handleChange =(e)=>{
            e.target.value;
            if(e.target.name==="email"){
                setEmail(e.target.value);
            }
            if(e.target.name==="clave"){
                setClave(e.target.value);
            }
        }*/

  /*const handleSubmit =(e) =>{
           e.preventDefault(); 
           console.log({email, clave});
           setEmail('');
           setClave('');          
        }*/
  return (
    <form className={styles.login} onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        name="email"
        id=""
        onChange={handleChange}
        value={form.email}
      />
      {errors.email && <p className={styles.error}>{errors.email}</p>}
      <input
        type="password"
        placeholder="Password"
        name="password"
        id=""
        onChange={handleChange}
        value={form.password}
      />
      {errors.password && <p className={styles.error}>{errors.password}</p>}
      <button className={styles.button} type="submit">
        Ingresar
      </button>
    </form>
  );
};

export default LoginPage;
