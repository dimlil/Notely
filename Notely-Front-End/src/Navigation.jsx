import { Routes, Route } from 'react-router-dom'
import App from './components/home/App';
import Header from './components/header/Header';

function Navigation() {
    return (
        <>
            <Header />
            <Routes >
                <Route path="/" element={<App />} />
            </Routes>
        </>
    )
}
export default Navigation