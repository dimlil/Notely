import axios from "axios"
export const register = async (name, email, password, rePassword) => {
    if (name === '' || email === '' || password === '' || rePassword === '') {
        return {data: "All fields must be filled"}
    }
    if (email.length <= 5) {
        return {data: "The username should be at least 5 characters long"}
    }
    if (rePassword !== password) {
        return {data: "Thw Password and the Confirm Password doesn't match"}
    }
    if (password.length <= 4) {
        return {data: "The password should be at least 4 characters long"}
    }
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/register`, {
            name,
            email,
            password
        }, { withCredentials: true });
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('userId', response.data.userId)
        return 'User Is Successfuly Register'
    } catch (error) {
        if (error) {
            return error.massege
        }
    }
}