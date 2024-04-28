import axios from "axios"
export const create = async (title, content) => {
    if ( title === '' || content === '') {
        return {data: "All fields must be filled"}
    }
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/create`, {
            title,
            content,
            id: localStorage.getItem('userId')
        }, { withCredentials: true });
        console.log(response);
        return response
    } catch (error) {
        if (error) {
            return error.massege
        }
    }
}