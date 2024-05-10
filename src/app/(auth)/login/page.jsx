"use client"
import styles from "@/app/ui/login/login.module.css";
import { useEffect, useState } from "react";
// import { getProducts, handleLogin } from "../api/auth";
import { useAuth } from "@/hooks/auth";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([])

  const { login } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard',
})

  const onLogin = async (e) => {
    e.preventDefault();

    login({
        email,
        password,
        setErrors,
    })
  }
  
  return (
    <div className={styles.container}>
        <form onSubmit={onLogin} className={styles.form}>
          <h1>Login</h1>
          <input type="text" placeholder="email" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}}  />
          <input type="password" placeholder="password" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}}   />
          <button>Login</button>
    </form>
    </div>
  );
};

export default LoginPage;
