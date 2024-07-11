import api from "../configs/api"
import { getCookie } from "../utils/cookie";
const token = getCookie("token");
const getProfile = ()=> api.get("/user/whoami")
export {getProfile}