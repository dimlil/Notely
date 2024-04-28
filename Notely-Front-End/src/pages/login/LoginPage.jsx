import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import styles from './login.module.css'
import { login } from '../../services/Login.js';

export default function LoginPage() {
  let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const updatingEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatingPassword = (e) => {
        setPassword(e.target.value);
    };

    const formHanldler = async (e) => {
        e.preventDefault();
        const result = await login(email, password);
        if (result) {
            navigate('/');
        }
        else {
        }
    }
  return (
    <>
      <form action="" className={styles.registerForm}>
        <h2>
          Login
        </h2>
       <div className={styles.inputsWrapper}>
        <input type="email" className={styles.inputField} placeholder="Email" id="email" name="email" onChange={updatingEmail} />
        <input type="password" className={styles.inputField} id="password" name="password" placeholder="Password" onChange={updatingPassword} />

        <button className={styles.actionButton} onClick={formHanldler}>Login</button>
       </div>
        <p>You don't have an account?
          <Link to='/register'> Sign up</Link>
        </p>
      </form>
    </>
  )
}
