import axios from "axios";
import { getCookie, setCookie } from "../utils/cookie";
/* import { getNewTokens } from "../services/token"; */

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    }
});

 api.interceptors.request.use((request) => {
    const accessToken = getCookie("accessToken");
    console.log("Access Token:", accessToken); // اضافه کردن لاگ
    if (accessToken) {
        request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    console.log("Request Headers:", request.headers); // اضافه کردن لاگ
    return request;
}, (error) => {
    console.error("Request Error:", error); // اضافه کردن لاگ
    return Promise.reject(error);
});
/* api.interceptors.response.use((response)=>{
    return response
},
async(error) =>{
    const orginalRequest = error.config
    if(error.response.status === 401 && !orginalRequest._retry){
        orginalRequest._retry = true

        const res =await getNewTokens()
        if(!res?.response) return
        setCookie(res.response.data)

        return api(orginalRequest)
    }
}
)  */
export default api;
