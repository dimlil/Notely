import { Routes, Route } from 'react-router-dom'
import App from './components/home/App';
import Header from './components/header/Header';
import RegisterPage from './pages/register/RegisterPage.jsx';
import LoginPage from './pages/login/LoginPage.jsx';

function Navigation() {
    return (
        <>
            <Header />
            <Routes >
                <Route path="/" element={<App />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </>
    )
}
export default Navigation