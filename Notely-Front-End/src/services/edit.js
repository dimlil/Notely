import axios from "axios"
export const editNote = async (title, content,id) => {
    if ( title === '' || content === '') {
        return {data: "All fields must be filled"}
    }
    try {
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/edit/${id}`, {
            title,
            content,
            id: localStorage.getItem('userId')
        }, { withCredentials: true });
        return response
    } catch (error) {
        if (error) {
            return error.massege
        }
    }
}