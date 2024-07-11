
import axios from "axios"
import { request } from "express"
import { getCookie } from "../utils/cookie"

const api = axios.create({
    baseURL : import.meta.env.VITE_BASE_URL,
    headers: {
        "Content-Type": "application/json",

    }
})
api.interceptors.request.use((request)=>{
    const accessToken= getCookie("token")
})
export default api