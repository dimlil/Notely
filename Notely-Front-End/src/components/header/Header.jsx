import styles from './Header.module.scss';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <>
      <header>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>


        <nav>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>
    </>
  )
}

export default Header
