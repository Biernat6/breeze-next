"use client"
import styles from "@/app/ui/login/login.module.css";
import { useEffect, useState } from "react";
// import { getProducts, handleLogin } from "../api/auth";
import { useAuth } from "@/hooks/auth";

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([])

  const { register } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard',
})

  const onRegister = async (e) => {
    e.preventDefault();

    register({
        name,
        lastname,
        email,
        password,
        setErrors,
    })

    // router.push('/dashboard');

  }
  
  return (
    <div className={styles.container}>
        <form onSubmit={onRegister} className={styles.form}>
          <h1>Register</h1>
          <input type="text" placeholder="name" name="name" value={name} onChange={(e) => {setName(e.target.value)}}  />
          <input type="text" placeholder="lastname" name="lastname" value={lastname} onChange={(e) => {setLastname(e.target.value)}}  />
          <input type="text" placeholder="email" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}}  />
          <input type="password" placeholder="password" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}}   />
          <button>Register</button>
    </form>
    </div>
  );
};

export default RegisterPage;
