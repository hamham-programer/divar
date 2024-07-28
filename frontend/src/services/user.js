import api from "../configs/api"
import { getCookie } from "../utils/cookie" 
/* console.log(getCookie("accessToken")) 
 */

/* const getProfile = () => {
    api.get("user/whoami").then(res => res || false)
} */
 

const getProfile = async () => {
    try {
        const token = getCookie("accessToken");
        const response = await api.get("user/whoami", {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data; // بازگرداندن داده‌های دریافتی از سرور
    } catch (error) {
        throw new Error("Failed to fetch profile data");
    }
};

export { getProfile };
 