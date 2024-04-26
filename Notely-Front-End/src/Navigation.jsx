import { Routes, Route } from 'react-router-dom'
import App from './components/home/App';

function Navigation() {
    return (
        <Routes >
            <Route path="/" element={<App />} />
        </Routes>
    )
}
export default Navigation