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

  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Validación campo por campo
    Object.keys(form).forEach((key) => {
      newErrors[key] = validateForm(key, form[key])
        ? ""
        : "El campo no es válido";
    });

    setErrors(newErrors);

    // Verificar si hay errores
    const hayErrores = Object.values(newErrors).some((err) => err !== "");

    if (hayErrores) {
      setMensaje("❌ Hay errores en el Login. Corrige los campos.");
      return;
    }

    // Si todo está correcto
    setMensaje("✔ Ingreso correctamente.");

    setForm({
      email: "",
      password: "",
      confirmacion: "",
    });
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

      {mensaje && (
        <p
          style={{
            color: mensaje.includes("❌") ? "red" : "green",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          {mensaje}
        </p>
      )}
    </form>
  );
};

export default LoginPage;
