import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/home/HomePage.jsx';
import Header from './components/header/Header';
import RegisterPage from './pages/register/RegisterPage.jsx';
import LoginPage from './pages/login/LoginPage.jsx';
import CreatePage from './pages/create/CreatePage.jsx';
import DetailsPage from './pages/details/DetailsPage.jsx';
import EditPage from './pages/edit/EditPage.jsx';
import checkAuth from './services/checkAuth.js';
import { useEffect, useState } from 'react';

function Navigation() {
    let location = useLocation();
    const [auth, setAuth] = useState(false);
    useEffect(() => {
        checkAuth().then((result) => {
            setAuth(result)
        })
    }, [location])
    return (
        <>
            <Header />
            <Routes >
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={!auth ? <RegisterPage /> : <HomePage />} />
                <Route path="/login" element={!auth ? <LoginPage /> : <HomePage />} />
                <Route path="/create" element={auth ? <CreatePage /> : <LoginPage />} />
                <Route path="/note/:id" element={auth ? <DetailsPage /> : <LoginPage />} />
                <Route path="/edit/:id" element={auth ? <EditPage /> : <LoginPage />} />
            </Routes>
        </>
    )
}
export default Navigation