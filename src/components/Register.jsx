import React, { useState } from "react";
import styles from "./Register.module.css";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmacion: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmacion: "",
  });

  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /*const handleSubmit = (e) => {
    //e.preventDefault();
    if (validateForm(e.target.name, e.target.value)) {
      setErrors({ ...errors, [e.target.name]: "" });
    } else {
      setErrors({ ...errors, [e.target.name]: "el valor no es valido" });
    }
    setForm({ email: "", password: "", confirmacion: "" });
  };*/

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
      setMensaje("❌ Hay errores en el formulario. Corrige los campos.");
      return;
    }

    // Si todo está correcto
    setMensaje("✔ Registro realizado correctamente.");

    setForm({
      email: "",
      password: "",
      confirmacion: "",
    });
  };

  const validateForm = (name, value) => {
    if (!value.trim()) return false;
    if (name === "email") {
      return value.includes("@");
    }
    if (name === "confirmacion") {
      return value.length >= 6;
    }
    if (name === "password") {
      return value.length >= 6;
    }
    if (name === "confirmacion") {
      return value === form.password;
    }
    return true;
  };

  //const  [email, setEmail]=useState('');
  //const  [clave, setClave]=useState('');
  //const  [confirmacion, setConfirmacion]=useState('');

  /*const handleChange =(e)=>{
        e.target.value;
        if(e.target.name==="email"){
            setEmail(e.target.value);
        }
        if(e.target.name==="clave"){
            setClave(e.target.value);
        }
        if(e.target.name==="confirmacion"){
            setConfirmacion(e.target.value);
        }
    }*/

  /*const handleSubmit =(e) =>{
       e.preventDefault(); 

       console.log({email, clave, confirmacion});

       setEmail('');
       setClave('');
       setConfirmacion('')
      
    }*/
  return (
    <form className={styles.formulario} onSubmit={handleSubmit}>
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
      <input
        type="password"
        placeholder="Confirmacion de Password"
        name="confirmacion"
        id=""
        onChange={handleChange}
        value={form.confirmacion}
      />
      {errors.confirmacion && (
        <p className={styles.error}>{errors.confirmacion}</p>
      )}
      <button className={styles.button} type="submit">
        Enviar
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

export default Register;
