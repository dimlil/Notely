import axios from "axios"
export const deleteNote = async (id) => {
    try {
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/delete/${id}`, { withCredentials: true });
        console.log(response);
        return response
    } catch (error) {
        if (error) {
            return error.massege
        }
    }
}