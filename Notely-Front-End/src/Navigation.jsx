import { Routes, Route } from 'react-router-dom'
import App from './components/home/App';
import Header from './components/header/Header';
import RegisterPage from './pages/register/RegisterPage.jsx';

function Navigation() {
    return (
        <>
            <Header />
            <Routes >
                <Route path="/" element={<App />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </>
    )
}
export default Navigation