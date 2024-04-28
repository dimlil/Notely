import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import styles from './register.module.scss'
import { register } from '../../services/Register.js';

export default function RegisterPage() {
  let navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const updatingName = (e) => {
        setName(e.target.value);
    };

    const updatingEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatingPassword = (e) => {
        setPassword(e.target.value);
    };

    const updatingRePassword = (e) => {
        setRePassword(e.target.value);
    };

    const formHanldler = async (e) => {
        e.preventDefault();
        const result = await register(name, email, password, rePassword);
        if (result === 'User Is Successfuly Register') {
            navigate('/');
        }
        else {
        }
    }
  return (
    <>
      <form action="" className={styles.registerForm}>
        <h2>
          Register
        </h2>
       <div className={styles.inputsWrapper}>
       <input type="text" className={styles.inputField} placeholder="Name" id="name" name="name" onChange={updatingName} />
        <input type="email" className={styles.inputField} placeholder="Email" id="email" name="email" onChange={updatingEmail} />
        <input type="password" className={styles.inputField} id="password" name="password" placeholder="Password" onChange={updatingPassword} />
        <input type="password" className={styles.inputField} id="re-password" name="rePassword" placeholder="Confirm password" onChange={updatingRePassword} />

        <button className={styles.actionButton} onClick={formHanldler}>Get started</button>
       </div>
        <p>Already have an account?
          <Link to='/login'> Sign in</Link>
        </p>
      </form>
    </>
  )
}
