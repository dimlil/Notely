import styles from './Header.module.css';
import logo from '../../assets/logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import checkAuth from '../../services/checkAuth';

function Header() {
  let location = useLocation();
  let navigation = useNavigate();
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    checkAuth().then((result) => {
      setAuth(result)
    })
  }, [location])

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setAuth(false)
    navigation('/')
  }
  return (
    <>
      <header>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>


        <nav>
          {auth ?
            <>
              <Link to="/create">Create</Link>
              <Link to="/" onClick={logout}>Logout</Link>
            </>
            :
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          }

        </nav>
      </header>
    </>
  )
}

export default Header
