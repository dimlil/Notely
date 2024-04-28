import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage.jsx';
import Header from './components/header/Header';
import RegisterPage from './pages/register/RegisterPage.jsx';
import LoginPage from './pages/login/LoginPage.jsx';
import CreatePage from './pages/create/CreatePage.jsx';
import DetailsPage from './pages/details/DetailsPage.jsx';

function Navigation() {
    return (
        <>
            <Header />
            <Routes >
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/create" element={<CreatePage />} />
                <Route path="/note/:id" element={<DetailsPage />} />
            </Routes>
        </>
    )
}
export default Navigation