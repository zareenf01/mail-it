import axios from 'axios'
import { data } from 'react-router-dom';

const baseURL = import.meta.env.VITE_API_BASE_URL

export const create_inbox = async () => {
    try{
        const response = await axios.post(`${baseURL}/inbox/create/`)
        console.log("inbox created successfully")
        return response.data
    } catch(e){
        console.log("Error creating inbox", e)
    }

}

export const inboxDetails = async (email: string) => {
    try{
        const response = await axios.get(`${baseURL}/inbox/${encodeURIComponent(email)}/detail/`)
        console.log("inbox details fetched successfully", response.data.emails)
        return response.data
    } catch(e){
        console.log("Error fetching inbox details", e)
    }

}

export const dummyEmail = async (email: string) => {
    try{
        const response = await axios.post(`${baseURL}/inbox/${encodeURIComponent(email)}/add-email/`)
        console.log("dummy emails created successfully", response.data)
        return response.data
    } catch(e){
        console.log("Error creating dummy emails", e)
    }
}