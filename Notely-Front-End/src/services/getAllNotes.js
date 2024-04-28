import axios from "axios"

async function getAllNotes() {
    const result = await axios.get(`${import.meta.env.VITE_API_URL}/getAllNotes`, { withCredentials: true });
    return result.data
}
export default getAllNotes