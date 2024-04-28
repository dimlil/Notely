import axios from "axios"
export const login = async (email, password) => {
    if ( email === '' || password === '') {
        return {data: "All fields must be filled"}
    }
    if (email.length <= 5) {
        return {data: "The username should be at least 5 characters long"}
    }
    if (password.length <= 4) {
        return {data: "The password should be at least 4 characters long"}
    }
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
            email,
            password
        }, { withCredentials: true });
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('userId', response.data.userId)
        return true
    } catch (error) {
        if (error) {
            return error.massege
        }
    }
}