import axios from "axios"

async function getNote(id) {
    const result = await axios.get(`${import.meta.env.VITE_API_URL}/getNote/${id}`, { withCredentials: true });
    return result.data
}
export default getNote