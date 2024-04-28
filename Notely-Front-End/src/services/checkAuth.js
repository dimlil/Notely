import axios from "axios"

async function checkAuth() {
    const result = await axios.post(`${import.meta.env.VITE_API_URL}/verifyUser`, {
        token: localStorage.getItem('token')
    }, { withCredentials: true });
    return result.data
}
export default checkAuth