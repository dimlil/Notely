import styles from './Header.module.scss';
import logo from '../../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import checkAuth from '../../services/checkAuth';

function Header() {
  let location = useLocation();
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    checkAuth().then((result) => {
      setAuth(result.isLoggedIn)
    })
  },[location])
  return (
    <>
      <header>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>


        <nav>
          { auth == false ? 
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
          :
            <>
              <Link to="/create">Create</Link>
            </>
          }
          
        </nav>
      </header>
    </>
  )
}

export default Header
