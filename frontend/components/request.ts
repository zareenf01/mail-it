import axios from 'axios'
import { data } from 'react-router-dom';

const baseURL = 'http://localhost:8000/api';

export const create_inbox = async () => {
    try{
        const response = await axios.post(`${baseURL}/inbox/create/`)
        console.log("inbox created successfully")
        return response.data
    } catch(e){
        console.log("Error creating inbox", e)
    }

}

export const inboxDetails = async (inboxId: number) => {
    try{
        const response = await axios.get(`${baseURL}/inbox/${inboxId}/detail/`)
        console.log("inbox details fetched successfully", response.data.emails)
        return response.data
    } catch(e){
        console.log("Error fetching inbox details", e)
    }

}

export const dummyEmail = async (inboxId: number) => {
    try{
        const response = await axios.post(`${baseURL}/inbox/${inboxId}/add-email/`)
        console.log("dummy emails created successfully", response.data)
        return response.data
    } catch(e){
        console.log("Error creating dummy emails", e)
    }
}

export const markEmailRead = async (emailId: number) => {
  const res = await axios.patch(
    `${baseURL}/email/${emailId}/read/`
  );
  return res.data;
};